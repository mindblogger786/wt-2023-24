import React from "react";

export const q2Answers: React.ReactNode[] = [
  // 2a. Internet Protocols
  <div key="2a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">2a. Explain the various protocols that are used on the Internet.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>A <strong>protocol</strong> is a set of rules and standards that define how data is formatted, transmitted, and received between devices on a network. Internet protocols govern every aspect of digital communication — from how a web page is requested (HTTP) to how an email is delivered (SMTP) to how a domain name is resolved to an IP address (DNS). Without standardized protocols, different devices and applications would have no common language for communication. The entire Internet operates on a suite of protocols known as <strong>TCP/IP (Transmission Control Protocol/Internet Protocol)</strong>, which forms the foundation of all Internet communication.</p>
    <p>The TCP/IP model organizes Internet protocols into four layers: (1) <strong>Application Layer</strong> (HTTP, FTP, SMTP, DNS — user-facing services); (2) <strong>Transport Layer</strong> (TCP, UDP — reliable or fast delivery); (3) <strong>Internet Layer</strong> (IP, ICMP — routing and addressing); (4) <strong>Network Access Layer</strong> (Ethernet, Wi-Fi — physical transmission). Each layer handles a specific responsibility and communicates only with the layer directly above or below it, creating a modular, manageable system.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Major Internet Protocols</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Protocol</th>
            <th className="border border-gray-300 p-2 text-left">Full Form</th>
            <th className="border border-gray-300 p-2 text-left">Port</th>
            <th className="border border-gray-300 p-2 text-left">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>HTTP</strong></td><td className="border border-gray-300 p-2">HyperText Transfer Protocol</td><td className="border border-gray-300 p-2">80</td><td className="border border-gray-300 p-2">Web page transfer</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>HTTPS</strong></td><td className="border border-gray-300 p-2">HTTP Secure (SSL/TLS)</td><td className="border border-gray-300 p-2">443</td><td className="border border-gray-300 p-2">Encrypted web transfer</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>FTP</strong></td><td className="border border-gray-300 p-2">File Transfer Protocol</td><td className="border border-gray-300 p-2">20/21</td><td className="border border-gray-300 p-2">File upload/download</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>SMTP</strong></td><td className="border border-gray-300 p-2">Simple Mail Transfer Protocol</td><td className="border border-gray-300 p-2">25</td><td className="border border-gray-300 p-2">Sending email</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>POP3</strong></td><td className="border border-gray-300 p-2">Post Office Protocol v3</td><td className="border border-gray-300 p-2">110</td><td className="border border-gray-300 p-2">Receiving email</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>IMAP</strong></td><td className="border border-gray-300 p-2">Internet Message Access Protocol</td><td className="border border-gray-300 p-2">143</td><td className="border border-gray-300 p-2">Accessing email on server</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>DNS</strong></td><td className="border border-gray-300 p-2">Domain Name System</td><td className="border border-gray-300 p-2">53</td><td className="border border-gray-300 p-2">Domain to IP resolution</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>TCP</strong></td><td className="border border-gray-300 p-2">Transmission Control Protocol</td><td className="border border-gray-300 p-2">—</td><td className="border border-gray-300 p-2">Reliable data delivery</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>UDP</strong></td><td className="border border-gray-300 p-2">User Datagram Protocol</td><td className="border border-gray-300 p-2">—</td><td className="border border-gray-300 p-2">Fast, connectionless delivery</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>SSH</strong></td><td className="border border-gray-300 p-2">Secure Shell</td><td className="border border-gray-300 p-2">22</td><td className="border border-gray-300 p-2">Secure remote access</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>DHCP</strong></td><td className="border border-gray-300 p-2">Dynamic Host Configuration Protocol</td><td className="border border-gray-300 p-2">67/68</td><td className="border border-gray-300 p-2">Auto IP address assignment</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Details — TCP vs UDP</h4>
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg font-mono text-sm">
      <p className="text-yellow-700 font-semibold">TCP (Reliable) — 3-Way Handshake:</p>
      <p>1. Client → SYN → Server (Can we connect?)</p>
      <p>2. Server → SYN-ACK → Client (Yes, acknowledged)</p>
      <p>3. Client → ACK → Server (Connection established)</p>
      <p>4. Data transfer begins (guaranteed delivery, ordered packets)</p>
      <p className="mt-2 text-yellow-700 font-semibold">UDP (Fast) — No Handshake:</p>
      <p>1. Client → Data → Server (Just sends it!)</p>
      <p>No guarantee of delivery, no ordering — but very fast</p>
      <p>Used for: video streaming, gaming, DNS queries, VoIP</p>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> When you visit <code>https://www.google.com</code>, multiple protocols work together: DNS resolves "google.com" to an IP address (142.250.190.46), TCP establishes a reliable connection via 3-way handshake, TLS/SSL negotiates encryption (HTTPS), and HTTP sends the GET request for the web page. The response travels back through the same layers. This demonstrates how protocols at different layers cooperate seamlessly.</p>
    <p><strong>Scenario 2:</strong> Sending an email involves SMTP (your client sends to your mail server), SMTP again (your server sends to the recipient's server), and then IMAP or POP3 (the recipient downloads the message). Each protocol handles one step of the journey, and together they enable reliable email communication across the globe in seconds.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li><strong>TCP/IP</strong> is the foundation of all Internet communication</li>
      <li><strong>HTTP/HTTPS</strong>: web browsing (port 80/443)</li>
      <li><strong>FTP</strong>: file transfer (port 20/21)</li>
      <li><strong>SMTP/POP3/IMAP</strong>: email sending and receiving</li>
      <li><strong>DNS</strong>: resolves domain names to IP addresses</li>
      <li><strong>TCP</strong> = reliable (3-way handshake); <strong>UDP</strong> = fast (no handshake)</li>
    </ul>
  </div>,

  // 2b. HTML Form for Library Management
  <div key="2b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">2b. Design an HTML form for a Library Management System.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>A <strong>Library Management System (LMS)</strong> is software that manages the catalog, circulation, and membership of a library. The HTML form is the primary user interface for inputting data such as book details, member information, issue/return records, and search queries. A well-designed form collects all necessary information using appropriate input types, validation, and layout. The form communicates with a backend server (servlet, JSP, or REST API) that processes the data and interacts with the database.</p>
    <p>An effective library form should include fields for book identification (title, author, ISBN, genre), member details (name, ID, contact), transaction records (issue date, return date, fine calculation), and search functionality. HTML5 provides powerful input types and validation attributes that ensure data quality before submission — for example, <code>required</code>, <code>pattern</code>, <code>type="email"</code>, and <code>type="date"</code> provide built-in browser validation.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Form Design Logic</h4>
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg font-mono text-sm">
      <p>Step 1: Define form with POST method and action URL</p>
      <p>Step 2: Book Information section (title, author, ISBN, genre, publisher)</p>
      <p>Step 3: Member Information section (name, member ID, email, phone)</p>
      <p>Step 4: Transaction section (issue date, return date, book category)</p>
      <p>Step 5: Add HTML5 validation (required, pattern, min/max)</p>
      <p>Step 6: Style with CSS for professional appearance</p>
      <p>Step 7: Submit and Reset buttons for form control</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <title>Library Management System</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background: #f0f2f5;
            padding: 20px;
        }
        .form-container {
            max-width: 700px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        h2 { text-align: center; color: #2c3e50; }
        h3 { color: #3498db; margin-top: 15px;
             border-bottom: 2px solid #3498db;
             padding-bottom: 5px; }
        .form-group {
            margin: 10px 0;
        }
        label {
            display: block;
            font-weight: 600;
            margin-bottom: 4px;
            color: #555;
        }
        input, select, textarea {
            width: 100%;
            padding: 8px 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }
        input:focus, select:focus {
            border-color: #3498db;
            outline: none;
        }
        .row { display: flex; gap: 15px; }
        .row .form-group { flex: 1; }
        .btn-group { display: flex; gap: 10px; margin-top: 20px; }
        .btn-submit {
            padding: 10px 25px;
            background: #27ae60; color: white;
            border: none; border-radius: 5px;
            font-size: 16px; cursor: pointer;
        }
        .btn-reset {
            padding: 10px 25px;
            background: #95a5a6; color: white;
            border: none; border-radius: 5px;
            font-size: 16px; cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>📚 Library Management System</h2>

        <form action="/api/library/add-book" method="POST">

            <!-- Book Information -->
            <h3>📖 Book Information</h3>
            <div class="row">
                <div class="form-group">
                    <label>Book Title *</label>
                    <input type="text" name="title"
                           required placeholder="Enter book title">
                </div>
                <div class="form-group">
                    <label>Author *</label>
                    <input type="text" name="author"
                           required placeholder="Author name">
                </div>
            </div>

            <div class="row">
                <div class="form-group">
                    <label>ISBN</label>
                    <input type="text" name="isbn"
                           pattern="[0-9]{10,13}"
                           placeholder="10 or 13 digit ISBN">
                </div>
                <div class="form-group">
                    <label>Genre *</label>
                    <select name="genre" required>
                        <option value="">Select Genre</option>
                        <option>Fiction</option>
                        <option>Science</option>
                        <option>Technology</option>
                        <option>History</option>
                        <option>Mathematics</option>
                        <option>Literature</option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="form-group">
                    <label>Publisher</label>
                    <input type="text" name="publisher"
                           placeholder="Publisher name">
                </div>
                <div class="form-group">
                    <label>Year Published</label>
                    <input type="number" name="year"
                           min="1900" max="2025"
                           placeholder="e.g. 2024">
                </div>
            </div>

            <div class="form-group">
                <label>Number of Copies *</label>
                <input type="number" name="copies"
                       min="1" required value="1">
            </div>

            <!-- Member Information -->
            <h3>👤 Member Information</h3>
            <div class="row">
                <div class="form-group">
                    <label>Member Name *</label>
                    <input type="text" name="memberName"
                           required placeholder="Full name">
                </div>
                <div class="form-group">
                    <label>Member ID *</label>
                    <input type="text" name="memberId"
                           required placeholder="e.g. LIB001">
                </div>
            </div>

            <div class="row">
                <div class="form-group">
                    <label>Email *</label>
                    <input type="email" name="email"
                           required placeholder="email@example.com">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="tel" name="phone"
                           pattern="[0-9]{10}"
                           placeholder="10-digit number">
                </div>
            </div>

            <!-- Transaction Details -->
            <h3>📅 Issue / Return Details</h3>
            <div class="row">
                <div class="form-group">
                    <label>Issue Date *</label>
                    <input type="date" name="issueDate" required>
                </div>
                <div class="form-group">
                    <label>Return Date *</label>
                    <input type="date" name="returnDate" required>
                </div>
            </div>

            <div class="form-group">
                <label>Transaction Type *</label><br>
                <input type="radio" name="transType"
                       value="issue" checked> Issue
                <input type="radio" name="transType"
                       value="return" style="margin-left:15px">
                Return
            </div>

            <div class="form-group">
                <label>Remarks</label>
                <textarea name="remarks" rows="3"
                          placeholder="Any additional notes..."></textarea>
            </div>

            <!-- Buttons -->
            <div class="btn-group">
                <button type="submit" class="btn-submit">
                    ✅ Submit
                </button>
                <button type="reset" class="btn-reset">
                    🔄 Reset
                </button>
            </div>
        </form>
    </div>
</body>
</html>`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A librarian wants to add a new book "Data Structures by Mark Allen Weiss, ISBN 9780132576277" to the system. They fill the Book Information section with title, author, ISBN (validated by the pattern attribute for 13 digits), select genre "Technology", enter publisher and year, and set copies to 5. On submit, the form data is POSTed to <code>/api/library/add-book</code> where a servlet processes and stores it in the database.</p>
    <p><strong>Scenario 2:</strong> A student wants to issue a book. The librarian fills the member details (name, ID, email), selects the book from the system, enters the issue date and expected return date, selects "Issue" radio button, and submits. The backend servlet checks if the book is available, updates the book's status, creates a transaction record, and confirms the issue.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Use <code>&lt;form method="POST" action="/api/endpoint"&gt;</code> for data submission</li>
      <li>HTML5 input types: text, email, number, date, tel, radio, select, textarea</li>
      <li>Validation: <code>required</code>, <code>pattern</code>, <code>min</code>, <code>max</code>, <code>placeholder</code></li>
      <li>Organize form into sections using headings for clarity</li>
      <li>Use CSS for professional styling (flexbox for row layouts)</li>
      <li>Always include Submit and Reset buttons</li>
    </ul>
  </div>,

  // 2c. Servlet Lifecycle
  <div key="2c" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">2c. Explain the life cycle of a servlet.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>The <strong>Servlet Life Cycle</strong> defines the sequence of stages a servlet goes through from its creation to its destruction within a servlet container (like Apache Tomcat). The life cycle is managed entirely by the container and consists of three main phases: <strong>Initialization</strong>, <strong>Request Processing</strong>, and <strong>Destruction</strong>. Understanding the servlet life cycle is essential for writing efficient, resource-aware web applications that properly initialize resources (database connections, configuration files) and clean up when the application shuts down.</p>
    <p>The life cycle is governed by the <code>javax.servlet.Servlet</code> interface, which defines five methods: <code>init()</code>, <code>service()</code>, <code>destroy()</code>, <code>getServletConfig()</code>, and <code>getServletInfo()</code>. When a servlet container starts (or when the first request arrives), it loads the servlet class, creates a single instance, calls <code>init()</code> once, and then creates a new thread for each incoming request that executes <code>service()</code>. This thread-per-request model is highly efficient — one servlet instance serves thousands of concurrent requests.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Servlet Life Cycle Flowchart</h4>
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg font-mono text-sm">
      <p className="text-center font-bold">SERVLET LIFE CYCLE</p>
      <p>Step 1: Container receives request / starts up</p>
      <p>Step 2: Load Servlet Class (Class.forName)</p>
      <p>Step 3: Create Instance (new ServletClass())</p>
      <p>Step 4: Call init(ServletConfig) — ONE TIME ONLY</p>
      <p>         → Initialize resources (DB connections, config)</p>
      <p>Step 5: Call service(HttpServletRequest, HttpServletResponse)</p>
      <p>         → Dispatches to doGet() or doPost()</p>
      <p>         → Called for EVERY request (new thread each time)</p>
      <p>Step 6: Repeat Step 5 for each subsequent request</p>
      <p>Step 7: Call destroy() — when container shuts down</p>
      <p>         → Clean up resources (close DB connections)</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Servlet Life Cycle Demonstration =====
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import java.io.*;

@WebServlet("/lifecycle")
public class LifeCycleServlet extends HttpServlet {

    // Phase 1: INITIALIZATION (called ONCE)
    @Override
    public void init() throws ServletException {
        System.out.println("1. init() called — Servlet loaded!");
        // Initialize resources
        // e.g., database connection, read config
    }

    // Phase 2: REQUEST PROCESSING (called per request)
    @Override
    protected void service(HttpServletRequest req,
                          HttpServletResponse res)
            throws ServletException, IOException {
        System.out.println("2. service() called — "
            + "Dispatching to doGet/doPost");
        super.service(req, res); // calls doGet or doPost
    }

    @Override
    protected void doGet(HttpServletRequest req,
                        HttpServletResponse res)
            throws ServletException, IOException {
        System.out.println("3. doGet() — Processing GET");
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        out.println("<h1>Servlet GET handled!</h1>");
    }

    @Override
    protected void doPost(HttpServletRequest req,
                         HttpServletResponse res)
            throws ServletException, IOException {
        System.out.println("3. doPost() — Processing POST");
        // Handle form data
    }

    // Phase 3: DESTRUCTION (called ONCE)
    @Override
    public void destroy() {
        System.out.println("4. destroy() — Servlet removed!");
        // Clean up: close DB connections, release files
    }
}

/*
Console output for 3 requests:
  1. init() called — Servlet loaded!
  2. service() called — Dispatching to doGet/doPost
  3. doGet() — Processing GET
  2. service() called — Dispatching to doGet/doPost
  3. doGet() — Processing GET
  2. service() called — Dispatching to doGet/doPost
  3. doGet() — Processing GET
  4. destroy() — Servlet removed!

  Notice: init() and destroy() called ONCE.
  service() called per request (in separate threads).
*/`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A database-driven servlet initializes a connection pool in <code>init()</code> (called once when the server starts). For every subsequent student listing request, <code>doGet()</code> borrows a connection from the pool, queries the database, and returns results. When the server shuts down, <code>destroy()</code> closes all connections. This ensures resources are properly managed throughout the servlet's lifetime.</p>
    <p><strong>Scenario 2:</strong> A file upload servlet opens a temporary directory in <code>init()</code>. Each <code>doPost()</code> call saves an uploaded file to this directory. If the <code>destroy()</code> method forgets to clean up temporary files, the disk will eventually fill up. Proper <code>destroy()</code> implementation deletes all temp files, preventing resource leaks.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Three phases: <code>init()</code> → <code>service()</code> → <code>destroy()</code></li>
      <li><code>init()</code> called <strong>once</strong> (initialization — DB, config, resources)</li>
      <li><code>service()</code> called <strong>per request</strong> (dispatches to doGet/doPost)</li>
      <li><code>destroy()</code> called <strong>once</strong> (cleanup — close connections, free resources)</li>
      <li>One instance, multiple threads (thread-per-request model)</li>
      <li>Container manages the entire life cycle automatically</li>
    </ul>
  </div>,

  // 2d. Java Bean
  <div key="2d" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">2d. What do you mean by Java Bean? Is bean life cycle controlled by Spring?</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>A <strong>Java Bean</strong> is a reusable software component that follows a specific set of conventions defined by the JavaBeans specification. A Java Bean is simply a Java class that: (1) implements <code>java.io.Serializable</code>; (2) has a public no-argument constructor; (3) has private properties accessed through public getter and setter methods (following the naming convention <code>getPropertyName()</code> and <code>setPropertyName()</code>); (4) may contain event-listening methods. Java Beans were designed to be manipulated visually in builder tools and to be easily reusable across different applications.</p>
    <p>In the <strong>Spring Framework</strong>, a "bean" has a broader meaning — it refers to any object that is instantiated, configured, and managed by the Spring IoC (Inversion of Control) container. Spring beans are defined using annotations (<code>@Component</code>, <code>@Service</code>, <code>@Repository</code>, <code>@Controller</code>) or XML/Java configuration. <strong>Yes, the Spring bean life cycle is entirely controlled by the Spring container</strong>, which manages the complete life cycle from instantiation through dependency injection, initialization, usage, and destruction.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Spring Bean Life Cycle</h4>
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg font-mono text-sm">
      <p>1. Container starts → Reads bean definitions (annotations/XML)</p>
      <p>2. Instantiation → Constructor called (new object created)</p>
      <p>3. Dependency Injection → @Autowired fields/setters injected</p>
      <p>4. BeanNameAware / BeanFactoryAware → Spring callbacks</p>
      <p>5. @PostConstruct → Custom initialization method</p>
      <p>6. InitializingBean.afterPropertiesSet() → Spring callback</p>
      <p>7. Bean is READY → Used by application</p>
      <p>8. @PreDestroy → Custom cleanup method</p>
      <p>9. DisposableBean.destroy() → Spring callback</p>
      <p>10. Bean is destroyed → Garbage collected</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Standard Java Bean =====
public class Student implements java.io.Serializable {
    private String name;  // Private property
    private int rollNo;

    // No-argument constructor (required)
    public Student() { }

    // Getter and Setter methods (required)
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getRollNo() { return rollNo; }
    public void setRollNo(int rollNo) { this.rollNo = rollNo; }
}

// ===== Spring Bean with Life Cycle =====
import javax.annotation.*;

@Component  // Marks this as a Spring bean
public class DatabaseConnection {

    @Autowired
    private DataSource dataSource;

    // Constructor
    public DatabaseConnection() {
        System.out.println("1. Constructor called");
    }

    // @PostConstruct: called AFTER dependency injection
    @PostConstruct
    public void init() {
        System.out.println("2. @PostConstruct - Initialize");
        // Open DB connection, load config
    }

    // Business method
    public void performOperation() {
        System.out.println("3. Bean is in use");
    }

    // @PreDestroy: called BEFORE bean is destroyed
    @PreDestroy
    public void cleanup() {
        System.out.println("4. @PreDestroy - Cleanup");
        // Close DB connections, release resources
    }
}

/*
Console output:
  1. Constructor called
  2. @PostConstruct - Initialize
  3. Bean is in use
  4. @PreDestroy - Cleanup
*/`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A <code>Student</code> Java Bean in JSP: The servlet creates a <code>Student</code> bean, sets properties from form data using setters, and stores it as a request attribute. The JSP accesses it using <code>&lt;jsp:useBean&gt;</code> and <code>&lt;jsp:getProperty&gt;</code> tags. This demonstrates the Java Bean convention enabling JSP's built-in bean support.</p>
    <p><strong>Scenario 2:</strong> A Spring <code>@Service</code> bean: The container creates the instance, injects a <code>Repository</code> via <code>@Autowired</code>, calls <code>@PostConstruct</code> to initialize a cache, serves thousands of requests, and calls <code>@PreDestroy</code> to save the cache to disk before shutdown. The entire life cycle is controlled by Spring — the developer never calls <code>new</code> or <code>destroy()</code> manually.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Java Bean: Serializable, no-arg constructor, private fields, getters/setters</li>
      <li>Spring Bean: any object managed by the Spring IoC container</li>
      <li><strong>Yes, Spring controls the bean life cycle completely</strong></li>
      <li>Life cycle: Instantiate → Inject → @PostConstruct → Use → @PreDestroy → Destroy</li>
      <li><code>@PostConstruct</code> = initialization; <code>@PreDestroy</code> = cleanup</li>
      <li>Spring beans are singleton by default (one instance per container)</li>
    </ul>
  </div>,

  // 2e. Save image in database using Spring Boot
  <div key="2e" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">2e. How to save an image in database using Spring Boot?</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>Saving images in a database using Spring Boot involves accepting a file upload from the client, processing the file through the controller layer, and storing it in the database as Binary Large Object (BLOB) data. Spring Boot simplifies file handling through the <code>MultipartFile</code> interface, which represents an uploaded file received in a multipart request. The image can be stored directly in the database as a BLOB column, or the file can be saved to the filesystem while only storing the file path in the database.</p>
    <p>There are two approaches to storing images: (1) <strong>Database Storage</strong> — store the image bytes directly in a BLOB column (simpler, everything in one place, but increases database size); (2) <strong>File System Storage</strong> — save the file to disk and store only the file path in the database (better performance for large files, but requires managing files separately). For small to medium applications, database storage is simpler and ensures data consistency.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Process Flowchart</h4>
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg font-mono text-sm">
      <p>Step 1: User selects image file in HTML form (input type="file")</p>
      <p>Step 2: Form submits as multipart/form-data to Spring Boot controller</p>
      <p>Step 3: Controller receives MultipartFile parameter</p>
      <p>Step 4: Convert MultipartFile to byte array</p>
      <p>Step 5: Create entity object with image bytes</p>
      <p>Step 6: Save entity to database via Repository</p>
      <p>Step 7: JPA/Hibernate stores bytes in BLOB column</p>
      <p>Step 8: Return success response to client</p>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== 1. Entity Class =====
@Entity
@Table(name = "profile_images")
public class ProfileImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fileName;
    private String fileType;

    @Lob  // Large Object annotation for BLOB
    private byte[] imageData;

    // Constructors, getters, setters
    public ProfileImage() { }

    public ProfileImage(String fileName,
                        String fileType, byte[] imageData) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.imageData = imageData;
    }
    // ... getters and setters
}

// ===== 2. Repository =====
@Repository
public interface ImageRepository
        extends JpaRepository<ProfileImage, Long> {
}

// ===== 3. Service =====
@Service
public class ImageService {
    @Autowired
    private ImageRepository repository;

    public ProfileImage saveImage(MultipartFile file)
            throws IOException {
        ProfileImage image = new ProfileImage(
            file.getOriginalFilename(),
            file.getContentType(),
            file.getBytes()  // Convert to byte array
        );
        return repository.save(image);
    }

    public ProfileImage getImage(Long id) {
        return repository.findById(id).orElse(null);
    }
}

// ===== 4. Controller =====
@RestController
@RequestMapping("/api/images")
public class ImageController {
    @Autowired
    private ImageService imageService;

    // Upload image
    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(
            @RequestParam("file") MultipartFile file) {
        try {
            // Validate file
            if (file.isEmpty()) {
                return ResponseEntity.badRequest()
                    .body("Please select a file");
            }
            // Validate type
            if (!file.getContentType().startsWith("image/")) {
                return ResponseEntity.badRequest()
                    .body("Only images allowed");
            }
            // Save to database
            ProfileImage saved =
                imageService.saveImage(file);
            return ResponseEntity.ok(
                "Image saved with ID: " + saved.getId());
        } catch (IOException e) {
            return ResponseEntity.status(500)
                .body("Upload failed: " + e.getMessage());
        }
    }

    // Retrieve image
    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getImage(
            @PathVariable Long id) {
        ProfileImage img = imageService.getImage(id);
        if (img != null) {
            return ResponseEntity.ok()
                .contentType(MediaType
                    .parseMediaType(img.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=\""
                    + img.getFileName() + "\"")
                .body(img.getImageData());
        }
        return ResponseEntity.notFound().build();
    }
}

// ===== 5. application.properties =====
spring.servlet.multipart.max-file-size=5MB
spring.servlet.multipart.max-request-size=5MB
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.jpa.hibernate.ddl-auto=update

// ===== 6. HTML Upload Form =====
<form action="/api/images/upload" method="POST"
      enctype="multipart/form-data">
    <input type="file" name="file" accept="image/*" required>
    <button type="submit">Upload Image</button>
</form>`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A student portal allows students to upload profile photos. The form uses <code>enctype="multipart/form-data"</code> to support file uploads. The Spring Boot controller receives the file as <code>MultipartFile</code>, validates it is an image (checking <code>contentType.startsWith("image/")</code>), converts it to bytes, and stores it in the database. When displaying the profile, the image is retrieved and sent as a response with the appropriate content type (<code>image/jpeg</code>).</p>
    <p><strong>Scenario 2:</strong> An e-commerce site stores product images. For performance, images larger than 2MB are rejected (<code>max-file-size=2MB</code> in properties). The database stores each image as a BLOB along with metadata (filename, content type, upload date). A <code>GET /api/images/{'{'}id{'}'}</code> endpoint returns the raw image bytes, which the frontend displays using <code>&lt;img src="/api/images/5"&gt;</code>.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Use <code>MultipartFile</code> interface to handle file uploads</li>
      <li>Store images as BLOB using <code>@Lob</code> annotation on <code>byte[]</code></li>
      <li>Form must use <code>enctype="multipart/form-data"</code></li>
      <li>Configure max file size in <code>application.properties</code></li>
      <li>Two approaches: database storage (BLOB) or filesystem + path in DB</li>
      <li>Always validate file type and size before saving</li>
    </ul>
  </div>,
];

export const q3Answers: React.ReactNode[] = [
  // 3a. Short notes on Form and List
  <div key="3a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">3a. Short note on — i) Form ii) List</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 i) HTML Forms — Definition &amp; Introduction</h4>
    <p>An <strong>HTML form</strong> is a section of a web page that contains interactive controls — text fields, dropdowns, radio buttons, checkboxes, and submit buttons — allowing users to enter data and submit it to a server for processing. Forms are created using the <code>&lt;form&gt;</code> element and are the primary mechanism for user interaction on the web. Every login page, registration form, search bar, checkout process, and feedback survey uses HTML forms. The form's <code>action</code> attribute specifies where data is sent, and the <code>method</code> attribute (GET or POST) determines how data is transmitted.</p>
    <p>HTML5 significantly enhanced forms with new input types (<code>email</code>, <code>date</code>, <code>number</code>, <code>color</code>, <code>range</code>, <code>url</code>), built-in validation (<code>required</code>, <code>pattern</code>, <code>min</code>, <code>max</code>), and the <code>&lt;datalist&gt;</code> element for autocomplete suggestions. These enhancements reduce the need for JavaScript validation and improve the user experience with native browser features.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Form Elements Table</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Element</th>
            <th className="border border-gray-300 p-2 text-left">Purpose</th>
            <th className="border border-gray-300 p-2 text-left">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><code>&lt;input type="text"&gt;</code></td><td className="border border-gray-300 p-2">Single-line text</td><td className="border border-gray-300 p-2">Name, address</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><code>&lt;input type="email"&gt;</code></td><td className="border border-gray-300 p-2">Email with validation</td><td className="border border-gray-300 p-2">user@mail.com</td></tr>
          <tr><td className="border border-gray-300 p-2"><code>&lt;input type="password"&gt;</code></td><td className="border border-gray-300 p-2">Hidden text</td><td className="border border-gray-300 p-2">Passwords</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><code>&lt;input type="radio"&gt;</code></td><td className="border border-gray-300 p-2">Single selection</td><td className="border border-gray-300 p-2">Gender selection</td></tr>
          <tr><td className="border border-gray-300 p-2"><code>&lt;input type="checkbox"&gt;</code></td><td className="border border-gray-300 p-2">Multiple selection</td><td className="border border-gray-300 p-2">Hobbies, terms</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><code>&lt;select&gt;</code></td><td className="border border-gray-300 p-2">Dropdown menu</td><td className="border border-gray-300 p-2">Country selection</td></tr>
          <tr><td className="border border-gray-300 p-2"><code>&lt;textarea&gt;</code></td><td className="border border-gray-300 p-2">Multi-line text</td><td className="border border-gray-300 p-2">Comments, address</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><code>&lt;button type="submit"&gt;</code></td><td className="border border-gray-300 p-2">Submit form</td><td className="border border-gray-300 p-2">Send data</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto mt-3">
      <pre className="text-sm"><code>{`<!-- Form Example -->
<form action="/submit" method="POST">
    <label>Name: <input type="text" name="name" required></label>
    <label>Email: <input type="email" name="email" required></label>
    <label>Gender:
        <input type="radio" name="gender" value="M"> Male
        <input type="radio" name="gender" value="F"> Female
    </label>
    <label>Country:
        <select name="country">
            <option value="in">India</option>
            <option value="us">USA</option>
        </select>
    </label>
    <button type="submit">Submit</button>
</form>`}</code></pre>
    </div>

    <hr className="border-gray-300 my-6" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 ii) HTML Lists — Definition &amp; Introduction</h4>
    <p>HTML provides three types of lists for organizing content: <strong>Ordered Lists</strong> (<code>&lt;ol&gt;</code>) for items with a specific sequence, <strong>Unordered Lists</strong> (<code>&lt;ul&gt;</code>) for items without a particular order, and <strong>Definition Lists</strong> (<code>&lt;dl&gt;</code>) for term-description pairs. Lists are fundamental building blocks for structuring content, creating navigation menus, displaying steps, and organizing information hierarchically. List items are defined using the <code>&lt;li&gt;</code> tag within <code>&lt;ol&gt;</code> and <code>&lt;ul&gt;</code>, and lists can be nested to create multi-level structures.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 List Types Comparison</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Type</th>
            <th className="border border-gray-300 p-2 text-left">Tag</th>
            <th className="border border-gray-300 p-2 text-left">Use When</th>
            <th className="border border-gray-300 p-2 text-left">Bullet Style</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Ordered</strong></td><td className="border border-gray-300 p-2"><code>&lt;ol&gt;</code></td><td className="border border-gray-300 p-2">Sequence matters</td><td className="border border-gray-300 p-2">1, 2, 3 / a, b, c</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Unordered</strong></td><td className="border border-gray-300 p-2"><code>&lt;ul&gt;</code></td><td className="border border-gray-300 p-2">No specific order</td><td className="border border-gray-300 p-2">•, ○, ■</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Definition</strong></td><td className="border border-gray-300 p-2"><code>&lt;dl&gt;</code></td><td className="border border-gray-300 p-2">Term-description pairs</td><td className="border border-gray-300 p-2">No bullet</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto mt-3">
      <pre className="text-sm"><code>{`<!-- Ordered List -->
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>

<!-- Unordered List -->
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

<!-- Nested List -->
<ul>
    <li>Web Technologies
        <ol>
            <li>Frontend</li>
            <li>Backend</li>
        </ol>
    </li>
</ul>

<!-- Definition List -->
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A recipe website uses an ordered list to display cooking steps (1. Preheat oven, 2. Mix ingredients, 3. Bake for 30 minutes). The sequence matters because you cannot bake before mixing. An unordered list is used for the ingredients (flour, sugar, eggs) where the order does not matter.</p>
    <p><strong>Scenario 2:</strong> A university website uses a definition list for its glossary page: <code>&lt;dt&gt;HTTP&lt;/dt&gt;&lt;dd&gt;HyperText Transfer Protocol&lt;/dd&gt;</code>. Navigation menus on most websites are built using unordered lists styled with CSS, demonstrating how lists are used beyond simple content display.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li><strong>Forms</strong>: collect user input via controls (input, select, textarea, button)</li>
      <li>Key attributes: <code>action</code> (URL), <code>method</code> (GET/POST), <code>enctype</code> (for file uploads)</li>
      <li>HTML5 input types: email, date, number, range, color, url, tel, search</li>
      <li><strong>Lists</strong>: Ordered (<code>&lt;ol&gt;</code>), Unordered (<code>&lt;ul&gt;</code>), Definition (<code>&lt;dl&gt;</code>)</li>
      <li>Lists can be nested for hierarchical content</li>
      <li>Lists are commonly used for navigation menus (styled with CSS)</li>
    </ul>
  </div>,

  // 3b. HTML code for changing background color
  <div key="3b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">3b. Write code in HTML for changing the background color.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>Changing the background color of a web page is one of the most fundamental visual customizations in web development. There are multiple methods to achieve this: using the deprecated <code>bgcolor</code> attribute on the <code>&lt;body&gt;</code> tag, using inline CSS with the <code>style</code> attribute, using an internal CSS stylesheet within <code>&lt;style&gt;</code> tags, linking an external CSS file, or dynamically changing it using JavaScript. Modern web development exclusively uses CSS (inline, internal, or external) for background styling, while the JavaScript approach enables dynamic, interactive color changes based on user actions.</p>
    <p>The CSS <code>background-color</code> property accepts color values in multiple formats: named colors (<code>red</code>, <code>blue</code>, <code>lightgray</code>), hexadecimal codes (<code>#ff0000</code>), RGB values (<code>rgb(255, 0, 0)</code>), RGBA for transparency (<code>rgba(255, 0, 0, 0.5)</code>), HSL (<code>hsl(0, 100%, 50%)</code>), and modern CSS gradients for multi-color backgrounds.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Background Color Examples</title>

    <!-- Method 3: Internal CSS -->
    <style>
        body {
            background-color: #f0f8ff; /* Light blue */
        }

        .highlight-box {
            background-color: #ffeb3b;
            padding: 15px;
            margin: 10px;
            border-radius: 8px;
        }

        .gradient-bg {
            /* Gradient background */
            background: linear-gradient(135deg,
                #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
        }
    </style>
</head>

<!-- Method 1: bgcolor (Deprecated - avoid!) -->
<!-- <body bgcolor="lightblue"> -->

<!-- Method 2: Inline CSS -->
<!-- <body style="background-color: #e0f7fa;"> -->

<body>
    <h1>Background Color Demo</h1>

    <!-- Method 2: Inline CSS on specific elements -->
    <div style="background-color: #e8f5e9; padding: 10px;
                margin: 10px; border-radius: 5px;">
        <h3>Green Background (Inline CSS)</h3>
        <p>This uses inline style attribute.</p>
    </div>

    <!-- Using CSS classes -->
    <div class="highlight-box">
        <h3>Yellow Background (CSS Class)</h3>
        <p>This uses an internal CSS class.</p>
    </div>

    <!-- Gradient background -->
    <div class="gradient-bg">
        <h3>Gradient Background</h3>
        <p>CSS linear-gradient creates beautiful effects.</p>
    </div>

    <!-- Interactive color change with JavaScript -->
    <div style="margin: 20px;">
        <h3>Dynamic Color Changer</h3>
        <p id="colorText">Click buttons to change background!</p>
        <button onclick="document.body.style.backgroundColor='#ffcdd2'"
                style="background:#f44336; color:white;
                       padding:8px 16px; border:none;
                       border-radius:5px; cursor:pointer; margin:5px;">
            Red
        </button>
        <button onclick="document.body.style.backgroundColor='#c8e6c9'"
                style="background:#4caf50; color:white;
                       padding:8px 16px; border:none;
                       border-radius:5px; cursor:pointer; margin:5px;">
            Green
        </button>
        <button onclick="document.body.style.backgroundColor='#bbdefb'"
                style="background:#2196f3; color:white;
                       padding:8px 16px; border:none;
                       border-radius:5px; cursor:pointer; margin:5px;">
            Blue
        </button>
        <button onclick="document.body.style.backgroundColor='#f0f8ff'"
                style="background:#607d8b; color:white;
                       padding:8px 16px; border:none;
                       border-radius:5px; cursor:pointer; margin:5px;">
            Reset
        </button>
    </div>

    <!-- Method: User picks a color -->
    <div style="margin: 20px;">
        <h3>Pick Your Own Color</h3>
        <input type="color" id="colorPicker" value="#f0f8ff"
               onchange="document.body.style.backgroundColor=this.value">
        <p>Selected: <span id="colorValue">#f0f8ff</span></p>
    </div>

    <script>
        const picker = document.getElementById("colorPicker");
        const valueSpan = document.getElementById("colorValue");
        picker.addEventListener("input", function() {
            valueSpan.textContent = this.value;
        });
    </script>
</body>
</html>`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A university website uses a light blue background (<code>background-color: #e3f2fd</code>) for the main content area and a dark navy header (<code>background-color: #1a237e</code>) for navigation. Individual sections use different background colors to visually separate content areas — announcements in yellow, events in green, notices in red. All colors are defined in an external CSS file for consistency.</p>
    <p><strong>Scenario 2:</strong> A theme customizer page allows users to pick their preferred background color using <code>&lt;input type="color"&gt;</code>. When the user selects a color, JavaScript immediately updates <code>document.body.style.backgroundColor</code>. The chosen color is saved in <code>localStorage</code> so the preference persists across page reloads. This demonstrates the combination of HTML, CSS, and JavaScript for dynamic styling.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>CSS <code>background-color</code> property sets element background color</li>
      <li>Methods: inline style, internal CSS, external CSS, JavaScript</li>
      <li>Color formats: named (<code>red</code>), hex (<code>#ff0000</code>), RGB (<code>rgb(255,0,0)</code>), HSL</li>
      <li><code>bgcolor</code> attribute is deprecated in HTML5 — use CSS instead</li>
      <li>Gradients: <code>linear-gradient(direction, color1, color2)</code></li>
      <li>JavaScript: <code>element.style.backgroundColor = "color"</code> for dynamic changes</li>
    </ul>
  </div>,
];
