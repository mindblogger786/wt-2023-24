import React from "react";

export const q4Answers: React.ReactNode[] = [
  // 4a. DOM vs COM
  <div key="4a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">4a. Differentiate between DOM and COM.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>The <strong>DOM (Document Object Model)</strong> is a platform-independent, language-neutral interface defined by the W3C that represents an HTML or XML document as a tree structure of objects. When a browser loads a web page, it parses the HTML and creates a DOM tree where each HTML element becomes a node (object) with properties, methods, and events. JavaScript can access and manipulate this tree to dynamically change content, structure, and styling — adding elements, removing nodes, changing text, updating attributes, and responding to user events. The DOM is the bridge between static HTML and dynamic web pages.</p>
    <p><strong>COM (Component Object Model)</strong> is a Microsoft-developed binary interface standard that enables inter-process communication and dynamic object creation across different programming languages on Windows platforms. COM allows objects (components) to expose their functionality through well-defined interfaces, enabling a component written in C++ to be used by a Visual Basic application, or an ActiveX control to be embedded in a web page. COM is the foundation for many Microsoft technologies including OLE (Object Linking and Embedding), ActiveX, DCOM (Distributed COM), and COM+.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Comparison Table</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Feature</th>
            <th className="border border-gray-300 p-2 text-left">DOM</th>
            <th className="border border-gray-300 p-2 text-left">COM</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Full Form</strong></td><td className="border border-gray-300 p-2">Document Object Model</td><td className="border border-gray-300 p-2">Component Object Model</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Developer</strong></td><td className="border border-gray-300 p-2">W3C (Web Standards)</td><td className="border border-gray-300 p-2">Microsoft</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Purpose</strong></td><td className="border border-gray-300 p-2">Represent &amp; manipulate HTML/XML</td><td className="border border-gray-300 p-2">Cross-language component reuse</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Domain</strong></td><td className="border border-gray-300 p-2">Web (browsers)</td><td className="border border-gray-300 p-2">Windows OS / desktop</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Language</strong></td><td className="border border-gray-300 p-2">JavaScript (primarily)</td><td className="border border-gray-300 p-2">C++, VB, C#, any Windows language</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Structure</strong></td><td className="border border-gray-300 p-2">Tree of nodes</td><td className="border border-gray-300 p-2">Binary interface with IUnknown</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Usage</strong></td><td className="border border-gray-300 p-2">Dynamic web page manipulation</td><td className="border border-gray-300 p-2">Desktop app integration, ActiveX</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Platform</strong></td><td className="border border-gray-300 p-2">Cross-platform (all browsers)</td><td className="border border-gray-300 p-2">Windows only</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 DOM Tree Structure Example</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`<!-- HTML: -->
<html>
  <head><title>My Page</title></head>
  <body>
    <h1>Hello</h1>
    <p id="demo">World</p>
  </body>
</html>

<!-- DOM Tree Representation:
    Document
      ├── html
      │   ├── head
      │   │   └── title → "My Page"
      │   └── body
      │       ├── h1 → "Hello"
      │       └── p (id="demo") → "World"
-->

// JavaScript DOM Manipulation:
// Access element
const p = document.getElementById("demo");

// Change content
p.textContent = "DOM is powerful!";
p.innerHTML = "<strong>Bold text</strong>";

// Change style
p.style.color = "red";
p.style.backgroundColor = "yellow";

// Add new element
const newP = document.createElement("p");
newP.textContent = "New paragraph";
document.body.appendChild(newP);

// Remove element
p.remove();`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> When you search on Google, the results page is initially an HTML document. As you type in the search box, JavaScript uses the DOM to read the input value, sends an AJAX request to Google's server, receives matching suggestions, and dynamically creates new DOM nodes to display the autocomplete dropdown — all without reloading the page. This real-time manipulation is only possible through the DOM.</p>
    <p><strong>Scenario 2:</strong> Microsoft Excel uses COM to allow different applications to interact with it. A C# application can create an Excel COM object, open a workbook, write data to cells, and generate charts — all programmatically. The COM interface ensures the C# code communicates with Excel regardless of which language Excel was written in, enabling seamless cross-application automation on Windows.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li><strong>DOM</strong>: W3C standard for representing HTML/XML as a tree of objects</li>
      <li><strong>COM</strong>: Microsoft's binary interface for cross-language component communication</li>
      <li>DOM is for web (browser); COM is for Windows desktop applications</li>
      <li>DOM enables JavaScript to dynamically modify web pages</li>
      <li>COM enables software components written in different languages to communicate</li>
      <li>Key DOM methods: getElementById, querySelector, createElement, appendChild</li>
    </ul>
  </div>,

  // 4b. Switch Case and Control Statements in JavaScript
  <div key="4b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">4b. What do you mean by Switch Case? Explain the various control statements in JavaScript.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Control statements</strong> in JavaScript are constructs that control the flow of program execution — determining which blocks of code run, how many times they repeat, and under what conditions. JavaScript provides three categories of control statements: <strong>Conditional statements</strong> (if, if-else, else-if, switch) that execute code based on conditions; <strong>Looping statements</strong> (for, while, do-while, for...of, for...in) that repeat code blocks; and <strong>Jump statements</strong> (break, continue, return) that alter the normal flow of execution. Together, these statements form the decision-making and repetition backbone of any JavaScript program.</p>
    <p>The <strong>switch statement</strong> is a specialized conditional construct that evaluates an expression and matches its value against multiple case clauses. It is particularly useful when you need to compare a single variable against many possible values, as it is cleaner and more readable than a long chain of if-else statements. The switch statement uses strict comparison (===) and requires <code>break</code> statements to prevent "fall-through" to the next case. A <code>default</code> clause handles any unmatched values.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Control Statements Classification</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Category</th>
            <th className="border border-gray-300 p-2 text-left">Statement</th>
            <th className="border border-gray-300 p-2 text-left">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Conditional</strong></td><td className="border border-gray-300 p-2">if</td><td className="border border-gray-300 p-2">Execute if condition is true</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Conditional</strong></td><td className="border border-gray-300 p-2">if-else</td><td className="border border-gray-300 p-2">Either-or execution</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Conditional</strong></td><td className="border border-gray-300 p-2">else if</td><td className="border border-gray-300 p-2">Multiple conditions chain</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Conditional</strong></td><td className="border border-gray-300 p-2">switch</td><td className="border border-gray-300 p-2">Match value against multiple cases</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Loop</strong></td><td className="border border-gray-300 p-2">for</td><td className="border border-gray-300 p-2">Loop with counter</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Loop</strong></td><td className="border border-gray-300 p-2">while</td><td className="border border-gray-300 p-2">Loop while condition true</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Loop</strong></td><td className="border border-gray-300 p-2">do-while</td><td className="border border-gray-300 p-2">Execute at least once</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Jump</strong></td><td className="border border-gray-300 p-2">break</td><td className="border border-gray-300 p-2">Exit loop or switch</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Jump</strong></td><td className="border border-gray-300 p-2">continue</td><td className="border border-gray-300 p-2">Skip current iteration</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Jump</strong></td><td className="border border-gray-300 p-2">return</td><td className="border border-gray-300 p-2">Exit function with value</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== 1. SWITCH CASE =====
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;  // Prevents fall-through
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend!");
}
// Output: "Wednesday"

// Switch with grouped cases
let month = "January";
switch (month) {
    case "January": case "February": case "March":
        console.log("Q1 (Jan-Mar)");
        break;
    case "April": case "May": case "June":
        console.log("Q2 (Apr-Jun)");
        break;
    default:
        console.log("Other quarter");
}

// ===== 2. IF-ELSE STATEMENTS =====
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");    // This executes
} else if (marks >= 70) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

// ===== 3. FOR LOOP =====
for (let i = 1; i <= 5; i++) {
    console.log("Iteration: " + i);
}

// ===== 4. WHILE LOOP =====
let count = 1;
while (count <= 5) {
    console.log("Count: " + count);
    count++;
}

// ===== 5. DO-WHILE LOOP (executes at least once) =====
let x = 10;
do {
    console.log("x = " + x);
    x++;
} while (x <= 5);
// Outputs: "x = 10" (runs once even though condition is false)

// ===== 6. BREAK and CONTINUE =====
for (let i = 1; i <= 10; i++) {
    if (i === 3) continue; // Skip 3
    if (i === 8) break;    // Stop at 8
    console.log(i); // 1, 2, 4, 5, 6, 7
}

// ===== 7. FOR...OF (arrays, strings) =====
let subjects = ["Java", "Web Tech", "DBMS"];
for (let subject of subjects) {
    console.log(subject);
}

// ===== 8. FOR...IN (object keys) =====
let student = { name: "Rahul", age: 22, grade: "A" };
for (let key in student) {
    console.log(key + ": " + student[key]);
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A grading system uses a switch statement to assign grades: case 10 and case 9 output "Outstanding", case 8 outputs "Excellent", case 7 outputs "Good", and default outputs "Needs Improvement". This is cleaner than writing if-else-if chains for 10 different possible values. The break statement after each case prevents fall-through where multiple cases would execute sequentially.</p>
    <p><strong>Scenario 2:</strong> A shopping cart application uses a for loop to iterate through cart items, an if-else statement to check if each item is in stock, continue to skip out-of-stock items, and break to stop processing if the total exceeds the budget. This demonstrates how multiple control statements work together in a real application.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li><strong>Conditional</strong>: if, if-else, else-if ladder, switch-case</li>
      <li><strong>Loops</strong>: for (counter-based), while (condition-based), do-while (runs at least once)</li>
      <li><strong>Jump</strong>: break (exit), continue (skip), return (exit function)</li>
      <li>Switch uses strict comparison (===); requires break to prevent fall-through</li>
      <li>for...of iterates over arrays/strings; for...in iterates over object keys</li>
      <li>Switch is cleaner than long if-else chains for matching specific values</li>
    </ul>
  </div>,
];

export const q5Answers: React.ReactNode[] = [
  // 5a. Client-Server Architecture
  <div key="5a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">5a. Explain Client-Server architecture with a suitable diagram.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Client-Server Architecture</strong> is a distributed computing model where the workload is divided between two distinct entities: <strong>clients</strong> (devices or programs that request services) and <strong>servers</strong> (powerful computers or programs that provide services). The client sends a request over a network, the server processes the request, performs the necessary computation or data retrieval, and sends back a response. This model is the foundation of virtually all modern networked applications — from web browsing (browser client → web server) to email (email client → mail server) to database access (application client → database server).</p>
    <p>The architecture follows a <strong>request-response pattern</strong>: the client initiates communication (client is active), and the server waits for requests (server is passive). A single server can serve thousands of clients simultaneously. This separation of concerns allows clients to focus on user interface and presentation while servers handle business logic, data storage, and processing. The client-server model replaced earlier peer-to-peer and mainframe architectures, offering better scalability, security, maintainability, and centralized control.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Client-Server Architecture Diagram</h4>
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg font-mono text-sm">
      <p className="text-center font-bold">2-Tier Client-Server Architecture</p>
      <p className="text-center">┌──────────┐         ┌──────────────┐</p>
      <p className="text-center">│  CLIENT  │  Request │    SERVER     │</p>
      <p className="text-center">│(Browser) │─────────→│  (Web/App)   │</p>
      <p className="text-center">│          │←─────────│              │</p>
      <p className="text-center">│ Presents │ Response │   Processes   │</p>
      <p className="text-center">│   Data   │         │   Stores Data │</p>
      <p className="text-center">└──────────┘         └──────┬───────┘</p>
      <p className="text-center">                           │</p>
      <p className="text-center">                     ┌─────┴─────┐</p>
      <p className="text-center">                     │ DATABASE   │</p>
      <p className="text-center">                     └───────────┘</p>
      <p className="text-center mt-4 font-bold">3-Tier Architecture</p>
      <p className="text-center">┌──────────┐   ┌──────────┐   ┌──────────┐</p>
      <p className="text-center">│Presentation│  │ Business  │  │   Data    │</p>
      <p className="text-center">│   Tier    │←→│   Tier    │←→│   Tier    │</p>
      <p className="text-center">│ (Client)  │  │ (Server)  │  │  (DBMS)   │</p>
      <p className="text-center">│ HTML/JS   │  │ Servlets  │  │ MySQL/    │</p>
      <p className="text-center">│ React     │  │ Spring    │  │ MongoDB   │</p>
      <p className="text-center">└──────────┘   └──────────┘   └──────────┘</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Types of Client-Server Architecture</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Type</th>
            <th className="border border-gray-300 p-2 text-left">Tiers</th>
            <th className="border border-gray-300 p-2 text-left">Description</th>
            <th className="border border-gray-300 p-2 text-left">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>2-Tier</strong></td><td className="border border-gray-300 p-2">Client + Server</td><td className="border border-gray-300 p-2">Client talks directly to DB server</td><td className="border border-gray-300 p-2">Desktop apps with direct DB access</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>3-Tier</strong></td><td className="border border-gray-300 p-2">Presentation + Business + Data</td><td className="border border-gray-300 p-2">Separate layers for UI, logic, data</td><td className="border border-gray-300 p-2">Web apps (Browser → Servlets → DB)</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>N-Tier</strong></td><td className="border border-gray-300 p-2">Multiple layers</td><td className="border border-gray-300 p-2">Microservices, API gateways</td><td className="border border-gray-300 p-2">Netflix, Amazon architecture</td></tr>
        </tbody>
      </table>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> When you visit Amazon.com, your browser (client) sends an HTTP request to Amazon's web server. The server runs business logic (search products, calculate prices), queries the database server for product information, and sends back an HTML/JSON response. The browser renders the page. This 3-tier architecture (browser → application server → database) separates presentation, business logic, and data storage.</p>
    <p><strong>Scenario 2:</strong> A banking application: the mobile app (client) sends a "Check Balance" request to the bank's API server. The server authenticates the user, queries the database for the account balance, applies business rules (minimum balance check), and returns the response as JSON. The mobile app displays the balance. Each tier can be scaled, updated, and secured independently.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Client-Server = client requests, server responds (request-response model)</li>
      <li>Client = active (initiates requests); Server = passive (waits for requests)</li>
      <li>2-Tier: client + server; 3-Tier: presentation + business + data</li>
      <li>Benefits: centralized data, scalability, security, maintainability</li>
      <li>Protocols used: HTTP (web), SMTP (email), FTP (file transfer)</li>
      <li>One server can serve thousands of simultaneous clients</li>
    </ul>
  </div>,

  // 5b. HTTP GET vs POST
  <div key="5b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">5b. Differentiate between Handling HTTP GET Requests and Handling HTTP POST Requests.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>HTTP GET</strong> and <strong>HTTP POST</strong> are the two most commonly used HTTP methods for communication between a client (browser) and a web server. The GET method requests data from a specified resource — it retrieves information without modifying anything on the server. Form data is appended to the URL as query parameters (e.g., <code>search?q=java&amp;page=1</code>), making it visible in the browser's address bar, bookmarkable, and cacheable. GET requests are <strong>safe</strong> (should not change server state) and <strong>idempotent</strong> (multiple identical requests produce the same result).</p>
    <p>The <strong>HTTP POST</strong> method submits data to be processed by the server — it typically creates or updates a resource. Form data is sent in the HTTP request body (not in the URL), making it invisible in the address bar, not bookmarkable, and not cached. POST requests are <strong>not safe</strong> (they change server state — create users, place orders) and <strong>not idempotent</strong> (submitting the same POST twice may create two orders). In servlets, GET requests are handled by the <code>doGet()</code> method and POST requests by <code>doPost()</code>.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Detailed Comparison Table</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Feature</th>
            <th className="border border-gray-300 p-2 text-left">GET</th>
            <th className="border border-gray-300 p-2 text-left">POST</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Purpose</strong></td><td className="border border-gray-300 p-2">Retrieve data</td><td className="border border-gray-300 p-2">Submit/create data</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Data Location</strong></td><td className="border border-gray-300 p-2">URL query string</td><td className="border border-gray-300 p-2">HTTP request body</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Visibility</strong></td><td className="border border-gray-300 p-2">Visible in address bar</td><td className="border border-gray-300 p-2">Hidden (not in URL)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Security</strong></td><td className="border border-gray-300 p-2">Less secure (data exposed)</td><td className="border border-gray-300 p-2">More secure (data hidden)</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Data Limit</strong></td><td className="border border-gray-300 p-2">~2048 chars (URL limit)</td><td className="border border-gray-300 p-2">No limit (sent in body)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Bookmark</strong></td><td className="border border-gray-300 p-2">Can be bookmarked</td><td className="border border-gray-300 p-2">Cannot be bookmarked</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Cache</strong></td><td className="border border-gray-300 p-2">Cacheable by browser</td><td className="border border-gray-300 p-2">Not cached</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Idempotent</strong></td><td className="border border-gray-300 p-2">Yes</td><td className="border border-gray-300 p-2">No</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Servlet Method</strong></td><td className="border border-gray-300 p-2">doGet()</td><td className="border border-gray-300 p-2">doPost()</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Use Cases</strong></td><td className="border border-gray-300 p-2">Search, filter, navigation</td><td className="border border-gray-300 p-2">Login, registration, file upload</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Servlet Handling GET and POST =====
@WebServlet("/student")
public class StudentServlet extends HttpServlet {

    // Handles GET requests
    @Override
    protected void doGet(HttpServletRequest req,
                        HttpServletResponse res)
            throws ServletException, IOException {
        // Read params from URL query string
        String name = req.getParameter("name");
        String id = req.getParameter("id");

        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        out.println("<h1>GET Request Received</h1>");
        out.println("<p>Name: " + name + "</p>");
        out.println("<p>ID: " + id + "</p>");
        // URL: /student?name=Rahul&id=101
    }

    // Handles POST requests
    @Override
    protected void doPost(HttpServletRequest req,
                         HttpServletResponse res)
            throws ServletException, IOException {
        // Read params from request body
        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String password = req.getParameter("password");

        // Process: save to database, validate, etc.
        studentService.register(name, email, password);

        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        out.println("<h1>POST: Registration Successful!</h1>");
        out.println("<p>Welcome, " + name + "!</p>");
    }
}

// ===== HTML Forms demonstrating both =====
<!-- GET Form: Search -->
<form action="/search" method="GET">
    <input type="text" name="q" placeholder="Search...">
    <button>Search</button>
</form>
<!-- URL becomes: /search?q=web+technology -->

<!-- POST Form: Registration -->
<form action="/register" method="POST">
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <input type="password" name="password" required>
    <button>Register</button>
</form>
<!-- Data sent in body, NOT visible in URL -->`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> Google search uses GET because the search query appears in the URL (<code>google.com/search?q=web+technology</code>), making it shareable and bookmarkable. Reloading the page safely repeats the same search without any side effects. This is appropriate because GET is safe and idempotent — searching doesn't change anything on the server.</p>
    <p><strong>Scenario 2:</strong> A payment form uses POST because credit card details must not appear in the URL (security). Submitting the payment twice would charge the card twice (not idempotent), so the browser shows a "Confirm Form Resubmission" warning when refreshing. POST ensures sensitive data stays in the request body and the server can detect duplicate submissions.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>GET: data in URL, visible, limited, cacheable, bookmarkable, safe, idempotent</li>
      <li>POST: data in body, hidden, unlimited, not cached, not bookmarkable, not idempotent</li>
      <li>Servlet methods: <code>doGet()</code> for GET, <code>doPost()</code> for POST</li>
      <li>GET for retrieval/search; POST for submission/creation</li>
      <li>Never send passwords or sensitive data via GET (visible in URL/logs)</li>
      <li>POST is preferred for forms that modify server state</li>
    </ul>
  </div>,
];

export const q6Answers: React.ReactNode[] = [
  // 6a. Spring Framework Architecture
  <div key="6a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">6a. Discuss Spring Framework architecture with a suitable example.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>The <strong>Spring Framework</strong> is a comprehensive, modular, open-source application framework for Java, created by Rod Johnson in 2003. Spring provides infrastructure support for developing Java applications, covering every layer of enterprise application development — from dependency injection and aspect-oriented programming to data access, web development, and security. The framework follows the principle of <strong>"good design is better than quick fixes"</strong>, promoting loose coupling, testability, and clean architecture through its core features: IoC Container, AOP, DAO/ORM, MVC, and integration modules.</p>
    <p>Spring's architecture is organized as a <strong>layered modular framework</strong> with approximately 20 modules grouped into several categories. At the core is the <strong>IoC Container</strong> (Core Container), which provides dependency injection and bean lifecycle management. Built on top of this are modules for AOP, data access (JDBC, ORM, OXM), web development (MVC, WebFlux), messaging, testing, and integration. Each module can be used independently — you can use just the Core Container without the web module, or just Spring Data without Spring MVC.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Spring Architecture Diagram</h4>
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg font-mono text-sm">
      <p className="text-center font-bold">Spring Framework Architecture (Layered Modules)</p>
      <p className="text-center mt-2">┌─────────────────────────────────────────────┐</p>
      <p className="text-center">│          Web Layer (Spring MVC)              │</p>
      <p className="text-center">│  @Controller  @RestController  WebFlux       │</p>
      <p className="text-center">├─────────────────────────────────────────────┤</p>
      <p className="text-center">│       Service Layer (Business Logic)         │</p>
      <p className="text-center">│  @Service  @Component  @Transactional       │</p>
      <p className="text-center">├─────────────────────────────────────────────┤</p>
      <p className="text-center">│        Data Access Layer (Spring Data)       │</p>
      <p className="text-center">│  @Repository  JDBC  JPA/Hibernate  MongoDB  │</p>
      <p className="text-center">├─────────────────────────────────────────────┤</p>
      <p className="text-center">│   AOP + Aspects + Instrumentation            │</p>
      <p className="text-center">│  @Aspect  @Before  @Around  @After          │</p>
      <p className="text-center">├─────────────────────────────────────────────┤</p>
      <p className="text-center">│   CORE CONTAINER (IoC + DI)                  │</p>
      <p className="text-center">│  Beans  Core  Context  SpEL                  │</p>
      <p className="text-center">│  @Autowired  @Component  ApplicationContext  │</p>
      <p className="text-center">└─────────────────────────────────────────────┘</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Core Modules</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Layer</th>
            <th className="border border-gray-300 p-2 text-left">Modules</th>
            <th className="border border-gray-300 p-2 text-left">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Core Container</strong></td><td className="border border-gray-300 p-2">Core, Beans, Context, SpEL</td><td className="border border-gray-300 p-2">IoC, DI, Bean management</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>AOP</strong></td><td className="border border-gray-300 p-2">AOP, Aspects, Instrumentation</td><td className="border border-gray-300 p-2">Cross-cutting concerns</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Data Access</strong></td><td className="border border-gray-300 p-2">JDBC, ORM, OXM, JMS, Transactions</td><td className="border border-gray-300 p-2">Database operations</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Web</strong></td><td className="border border-gray-300 p-2">MVC, WebFlux, WebSocket</td><td className="border border-gray-300 p-2">Web application development</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Test</strong></td><td className="border border-gray-300 p-2">Spring Test, MockMvc</td><td className="border border-gray-300 p-2">Unit and integration testing</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Complete Spring Architecture Example =====

// 1. CORE CONTAINER: Entity (Model layer)
@Entity
public class Student {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    // getters, setters
}

// 2. DATA ACCESS: Repository
@Repository
public interface StudentRepository
        extends JpaRepository<Student, Long> {
    // CRUD methods auto-provided by Spring Data JPA
    List<Student> findByName(String name);
}

// 3. SERVICE LAYER: Business Logic
@Service
@Transactional  // AOP-based transaction management
public class StudentService {
    @Autowired  // Dependency Injection (Core Container)
    private StudentRepository repository;

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }
}

// 4. WEB LAYER: Controller (Spring MVC)
@RestController
@RequestMapping("/api/students")
public class StudentController {
    @Autowired
    private StudentService service;

    @GetMapping
    public List<Student> getAll() {
        return service.getAllStudents();
    }

    @PostMapping
    public Student create(@RequestBody Student student) {
        return service.saveStudent(student);
    }
}

// 5. AOP: Cross-cutting concern
@Aspect @Component
public class LoggingAspect {
    @Before("execution(* com.example.service.*.*(..))")
    public void logMethod() {
        System.out.println("[LOG] Method called");
    }
}

// All layers work together:
// Client → Controller → Service → Repository → Database
// Each layer communicates through interfaces (loose coupling)`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A student management application demonstrates all Spring layers: the Core Container manages beans (StudentService, StudentRepository) and injects dependencies. The Data Access layer (Spring Data JPA) handles database CRUD. The Service layer contains business rules (validate email format, check duplicate enrollment). The Web layer (Spring MVC) exposes REST APIs. AOP handles logging and transaction management across all layers.</p>
    <p><strong>Scenario 2:</strong> An e-commerce application uses Spring's modular architecture: Core Container for DI, Spring Data for product/order management, Spring MVC for REST APIs, Spring Security for authentication, Spring AOP for transaction management on order processing, and Spring Test for integration testing. Each module can be replaced or upgraded independently without affecting others.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Spring = layered, modular framework for enterprise Java</li>
      <li>Core Container: IoC, DI, Bean management (foundation of everything)</li>
      <li>AOP: cross-cutting concerns (logging, transactions, security)</li>
      <li>Data Access: JDBC, JPA/Hibernate, transaction management</li>
      <li>Web: Spring MVC for building web/REST applications</li>
      <li>Each module is independent — use only what you need</li>
    </ul>
  </div>,

  // 6b. Scopes in Spring
  <div key="6b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">6b. Explain the various types of scopes in Spring.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>In Spring Framework, <strong>bean scope</strong> determines the lifecycle and visibility of a Spring-managed bean — specifically, how many instances of a bean are created and how long they live. When you define a bean in Spring (using annotations or XML), you can specify its scope, which tells the container whether to create a single shared instance for the entire application or a new instance for each request or usage. The scope is set using the <code>@Scope</code> annotation or the <code>scope</code> attribute in XML configuration. Choosing the right scope is crucial for application performance, memory management, and thread safety.</p>
    <p>Spring provides <strong>six built-in scopes</strong>: Singleton (default), Prototype, Request, Session, Application, and WebSocket. The first two (Singleton and Prototype) are available in all Spring applications, while the remaining four are only available in web-aware Spring applications (Spring MVC). Understanding scopes is essential for proper state management — using singleton scope for a bean that holds user-specific state would cause data to be shared across all users, leading to bugs.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Scope Types Comparison</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Scope</th>
            <th className="border border-gray-300 p-2 text-left">Instances</th>
            <th className="border border-gray-300 p-2 text-left">Lifecycle</th>
            <th className="border border-gray-300 p-2 text-left">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Singleton</strong></td><td className="border border-gray-300 p-2">One per container</td><td className="border border-gray-300 p-2">Entire application</td><td className="border border-gray-300 p-2">Stateless services, DAOs</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Prototype</strong></td><td className="border border-gray-300 p-2">New instance per request</td><td className="border border-gray-300 p-2">Until garbage collected</td><td className="border border-gray-300 p-2">Stateful objects, configs</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Request</strong></td><td className="border border-gray-300 p-2">One per HTTP request</td><td className="border border-gray-300 p-2">Single HTTP request</td><td className="border border-gray-300 p-2">Per-request data, forms</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Session</strong></td><td className="border border-gray-300 p-2">One per HTTP session</td><td className="border border-gray-300 p-2">User session</td><td className="border border-gray-300 p-2">Shopping cart, user prefs</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Application</strong></td><td className="border border-gray-300 p-2">One per ServletContext</td><td className="border border-gray-300 p-2">Application lifecycle</td><td className="border border-gray-300 p-2">Shared app-wide config</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>WebSocket</strong></td><td className="border border-gray-300 p-2">One per WebSocket session</td><td className="border border-gray-300 p-2">WebSocket lifecycle</td><td className="border border-gray-300 p-2">Real-time chat state</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== 1. SINGLETON Scope (DEFAULT) =====
@Component  // Default scope = Singleton
// OR @Scope("singleton")
public class StudentService {
    private int counter = 0;
    public void increment() { counter++; }
    public int getCounter() { return counter; }
}
// All requests share THE SAME instance
// If 10 users call increment(), counter = 10

// ===== 2. PROTOTYPE Scope =====
@Component
@Scope("prototype")
public class ShoppingCart {
    private List<String> items = new ArrayList<>();
    public void addItem(String item) { items.add(item); }
}
// Each injection gets a NEW instance
// User A's cart is separate from User B's cart

// ===== 3. REQUEST Scope (Web only) =====
@Component
@Scope(value = WebApplicationContext.SCOPE_REQUEST,
       proxyMode = ScopedProxyMode.TARGET_CLASS)
public class RequestInfo {
    private String requestId = UUID.randomUUID().toString();
    public String getRequestId() { return requestId; }
}
// New instance for EVERY HTTP request

// ===== 4. SESSION Scope (Web only) =====
@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION,
       proxyMode = ScopedProxyMode.TARGET_CLASS)
public class UserPreferences {
    private String theme = "light";
    private String language = "en";
    // getters, setters
}
// One instance per user's HTTP session

// ===== 5. APPLICATION Scope =====
@Component
@Scope("application")
public class AppConfig {
    private Map<String, String> settings = new HashMap<>();
    // Shared across entire application
}

// ===== Demonstrating Singleton vs Prototype =====
@SpringBootApplication
public class ScopeDemo {
    public static void main(String[] args) {
        ApplicationContext ctx =
            SpringApplication.run(ScopeDemo.class, args);

        StudentService s1 = ctx.getBean(StudentService.class);
        StudentService s2 = ctx.getBean(StudentService.class);
        System.out.println(s1 == s2); // true (same instance)

        ShoppingCart c1 = ctx.getBean(ShoppingCart.class);
        ShoppingCart c2 = ctx.getBean(ShoppingCart.class);
        System.out.println(c1 == c2); // false (different!)
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A <code>StudentService</code> bean is <strong>singleton</strong> — one instance shared by all requests. It contains stateless business logic (calculateGrade, validateEmail). This is correct because the service doesn't store user-specific data. If you accidentally stored a user's name in a singleton field, all users would see the last person's name — a critical bug!</p>
    <p><strong>Scenario 2:</strong> A <code>ShoppingCart</code> bean uses <strong>session scope</strong> — each user gets their own cart instance stored in their HTTP session. User A adds a laptop to their cart; User B adds a phone to theirs. The carts are completely separate. If ShoppingCart were singleton, all users would share one cart, and items would be mixed up.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li><strong>Singleton</strong> (default): one instance per Spring container — use for stateless beans</li>
      <li><strong>Prototype</strong>: new instance every time it is requested — use for stateful beans</li>
      <li><strong>Request</strong>: one instance per HTTP request (web only)</li>
      <li><strong>Session</strong>: one instance per HTTP session (web only) — use for user-specific data</li>
      <li><strong>Application</strong>: one instance per ServletContext</li>
      <li>Set scope with <code>@Scope("prototype")</code> annotation</li>
    </ul>
  </div>,
];

export const q7Answers: React.ReactNode[] = [
  // 7a. Dependency Injection in Spring Boot
  <div key="7a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">7a. Explain Dependency Injection in Spring Boot.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Dependency Injection (DI)</strong> is a design pattern that implements Inversion of Control (IoC), where the responsibility of creating and managing object dependencies is transferred from the object itself to an external container (the Spring IoC Container). Instead of a class creating its own dependencies using <code>new</code>, the class simply declares what it needs, and the Spring Container injects the required dependencies at runtime. This leads to <strong>loose coupling</strong> (classes depend on interfaces, not implementations), <strong>easier testing</strong> (inject mock objects), and <strong>cleaner code</strong> (no object creation logic mixed with business logic).</p>
    <p>Spring Boot provides three types of Dependency Injection: <strong>Constructor Injection</strong> (dependencies provided through the constructor — recommended), <strong>Setter Injection</strong> (dependencies provided through setter methods — good for optional dependencies), and <strong>Field Injection</strong> (dependencies injected directly into fields using <code>@Autowired</code> — simple but not recommended for production). Spring Boot auto-configures most beans, so you rarely need to explicitly define bean relationships — just annotate with <code>@Component</code>, <code>@Service</code>, <code>@Repository</code>, and use <code>@Autowired</code> for injection.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 DI Flow Diagram</h4>
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg font-mono text-sm">
      <p>Without DI (Tight Coupling):</p>
      <p>  Service A → new DatabaseRepository() → hardcoded dependency</p>
      <p className="mt-2">With DI (Loose Coupling):</p>
      <p>  Service A → declares: "I need a Repository interface"</p>
      <p>  Spring Container → "Here is the MySQLRepository implementation"</p>
      <p>  Spring Container injects dependency automatically</p>
      <p className="mt-2">Three Types:</p>
      <p>  1. Constructor: @Autowired on constructor (RECOMMENDED)</p>
      <p>  2. Setter: @Autowired on setter method</p>
      <p>  3. Field: @Autowired on field (simple but discouraged)</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== 1. Define Interface (loose coupling) =====
public interface NotificationService {
    void sendNotification(String message);
}

// ===== 2. Implementations =====
@Service
public class EmailService implements NotificationService {
    public void sendNotification(String message) {
        System.out.println("Email: " + message);
    }
}

@Service
public class SMSService implements NotificationService {
    public void sendNotification(String message) {
        System.out.println("SMS: " + message);
    }
}

// ===== 3. Constructor Injection (RECOMMENDED) =====
@Service
public class UserService {
    private final NotificationService notificationService;

    // Spring automatically injects the bean
    @Autowired  // Optional in Spring Boot 4.3+
    public UserService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    public void registerUser(String name) {
        System.out.println("Registering: " + name);
        notificationService.sendNotification(
            "Welcome " + name);
    }
}

// ===== 4. Setter Injection =====
@Service
public class OrderService {
    private NotificationService notificationService;

    @Autowired
    public void setNotificationService(
            NotificationService ns) {
        this.notificationService = ns;
    }
}

// ===== 5. Field Injection (Not recommended) =====
@Service
public class PaymentService {
    @Autowired  // Directly injected into field
    private NotificationService notificationService;
}

// ===== 6. @Qualifier for multiple implementations =====
@Service
public class AdminService {
    private final NotificationService notifier;

    @Autowired
    public AdminService(
        @Qualifier("emailService")
        NotificationService notifier) {
        this.notifier = notifier;
    }
}

// ===== 7. Spring Boot Application =====
@SpringBootApplication
public class DIApplication {
    public static void main(String[] args) {
        ApplicationContext ctx =
            SpringApplication.run(DIApplication.class, args);

        UserService userService =
            ctx.getBean(UserService.class);
        userService.registerUser("Rahul");
        // Output: Registering: Rahul
        //         Email: Welcome Rahul
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> An email service needs a notification sender. Without DI: <code>new EmailSender()</code> is hardcoded in the constructor. To switch to SMS, you must modify the source code. With DI: the service declares a dependency on <code>NotificationService</code> interface. Spring injects whichever implementation is configured. Switching from email to SMS requires zero code changes — just configuration.</p>
    <p><strong>Scenario 2:</strong> During unit testing of <code>UserService</code>, you inject a <code>MockNotificationService</code> (that does nothing) instead of the real <code>EmailService</code>. This lets you test the registration logic in isolation without sending actual emails. Without DI, the service is tightly coupled to the real email service, making isolated testing impossible.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>DI = dependencies are injected by the container, not created by the class</li>
      <li>Three types: Constructor (best), Setter (optional deps), Field (discouraged)</li>
      <li>Key annotations: <code>@Autowired</code>, <code>@Qualifier</code>, <code>@Component</code>, <code>@Service</code></li>
      <li>Benefits: loose coupling, easy testing, cleaner code, flexibility</li>
      <li><code>@Qualifier</code> resolves ambiguity when multiple implementations exist</li>
      <li>Constructor injection ensures dependencies are immutable and mandatory</li>
    </ul>
  </div>,

  // 7b. Alert and Confirm Box in JavaScript
  <div key="7b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">7b. Write a code in JavaScript for creating Alert and Confirm Box.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>JavaScript provides built-in <strong>dialog boxes</strong> (also called popup boxes) for interacting with users: <strong>alert()</strong>, <strong>confirm()</strong>, and <strong>prompt()</strong>. The <code>alert()</code> method displays a modal dialog box with a message and an "OK" button — it is used to display important information, warnings, or notifications to the user. The dialog blocks further code execution until the user clicks "OK". Alert boxes are commonly used for form validation messages, error notifications, success confirmations, and debugging purposes.</p>
    <p>The <code>confirm()</code> method displays a modal dialog box with a message, an "OK" button, and a "Cancel" button. It returns <code>true</code> if the user clicks "OK" and <code>false</code> if they click "Cancel". This makes it ideal for asking the user to confirm an action before proceeding — such as confirming a deletion ("Are you sure you want to delete this item?"), confirming navigation away from an unsaved form, or verifying a purchase. The return value can be stored in a variable and used in conditional logic.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Dialog Box Comparison</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Method</th>
            <th className="border border-gray-300 p-2 text-left">Buttons</th>
            <th className="border border-gray-300 p-2 text-left">Return Value</th>
            <th className="border border-gray-300 p-2 text-left">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>alert()</strong></td><td className="border border-gray-300 p-2">OK only</td><td className="border border-gray-300 p-2">undefined</td><td className="border border-gray-300 p-2">Display information/warning</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>confirm()</strong></td><td className="border border-gray-300 p-2">OK + Cancel</td><td className="border border-gray-300 p-2">true / false</td><td className="border border-gray-300 p-2">Ask for confirmation</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>prompt()</strong></td><td className="border border-gray-300 p-2">OK + Cancel + Input</td><td className="border border-gray-300 p-2">string / null</td><td className="border border-gray-300 p-2">Get user input</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Alert and Confirm Demo</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: #667eea;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            text-align: center;
        }
        button {
            padding: 12px 24px;
            margin: 10px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            font-weight: 600;
            transition: transform 0.2s;
        }
        button:hover { transform: scale(1.05); }
        .btn-alert { background: #2196f3; color: white; }
        .btn-confirm { background: #f44336; color: white; }
        .btn-prompt { background: #4caf50; color: white; }
        .btn-combo { background: #ff9800; color: white; }
        #output {
            margin-top: 20px;
            padding: 15px;
            background: #f5f5f5;
            border-radius: 8px;
            min-height: 50px;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Dialog Box Demo</h1>

        <!-- Alert Box -->
        <button class="btn-alert"
                onclick="showAlert()">
            Show Alert
        </button>

        <!-- Confirm Box -->
        <button class="btn-confirm"
                onclick="showConfirm()">
            Show Confirm
        </button>

        <!-- Prompt Box -->
        <button class="btn-prompt"
                onclick="showPrompt()">
            Show Prompt
        </button>

        <!-- Combined Example -->
        <button class="btn-combo"
                onclick="deleteItem()">
            Delete Item (Combined)
        </button>

        <div id="output">
            <p>Click a button above to see the dialog.</p>
        </div>
    </div>

    <script>
        const output = document.getElementById("output");

        // ===== 1. ALERT BOX =====
        function showAlert() {
            alert("Hello! This is an Alert Box.\\n"
                + "It displays a message with an OK button.");
            output.innerHTML =
                "<p>✅ Alert was displayed and dismissed.</p>";
        }

        // ===== 2. CONFIRM BOX =====
        function showConfirm() {
            let result = confirm(
                "Do you want to proceed with this action?"
            );
            if (result) {
                output.innerHTML =
                    "<p>✅ User clicked OK (confirmed).</p>";
            } else {
                output.innerHTML =
                    "<p>❌ User clicked Cancel (declined).</p>";
            }
        }

        // ===== 3. PROMPT BOX =====
        function showPrompt() {
            let name = prompt("Enter your name:", "Student");
            if (name !== null && name !== "") {
                output.innerHTML =
                    "<p>👋 Hello, <strong>" + name
                    + "</strong>!</p>";
            } else {
                output.innerHTML =
                    "<p>No name entered or cancelled.</p>";
            }
        }

        // ===== 4. COMBINED: Delete Confirmation =====
        function deleteItem() {
            // Step 1: Confirm with user
            let confirmed = confirm(
                "Are you sure you want to delete this item?\\n"
                + "This action cannot be undone!"
            );

            if (confirmed) {
                // Step 2: Perform deletion
                // (In real app, call API here)
                output.innerHTML =
                    "<p>🗑️ Item deleted successfully!</p>";

                // Step 3: Alert to confirm deletion
                alert("Item has been deleted.");
            } else {
                output.innerHTML =
                    "<p>Deletion cancelled by user.</p>";
                alert("No action was taken.");
            }
        }
    </script>
</body>
</html>`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A form validation script uses <code>alert()</code> to inform users of errors: when the user submits a registration form without filling required fields, <code>alert("Please fill in all required fields!")</code> displays a popup blocking further action until the user acknowledges the message. The script then focuses on the empty field.</p>
    <p><strong>Scenario 2:</strong> An email application uses <code>confirm()</code> before deleting emails: <code>if (confirm("Delete 5 selected emails?")) {'{'} deleteEmails(); {'}'}</code>. If the user clicks OK, the emails are deleted. If Cancel, nothing happens. This prevents accidental data loss. Many applications also use a combination: confirm first, then alert to show the result ("5 emails deleted successfully").</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li><code>alert("message")</code>: displays message with OK button (no return value)</li>
      <li><code>confirm("message")</code>: displays OK + Cancel (returns true/false)</li>
      <li><code>prompt("message", "default")</code>: displays input field (returns string or null)</li>
      <li>All three are <strong>modal</strong> — they block code execution until user responds</li>
      <li>Use confirm() for actions that can't be undone (delete, logout)</li>
      <li>Modern alternative: custom modal dialogs (SweetAlert, Bootstrap Modal)</li>
    </ul>
  </div>,
];
