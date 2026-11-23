const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const ROOT = __dirname;
const DEFAULT_PORT = 8000;
const DEFAULT_MODEL = "gemini-3.5-flash-lite";
const MAX_BODY_BYTES = 24 * 1024;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_HISTORY_ITEMS = 8;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_REQUESTS = 15;
const recentRequests = new Map();
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8"
};
const SYSTEM_INSTRUCTION = [
  "You are Placement Portal AI, a friendly and practical placement-preparation assistant for college students.",
  "Help with resume wording, interview practice, job-search strategy, applications, and study plans. Match the user's language (including Hindi/Hinglish).",
  "Be specific, concise, encouraging, and honest. Ask a short follow-up if important details are missing.",
  "The portal's job cards are sample data, not verified live vacancies. Never claim to have checked current openings or submitted an application.",
  "Never ask for passwords, OTPs, API keys, payment, or unnecessary sensitive personal data. Do not promise that a user will get hired."
].join(" ");

function loadLocalEnvironment() {
  let contents;
  try {
    contents = fs.readFileSync(path.join(ROOT, ".env"), "utf8");
  } catch (error) {
    if (error.code === "ENOENT") return;
    throw error;
  }

  for (const line of contents.split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (!match || line.trimStart().startsWith("#") || process.env[match[1]] !== undefined) continue;
    const value = match[2].replace(/^(?:"(.*)"|'(.*)')$/, (_, doubleQuoted, singleQuoted) => doubleQuoted ?? singleQuoted ?? "");
    process.env[match[1]] = value;
  }
}

function sendJson(response, statusCode, value) {
  const body = JSON.stringify(value);
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff"
  });
  response.end(body);
}

function httpError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

async function readJsonBody(request) {
  const chunks = [];
  let size = 0;
  let tooLarge = false;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) {
      tooLarge = true;
      chunks.length = 0;
    } else if (!tooLarge) {
      chunks.push(chunk);
    }
  }
  if (tooLarge) throw httpError(413, "Message is too large. Please shorten it and try again.");
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    throw httpError(400, "The request was not valid JSON.");
  }
}

function allowRequest(ip) {
  const now = Date.now();
  const timestamps = (recentRequests.get(ip) || []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT_REQUESTS) {
    recentRequests.set(ip, timestamps);
    return false;
  }
  timestamps.push(now);
  recentRequests.set(ip, timestamps);
  return true;
}

function makeConversationInput(message, history) {
  const priorMessages = Array.isArray(history) ? history.slice(-MAX_HISTORY_ITEMS) : [];
  const steps = priorMessages.flatMap((item) => {
    if (!item || !["user", "assistant"].includes(item.role) || typeof item.text !== "string") return [];
    const text = item.text.trim().slice(0, 1200);
    if (!text) return [];
    return [{
      type: item.role === "assistant" ? "model_output" : "user_input",
      content: [{ type: "text", text }]
    }];
  });
  steps.push({ type: "user_input", content: [{ type: "text", text: message }] });
  return steps;
}

function extractReply(payload) {
  if (typeof payload.output_text === "string" && payload.output_text.trim()) return payload.output_text.trim();

  const blocks = Array.isArray(payload.outputs) ? payload.outputs : [];
  const output = blocks.flatMap((block) => {
    if (typeof block.text === "string") return [block.text];
    if (Array.isArray(block.content)) return block.content.filter((part) => typeof part.text === "string").map((part) => part.text);
    return [];
  }).join("\n").trim();
  if (output) return output;

  const stepOutput = (Array.isArray(payload.steps) ? payload.steps : [])
    .filter((step) => step.type === "model_output")
    .flatMap((step) => Array.isArray(step.content) ? step.content.filter((part) => typeof part.text === "string").map((part) => part.text) : [])
    .join("\n").trim();
  if (stepOutput) return stepOutput;

  const legacyParts = payload.candidates?.[0]?.content?.parts;
  if (Array.isArray(legacyParts)) return legacyParts.filter((part) => typeof part.text === "string").map((part) => part.text).join("\n").trim();
  return "";
}

async function handleChat(request, response) {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) {
    sendJson(response, 503, { error: "Gemini is not configured yet. Add GEMINI_API_KEY to the server environment and restart the portal." });
    return;
  }
  if (!allowRequest(request.socket.remoteAddress || "local")) {
    sendJson(response, 429, { error: "Too many messages in a short time. Please wait a minute and try again." });
    return;
  }

  const body = await readJsonBody(request);
  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!message) {
    sendJson(response, 400, { error: "Please enter a message." });
    return;
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    sendJson(response, 413, { error: `Please keep each message under ${MAX_MESSAGE_LENGTH} characters.` });
    return;
  }

  const model = process.env.GEMINI_MODEL?.trim() || DEFAULT_MODEL;
  let providerResponse;
  try {
    providerResponse = await fetch("https://generativelanguage.googleapis.com/v1beta/interactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey
      },
      body: JSON.stringify({
        model,
        input: makeConversationInput(message, body.history),
        system_instruction: SYSTEM_INSTRUCTION,
        generation_config: { max_output_tokens: 700, thinking_level: "low" },
        store: false
      }),
      signal: AbortSignal.timeout(30_000)
    });
  } catch (error) {
    console.error("Gemini request failed:", error.name || "NetworkError");
    const timedOut = error.name === "TimeoutError" || error.name === "AbortError";
    sendJson(response, timedOut ? 504 : 502, {
      error: timedOut ? "Gemini took too long to reply. Please try again." : "Could not reach Gemini. Check your internet connection and try again."
    });
    return;
  }

  let result;
  try {
    result = await providerResponse.json();
  } catch {
    console.error("Gemini returned a non-JSON response with status", providerResponse.status);
    sendJson(response, 502, { error: "Gemini returned an unreadable response. Please try again." });
    return;
  }
  if (!providerResponse.ok) {
    console.error("Gemini API returned status", providerResponse.status);
    if (providerResponse.status === 401 || providerResponse.status === 403) {
      sendJson(response, 502, { error: "Gemini rejected the API key. Check that the key is valid and Gemini API access is enabled." });
    } else if (providerResponse.status === 429) {
      sendJson(response, 429, { error: "Gemini's current quota is reached. Check your Google AI Studio quota and try again later." });
    } else {
      sendJson(response, 502, { error: "Gemini could not complete the request. Check the configured model and try again." });
    }
    return;
  }

  const reply = extractReply(result);
  if (!reply) {
    console.error("Gemini response did not contain text.");
    sendJson(response, 502, { error: "Gemini did not return a text reply. Please try rephrasing your question." });
    return;
  }
  sendJson(response, 200, { reply, model });
}

async function serveStatic(pathname, response) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    sendJson(response, 400, { error: "Invalid URL path." });
    return;
  }
  const segments = decodedPath.split(/[\\/]+/).filter(Boolean);
  if (segments.some((segment) => segment.startsWith("."))) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  const relativePath = segments.length ? path.join(...segments) : "index.html";
  const filePath = path.resolve(ROOT, relativePath);
  if (!filePath.startsWith(`${ROOT}${path.sep}`) || !mimeTypes[path.extname(filePath).toLowerCase()]) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  try {
    const content = await fs.promises.readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()],
      "Content-Length": content.length,
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "no-cache"
    });
    response.end(content);
  } catch (error) {
    if (error.code !== "ENOENT" && error.code !== "ENOTDIR") throw error;
    response.writeHead(404);
    response.end("Not found");
  }
}

async function handleRequest(request, response) {
  const url = new URL(request.url, "http://localhost");
  if (url.pathname === "/api/health") {
    if (request.method !== "GET") {
      sendJson(response, 405, { error: "Method not allowed." });
      return;
    }
    sendJson(response, 200, {
      configured: Boolean(process.env.GEMINI_API_KEY?.trim()),
      model: process.env.GEMINI_MODEL?.trim() || DEFAULT_MODEL
    });
    return;
  }
  if (url.pathname === "/api/chat") {
    if (request.method !== "POST") {
      sendJson(response, 405, { error: "Method not allowed." });
      return;
    }
    await handleChat(request, response);
    return;
  }
  if (!["GET", "HEAD"].includes(request.method)) {
    sendJson(response, 405, { error: "Method not allowed." });
    return;
  }
  await serveStatic(url.pathname, response);
}

loadLocalEnvironment();
const port = Number(process.env.PORT || DEFAULT_PORT);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error("PORT must be a valid TCP port.");
const host = process.env.HOST || "127.0.0.1";

const server = http.createServer((request, response) => {
  handleRequest(request, response).catch((error) => {
    console.error("Request failed:", error.message);
    if (!response.headersSent) sendJson(response, error.statusCode || 500, { error: error.statusCode ? error.message : "The server could not complete this request." });
    else response.destroy();
  });
});

server.listen(port, host, () => {
  console.log(`Placement Portal is listening on ${host}:${port}`);
  if (!process.env.GEMINI_API_KEY?.trim()) console.log("Gemini is not configured. Set GEMINI_API_KEY in the server environment.");
});
