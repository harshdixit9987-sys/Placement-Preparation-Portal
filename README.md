# Placement Portal — Preparation & Careers

A responsive placement-preparation portal built with plain HTML, CSS, and JavaScript. It includes:

- A student dashboard, job search, category filters, bookmarks, and role details
- A searchable catalogue of 44 illustrative sample opportunities across technology, analytics, design, product, business, finance, marketing, operations, HR, sales, and support
- A job comparison tool for reviewing up to three roles side by side
- An Apply action on every sample role that opens the employer's careers page and records the role as Interested until you confirm submission
- A personal application tracker with editable stages and notes
- An employer directory and direct links to external job boards and official career pages
- A resume builder with a print / Save as PDF option
- An editable student profile, practice quizzes, interview prompts, and a preparation roadmap
- A searchable interview question bank with 30 answer guides covering HR, core CS, OOP, SQL, projects, and aptitude
- A Gemini-powered placement assistant for resume feedback, interview practice, and job-search guidance

The sample job listings are illustrative, not live vacancies. Confirm job details and apply on the employer's official careers page. Profile details and progress are stored in browser local storage on the current device; there is no account login or cloud sync.

## Run locally with the AI assistant

Requires Node.js 18.18 or newer. The AI chat needs a Gemini API key from Google AI Studio. Keep the key private: never put it in `app.js`, the browser, or a chat message.

1. Create a key at [Google AI Studio](https://aistudio.google.com/apikey).
2. In PowerShell, from the project folder, copy and open the local settings file:

   ```powershell
   Copy-Item .env.example .env
   notepad .env
   ```

3. Set `GEMINI_API_KEY` in `.env` to your key. Save the file. Do not share or commit `.env`.
4. Stop any existing server on port 8000 with **Ctrl+C**. In the project folder, run:

   ```powershell
   npm start
   ```

5. Visit `http://localhost:8000`.

If port 8000 is already in use, stop the other server with **Ctrl+C** first, or set `PORT=8001` in `.env` and visit `http://localhost:8001`.

The Gemini key is read only by the Node server and is never sent to the browser. Chat messages are sent to Google's Gemini API to generate answers; don't include passwords, OTPs, API keys, or sensitive personal information. If the API key is missing or Gemini is unavailable, the assistant shows an error instead of pretending it replied. Saved jobs, application tracking, resume and profile details, quiz scores, and roadmap progress remain in this browser's local storage.

The `python -m http.server` command only serves static files and cannot connect the AI assistant; use `npm start` for the working chat.

## Publish a shareable link on Render

1. Push the project files to your GitHub repository. Do not commit `.env`; `.gitignore` excludes it.
2. Sign in to [Render](https://render.com), choose **New → Blueprint**, and connect the repository. Render will use `render.yaml` to create the Node web service.
3. Add your Gemini key as the private `GEMINI_API_KEY` environment variable in the Render service settings, then redeploy.
4. When the deployment is live, copy the `onrender.com` service URL and share it. The free service may take a little time to wake up after inactivity.

Anyone with the public link can use the assistant and consume the Gemini API quota configured for the service. Keep the key private, review your provider's usage limits, and share the link accordingly.
