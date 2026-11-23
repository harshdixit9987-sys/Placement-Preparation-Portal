const jobs = [
  { id: 1, company: "Google", role: "Associate Software Engineer", type: "Full-time", location: "Bengaluru", salary: "₹18–24 LPA", category: "Engineering", logo: "G", color: "violet", posted: "2 days ago", description: "Join a collaborative engineering team to build products used by people around the world. You will work across the product lifecycle, from design to launch.", requirements: "Strong programming fundamentals, data structures and algorithms, and experience with one modern programming language." },
  { id: 2, company: "Microsoft", role: "Software Engineer — Graduate", type: "Full-time", location: "Hyderabad", salary: "₹16–22 LPA", category: "Engineering", logo: "M", color: "blue", posted: "1 day ago", description: "Build reliable, accessible software with teams across Microsoft. New graduates receive mentorship and opportunities to work on meaningful projects.", requirements: "Pursuing a bachelor's degree in CS or a related field, with an expected graduation in 2025 or 2026." },
  { id: 3, company: "Razorpay", role: "Product Analyst Intern", type: "Internship", location: "Bengaluru · Hybrid", salary: "₹40K / month", category: "Analytics", logo: "R", color: "blue", posted: "3 days ago", description: "Help turn product data into insights that shape the future of digital payments. Work closely with product, design, and engineering teams.", requirements: "Comfort with SQL and spreadsheets. A curious mindset and clear communication are a plus." },
  { id: 4, company: "Adobe", role: "Associate Product Designer", type: "Full-time", location: "Noida", salary: "₹12–16 LPA", category: "Design", logo: "A", color: "orange", posted: "4 days ago", description: "Create thoughtful experiences for creative professionals. You'll partner with designers and researchers to explore, prototype, and refine ideas.", requirements: "A portfolio showing your design process, user-centered thinking, and interaction design fundamentals." },
  { id: 5, company: "Swiggy", role: "Data Analyst Intern", type: "Internship", location: "Bengaluru", salary: "₹35K / month", category: "Analytics", logo: "S", color: "orange", posted: "5 days ago", description: "Explore real-world datasets and help teams make better decisions for millions of customers and delivery partners.", requirements: "Basic SQL, an understanding of data visualization, and a willingness to learn." },
  { id: 6, company: "Atlassian", role: "Graduate Software Engineer", type: "Full-time", location: "Remote · India", salary: "₹20–28 LPA", category: "Engineering", logo: "A", color: "blue", posted: "1 week ago", description: "Help teams unleash their potential by building tools that enable collaboration. Learn alongside a globally distributed team.", requirements: "Computer science fundamentals, problem-solving ability, and an interest in building customer-focused software." },
  { id: 7, company: "Deloitte", role: "Business Technology Analyst", type: "Full-time", location: "Gurugram", salary: "₹8–11 LPA", category: "Business", logo: "D", color: "green", posted: "1 week ago", description: "Work with clients to solve challenging business and technology problems. Collaborate with multidisciplinary teams and grow your consulting skills.", requirements: "Strong analytical and communication skills. Open to graduates from engineering and business programs." },
  { id: 8, company: "CRED", role: "Frontend Engineering Intern", type: "Internship", location: "Bengaluru · Hybrid", salary: "₹45K / month", category: "Engineering", logo: "C", color: "violet", posted: "2 weeks ago", description: "Build polished, performant web experiences for a design-led fintech product. Work with experienced frontend engineers and designers.", requirements: "HTML, CSS, JavaScript fundamentals and a few personal projects you're excited to talk about." }
];

const jobPortals = [
  { name: "LinkedIn Jobs", type: "Professional network", url: "https://www.linkedin.com/jobs/" },
  { name: "Naukri.com", type: "India-wide job search", url: "https://www.naukri.com/" },
  { name: "Indeed India", type: "Job search", url: "https://in.indeed.com/" },
  { name: "Internshala", type: "Internships and fresher roles", url: "https://internshala.com/" },
  { name: "Wellfound", type: "Startups and technology roles", url: "https://wellfound.com/jobs" },
  { name: "Foundit", type: "India job search", url: "https://www.foundit.in/" }
];

const companies = [
  { name: "Google", category: "Technology", location: "Bengaluru · Hyderabad", logo: "G", color: "violet", careers: "https://careers.google.com/jobs/", description: "Build products and solve problems at global scale." },
  { name: "Microsoft", category: "Technology", location: "Hyderabad · Bengaluru · Noida", logo: "M", color: "blue", careers: "https://careers.microsoft.com/v2/global/en/home.html", description: "Create technology that helps people and organizations do more." },
  { name: "Razorpay", category: "Fintech", location: "Bengaluru", logo: "R", color: "blue", careers: "https://razorpay.com/jobs/", description: "Help businesses simplify payments and financial workflows." },
  { name: "Adobe", category: "Creative technology", location: "Noida · Bengaluru", logo: "A", color: "orange", careers: "https://careers.adobe.com/us/en", description: "Create digital experiences that empower everyone to create." },
  { name: "Swiggy", category: "Consumer technology", location: "Bengaluru · Gurugram", logo: "S", color: "orange", careers: "https://careers.swiggy.com/", description: "Build convenient experiences for customers and partners." },
  { name: "Atlassian", category: "Technology", location: "Remote · Bengaluru", logo: "A", color: "blue", careers: "https://www.atlassian.com/company/careers", description: "Help teams collaborate and make work better." },
  { name: "Deloitte", category: "Consulting", location: "Pan India", logo: "D", color: "green", careers: "https://www.deloitte.com/global/en/careers.html", description: "Solve complex challenges with multidisciplinary teams." },
  { name: "CRED", category: "Fintech", location: "Bengaluru", logo: "C", color: "violet", careers: "https://careers.cred.club/", description: "Build thoughtful products for a member-first experience." }
];

companies.push(
  { name: "Amazon", category: "Technology", location: "Bengaluru · Hyderabad · Chennai", logo: "A", color: "orange", careers: "https://www.amazon.jobs/en/", description: "Build customer-focused products and services at scale." },
  { name: "Infosys", category: "IT services", location: "Pan India", logo: "I", color: "blue", careers: "https://www.infosys.com/careers/", description: "Learn and build technology solutions with global clients." },
  { name: "TCS", category: "IT services", location: "Pan India", logo: "T", color: "blue", careers: "https://www.tcs.com/careers", description: "Explore technology and consulting opportunities across industries." },
  { name: "Accenture", category: "Consulting", location: "Pan India", logo: "A", color: "violet", careers: "https://www.accenture.com/in-en/careers", description: "Work across technology, operations, and consulting." },
  { name: "IBM", category: "Technology", location: "Bengaluru · Pune · Hyderabad", logo: "I", color: "blue", careers: "https://www.ibm.com/careers", description: "Explore roles in software, cloud, data, and consulting." },
  { name: "Wipro", category: "IT services", location: "Pan India", logo: "W", color: "green", careers: "https://careers.wipro.com/", description: "Build technology solutions and start a career in IT services." },
  { name: "Flipkart", category: "E-commerce", location: "Bengaluru · Pan India", logo: "F", color: "blue", careers: "https://www.flipkartcareers.com/", description: "Build products and services for digital commerce." },
  { name: "PhonePe", category: "Fintech", location: "Bengaluru", logo: "P", color: "violet", careers: "https://www.phonepe.com/careers/", description: "Build digital payments and financial services." },
  { name: "Zoho", category: "Technology", location: "Chennai · Pan India", logo: "Z", color: "green", careers: "https://www.zoho.com/careers/", description: "Create software products for businesses around the world." },
  { name: "Salesforce", category: "Technology", location: "Hyderabad · Bengaluru", logo: "S", color: "blue", careers: "https://careers.salesforce.com/en/", description: "Help organizations connect with customers through technology." },
  { name: "HCLTech", category: "IT services", location: "Pan India", logo: "H", color: "blue", careers: "https://www.hcltech.com/careers", description: "Explore engineering, technology, and business roles." },
  { name: "Capgemini", category: "IT services", location: "Pan India", logo: "C", color: "blue", careers: "https://www.capgemini.com/careers/", description: "Work with teams delivering technology and consulting services." },
  { name: "Cisco", category: "Technology", location: "Bengaluru · Pune", logo: "C", color: "blue", careers: "https://jobs.cisco.com/", description: "Build networking, security, and collaboration technology." },
  { name: "JPMorgan Chase", category: "Finance", location: "Mumbai · Bengaluru · Hyderabad", logo: "J", color: "green", careers: "https://careers.jpmorgan.com/us/en/students", description: "Explore early-career opportunities in technology and finance." },
  { name: "Freshworks", category: "Technology", location: "Chennai · Bengaluru", logo: "F", color: "orange", careers: "https://www.freshworks.com/company/careers/", description: "Make business software simpler for teams and customers." },
  { name: "EY", category: "Consulting", location: "Pan India", logo: "E", color: "orange", careers: "https://www.ey.com/en_in/careers", description: "Explore consulting, technology, and professional-services careers." },
  { name: "Paytm", category: "Fintech", location: "Noida · Bengaluru", logo: "P", color: "blue", careers: "https://paytm.com/careers", description: "Build digital payments and financial technology products." },
  { name: "Meesho", category: "E-commerce", location: "Bengaluru", logo: "M", color: "violet", careers: "https://careers.meesho.com/", description: "Help small businesses and entrepreneurs grow online." }
);

const additionalJobSeeds = [
  ["Amazon", "Software Development Engineer I", "Engineering", "Full-time", "Bengaluru", "₹14–22 LPA"],
  ["Infosys", "Systems Engineer — Graduate", "Engineering", "Full-time", "Mysuru · Pan India", "₹3.5–6 LPA"],
  ["TCS", "Assistant System Engineer", "Engineering", "Full-time", "Pan India", "₹3.5–7 LPA"],
  ["Accenture", "Associate Software Engineer", "Engineering", "Full-time", "Bengaluru · Hyderabad", "₹4–8 LPA"],
  ["IBM", "Associate Software Developer", "Engineering", "Full-time", "Bengaluru · Pune", "₹6–10 LPA"],
  ["Wipro", "Project Engineer — Fresher", "Engineering", "Full-time", "Pan India", "₹3.5–7 LPA"],
  ["Flipkart", "Frontend Developer Intern", "Engineering", "Internship", "Bengaluru", "₹30K–50K / month"],
  ["PhonePe", "Backend Engineer — Early Career", "Engineering", "Full-time", "Bengaluru", "₹12–20 LPA"],
  ["Zoho", "Junior Developer", "Engineering", "Full-time", "Chennai · Remote", "₹4–9 LPA"],
  ["Salesforce", "Software Engineering Intern", "Engineering", "Internship", "Hyderabad", "₹40K–70K / month"],
  ["HCLTech", "Graduate Engineer Trainee", "Engineering", "Full-time", "Noida · Chennai", "₹3.5–7 LPA"],
  ["Capgemini", "Software Engineer — Entry Level", "Engineering", "Full-time", "Pan India", "₹4–8 LPA"],
  ["Cisco", "Technical Graduate Apprentice", "Engineering", "Internship", "Bengaluru", "₹35K–60K / month"],
  ["Freshworks", "Associate Product Manager", "Product", "Full-time", "Chennai · Bengaluru", "₹10–17 LPA"],
  ["Razorpay", "Product Management Intern", "Product", "Internship", "Bengaluru", "₹30K–50K / month"],
  ["Meesho", "Product Operations Associate", "Operations", "Full-time", "Bengaluru", "₹6–10 LPA"],
  ["Adobe", "Data Analyst — New Graduate", "Analytics", "Full-time", "Noida", "₹10–16 LPA"],
  ["JPMorgan Chase", "Business Analyst — Graduate", "Analytics", "Full-time", "Mumbai · Bengaluru", "₹8–14 LPA"],
  ["Deloitte", "Data Analytics Intern", "Analytics", "Internship", "Gurugram · Hyderabad", "₹20K–35K / month"],
  ["Swiggy", "Business Intelligence Analyst", "Analytics", "Full-time", "Bengaluru", "₹8–14 LPA"],
  ["Flipkart", "UX Research Intern", "Design", "Internship", "Bengaluru", "₹25K–45K / month"],
  ["Atlassian", "Associate Product Designer", "Design", "Full-time", "Remote · India", "₹14–22 LPA"],
  ["CRED", "Visual Design Intern", "Design", "Internship", "Bengaluru", "₹25K–45K / month"],
  ["Accenture", "Business Operations Analyst", "Business", "Full-time", "Pan India", "₹5–9 LPA"],
  ["EY", "Technology Consulting Analyst", "Business", "Full-time", "Bengaluru · Gurugram", "₹6–11 LPA"],
  ["Paytm", "Digital Marketing Associate", "Marketing", "Full-time", "Noida", "₹4–8 LPA"],
  ["Freshworks", "Content Marketing Intern", "Marketing", "Internship", "Chennai · Remote", "₹18K–30K / month"],
  ["PhonePe", "Growth Marketing Analyst", "Marketing", "Full-time", "Bengaluru", "₹7–12 LPA"],
  ["JPMorgan Chase", "Finance Operations Analyst", "Finance", "Full-time", "Mumbai · Hyderabad", "₹6–10 LPA"],
  ["Deloitte", "Audit Associate — Graduate", "Finance", "Full-time", "Pan India", "₹5–9 LPA"],
  ["Infosys", "Talent Acquisition Coordinator", "Human resources", "Full-time", "Bengaluru · Pune", "₹4–7 LPA"],
  ["Meesho", "People Operations Intern", "Human resources", "Internship", "Bengaluru", "₹20K–30K / month"],
  ["Amazon", "Customer Support Associate", "Customer support", "Full-time", "Hyderabad · Remote", "₹3.5–6 LPA"],
  ["Wipro", "Service Desk Analyst — Fresher", "Customer support", "Full-time", "Pan India", "₹3–5 LPA"],
  ["TCS", "Operations Associate", "Operations", "Full-time", "Pan India", "₹3.5–6 LPA"],
  ["Zoho", "Inside Sales Executive", "Sales", "Full-time", "Chennai", "₹4–8 LPA"]
];

jobs.push(...additionalJobSeeds.map((seed, index) => {
  const [company, role, category, type, location, salary] = seed;
  const employer = companies.find((item) => item.name === company);
  return {
    id: index + 9,
    company,
    role,
    category,
    type,
    location,
    salary,
    logo: employer ? employer.logo : company[0],
    color: employer ? employer.color : "violet",
    posted: index % 6 === 0 ? "1 day ago" : `${index % 6 + 1} days ago`,
    description: `Sample ${role.toLowerCase()} opportunity at ${company}. Check the employer's official careers page for current openings, responsibilities, location, and application details.`,
    requirements: "Requirements vary by team. Review the official vacancy and confirm eligibility, skills, and graduation criteria before applying."
  };
}));

const applicationStatuses = ["Interested", "Applied", "Assessment", "Interview", "Offer", "Rejected"];

const quizQuestions = [
  { question: "Which data structure is typically used to implement a breadth-first search?", options: ["Stack", "Queue", "Heap", "Hash map"], answer: 1, topic: "Data structures" },
  { question: "What is the average time complexity of searching in a hash table?", options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], answer: 2, topic: "Complexity" },
  { question: "Which SQL clause filters grouped results?", options: ["WHERE", "ORDER BY", "HAVING", "LIMIT"], answer: 2, topic: "SQL" },
  { question: "If a project is 40% complete after 8 days at a steady pace, how many days total will it take?", options: ["12 days", "16 days", "20 days", "24 days"], answer: 2, topic: "Aptitude" },
  { question: "Which principle recommends that a class should have only one reason to change?", options: ["Open/Closed", "Single Responsibility", "Dependency Inversion", "Liskov Substitution"], answer: 1, topic: "Software design" }
];

const interviewQuestions = [
  { category: "HR & Behavioral", question: "Tell me about yourself.", answer: "Keep it to about 60–90 seconds: start with your current studies or role, mention one or two relevant skills or projects, then explain what kind of opportunity you are looking for. Connect each point to the job, and avoid repeating your entire resume." },
  { category: "HR & Behavioral", question: "Why are you interested in this role?", answer: "Connect the role's responsibilities to your interests and evidence from your coursework, projects, or experience. Mention one specific part of the company or team that interests you. Finish by explaining what you can contribute and what you hope to learn." },
  { category: "HR & Behavioral", question: "What is one strength you would bring to the team?", answer: "Choose a strength relevant to the job, then prove it with a short example. For instance: 'I am organized. In my final-year project, I broke a large task into weekly milestones, which helped our team deliver the demo on time.' Keep the example genuine and specific." },
  { category: "HR & Behavioral", question: "What is a skill you are currently improving?", answer: "Name a real, manageable development area, describe the steps you are taking, and share how you measure progress. Avoid presenting a disguised strength or a critical gap for the role. Show ownership rather than blaming others." },
  { category: "HR & Behavioral", question: "Tell me about a time you received difficult feedback.", answer: "Use a concise STAR example: explain the situation, the feedback, the action you took, and the result. Show that you listened, asked clarifying questions when needed, and changed your approach. Focus on the lesson, not on defending yourself." },
  { category: "Data Structures & Algorithms", question: "How is an array different from a linked list?", answer: "Arrays store elements in indexed positions, so reading an item by index is typically O(1); inserting in the middle may require shifting elements. A linked list stores nodes connected by references; finding an item takes O(n), but inserting after a known node can be O(1). Choose based on access and update patterns." },
  { category: "Data Structures & Algorithms", question: "What is the difference between a stack and a queue?", answer: "A stack is last-in, first-out (LIFO): the last item added is removed first. It is useful for undo history, function calls, and depth-first search. A queue is first-in, first-out (FIFO): the earliest item is removed first. It is useful for task scheduling and breadth-first search." },
  { category: "Data Structures & Algorithms", question: "What does a hash map do, and how are collisions handled?", answer: "A hash map uses a hash function to map keys to storage locations, supporting average O(1) lookup, insertion, and removal. Different keys can map to the same location; this is a collision. Common strategies include chaining (a collection at each bucket) and open addressing (probing for another slot). Worst-case operations can be O(n)." },
  { category: "Data Structures & Algorithms", question: "When would you use breadth-first search instead of depth-first search?", answer: "BFS explores neighbors level by level and, in an unweighted graph, finds a path with the fewest edges. It uses a queue. DFS explores one branch deeply before backtracking, usually with a stack or recursion; it is useful for reachability, cycle checks, and backtracking. Both are O(V + E) with adjacency lists." },
  { category: "Data Structures & Algorithms", question: "What conditions does binary search require?", answer: "The search range must be ordered according to the comparison being used. Each step compares the target with the middle element and discards half the remaining range, giving O(log n) time. On a linked list, reaching the middle is not constant time, so binary search usually provides its best benefit on arrays or random-access data." },
  { category: "Programming & OOP", question: "What are the four main principles of object-oriented programming?", answer: "Encapsulation groups data with operations and controls access; abstraction exposes essential behavior while hiding implementation details; inheritance lets a type reuse or specialize another type; polymorphism lets different types respond to the same operation through their own implementations. Use these ideas to clarify responsibilities, not just to add class layers." },
  { category: "Programming & OOP", question: "How are abstraction and encapsulation different?", answer: "Abstraction focuses on what a component does and hides unnecessary implementation detail from its users. Encapsulation focuses on keeping state and the code that changes it together, while controlling access to that state. An interface is a common abstraction; private fields with validated methods are a common encapsulation technique." },
  { category: "Programming & OOP", question: "What is the difference between method overloading and overriding?", answer: "Overloading uses the same method name with different parameter lists in the same scope; the compiler selects a matching signature. Overriding provides a subclass implementation of an inherited method with a compatible signature; the runtime can dispatch to that implementation. The exact rules depend on the language." },
  { category: "Programming & OOP", question: "When would you choose an interface over an abstract class?", answer: "Use an interface to define a capability or contract that unrelated classes can implement. Use an abstract class when related classes should share state or implementation as well as abstract operations. Languages differ in their support for default methods, multiple inheritance, and fields, so explain the trade-off in your language." },
  { category: "Programming & OOP", question: "What is exception handling, and what makes it effective?", answer: "Exception handling separates error paths from normal results so a program can recover, report a useful message, or stop safely. Catch only errors you can meaningfully handle, preserve useful context, release resources with language-appropriate cleanup, and avoid silently swallowing failures. Validate expected input errors close to their source." },
  { category: "Databases & SQL", question: "What is the difference between a primary key and a foreign key?", answer: "A primary key uniquely identifies each row in its table and cannot be null. A foreign key references a key in another (or the same) table, helping enforce referential integrity. For example, an Orders table can have its own order_id primary key and a customer_id foreign key referencing Customers." },
  { category: "Databases & SQL", question: "How do WHERE and HAVING differ in SQL?", answer: "WHERE filters individual rows before grouping and aggregation. HAVING filters groups after GROUP BY has produced aggregate values. For example, use WHERE status = 'paid' to select paid rows, then HAVING COUNT(*) > 2 to keep groups with more than two rows." },
  { category: "Databases & SQL", question: "What is the difference between INNER JOIN and LEFT JOIN?", answer: "INNER JOIN returns rows that match in both tables. LEFT JOIN returns every row from the left table and matching rows from the right; when there is no match, right-side columns are NULL. Choose based on whether unmatched rows from the left table must remain in the result." },
  { category: "Databases & SQL", question: "Why use a database index, and what is its trade-off?", answer: "An index can speed up filtering, joins, and ordering by helping the database find rows without scanning the entire table. It consumes storage and adds work to inserts, updates, and deletes because the index must also be maintained. Add indexes based on measured query patterns, not on every column." },
  { category: "Databases & SQL", question: "How can you find the second-highest distinct salary?", answer: "One portable approach is to rank distinct salaries and select rank 2: `SELECT salary FROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS r FROM (SELECT DISTINCT salary FROM employees) s) ranked WHERE r = 2;` `DENSE_RANK` handles duplicate salaries; if no second distinct value exists, the query returns no rows." },
  { category: "Projects & Problem Solving", question: "How should you explain a project in an interview?", answer: "Use a short structure: the problem and users, your specific contribution, the design or technology choices, one challenge and how you solved it, and the result. Be precise about what you personally built. Be ready to explain a trade-off or what you would improve next." },
  { category: "Projects & Problem Solving", question: "Tell me about a difficult bug you solved.", answer: "Describe the user-visible symptom, how you reproduced it, the evidence you gathered, and how you isolated the root cause. Then explain the fix and the test that prevents a repeat. A strong answer shows a systematic process rather than only naming the final code change." },
  { category: "Projects & Problem Solving", question: "How would you test a new feature?", answer: "Start with expected behavior and edge cases. Test the smallest logic units first, then interactions between components, and finally the main user flow. Include invalid input, empty states, and failure handling. Keep tests repeatable and verify that the feature does not break existing behavior." },
  { category: "Projects & Problem Solving", question: "A page is slow. How would you investigate it?", answer: "Measure first and identify where time is spent: browser rendering, network, server processing, or database queries. Reproduce the slow case, inspect traces or logs, and profile the likely bottleneck. Make one targeted change, then compare measurements and check correctness before considering caching or larger redesigns." },
  { category: "Projects & Problem Solving", question: "How do you handle a disagreement on a project team?", answer: "Clarify the shared goal, listen to each person's reasoning, and compare options against evidence such as user needs, risks, and delivery constraints. Agree on a small test or decision owner when possible. Once a decision is made, support it and communicate any remaining risks respectfully." },
  { category: "Aptitude & Reasoning", question: "A product priced at ₹1,000 gets a 20% discount. What is the sale price?", answer: "A 20% discount is ₹1,000 × 0.20 = ₹200. Subtract it from the original price: ₹1,000 − ₹200 = ₹800. In interviews, state the calculation clearly and check whether tax or another discount is included." },
  { category: "Aptitude & Reasoning", question: "A can finish a task in 12 days and B in 18 days. How long together?", answer: "A completes 1/12 of the task per day and B completes 1/18. Together their rate is 1/12 + 1/18 = 5/36 task per day. Time is the reciprocal: 36/5 = 7.2 days, assuming their work rates stay constant." },
  { category: "Aptitude & Reasoning", question: "The average of 5 numbers is 18. What is their total?", answer: "Average = total ÷ count, so total = average × count = 18 × 5 = 90. If one number is added or removed, update both the total and the count before calculating the new average." },
  { category: "Aptitude & Reasoning", question: "What is the probability of getting at least one head in two fair coin tosses?", answer: "The equally likely outcomes are HH, HT, TH, and TT. Three outcomes contain at least one head, so the probability is 3/4, or 75%. A quick alternative is 1 − P(no heads) = 1 − 1/4." },
  { category: "Aptitude & Reasoning", question: "A car travels 150 km in 3 hours. What is its average speed?", answer: "Average speed = total distance ÷ total time = 150 ÷ 3 = 50 km/h. If a trip includes stops or multiple speeds, use the whole distance divided by the whole elapsed time, not the simple average of speeds." }
];

const roadmap = [
  { title: "Build your foundation", duration: "Week 1–2 · Start here", tasks: ["Update your resume and LinkedIn profile", "Choose one programming language to focus on", "Review arrays, strings, and basic complexity"] },
  { title: "Practice with purpose", duration: "Week 3–5 · Build consistency", tasks: ["Solve 3 coding problems each week", "Practice SQL queries and aptitude questions", "Write down 5 STAR-format experience stories"] },
  { title: "Get interview-ready", duration: "Week 6–8 · Show what you know", tasks: ["Complete one mock technical interview", "Prepare a concise introduction about yourself", "Research companies and apply to 3 roles"] }
];

const defaultState = {
  bookmarks: [],
  completedTasks: [],
  quizBest: 0,
  quizAttempts: 0,
  applications: [],
  profile: { name: "Nikhlesh Singh", email: "", phone: "", degree: "", graduation: "", targetRole: "", skills: "" },
  resume: { headline: "", summary: "", education: "", experience: "", projects: "", skills: "" }
};

function readState() {
  try {
    const saved = JSON.parse(localStorage.getItem("launchpad-state") || "{}");
    return {
      ...defaultState,
      ...saved,
      profile: { ...defaultState.profile, ...(saved.profile || {}) },
      resume: { ...defaultState.resume, ...(saved.resume || {}) },
      applications: Array.isArray(saved.applications) ? saved.applications : []
    };
  } catch (error) {
    console.warn("Could not read saved Placement Portal progress.", error);
    return { ...defaultState };
  }
}

let state = readState();
let activeView = "dashboard";
let activeFilter = "All roles";
let searchTerm = "";
let comparedJobIds = [];
let activeQuestionCategory = "All topics";
let questionSearchTerm = "";
let companySearch = "";
let companyFilter = "All";
let toastTimer;
let currentQuiz = null;
let assistantHistory = [];
let assistantBusy = false;

const viewContainer = document.getElementById("viewContainer");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalContent = document.getElementById("modalContent");

function saveState() {
  try {
    localStorage.setItem("launchpad-state", JSON.stringify(state));
  } catch (error) {
    console.warn("Could not save Placement Portal progress.", error);
    showToast("Progress could not be saved in this browser.");
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function setView(view) {
  activeView = view;
  const labels = { dashboard: "Overview", jobs: "Find jobs", applications: "Applications", practice: "Practice", roadmap: "My roadmap", resume: "Resume builder", companies: "Companies", profile: "My profile" };
  document.getElementById("pageName").textContent = labels[view];
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.view === view));
  document.querySelectorAll("[data-view]").forEach((link) => {
    if (link.classList.contains("brand")) link.onclick = (event) => { event.preventDefault(); setView("dashboard"); };
  });
  document.getElementById("sidebar").classList.remove("open");
  renderView();
}

function renderView() {
  if (activeView === "dashboard") viewContainer.innerHTML = renderDashboard();
  if (activeView === "jobs") viewContainer.innerHTML = renderJobs();
  if (activeView === "applications") viewContainer.innerHTML = renderApplications();
  if (activeView === "practice") viewContainer.innerHTML = renderPractice();
  if (activeView === "roadmap") viewContainer.innerHTML = renderRoadmap();
  if (activeView === "resume") viewContainer.innerHTML = renderResume();
  if (activeView === "companies") viewContainer.innerHTML = renderCompanies();
  if (activeView === "profile") viewContainer.innerHTML = renderProfile();
  bindViewEvents();
}

function renderDashboard() {
  const weeklyTaskIds = ["resume", "coding", "intro"];
  const completedThisWeek = weeklyTaskIds.filter((id) => state.completedTasks.includes(id)).length;
  const savedJobs = jobs.filter((job) => state.bookmarks.includes(job.id));
  const popular = jobs.slice(0, 3);
  const tasks = [
    { id: "resume", label: "Polish your resume" },
    { id: "coding", label: "Solve a coding challenge" },
    { id: "intro", label: "Practice your introduction" }
  ];
  return `
    <div class="welcome-row">
      <div><div class="eyebrow">MONDAY MOTIVATION</div><h1>Good to see you, ${escapeHtml((state.profile.name || "Nikhlesh Singh").split(/\s+/)[0])} <span aria-hidden="true">✦</span></h1><p>Your next opportunity starts with what you do today.</p></div>
      <div class="date-pill"><span>✦</span> Keep your momentum going</div>
    </div>
    <section class="hero-card">
      <div class="hero-copy"><span class="hero-tag">✦ &nbsp; YOUR PLACEMENT JOURNEY</span><h2>A little progress every day goes a long way.</h2><p>Build your confidence, sharpen your skills, and get ready to land a role you'll love.</p><button class="button-light" data-go="roadmap">Explore your roadmap &nbsp;→</button></div>
      <div class="hero-art" aria-hidden="true"><div class="art-orbit"></div><span class="art-star">✦</span><div class="art-card"><span>↗</span><span>You're on your way<small>One step at a time</small></span></div><div class="art-check">✓</div></div>
    </section>
    <section class="metrics-grid" aria-label="Your placement activity">
      <div class="metric-card"><span class="metric-icon purple">▤</span><span class="metric-copy"><strong>${savedJobs.length}</strong><small>Saved opportunities</small></span></div>
      <div class="metric-card"><span class="metric-icon blue">✓</span><span class="metric-copy"><strong>${state.applications.length}</strong><small>Applications tracked</small></span></div>
      <div class="metric-card"><span class="metric-icon green">✳</span><span class="metric-copy"><strong>${state.quizAttempts}</strong><small>Practice sessions</small></span></div>
      <div class="metric-card"><span class="metric-icon orange">♧</span><span class="metric-copy"><strong>${state.quizAttempts ? `${state.quizBest}%` : "—"}</strong><small>Best quiz score</small></span></div>
    </section>
    <div class="dashboard-grid">
      <section>
        <div class="section-heading"><div><h2>Opportunities for you</h2><p>Fresh roles to kick-start your career</p></div><button class="button-text" data-go="jobs">Explore all jobs &nbsp;→</button></div>
        <div class="panel application-list">${popular.map((job) => `
          <div class="job-row"><span class="company-logo ${job.color}">${job.logo}</span><span class="job-info"><strong>${job.role}</strong><small>${job.company} &nbsp;·&nbsp; ${job.location}</small></span><span class="job-status ${job.id === 1 ? "new" : ""}">${job.id === 1 ? "New" : job.type}</span></div>
        `).join("")}</div>
        ${savedJobs.length ? `<div class="section-heading" style="margin-top:17px"><div><h2>Your saved jobs</h2><p>${savedJobs.length} ${savedJobs.length === 1 ? "opportunity" : "opportunities"} bookmarked for later</p></div></div><div class="panel application-list">${savedJobs.slice(0, 2).map((job) => `<div class="job-row"><span class="company-logo ${job.color}">${job.logo}</span><span class="job-info"><strong>${job.role}</strong><small>${job.company} &nbsp;·&nbsp; ${job.salary}</small></span><span class="job-status">Saved</span></div>`).join("")}</div>` : ""}
      </section>
      <section>
        <div class="section-heading"><div><h2>Your weekly focus</h2><p>Three simple steps, big momentum</p></div></div>
        <div class="panel week-panel"><div class="week-progress"><div class="progress-track"><div class="progress-fill" style="width:${Math.round(completedThisWeek / 3 * 100)}%"></div></div><span>${completedThisWeek} of 3 done</span></div>
          <div class="checklist">${tasks.map((task) => `<label class="check-row ${state.completedTasks.includes(task.id) ? "done" : ""}"><input type="checkbox" data-week-task="${task.id}" ${state.completedTasks.includes(task.id) ? "checked" : ""}><span>${task.label}</span></label>`).join("")}</div>
          <div class="practice-promo"><span class="promo-icon">✳</span><span><strong>Ready for a quick practice?</strong><small>5 questions · about 3 minutes</small></span></div>
          <button class="button-text" style="margin-top:8px" data-go="practice">Start a quick quiz &nbsp;→</button>
        </div>
        <div class="dashboard-shortcuts"><button class="button-outline" data-go="applications">✓ &nbsp; Track your applications</button><button class="button-outline" data-go="companies">◎ &nbsp; Browse job portals</button></div>
      </section>
    </div>`;
}

function renderJobs() {
  const categories = ["All roles", ...new Set(jobs.map((job) => job.category)), "Full-time", "Internship", "Remote"];
  const filtered = jobs.filter((job) => {
    const categoryMatch = activeFilter === "All roles"
      || (["Full-time", "Internship"].includes(activeFilter) && job.type === activeFilter)
      || (activeFilter === "Remote" && job.location.toLowerCase().includes("remote"))
      || job.category === activeFilter;
    const text = `${job.company} ${job.role} ${job.location} ${job.category}`.toLowerCase();
    return categoryMatch && text.includes(searchTerm.toLowerCase());
  });
  return `
    <div class="page-title-row"><div><div class="eyebrow">FIND YOUR FIT</div><h1>Opportunities worth exploring</h1><p>Search sample roles, then confirm current openings on official employer sites.</p></div><label class="search-box"><span>⌕</span><input id="jobSearch" type="search" placeholder="Search role or company..." value="${escapeHtml(searchTerm)}" aria-label="Search jobs"></label></div>
    <div class="filter-row">${categories.map((category) => `<button class="filter-chip ${activeFilter === category ? "active" : ""}" data-filter="${category}">${category}</button>`).join("")}</div>
    <div class="jobs-results-header"><p class="results-count">${filtered.length} ${filtered.length === 1 ? "opportunity" : "opportunities"} to explore</p><p class="compare-hint">Compare up to 3 roles by salary, location, and type.</p></div>
    ${renderJobCompareTray()}
    ${filtered.length ? `<div class="jobs-grid">${filtered.map((job) => `
      <article class="job-card">
        <div class="job-card-top"><span class="company-logo ${job.color}">${job.logo}</span><span class="job-card-title"><h3>${job.role}</h3><p>${job.company}</p></span><button class="bookmark-button ${state.bookmarks.includes(job.id) ? "saved" : ""}" data-bookmark="${job.id}" aria-label="${state.bookmarks.includes(job.id) ? "Remove saved job" : "Save job"}" title="${state.bookmarks.includes(job.id) ? "Remove saved job" : "Save job"}">${state.bookmarks.includes(job.id) ? "♥" : "♡"}</button></div>
        <div class="job-card-meta"><span>⌖ ${job.location}</span><span>◷ ${job.type}</span><span>₹ ${job.salary}</span></div>
        <div class="job-card-bottom"><small>Sample · ${job.posted}</small><span class="job-actions"><button class="button-outline" data-job-detail="${job.id}">Details</button><button class="button-outline compare-card-button" data-compare-job="${job.id}" aria-pressed="${comparedJobIds.includes(job.id)}">${comparedJobIds.includes(job.id) ? "✓ Added" : "＋ Compare"}</button><a class="button-primary" data-apply-role="${job.id}" href="${escapeHtml(getCareersUrl(job))}" target="_blank" rel="noopener noreferrer">Apply ↗</a></span></div>
      </article>`).join("")}</div>` : `<div class="panel empty-state"><strong>No matches just yet</strong>Try a different search or category to explore more roles.</div>`}`;
}

function renderJobCompareTray() {
  if (!comparedJobIds.length) return "";
  const selectedJobs = comparedJobIds.map((id) => jobs.find((job) => job.id === id)).filter(Boolean);
  return `<section class="job-compare-tray" aria-label="Selected jobs for comparison">
    <div class="job-compare-copy"><strong>${selectedJobs.length} of 3 roles selected</strong><small>${selectedJobs.length < 2 ? "Select one more role to compare." : "Compare your shortlisted roles side by side."}</small></div>
    <div class="job-compare-selections">${selectedJobs.map((job) => `<span>${escapeHtml(job.company)} · ${escapeHtml(job.role)}</span>`).join("")}</div>
    <div class="job-compare-actions"><button class="button-outline" type="button" data-clear-comparison>Clear</button><button class="button-primary" type="button" data-open-comparison ${selectedJobs.length < 2 ? "disabled" : ""}>Compare roles</button></div>
  </section>`;
}

function openJobComparison() {
  const selectedJobs = comparedJobIds.map((id) => jobs.find((job) => job.id === id)).filter(Boolean);
  if (selectedJobs.length < 2) {
    showToast("Select at least two roles to compare.");
    return;
  }
  const fields = [
    ["Company", (job) => job.company],
    ["Role", (job) => job.role],
    ["Salary", (job) => job.salary],
    ["Job type", (job) => job.type],
    ["Location", (job) => job.location],
    ["Category", (job) => job.category],
    ["Posted", (job) => job.posted]
  ];
  document.getElementById("modal").classList.add("wide-modal");
  modalContent.innerHTML = `<span class="eyebrow">JOB SEARCH TOOL</span><h2 id="modalTitle">Compare shortlisted roles</h2><p>Review key details side by side before choosing where to apply.</p><div class="compare-table-wrap"><table class="compare-table"><thead><tr><th scope="col">Details</th>${selectedJobs.map((job) => `<th scope="col">${escapeHtml(job.company)}<small>${escapeHtml(job.role)}</small></th>`).join("")}</tr></thead><tbody>${fields.map(([label, getValue]) => `<tr><th scope="row">${label}</th>${selectedJobs.map((job) => `<td>${escapeHtml(getValue(job))}</td>`).join("")}</tr>`).join("")}</tbody></table></div><div class="modal-actions"><button class="button-primary" type="button" id="closeComparison">Done</button></div>`;
  openModal();
  document.getElementById("closeComparison").addEventListener("click", closeModal);
}

function renderPractice() {
  const resources = [
    ["▤", "Resume checklist", "Make your first impression count"],
    ["↗", "Interview question bank", "Prepare stories that feel like you"],
    ["⌘", "Coding interview guide", "A thoughtful approach to problem-solving"],
    ["◎", "Company research template", "Know who you're talking to"]
  ];
  return `
    <div class="page-title-row"><div><div class="eyebrow">PRACTICE MAKES PROGRESS</div><h1>Show up as your best self</h1><p>Build the skills and confidence to make every interview count.</p></div></div>
    <section class="practice-hero"><div><div class="eyebrow">A QUICK WIN</div><h2>Give your brain a 3-minute workout.</h2><p>Try five bite-sized questions across aptitude and tech fundamentals.</p></div><div class="practice-hero-art" aria-hidden="true">✳</div></section>
    <div class="section-heading"><div><h2>Choose your practice</h2><p>Pick a starting point. You can always come back for more.</p></div></div>
    <section class="practice-cards">
      <article class="practice-card"><div class="practice-card-icon" style="color:var(--accent);background:var(--accent-soft)">⌘</div><h3>Tech fundamentals</h3><p>Data structures, complexity, SQL, and more.</p><button class="button-outline" data-start-quiz>Start 5-question quiz &nbsp;→</button></article>
      <article class="practice-card"><div class="practice-card-icon" style="color:var(--warning);background:var(--warning-soft)">◉</div><h3>Aptitude warm-up</h3><p>Practice the numbers and patterns recruiters love.</p><button class="button-outline" data-start-quiz>Try a quick quiz &nbsp;→</button></article>
      <article class="practice-card"><div class="practice-card-icon" style="color:var(--green);background:var(--green-soft)">✧</div><h3>Interview confidence</h3><p>Structure your stories and practice out loud.</p><button class="button-outline" data-question-prompt>Get a question prompt &nbsp;→</button></article>
    </section>
    ${renderQuestionBank()}
    <div class="section-heading"><div><h2>Little things that help a lot</h2><p>Simple resources to make preparation feel less overwhelming.</p></div></div>
    <section class="panel" style="padding:11px"><div class="resource-list">${resources.map((item) => `<div class="resource-item"><span>${item[0]}</span><span><strong>${item[1]}</strong><small>${item[2]}</small></span><span class="resource-arrow">→</span></div>`).join("")}</div></section>`;
}

function renderQuestionBank() {
  const categories = ["All topics", ...new Set(interviewQuestions.map((item) => item.category))];
  const query = questionSearchTerm.trim().toLowerCase();
  const filtered = interviewQuestions.filter((item) => {
    const categoryMatches = activeQuestionCategory === "All topics" || item.category === activeQuestionCategory;
    return categoryMatches && `${item.category} ${item.question} ${item.answer}`.toLowerCase().includes(query);
  });
  return `<section class="question-bank">
    <div class="question-bank-heading"><div><div class="eyebrow">LEARN AT YOUR OWN PACE</div><h2>Interview question bank</h2><p>${interviewQuestions.length} questions with answer guides across core topics.</p></div><label class="question-search"><span aria-hidden="true">⌕</span><input id="questionSearch" type="search" value="${escapeHtml(questionSearchTerm)}" placeholder="Search questions..." aria-label="Search interview questions"></label></div>
    <div class="question-category-row" role="group" aria-label="Filter questions by topic">${categories.map((category) => `<button type="button" class="question-category-chip ${activeQuestionCategory === category ? "active" : ""}" data-question-category="${escapeHtml(category)}" aria-pressed="${activeQuestionCategory === category}">${escapeHtml(category)}</button>`).join("")}</div>
    <p class="question-bank-count" role="status">Showing ${filtered.length} of ${interviewQuestions.length} questions</p>
    ${filtered.length ? `<div class="question-list">${filtered.map((item) => `<details class="question-item" data-question-index="${interviewQuestions.indexOf(item)}"><summary><span class="question-category">${escapeHtml(item.category)}</span><strong>${escapeHtml(item.question)}</strong><span class="question-toggle" aria-hidden="true">+</span></summary><div class="question-answer"><strong>Explanation / answer guide</strong><p>${escapeHtml(item.answer)}</p><small>Use this as a guide and answer in your own words.</small></div></details>`).join("")}</div>` : `<div class="panel empty-state"><strong>No questions found</strong>Try a different search or topic.</div>`}
  </section>`;
}

function renderRoadmap() {
  const allTasks = roadmap.flatMap((phase) => phase.tasks.map((task) => ({ phase: phase.title, task })));
  const completed = allTasks.filter((item) => state.completedTasks.includes(item.task)).length;
  const percent = Math.round(completed / allTasks.length * 100);
  return `
    <div class="page-title-row"><div><div class="eyebrow">YOUR PLAN, YOUR PACE</div><h1>A roadmap made for real progress</h1><p>There isn't one right timeline. Start where you are and keep going.</p></div></div>
    <section class="roadmap-banner"><div><h2>You're building something good.</h2><p>Every task you check off is another step toward feeling ready.</p></div><div class="roadmap-score"><strong>${percent}%</strong><span>of your roadmap complete</span></div></section>
    <div class="roadmap-layout"><div class="roadmap-phases">${roadmap.map((phase, index) => {
      const done = phase.tasks.filter((task) => state.completedTasks.includes(task)).length;
      return `<section class="phase-card"><div class="phase-title"><span class="phase-number">${index + 1}</span><span><h3>${phase.title}</h3><small>${phase.duration}</small></span><span class="phase-count">${done}/${phase.tasks.length} complete</span></div><div class="phase-tasks">${phase.tasks.map((task) => `<label class="check-row ${state.completedTasks.includes(task) ? "done" : ""}"><input type="checkbox" data-roadmap-task="${escapeHtml(task)}" ${state.completedTasks.includes(task) ? "checked" : ""}><span>${task}</span></label>`).join("")}</div></section>`;
    }).join("")}</div>
      <aside class="roadmap-aside"><h3>A few things to remember</h3><p>Placement preparation is a journey, not a race. Your path can change as you learn what you enjoy.</p><div class="tip-list"><div><span>✦</span><span>Consistency beats last-minute cramming.</span></div><div><span>✦</span><span>It's okay to ask for feedback and help.</span></div><div><span>✦</span><span>One rejection never defines your potential.</span></div></div></aside>
    </div>`;
}

function renderApplications() {
  const activeCount = state.applications.filter((application) => !["Offer", "Rejected"].includes(application.status)).length;
  return `
    <div class="page-title-row"><div><div class="eyebrow">KEEP EVERY OPPORTUNITY MOVING</div><h1>Your application tracker</h1><p>Keep notes, follow-ups, and interview stages in one place.</p></div><button class="button-primary" data-add-application>＋ Add application</button></div>
    <section class="metrics-grid">
      <div class="metric-card"><span class="metric-icon purple">▤</span><span class="metric-copy"><strong>${state.applications.length}</strong><small>Total tracked</small></span></div>
      <div class="metric-card"><span class="metric-icon blue">◷</span><span class="metric-copy"><strong>${activeCount}</strong><small>In progress</small></span></div>
      <div class="metric-card"><span class="metric-icon green">✧</span><span class="metric-copy"><strong>${state.applications.filter((item) => item.status === "Interview").length}</strong><small>Interviews</small></span></div>
      <div class="metric-card"><span class="metric-icon orange">✓</span><span class="metric-copy"><strong>${state.applications.filter((item) => item.status === "Offer").length}</strong><small>Offers</small></span></div>
    </section>
    ${state.applications.length ? `<div class="application-tracker">${state.applications.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((application) => `
      <article class="application-card">
        <div class="company-logo ${escapeHtml(application.color || "violet")}">${escapeHtml((application.company || "?").slice(0, 1).toUpperCase())}</div>
        <div class="application-main"><strong>${escapeHtml(application.role)}</strong><small>${escapeHtml(application.company)} · Added ${escapeHtml(application.createdAt)}</small>${application.notes ? `<p>${escapeHtml(application.notes)}</p>` : ""}</div>
        <label class="application-status-label"><span>Stage</span><select data-application-status="${escapeHtml(application.id)}">${applicationStatuses.map((status) => `<option ${application.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></label>
        <button class="delete-button" data-delete-application="${escapeHtml(application.id)}" aria-label="Remove ${escapeHtml(application.role)} application" title="Remove from tracker">×</button>
      </article>`).join("")}</div>` : `<div class="panel empty-state"><strong>Your tracker is ready when you are</strong>Add a role from Find jobs, or add an application you've already submitted.<br><button class="button-outline" style="margin-top:12px" data-add-application>＋ Add your first application</button></div>`}
    <p class="demo-note">This tracker is private to this browser and saved on this device.</p>`;
}

function renderCompanies() {
  const categories = ["All", ...new Set(companies.map((company) => company.category))];
  const filtered = companies.filter((company) => {
    const matchesCategory = companyFilter === "All" || company.category === companyFilter;
    const matchesSearch = `${company.name} ${company.category} ${company.location}`.toLowerCase().includes(companySearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return `
    <div class="page-title-row"><div><div class="eyebrow">EXPLORE EMPLOYERS</div><h1>Find a company that fits you</h1><p>Browse employer career pages and verify current openings directly with the company.</p></div><label class="search-box"><span>⌕</span><input id="companySearch" type="search" placeholder="Search companies..." value="${escapeHtml(companySearch)}" aria-label="Search companies"></label></div>
    <div class="filter-row">${categories.map((category) => `<button class="filter-chip ${companyFilter === category ? "active" : ""}" data-company-filter="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join("")}</div>
    <div class="company-grid">${filtered.map((company) => `
      <article class="company-card"><div class="company-card-heading"><span class="company-logo ${company.color}">${escapeHtml(company.logo)}</span><span><strong>${escapeHtml(company.name)}</strong><small>${escapeHtml(company.category)}</small></span></div><p>${escapeHtml(company.description)}</p><div class="company-location">⌖ ${escapeHtml(company.location)}</div><a class="button-outline company-link" href="${escapeHtml(company.careers)}" target="_blank" rel="noopener noreferrer">Visit official careers page ↗</a></article>`).join("")}</div>
    ${filtered.length ? "" : `<div class="panel empty-state"><strong>No companies found</strong>Try another company name or category.</div>`}
    <div class="section-heading portals-heading"><div><h2>Explore job portals</h2><p>Open external job boards to search for more opportunities.</p></div></div>
    <div class="portal-grid">${jobPortals.map((portal) => `<a class="portal-card" href="${escapeHtml(portal.url)}" target="_blank" rel="noopener noreferrer"><span><strong>${escapeHtml(portal.name)}</strong><small>${escapeHtml(portal.type)}</small></span><span class="resource-arrow">↗</span></a>`).join("")}</div>
    <p class="demo-note">These are independent external services. Check the URL, verify each employer and vacancy, and never pay a recruiter for a job. Listings and compensation shown in Find jobs are sample data, not live vacancies.</p>`;
}

function renderProfile() {
  const profile = state.profile;
  const filled = Object.values(profile).filter((value) => String(value).trim()).length;
  const progress = Math.round(filled / Object.keys(profile).length * 100);
  return `
    <div class="page-title-row"><div><div class="eyebrow">YOUR PROFESSIONAL INTRODUCTION</div><h1>My profile</h1><p>Fill in your details once, then use them to prepare applications and your resume.</p></div></div>
    <div class="form-layout"><form class="editor-form panel" id="profileForm"><div class="form-heading"><strong>Student details</strong><small>Your profile stays in this browser.</small></div>
      ${formField("Full name", "name", profile.name, "text", "Nikhlesh Singh", true)}
      <div class="form-two-col">${formField("Email", "email", profile.email, "email", "you@example.com")}${formField("Phone", "phone", profile.phone, "tel", "+91 ...")}</div>
      <div class="form-two-col">${formField("Degree / course", "degree", profile.degree, "text", "B.Tech Computer Science")}${formField("Graduation year", "graduation", profile.graduation, "text", "2026")}</div>
      ${formField("Target role", "targetRole", profile.targetRole, "text", "Graduate Software Engineer")}
      <label class="form-field"><span>Skills</span><textarea name="skills" rows="3" placeholder="JavaScript, SQL, communication...">${escapeHtml(profile.skills)}</textarea><small>Separate skills with commas.</small></label>
      <button class="button-primary" type="submit">Save profile</button>
    </form>
      <aside class="profile-summary panel"><span class="avatar profile-avatar">${escapeHtml(getInitials(profile.name))}</span><h2>${escapeHtml(profile.name || "Your name")}</h2><p>${escapeHtml(profile.targetRole || "Add your target role")}</p><div class="profile-progress"><span>Profile completeness</span><strong>${progress}%</strong><div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div></div><ul><li>Use a professional email address.</li><li>Keep your skills relevant to the role.</li><li>Never share passwords or payment details with recruiters.</li></ul></aside></div>`;
}

function renderResume() {
  const resume = state.resume;
  const profile = state.profile;
  const data = { ...resume, name: profile.name, email: profile.email, phone: profile.phone, degree: profile.degree, graduation: profile.graduation };
  return `
    <div class="resume-view">
    <div class="page-title-row"><div><div class="eyebrow">MAKE A STRONG FIRST IMPRESSION</div><h1>Resume builder</h1><p>Add your details, preview your resume, then print or save it as a PDF.</p></div><button class="button-primary" data-print-resume>Print / Save PDF</button></div>
    <div class="resume-layout"><form class="editor-form panel" id="resumeForm"><div class="form-heading"><strong>Resume content</strong><small>Use concise, honest details. You can edit these anytime.</small></div>
      <div class="form-two-col">${formField("Full name", "name", profile.name, "text", "Your full name", true)}${formField("Target role / headline", "headline", resume.headline, "text", "Graduate Software Engineer")}</div>
      <div class="form-two-col">${formField("Email", "email", profile.email, "email", "you@example.com")}${formField("Phone", "phone", profile.phone, "tel", "+91 ...")}</div>
      <label class="form-field"><span>Professional summary</span><textarea name="summary" rows="3" placeholder="2–3 lines about your strengths and what role you're seeking.">${escapeHtml(resume.summary)}</textarea></label>
      ${formField("Skills", "skills", resume.skills || profile.skills, "text", "JavaScript, SQL, teamwork")}
      <label class="form-field"><span>Education</span><textarea name="education" rows="3" placeholder="Degree, institution, graduation year, relevant achievements">${escapeHtml(resume.education || [profile.degree, profile.graduation].filter(Boolean).join(" · "))}</textarea></label>
      <label class="form-field"><span>Experience / internships</span><textarea name="experience" rows="4" placeholder="Role · Organisation · Dates&#10;What you did and the impact (use real outcomes).">${escapeHtml(resume.experience)}</textarea></label>
      <label class="form-field"><span>Projects</span><textarea name="projects" rows="4" placeholder="Project name · Tools used&#10;What problem it solves and what you built.">${escapeHtml(resume.projects)}</textarea></label>
      <button class="button-outline" type="submit">Save resume details</button></form>
      <article class="resume-preview panel" id="resumePreview">${resumePreview(data)}</article></div>
    <p class="demo-note">Your resume data is stored locally in this browser. Check the preview and review all details before sharing.</p></div>`;
}

function getInitials(name) {
  return String(name || "Student").trim().split(/\s+/).slice(0, 2).map((part) => part[0] || "").join("").toUpperCase();
}

function getCareersUrl(job) {
  const company = companies.find((item) => item.name === job.company);
  return company ? company.careers : "https://www.linkedin.com/jobs/";
}

function formField(label, name, value, type, placeholder, required) {
  return `<label class="form-field"><span>${label}</span><input name="${name}" type="${type}" value="${escapeHtml(value || "")}" placeholder="${escapeHtml(placeholder)}" ${required ? "required" : ""}></label>`;
}

function resumePreview(data) {
  const section = (title, content) => content ? `<section class="resume-section"><h3>${title}</h3><p>${escapeHtml(content).replace(/\n/g, "<br>")}</p></section>` : "";
  const contact = [data.email, data.phone].filter(Boolean).map(escapeHtml).join(" · ");
  return `<div class="resume-paper"><header class="resume-header"><h2>${escapeHtml(data.name || "Your Name")}</h2><p>${escapeHtml(data.headline || "Target role")}</p><small>${contact || "Email · phone"}</small></header>${section("PROFILE", data.summary)}${section("SKILLS", data.skills)}${section("EDUCATION", data.education)}${section("EXPERIENCE", data.experience)}${section("PROJECTS", data.projects)}${!data.summary && !data.skills && !data.education && !data.experience && !data.projects ? `<div class="resume-placeholder">Fill in the form to build your resume preview.</div>` : ""}</div>`;
}

function readForm(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function bindViewEvents() {
  const rerenderQuestionBank = () => {
    const openQuestions = Array.from(viewContainer.querySelectorAll(".question-item[open]"), (item) => item.dataset.questionIndex);
    renderView();
    openQuestions.forEach((index) => {
      const question = viewContainer.querySelector(`.question-item[data-question-index="${index}"]`);
      if (question) question.open = true;
    });
  };
  viewContainer.querySelectorAll("[data-go]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.go)));
  viewContainer.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    renderView();
  }));
  const search = document.getElementById("jobSearch");
  if (search) search.addEventListener("input", (event) => {
    const cursor = event.target.selectionStart;
    searchTerm = event.target.value;
    renderView();
    const updatedSearch = document.getElementById("jobSearch");
    updatedSearch.focus();
    updatedSearch.setSelectionRange(cursor, cursor);
  });
  viewContainer.querySelectorAll("[data-question-category]").forEach((button) => button.addEventListener("click", () => {
    activeQuestionCategory = button.dataset.questionCategory;
    rerenderQuestionBank();
  }));
  const questionSearch = document.getElementById("questionSearch");
  if (questionSearch) questionSearch.addEventListener("input", (event) => {
    const cursor = event.target.selectionStart;
    questionSearchTerm = event.target.value;
    rerenderQuestionBank();
    const updatedSearch = document.getElementById("questionSearch");
    updatedSearch.focus();
    updatedSearch.setSelectionRange(cursor, cursor);
  });
  const searchCompanies = document.getElementById("companySearch");
  if (searchCompanies) searchCompanies.addEventListener("input", (event) => {
    const cursor = event.target.selectionStart;
    companySearch = event.target.value;
    renderView();
    const updatedSearch = document.getElementById("companySearch");
    updatedSearch.focus();
    updatedSearch.setSelectionRange(cursor, cursor);
  });
  viewContainer.querySelectorAll("[data-company-filter]").forEach((button) => button.addEventListener("click", () => {
    companyFilter = button.dataset.companyFilter;
    renderView();
  }));
  viewContainer.querySelectorAll("[data-add-application]").forEach((button) => button.addEventListener("click", () => openApplicationForm()));
  viewContainer.querySelectorAll("[data-application-status]").forEach((select) => select.addEventListener("change", () => {
    const application = state.applications.find((item) => item.id === select.dataset.applicationStatus);
    if (!application) return;
    application.status = select.value;
    saveState();
    renderView();
    showToast("Application stage updated.");
  }));
  viewContainer.querySelectorAll("[data-delete-application]").forEach((button) => button.addEventListener("click", () => {
    state.applications = state.applications.filter((application) => application.id !== button.dataset.deleteApplication);
    saveState();
    renderView();
    showToast("Application removed from your tracker.");
  }));
  const profileForm = document.getElementById("profileForm");
  if (profileForm) profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    state.profile = { ...state.profile, ...readForm(profileForm) };
    saveState();
    updateProfileIdentity();
    renderView();
    showToast("Profile saved on this device.");
  });
  const resumeForm = document.getElementById("resumeForm");
  if (resumeForm) {
    const updatePreview = () => {
      const values = { ...state.profile, ...state.resume, ...readForm(resumeForm) };
      document.getElementById("resumePreview").innerHTML = resumePreview(values);
    };
    resumeForm.addEventListener("input", updatePreview);
    resumeForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const values = readForm(resumeForm);
      state.profile = { ...state.profile, name: values.name, email: values.email, phone: values.phone };
      state.resume = { ...state.resume, headline: values.headline, summary: values.summary, skills: values.skills, education: values.education, experience: values.experience, projects: values.projects };
      saveState();
      updateProfileIdentity();
      renderView();
      showToast("Resume details saved.");
    });
  }
  const printResume = viewContainer.querySelector("[data-print-resume]");
  if (printResume) printResume.addEventListener("click", () => {
    const form = document.getElementById("resumeForm");
    state.profile = { ...state.profile, ...Object.fromEntries(["name", "email", "phone"].map((key) => [key, new FormData(form).get(key)])) };
    const values = readForm(form);
    state.resume = { ...state.resume, headline: values.headline, summary: values.summary, skills: values.skills, education: values.education, experience: values.experience, projects: values.projects };
    saveState();
    window.print();
  });
  viewContainer.querySelectorAll("[data-bookmark]").forEach((button) => button.addEventListener("click", () => {
    const id = Number(button.dataset.bookmark);
    state.bookmarks = state.bookmarks.includes(id) ? state.bookmarks.filter((savedId) => savedId !== id) : [...state.bookmarks, id];
    saveState();
    renderView();
    showToast(state.bookmarks.includes(id) ? "Added to your saved opportunities." : "Removed from saved opportunities.");
  }));
  viewContainer.querySelectorAll("[data-compare-job]").forEach((button) => button.addEventListener("click", () => {
    const id = Number(button.dataset.compareJob);
    if (comparedJobIds.includes(id)) {
      comparedJobIds = comparedJobIds.filter((selectedId) => selectedId !== id);
    } else if (comparedJobIds.length === 3) {
      showToast("You can compare up to three roles at a time.");
      return;
    } else {
      comparedJobIds = [...comparedJobIds, id];
    }
    renderView();
  }));
  const clearComparison = viewContainer.querySelector("[data-clear-comparison]");
  if (clearComparison) clearComparison.addEventListener("click", () => {
    comparedJobIds = [];
    renderView();
  });
  const openComparison = viewContainer.querySelector("[data-open-comparison]");
  if (openComparison) openComparison.addEventListener("click", openJobComparison);
  viewContainer.querySelectorAll("[data-job-detail]").forEach((button) => button.addEventListener("click", () => openJobDetail(Number(button.dataset.jobDetail))));
  viewContainer.querySelectorAll("[data-apply-role]").forEach((link) => link.addEventListener("click", () => {
    const job = jobs.find((item) => item.id === Number(link.dataset.applyRole));
    if (job) trackApplicationStart(job);
  }));
  viewContainer.querySelectorAll("[data-week-task]").forEach((input) => input.addEventListener("change", () => {
    const id = input.dataset.weekTask;
    state.completedTasks = input.checked ? [...new Set([...state.completedTasks, id])] : state.completedTasks.filter((item) => item !== id);
    saveState();
    renderView();
  }));
  viewContainer.querySelectorAll("[data-roadmap-task]").forEach((input) => input.addEventListener("change", () => {
    const task = input.dataset.roadmapTask;
    state.completedTasks = input.checked ? [...new Set([...state.completedTasks, task])] : state.completedTasks.filter((item) => item !== task);
    saveState();
    renderView();
  }));
  viewContainer.querySelectorAll("[data-start-quiz]").forEach((button) => button.addEventListener("click", startQuiz));
  const prompt = viewContainer.querySelector("[data-question-prompt]");
  if (prompt) prompt.addEventListener("click", showPrompt);
}

function openJobDetail(id) {
  const job = jobs.find((item) => item.id === id);
  if (!job) return;
  modalContent.innerHTML = `<span class="eyebrow">${escapeHtml(job.category)} · ${escapeHtml(job.type)} · SAMPLE LISTING</span><h2 id="modalTitle">${escapeHtml(job.role)}</h2><div class="modal-subtitle">${escapeHtml(job.company)} &nbsp;·&nbsp; ${escapeHtml(job.location)} &nbsp;·&nbsp; ${escapeHtml(job.salary)}</div><div class="modal-detail" style="margin-top:18px"><strong>About the role</strong><p>${escapeHtml(job.description)}</p></div><div class="modal-detail"><strong>What they're looking for</strong><p>${escapeHtml(job.requirements)}</p></div><p class="demo-note">Sample opportunity. Confirm current openings and details with the employer before applying.</p><div class="modal-actions"><button class="button-outline" data-modal-save="${job.id}">${state.bookmarks.includes(job.id) ? "♥ Saved" : "♡ Save role"}</button><button class="button-outline" data-track-role="${job.id}">＋ Track application</button><a class="button-primary" data-apply-role="${job.id}" href="${escapeHtml(getCareersUrl(job))}" target="_blank" rel="noopener noreferrer">Apply on company site ↗</a></div>`;
  openModal();
  modalContent.querySelector("[data-modal-save]").addEventListener("click", (event) => {
    const jobId = Number(event.currentTarget.dataset.modalSave);
    state.bookmarks = state.bookmarks.includes(jobId) ? state.bookmarks.filter((savedId) => savedId !== jobId) : [...state.bookmarks, jobId];
    saveState();
    openJobDetail(jobId);
    showToast(state.bookmarks.includes(jobId) ? "Added to your saved opportunities." : "Removed from saved opportunities.");
  });
  modalContent.querySelector("[data-track-role]").addEventListener("click", () => {
    addApplication({ company: job.company, role: job.role, status: "Interested", notes: "" });
    closeModal();
    setView("applications");
    showToast("Role added to your application tracker.");
  });
  modalContent.querySelector("[data-apply-role]").addEventListener("click", () => trackApplicationStart(job));
}

function openApplicationForm() {
  modalContent.innerHTML = `<span class="eyebrow">KEEP YOUR SEARCH ORGANIZED</span><h2 id="modalTitle">Add an application</h2><p>Track roles from any company, even if you found them outside this portal.</p><form class="editor-form modal-form" id="applicationForm">${formField("Company", "company", "", "text", "Company name", true)}${formField("Role", "role", "", "text", "Job title", true)}<label class="form-field"><span>Current stage</span><select name="status">${applicationStatuses.map((status) => `<option>${status}</option>`).join("")}</select></label><label class="form-field"><span>Note (optional)</span><textarea name="notes" rows="2" placeholder="Follow-up date, contact, or reminder"></textarea></label><div class="modal-actions"><button class="button-primary" type="submit">Add to tracker</button></div></form>`;
  openModal();
  document.getElementById("applicationForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const values = readForm(event.currentTarget);
    addApplication(values);
    closeModal();
    renderView();
    showToast("Application added to your tracker.");
  });
}

function addApplication(values) {
  const company = companies.find((item) => item.name.toLowerCase() === String(values.company).trim().toLowerCase());
  state.applications.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    company: String(values.company).trim(),
    role: String(values.role).trim(),
    status: applicationStatuses.includes(values.status) ? values.status : "Interested",
    notes: String(values.notes || "").trim(),
    color: company ? company.color : "violet",
    createdAt: new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(new Date())
  });
  saveState();
}

function trackApplicationStart(job) {
  const existing = state.applications.find((application) =>
    application.company.toLowerCase() === job.company.toLowerCase()
      && application.role.toLowerCase() === job.role.toLowerCase()
  );
  if (!existing) {
    addApplication({
      company: job.company,
      role: job.role,
      status: "Interested",
      notes: "Official careers page opened. Submit the employer form there, then update this stage to Applied."
    });
  }
  showToast(existing
    ? "Employer careers page opened. Update this role's tracker stage after submitting."
    : "Employer careers page opened and role added to your tracker. Update to Applied after submitting.");
}

function updateProfileIdentity() {
  const name = state.profile.name || "Student";
  document.querySelectorAll(".profile-copy strong").forEach((element) => { element.textContent = name; });
  document.querySelectorAll(".avatar, .top-avatar").forEach((element) => { element.textContent = getInitials(name); });
}

function addAssistantMessage(text, kind) {
  const message = document.createElement("div");
  message.className = `assistant-message ${kind === "user" ? "assistant-user" : "assistant-reply"}`;
  message.textContent = text;
  const messages = document.getElementById("assistantMessages");
  messages.append(message);
  messages.scrollTop = messages.scrollHeight;
}

function resetAssistantChat() {
  assistantHistory = [];
  const messages = document.getElementById("assistantMessages");
  messages.replaceChildren();
  addAssistantMessage("Hi Nikhlesh! I can help with resumes, interview practice, job search strategy, and your application plan. What would you like to work on?", "assistant");
  document.getElementById("assistantSuggestions").hidden = false;
}

async function checkAssistantHealth() {
  const status = document.getElementById("assistantStatus");
  try {
    const response = await fetch("/api/health");
    if (!response.ok) throw new Error("Assistant server is unavailable.");
    const result = await response.json();
    status.textContent = result.configured ? `Gemini ready · ${result.model}` : "Add a Gemini API key to enable replies";
    status.dataset.state = result.configured ? "ready" : "setup";
  } catch (error) {
    status.textContent = "Start the portal with npm start to connect";
    status.dataset.state = "offline";
  }
}

async function sendAssistantMessage(event) {
  event.preventDefault();
  if (assistantBusy) return;
  const input = document.getElementById("assistantInput");
  const message = input.value.trim();
  if (!message) return;

  const history = assistantHistory.slice(-8);
  assistantHistory.push({ role: "user", text: message });
  assistantHistory = assistantHistory.slice(-20);
  addAssistantMessage(message, "user");
  document.getElementById("assistantSuggestions").hidden = true;
  input.value = "";
  assistantBusy = true;
  document.getElementById("assistantSend").disabled = true;
  document.getElementById("assistantClear").disabled = true;
  document.getElementById("assistantStatus").textContent = "Thinking…";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history })
    });
    let result;
    try {
      result = await response.json();
    } catch {
      throw new Error("The AI server did not return a valid response. Start the portal with npm start.");
    }
    if (!response.ok) throw new Error(result.error || "The assistant could not reply.");
    if (typeof result.reply !== "string" || !result.reply.trim()) throw new Error("The assistant returned an empty reply. Please try again.");
    assistantHistory.push({ role: "assistant", text: result.reply });
    addAssistantMessage(result.reply, "assistant");
    document.getElementById("assistantStatus").textContent = "Gemini placement assistant";
  } catch (error) {
    addAssistantMessage(error.message || "Couldn't connect to the assistant. Please try again.", "assistant");
    document.getElementById("assistantStatus").textContent = "Connection needs attention";
  } finally {
    assistantBusy = false;
    document.getElementById("assistantSend").disabled = false;
    document.getElementById("assistantClear").disabled = false;
    input.focus();
  }
}

function openModal() {
  modalBackdrop.hidden = false;
  document.getElementById("modalClose").focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.getElementById("modal").classList.remove("wide-modal");
  currentQuiz = null;
}

function showPrompt() {
  const prompts = [
    "Tell me about a time you had to learn something quickly. What helped you succeed?",
    "What's a project you're proud of, and what would you improve if you built it again?",
    "Tell me about a time you worked through a difficult problem with someone else.",
    "What kind of work makes you feel most curious or energized?"
  ];
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];
  modalContent.innerHTML = `<span class="eyebrow">YOUR INTERVIEW PROMPT</span><h2 id="modalTitle">Take a moment. You've got this.</h2><div class="quiz-result"><span style="font-size:12px;color:var(--ink)">${escapeHtml(prompt)}</span></div><p>Try answering out loud using the STAR method: Situation, Task, Action, Result. Keep it natural — your own voice matters.</p><div class="modal-actions"><button class="button-primary" id="anotherPrompt">Give me another</button></div>`;
  openModal();
  document.getElementById("anotherPrompt").addEventListener("click", showPrompt);
}

function startQuiz() {
  currentQuiz = { index: 0, score: 0, selected: null };
  renderQuestion();
  openModal();
}

function renderQuestion() {
  const question = quizQuestions[currentQuiz.index];
  modalContent.innerHTML = `<span class="eyebrow">QUICK PRACTICE · QUESTION ${currentQuiz.index + 1} OF ${quizQuestions.length}</span><h2 id="modalTitle">${question.topic}</h2><p>${question.question}</p><div>${question.options.map((option, index) => `<button class="quiz-option ${currentQuiz.selected === index ? "selected" : ""}" data-option="${index}">${escapeHtml(option)}</button>`).join("")}</div><div class="modal-actions"><button class="button-primary" id="quizNext" ${currentQuiz.selected === null ? "disabled style='opacity:.5;cursor:not-allowed'" : ""}>${currentQuiz.index === quizQuestions.length - 1 ? "See my score" : "Next question"} &nbsp;→</button></div>`;
  modalContent.querySelectorAll("[data-option]").forEach((button) => button.addEventListener("click", () => {
    currentQuiz.selected = Number(button.dataset.option);
    renderQuestion();
  }));
  document.getElementById("quizNext").addEventListener("click", () => {
    if (currentQuiz.selected === null) return;
    if (currentQuiz.selected === question.answer) currentQuiz.score += 1;
    currentQuiz.index += 1;
    currentQuiz.selected = null;
    if (currentQuiz.index === quizQuestions.length) finishQuiz();
    else renderQuestion();
  });
}

function finishQuiz() {
  const score = Math.round(currentQuiz.score / quizQuestions.length * 100);
  state.quizAttempts += 1;
  state.quizBest = Math.max(state.quizBest, score);
  saveState();
  const encouragement = score === 100 ? "Brilliant work — you nailed every question!" : score >= 60 ? "Nice work. A little practice goes a long way." : "Good start. Every question is a chance to learn.";
  modalContent.innerHTML = `<span class="eyebrow">PRACTICE COMPLETE</span><h2 id="modalTitle">You showed up. That counts.</h2><div class="quiz-result"><strong>${score}%</strong><span>${currentQuiz.score} correct out of ${quizQuestions.length}</span></div><p>${encouragement}</p><div class="modal-actions"><button class="button-outline" id="quizClose">Close</button><button class="button-primary" id="quizAgain">Try again</button></div>`;
  document.getElementById("quizClose").addEventListener("click", closeModal);
  document.getElementById("quizAgain").addEventListener("click", startQuiz);
}

document.querySelectorAll(".nav-link").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
document.getElementById("mobileMenu").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
document.getElementById("profileButton").addEventListener("click", () => setView("profile"));
document.getElementById("jobsAvailableButton").addEventListener("click", () => setView("jobs"));
document.getElementById("notificationButton").addEventListener("click", () => {
  const activeApplications = state.applications.filter((application) => !["Offer", "Rejected"].includes(application.status)).length;
  modalContent.innerHTML = `<span class="eyebrow">YOUR PLACEMENT CHECK-IN</span><h2 id="modalTitle">A quick reminder</h2><p>You have <strong>${activeApplications}</strong> active ${activeApplications === 1 ? "application" : "applications"} in your tracker. Check employer career pages for updates and follow up when appropriate.</p><div class="modal-actions"><button class="button-primary" id="openApplications">Open application tracker</button></div>`;
  openModal();
  document.getElementById("openApplications").addEventListener("click", () => { closeModal(); setView("applications"); });
});
const assistantPanel = document.getElementById("assistantPanel");
const assistantToggle = document.getElementById("assistantToggle");
function setAssistantOpen(open) {
  assistantPanel.hidden = !open;
  assistantToggle.setAttribute("aria-expanded", String(open));
  if (open) document.getElementById("assistantInput").focus();
}
assistantToggle.addEventListener("click", () => setAssistantOpen(assistantPanel.hidden));
document.getElementById("assistantClose").addEventListener("click", () => setAssistantOpen(false));
document.getElementById("assistantClear").addEventListener("click", resetAssistantChat);
document.getElementById("assistantForm").addEventListener("submit", sendAssistantMessage);
document.querySelectorAll("[data-assistant-prompt]").forEach((button) => button.addEventListener("click", () => {
  const input = document.getElementById("assistantInput");
  input.value = button.dataset.assistantPrompt;
  document.getElementById("assistantForm").requestSubmit();
}));
document.getElementById("assistantInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    document.getElementById("assistantForm").requestSubmit();
  }
});
checkAssistantHealth();
document.getElementById("modalClose").addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (event) => { if (event.target === modalBackdrop) closeModal(); });
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!modalBackdrop.hidden) closeModal();
  else setAssistantOpen(false);
});
document.getElementById("todayDate").textContent = new Intl.DateTimeFormat("en-IN", { weekday: "short", month: "short", day: "numeric" }).format(new Date());
const availableJobCount = String(jobs.length);
document.getElementById("jobCount").textContent = availableJobCount;
document.getElementById("availableJobCount").textContent = availableJobCount;
document.getElementById("jobsAvailableButton").setAttribute("aria-label", `Browse ${availableJobCount} available jobs`);
document.getElementById("jobsAvailableButton").title = `${availableJobCount} jobs available — browse jobs`;
updateProfileIdentity();
renderView();
