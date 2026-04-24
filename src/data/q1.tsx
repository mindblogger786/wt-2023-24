import React from "react";

export const q1Answers: React.ReactNode[] = [
  // 1a. Internet and its applications
  <div key="1a" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1a. What do you mean by Internet and its applications?</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>The <strong>Internet</strong> is a global system of interconnected computer networks that communicates using standardized protocols, primarily TCP/IP (Transmission Control Protocol/Internet Protocol). It is often referred to as a "network of networks" because it connects millions of private, public, academic, business, and government networks worldwide. The Internet originated from ARPANET, a project funded by the U.S. Department of Defense in the late 1960s, designed to facilitate secure military communication. Over decades, it evolved into the vast global infrastructure we rely on today, linking billions of devices across every continent.</p>
    <p>The Internet serves as the backbone for virtually all modern digital communication. It enables data exchange through various services and protocols, allowing users to share information, communicate in real time, conduct business, access entertainment, and perform research. Unlike the World Wide Web (which is a service running on the Internet), the Internet encompasses all networked services including email, file transfer, video conferencing, online gaming, cloud computing, and the Internet of Things (IoT). Its decentralized nature and open standards have made it the most powerful communication platform in human history.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of the Internet as a <strong>global postal system</strong>. Every device connected to the Internet has a unique address (IP address), just like every building has a postal address. When you send data (a letter), it gets broken into small packets, each labelled with the destination address. Routers act as post offices, forwarding each packet toward its destination through the most efficient route. The packets may travel different paths but are reassembled at the destination. This <strong>packet-switching</strong> technique makes the Internet robust—if one route fails, packets are rerouted through another path.</p>
    <p>The Internet operates on a <strong>layered architecture</strong> (OSI/TCP-IP model). At the bottom is the physical layer (cables, fiber optics, wireless signals), then the network layer (IP addresses, routing), transport layer (TCP for reliable delivery, UDP for fast delivery), and application layer (HTTP, SMTP, FTP). Each layer handles a specific responsibility and communicates with adjacent layers, making the system modular and manageable.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Applications of the Internet</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Category</th>
            <th className="border border-gray-300 p-2 text-left">Application</th>
            <th className="border border-gray-300 p-2 text-left">Protocol / Technology</th>
            <th className="border border-gray-300 p-2 text-left">Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Communication</strong></td><td className="border border-gray-300 p-2">Email, Instant Messaging</td><td className="border border-gray-300 p-2">SMTP, IMAP, XMPP</td><td className="border border-gray-300 p-2">Gmail, WhatsApp, Slack</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Information</strong></td><td className="border border-gray-300 p-2">WWW, Search Engines</td><td className="border border-gray-300 p-2">HTTP/HTTPS</td><td className="border border-gray-300 p-2">Google, Wikipedia</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>E-Commerce</strong></td><td className="border border-gray-300 p-2">Online Shopping, Banking</td><td className="border border-gray-300 p-2">HTTPS, SSL/TLS</td><td className="border border-gray-300 p-2">Amazon, PayPal</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Entertainment</strong></td><td className="border border-gray-300 p-2">Streaming, Gaming</td><td className="border border-gray-300 p-2">RTSP, WebRTC</td><td className="border border-gray-300 p-2">YouTube, Netflix</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Education</strong></td><td className="border border-gray-300 p-2">E-Learning, MOOCs</td><td className="border border-gray-300 p-2">HTTP, WebSocket</td><td className="border border-gray-300 p-2">Coursera, NPTEL</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Cloud Computing</strong></td><td className="border border-gray-300 p-2">Storage, SaaS</td><td className="border border-gray-300 p-2">REST APIs</td><td className="border border-gray-300 p-2">AWS, Google Drive</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Social Media</strong></td><td className="border border-gray-300 p-2">Networking, Blogging</td><td className="border border-gray-300 p-2">HTTP, GraphQL</td><td className="border border-gray-300 p-2">Facebook, Twitter</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>IoT</strong></td><td className="border border-gray-300 p-2">Smart Devices, Automation</td><td className="border border-gray-300 p-2">MQTT, CoAP</td><td className="border border-gray-300 p-2">Smart home, Wearables</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation — How the Internet Works</h4>
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
      <p className="font-semibold text-yellow-700">Step-by-Step: What happens when you visit a website</p>
      <ol className="list-decimal list-inside space-y-1 text-gray-700 mt-2">
        <li>You type a URL (e.g., www.google.com) in the browser</li>
        <li>Browser queries DNS server to resolve domain name to IP address (e.g., 142.250.190.46)</li>
        <li>Browser establishes TCP connection with the server (3-way handshake: SYN → SYN-ACK → ACK)</li>
        <li>Browser sends HTTP GET request to the server</li>
        <li>Server processes request and sends back HTTP response (HTML, CSS, JS files)</li>
        <li>Browser renders the page using its rendering engine</li>
        <li>TCP connection is closed (or kept alive for further requests)</li>
      </ol>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A university student attends online lectures via Google Meet. The video and audio data travel as UDP packets over the Internet in real time. Simultaneously, the student accesses course materials from the university's LMS (Learning Management System) over HTTP. The Internet carries both real-time (video) and non-real-time (web pages) traffic simultaneously, demonstrating its versatility.</p>
    <p><strong>Scenario 2:</strong> A small business owner uses the Internet for multiple operations: accepting payments via UPI (uses secure HTTP APIs), managing inventory on cloud software (SaaS), communicating with suppliers via WhatsApp (XMPP/WebSocket), and marketing products on Instagram. All these diverse applications run simultaneously over the same Internet connection, showcasing the Internet's role as a universal platform.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Internet = global network of networks using TCP/IP protocol suite</li>
      <li>Originated from ARPANET (1969), evolved into today's global infrastructure</li>
      <li>Uses <strong>packet switching</strong> — data broken into packets, sent via best route</li>
      <li>Key applications: Communication, WWW, E-Commerce, Entertainment, Education, Cloud, IoT</li>
      <li>Protocols: TCP/IP, HTTP, SMTP, FTP, DNS, DHCP power all Internet services</li>
      <li>Internet ≠ Web; the Web is one of many services running on the Internet</li>
    </ul>
  </div>,

  // 1b. HTML vs HTML5
  <div key="1b" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1b. Differentiate between HTML and HTML5.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>HTML (HyperText Markup Language)</strong> is the standard markup language used to create and structure content on web pages. Tim Berners-Lee created the first version of HTML in 1991, and it has undergone several revisions through HTML 2.0 (1995), HTML 3.2 (1997), and HTML 4.01 (1999). Traditional HTML focused primarily on static content presentation using basic tags for text formatting, tables, forms, and links. It relied heavily on third-party plugins like Adobe Flash for multimedia content and required extensive use of <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> elements for layout due to the absence of semantic tags.</p>
    <p><strong>HTML5</strong> is the fifth and latest major version of HTML, finalized by the W3C in 2014. It represents a massive leap forward, introducing native support for multimedia (audio/video without plugins), semantic elements for better document structure, canvas for 2D/3D graphics, form validation, local storage, geolocation, and much more. HTML5 was designed with the philosophy that the browser should be a complete application platform, reducing dependence on external plugins and enabling rich, interactive web applications that rival desktop software.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of HTML as a <strong>basic flip phone</strong> and HTML5 as a <strong>modern smartphone</strong>. The flip phone makes calls and sends texts (basic HTML displays text and links). The smartphone does everything the flip phone does plus photos, video calls, GPS, apps, and payments (HTML5 adds multimedia, canvas, geolocation, storage, and APIs). Both are phones, but the smartphone represents a quantum leap in capability while maintaining backward compatibility.</p>
    <p>HTML5 introduced three key design principles: (1) <strong>Semantic clarity</strong> — tags like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code> describe the meaning of content, not just its appearance; (2) <strong>Native multimedia</strong> — <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> eliminate Flash dependency; (3) <strong>Rich APIs</strong> — Canvas, Web Storage, Geolocation, Drag-and-Drop, Web Workers enable full application development within the browser.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Comparison Table: HTML vs HTML5</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Feature</th>
            <th className="border border-gray-300 p-2 text-left">HTML (4.01)</th>
            <th className="border border-gray-300 p-2 text-left">HTML5</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>DOCTYPE</strong></td><td className="border border-gray-300 p-2">Long DTD declaration</td><td className="border border-gray-300 p-2">Simple: &lt;!DOCTYPE html&gt;</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Multimedia</strong></td><td className="border border-gray-300 p-2">Requires Flash/Silverlight</td><td className="border border-gray-300 p-2">Native &lt;audio&gt; &lt;video&gt; tags</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Storage</strong></td><td className="border border-gray-300 p-2">Cookies only (4KB limit)</td><td className="border border-gray-300 p-2">Web Storage (localStorage, sessionStorage)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Graphics</strong></td><td className="border border-gray-300 p-2">No native support</td><td className="border border-gray-300 p-2">&lt;canvas&gt; and SVG support</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Semantic Tags</strong></td><td className="border border-gray-300 p-2">Only div/span</td><td className="border border-gray-300 p-2">header, nav, article, section, footer</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Form Controls</strong></td><td className="border border-gray-300 p-2">text, password, submit</td><td className="border border-gray-300 p-2">date, email, range, color, number, url</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Validation</strong></td><td className="border border-gray-300 p-2">JavaScript required</td><td className="border border-gray-300 p-2">Built-in: required, pattern, min/max</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Geolocation</strong></td><td className="border border-gray-300 p-2">Not supported</td><td className="border border-gray-300 p-2">Native Geolocation API</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Threading</strong></td><td className="border border-gray-300 p-2">Single-threaded only</td><td className="border border-gray-300 p-2">Web Workers for background tasks</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Mobile Support</strong></td><td className="border border-gray-300 p-2">Poor</td><td className="border border-gray-300 p-2">Excellent (responsive, touch events)</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`<!-- ===== HTML 4.01 (Old Way) ===== -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
  "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head><title>Old HTML Page</title></head>
<body>
  <div id="header">
    <div id="navigation">...</div>
  </div>
  <div id="content">
    <!-- No native video - needs Flash -->
    <object data="video.swf" type="application/x-shockwave-flash">
    </object>
  </div>
</body>
</html>

<!-- ===== HTML5 (Modern Way) ===== -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>HTML5 Page</title>
</head>
<body>
  <!-- Semantic structure -->
  <header>
    <nav>
      <ul><li><a href="/">Home</a></li></ul>
    </nav>
  </header>

  <main>
    <article>
      <section>
        <h1>Welcome to HTML5</h1>
        <!-- Native video - no Flash needed -->
        <video controls width="640" height="360">
          <source src="lecture.mp4" type="video/mp4">
          Your browser does not support video.
        </video>
      </section>

      <section>
        <!-- Canvas for drawing -->
        <canvas id="myCanvas" width="400" height="300">
        </canvas>
        <!-- New form input types -->
        <form>
          <input type="email" required
                 placeholder="Enter email">
          <input type="date">
          <input type="range" min="1" max="100">
          <input type="color">
          <button type="submit">Submit</button>
        </form>
      </section>
    </article>
  </main>

  <footer>
    <p>&copy; 2025 University</p>
  </footer>

  <!-- Web Storage API -->
  <script>
    localStorage.setItem("user", "Rahul");
    console.log(localStorage.getItem("user"));
  </script>
</body>
</html>`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A university wants to build an online exam portal. With HTML5, they use <code>&lt;input type="date"&gt;</code> for selecting exam dates (no JavaScript date picker needed), <code>&lt;input type="email"&gt;</code> with built-in validation, <code>&lt;canvas&gt;</code> for drawing diagrams in subjective answers, and <code>localStorage</code> to auto-save answers every 30 seconds. All of this would require extensive JavaScript or third-party libraries in HTML 4.</p>
    <p><strong>Scenario 2:</strong> A music streaming website uses HTML5's <code>&lt;audio&gt;</code> tag to play songs directly in the browser without Flash. The site works on mobile devices, desktops, and tablets seamlessly. With HTML 4, users needed Adobe Flash Player installed—a plugin that was discontinued in 2020 and was never supported on iOS devices.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>HTML5 = HTML + CSS3 + JavaScript APIs (a complete platform)</li>
      <li>Key additions: <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>, <code>&lt;canvas&gt;</code>, semantic tags, Web Storage</li>
      <li>New form types: date, email, number, range, color, url, search, tel</li>
      <li>HTML5 eliminated the need for Flash, Silverlight, and other plugins</li>
      <li>Built-in validation: <code>required</code>, <code>pattern</code>, <code>min</code>, <code>max</code> attributes</li>
      <li>HTML5 has excellent mobile support with responsive design features</li>
    </ul>
  </div>,

  // 1c. JavaScript and its applications
  <div key="1c" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1c. Define JavaScript and its application.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>JavaScript (JS)</strong> is a high-level, dynamic, interpreted programming language that was created by Brendan Eich at Netscape in 1995. Originally designed as a simple scripting language for adding interactivity to web pages, JavaScript has evolved into one of the most powerful and widely-used programming languages in the world. It is the only language natively understood by web browsers and is a core pillar of web development alongside HTML (structure) and CSS (presentation). JavaScript conforms to the ECMAScript specification, with major updates like ES6 (2015) introducing modern features such as arrow functions, classes, modules, promises, and template literals.</p>
    <p>Today, JavaScript is a <strong>full-stack language</strong> — it runs on both the client side (in browsers) and the server side (via Node.js). It powers interactive websites, single-page applications (React, Angular, Vue), mobile apps (React Native), desktop applications (Electron), game development, IoT devices, and even machine learning (TensorFlow.js). According to Stack Overflow surveys, JavaScript has been the most-used programming language for over a decade, used by approximately 65% of all developers worldwide.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of a web page without JavaScript as a <strong>printed newspaper</strong> — you can read it but can't interact with it. JavaScript turns that newspaper into a <strong>live news app</strong> where you can search, filter, watch videos, get real-time updates, fill forms, play games, and interact with maps. HTML provides the structure (the skeleton), CSS provides the appearance (the skin and clothes), and JavaScript provides the behavior (the muscles and brain that make it alive and responsive).</p>
    <p>JavaScript is <strong>event-driven</strong> and <strong>asynchronous</strong>. It waits for user actions (clicks, key presses, form submissions) and responds by manipulating the DOM (Document Object Model) — the browser's internal representation of the HTML page. Using features like callbacks, Promises, and async/await, JavaScript can handle asynchronous operations (API calls, file loading, timers) without freezing the user interface.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Applications of JavaScript</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Domain</th>
            <th className="border border-gray-300 p-2 text-left">Application</th>
            <th className="border border-gray-300 p-2 text-left">Framework / Tool</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Frontend Web</strong></td><td className="border border-gray-300 p-2">Interactive UIs, SPAs</td><td className="border border-gray-300 p-2">React, Angular, Vue.js</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Backend</strong></td><td className="border border-gray-300 p-2">Server-side APIs</td><td className="border border-gray-300 p-2">Node.js, Express.js</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Mobile Apps</strong></td><td className="border border-gray-300 p-2">Cross-platform apps</td><td className="border border-gray-300 p-2">React Native, Ionic</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Desktop Apps</strong></td><td className="border border-gray-300 p-2">Native desktop software</td><td className="border border-gray-300 p-2">Electron (VS Code, Slack)</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Game Dev</strong></td><td className="border border-gray-300 p-2">Browser-based games</td><td className="border border-gray-300 p-2">Phaser.js, Three.js</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>ML / AI</strong></td><td className="border border-gray-300 p-2">Machine learning in browser</td><td className="border border-gray-300 p-2">TensorFlow.js</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== JavaScript Core Features =====

// 1. Variables and Data Types
let studentName = "Rahul";       // String
let marks = 92;                   // Number
let isPassed = true;              // Boolean
let subjects = ["Math", "Java"];  // Array
let address = { city: "Delhi" }; // Object

// 2. Functions
function calculateTotal(a, b) {
    return a + b;
}
const multiply = (x, y) => x * y; // Arrow function

// 3. DOM Manipulation
document.getElementById("title").textContent = "New Title";
document.querySelector(".btn").addEventListener("click",
    function() {
        alert("Button clicked!");
    }
);

// 4. Async Operations (Fetch API)
fetch("https://api.example.com/students")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// 5. Event Handling
document.getElementById("form").addEventListener("submit",
    function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        console.log("Form submitted by: " + name);
    }
);

// 6. Local Storage
localStorage.setItem("username", "Rahul");
console.log(localStorage.getItem("username"));

// 7. ES6 Classes
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    getGrade() {
        return this.marks >= 90 ? "A+" : "B";
    }
}
const s1 = new Student("Rahul", 95);
console.log(s1.getGrade()); // A+`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> An online shopping cart uses JavaScript to add items without reloading the page (AJAX), calculate the total price dynamically, validate the checkout form before submission, and show real-time delivery date estimates. Every interaction — clicking "Add to Cart," viewing product images in a carousel, applying coupon codes — is powered by JavaScript.</p>
    <p><strong>Scenario 2:</strong> A weather application uses JavaScript's Fetch API to call a weather API (like OpenWeatherMap), processes the JSON response, updates the UI with current temperature, renders a 5-day forecast chart using Chart.js, and saves the user's last-searched city in localStorage. All of this happens in the browser without any page reload.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>JavaScript = the language of the web (runs natively in browsers)</li>
      <li>Created by Brendan Eich (1995); follows ECMAScript standard</li>
      <li>Key features: dynamic typing, event-driven, asynchronous, prototype-based OOP</li>
      <li>Applications: Web frontend, backend (Node.js), mobile, desktop, games, ML</li>
      <li>ES6+ features: let/const, arrow functions, classes, promises, async/await</li>
      <li>JavaScript manipulates the DOM to create dynamic, interactive web pages</li>
    </ul>
  </div>,

  // 1d. MARQUEE
  <div key="1d" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1d. What do you mean by MARQUEE?</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>The <strong>&lt;marquee&gt;</strong> tag is an HTML element that creates a scrolling text or image effect on a web page. It was originally introduced by Microsoft Internet Explorer and became popular in the early days of the web (late 1990s and early 2000s) for creating eye-catching animations without needing JavaScript. The marquee tag causes its content — whether text, images, or other HTML elements — to scroll horizontally across the screen, typically from right to left, or vertically from bottom to top. This effect was commonly used for news tickers, announcements, and attention-grabbing headlines.</p>
    <p>However, the <code>&lt;marquee&gt;</code> tag is <strong>deprecated in HTML5</strong>, meaning it is no longer recommended and may not be supported by future browsers. The W3C (World Wide Web Consortium) deprecated it because it violates the principle of separating content (HTML) from presentation (CSS) and behavior (JavaScript). Modern web development achieves scrolling effects using CSS animations (<code>@keyframes</code>, <code>animation</code> property) and JavaScript, which provide greater control, better performance, and accessibility compliance.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of a marquee like a <strong>digital billboard with a scrolling LED sign</strong> — the kind you see at airports or train stations showing flight information moving across the screen. The <code>&lt;marquee&gt;</code> tag recreates this effect on a web page, making content scroll automatically in a specified direction. While visually attention-grabbing, marquees were often criticized for being distracting, inaccessible to screen readers, and annoying to users — which is why they fell out of favor.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Attributes of MARQUEE Tag</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Attribute</th>
            <th className="border border-gray-300 p-2 text-left">Description</th>
            <th className="border border-gray-300 p-2 text-left">Values</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>direction</strong></td><td className="border border-gray-300 p-2">Scroll direction</td><td className="border border-gray-300 p-2">left, right, up, down</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>behavior</strong></td><td className="border border-gray-300 p-2">How content scrolls</td><td className="border border-gray-300 p-2">scroll, slide, alternate</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>scrollamount</strong></td><td className="border border-gray-300 p-2">Speed of scrolling</td><td className="border border-gray-300 p-2">Number (e.g., 5, 10)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>scrolldelay</strong></td><td className="border border-gray-300 p-2">Delay between movements</td><td className="border border-gray-300 p-2">Milliseconds (e.g., 100)</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>loop</strong></td><td className="border border-gray-300 p-2">Number of times to loop</td><td className="border border-gray-300 p-2">Number or infinite</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>width/height</strong></td><td className="border border-gray-300 p-2">Dimensions of marquee area</td><td className="border border-gray-300 p-2">Pixels or percentage</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>bgcolor</strong></td><td className="border border-gray-300 p-2">Background color</td><td className="border border-gray-300 p-2">Color name or hex</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`<!-- ===== MARQUEE Tag (Deprecated) ===== -->
<!-- Basic scrolling text -->
<marquee>Welcome to our University!</marquee>

<!-- Marquee with direction and behavior -->
<marquee direction="right" behavior="scroll"
         scrollamount="5">
    Scrolling from left to right
</marquee>

<!-- Bouncing (alternate) marquee -->
<marquee behavior="alternate" bgcolor="yellow">
    This text bounces back and forth!
</marquee>

<!-- Upward scrolling (vertical) -->
<marquee direction="up" height="100" scrollamount="2">
    <p>News Item 1</p>
    <p>News Item 2</p>
    <p>News Item 3</p>
</marquee>

<!-- ===== MODERN ALTERNATIVE: CSS Animation ===== -->
<style>
.marquee-container {
    overflow: hidden;
    white-space: nowrap;
}
.marquee-text {
    display: inline-block;
    animation: scroll-left 10s linear infinite;
}
@keyframes scroll-left {
    0%   { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}
</style>

<div class="marquee-container">
    <span class="marquee-text">
        Modern CSS scrolling text — no deprecated tags!
    </span>
</div>`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A university homepage in the early 2000s used <code>&lt;marquee&gt;</code> to display a scrolling news ticker: "Admissions Open for MCA 2025 | Last date: March 30 | Apply online at admissions.edu." The text scrolled continuously from right to left, grabbing visitors' attention immediately upon page load.</p>
    <p><strong>Scenario 2:</strong> A modern news website replaces the deprecated marquee with a CSS animation-based ticker. Using <code>@keyframes</code> and <code>transform: translateX()</code>, the same scrolling effect is achieved with better performance, accessibility (can be paused with <code>animation-play-state: paused</code>), and responsive design support. This approach follows web standards and won't break in future browsers.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li><code>&lt;marquee&gt;</code> creates scrolling text/image effect in HTML</li>
      <li>Key attributes: direction, behavior, scrollamount, loop, bgcolor</li>
      <li><strong>Deprecated in HTML5</strong> — do NOT use in production</li>
      <li>Modern alternative: CSS <code>@keyframes</code> animation + <code>transform: translateX()</code></li>
      <li>Was popular in the 1990s-2000s for news tickers and announcements</li>
      <li>Deprecated because it mixes presentation with content (violates separation of concerns)</li>
    </ul>
  </div>,

  // 1e. API and CGI
  <div key="1e" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1e. Define API and CGI.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>API (Application Programming Interface)</strong> is a set of defined rules, protocols, and tools that allows different software applications to communicate with each other. An API acts as a messenger that takes a request from one application, delivers it to another application, and returns the response back. In web development, the most common type is a <strong>Web API (REST API)</strong>, which uses HTTP methods (GET, POST, PUT, DELETE) to enable communication between a client (browser, mobile app) and a server. APIs define the <em>contract</em> of interaction — what requests can be made, how they should be formatted, and what responses will be returned.</p>
    <p><strong>CGI (Common Gateway Interface)</strong> is one of the oldest technologies for generating dynamic web content. CGI is a standard protocol that defines how a web server communicates with external programs (called CGI scripts) to process user requests and generate dynamic responses. When a user submits a form, the web server invokes a CGI program (written in Perl, Python, C, or any language), passes the form data through environment variables or standard input, and the CGI program generates HTML output that the server sends back to the browser. CGI was revolutionary in the mid-1990s but has been largely replaced by more efficient technologies like servlets, JSP, PHP, and modern frameworks.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of an API like a <strong>waiter in a restaurant</strong>. You (the client) look at the menu (API documentation), place an order (send a request), the waiter takes your order to the kitchen (server), and brings back your food (response). You never go into the kitchen yourself — the waiter (API) handles all communication. This abstraction lets you enjoy the meal without knowing how it was prepared.</p>
    <p>Think of CGI like a <strong>translator at a conference</strong>. The web server speaks HTTP, but the CGI program speaks its own language (Perl, C, Python). The CGI standard acts as the translator — it converts HTTP request data into a format the program understands, runs the program, and converts the program's output back into an HTTP response. Each request spawns a new process, which is why CGI is slow compared to modern alternatives like servlets (which use threads instead of processes).</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 API vs CGI Comparison</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Feature</th>
            <th className="border border-gray-300 p-2 text-left">API</th>
            <th className="border border-gray-300 p-2 text-left">CGI</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Full Form</strong></td><td className="border border-gray-300 p-2">Application Programming Interface</td><td className="border border-gray-300 p-2">Common Gateway Interface</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Purpose</strong></td><td className="border border-gray-300 p-2">Software-to-software communication</td><td className="border border-gray-300 p-2">Web server to external program communication</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Era</strong></td><td className="border border-gray-300 p-2">Modern (2000s-present)</td><td className="border border-gray-300 p-2">Legacy (1990s, mostly replaced)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Execution Model</strong></td><td className="border border-gray-300 p-2">Runs within the server process</td><td className="border border-gray-300 p-2">Spawns new OS process per request</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Performance</strong></td><td className="border border-gray-300 p-2">High (thread-based)</td><td className="border border-gray-300 p-2">Low (process per request)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Format</strong></td><td className="border border-gray-300 p-2">JSON, XML, YAML</td><td className="border border-gray-300 p-2">HTML (typically)</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Example</strong></td><td className="border border-gray-300 p-2">REST APIs, Google Maps API</td><td className="border border-gray-300 p-2">Perl/Python scripts in /cgi-bin/</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== REST API Example (Spring Boot) =====
@RestController
@RequestMapping("/api/students")
public class StudentController {

    @GetMapping      // GET /api/students
    public List<Student> getAllStudents() {
        return studentService.findAll();
    }

    @PostMapping     // POST /api/students
    public Student create(@RequestBody Student s) {
        return studentService.save(s);
    }

    @GetMapping("/{id}") // GET /api/students/5
    public Student getById(@PathVariable int id) {
        return studentService.findById(id);
    }
}

// ===== CGI Example (Python script) =====
// File: /cgi-bin/hello.py
#!/usr/bin/python3
import cgi

print("Content-Type: text/html\\n")
print("<html><body>")
print("<h1>Hello from CGI!</h1>")

form = cgi.FieldStorage()
name = form.getvalue("name", "Guest")
print("<p>Welcome, " + name + "!</p>")
print("</body></html>")

// URL: http://server.com/cgi-bin/hello.py?name=Rahul
// Each request starts a NEW Python process!`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A weather mobile app uses the OpenWeatherMap REST API. The app sends a GET request to <code>api.openweathermap.org/data/2.5/weather?q=Delhi</code>, and the API returns JSON: <code>{'{'}"temp":32,"humidity":45,"condition":"Sunny"{'}'}</code>. The app parses this JSON and displays the weather. This is a modern, efficient API interaction — no page reloads, lightweight JSON format, and cached responses.</p>
    <p><strong>Scenario 2:</strong> In 1998, a website's contact form submitted data to a CGI Perl script (<code>/cgi-bin/feedback.pl</code>). For every form submission, the web server started a new Perl process, which read form data, sent an email, and generated an HTML thank-you page. If 100 users submitted simultaneously, 100 Perl processes ran concurrently, consuming enormous memory. This inefficiency led to CGI being replaced by servlets (one instance, multiple threads).</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li><strong>API</strong> = contract for software communication; REST APIs use HTTP + JSON</li>
      <li><strong>CGI</strong> = protocol for web server to execute external programs; spawns new process per request</li>
      <li>APIs are modern, efficient, and use thread-based execution</li>
      <li>CGI is legacy, inefficient (process per request), and largely replaced by servlets/JSP</li>
      <li>API uses JSON/XML; CGI typically outputs HTML</li>
      <li>CGI scripts placed in <code>/cgi-bin/</code> directory; written in Perl, Python, C</li>
    </ul>
  </div>,

  // 1f. Cookies
  <div key="1f" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1f. What do you mean by Cookies?</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Cookies</strong> are small text files (maximum 4KB each) that a web server sends to a user's browser, which the browser stores locally on the user's device and sends back to the server with every subsequent request to the same domain. Cookies were invented by Netscape in 1994 to solve the fundamental limitation of HTTP: the protocol is <strong>stateless</strong>, meaning each request-response cycle is independent and the server has no built-in mechanism to remember who the user is or what they did previously. Cookies bridge this gap by allowing servers to store and retrieve small pieces of state information on the client side.</p>
    <p>Each cookie consists of a name-value pair (e.g., <code>username=Rahul</code>) along with optional attributes like expiry date, domain, path, and security flags. There are two main types: <strong>session cookies</strong> (temporary, deleted when the browser is closed) and <strong>persistent cookies</strong> (stored until a specified expiry date). Cookies are essential for user authentication, shopping carts, personalized preferences, session tracking, and targeted advertising. Modern browsers also support advanced security attributes like <code>HttpOnly</code>, <code>Secure</code>, and <code>SameSite</code> to protect against XSS and CSRF attacks.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of cookies as a <strong>handstamp at an amusement park</strong>. When you first enter (first visit), you receive a stamp (cookie). Every time you want to access a ride (make a request), the attendant checks your stamp (browser sends the cookie). The stamp identifies you without needing your full ID every time. If the stamp washes off (browser closes a session cookie), you need to get a new one. If it is a permanent stamp (persistent cookie with expiry), it lasts all season.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Types and Attributes of Cookies</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Attribute</th>
            <th className="border border-gray-300 p-2 text-left">Description</th>
            <th className="border border-gray-300 p-2 text-left">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>name=value</strong></td><td className="border border-gray-300 p-2">The actual data stored</td><td className="border border-gray-300 p-2"><code>user=Rahul</code></td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>expires / max-age</strong></td><td className="border border-gray-300 p-2">When the cookie expires</td><td className="border border-gray-300 p-2"><code>max-age=86400</code></td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>domain</strong></td><td className="border border-gray-300 p-2">Which domain can access it</td><td className="border border-gray-300 p-2"><code>domain=.example.com</code></td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>path</strong></td><td className="border border-gray-300 p-2">URL path restriction</td><td className="border border-gray-300 p-2"><code>path=/shop</code></td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>HttpOnly</strong></td><td className="border border-gray-300 p-2">No JS access (security)</td><td className="border border-gray-300 p-2"><code>HttpOnly</code></td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Secure</strong></td><td className="border border-gray-300 p-2">HTTPS only</td><td className="border border-gray-300 p-2"><code>Secure</code></td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>SameSite</strong></td><td className="border border-gray-300 p-2">Prevents CSRF attacks</td><td className="border border-gray-300 p-2"><code>SameSite=Strict</code></td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Server-Side Cookie (Java Servlet) =====
Cookie userCookie = new Cookie("username", "Rahul");
userCookie.setMaxAge(60 * 60 * 24);  // 24 hours
userCookie.setHttpOnly(true);         // Security
userCookie.setSecure(true);           // HTTPS only
userCookie.setPath("/");
response.addCookie(userCookie);

// Reading cookies
Cookie[] cookies = request.getCookies();
for (Cookie c : cookies) {
    if (c.getName().equals("username")) {
        String user = c.getValue();
    }
}

// ===== Client-Side Cookie (JavaScript) =====
// Set a cookie
document.cookie = "username=Rahul; max-age=86400; path=/";

// Read all cookies
console.log(document.cookie); // "username=Rahul; theme=dark"

// Delete a cookie (set max-age to 0)
document.cookie = "username=; max-age=0; path=/";`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> On Amazon, when you add a laptop to your cart without logging in, a persistent cookie stores your cart ID. When you return the next day, the cookie identifies your cart and the laptop is still there. Without cookies, your cart would be empty every time you refresh the page because HTTP is stateless.</p>
    <p><strong>Scenario 2:</strong> An online banking application uses a session cookie (with <code>HttpOnly</code> and <code>Secure</code> flags) to store the session ID after login. <code>HttpOnly</code> prevents malicious JavaScript (XSS attack) from stealing the session ID, and <code>Secure</code> ensures the cookie is only sent over encrypted HTTPS connections, preventing interception by attackers.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Cookies = small text files (max 4KB) stored on client browser</li>
      <li>Solve HTTP's stateless problem by maintaining state across requests</li>
      <li>Two types: <strong>session cookies</strong> (temporary) and <strong>persistent cookies</strong> (with expiry)</li>
      <li>Used for: authentication, shopping carts, personalization, tracking</li>
      <li>Security flags: <code>HttpOnly</code>, <code>Secure</code>, <code>SameSite</code></li>
      <li>Limited to 4KB; sent with every HTTP request to the same domain</li>
    </ul>
  </div>,

  // 1g. AOP
  <div key="1g" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1g. Define AOP.</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Aspect-Oriented Programming (AOP)</strong> is a programming paradigm that complements Object-Oriented Programming (OOP) by modularizing <strong>cross-cutting concerns</strong> — functionality that spans across multiple modules and layers of an application. Cross-cutting concerns include logging, security, transaction management, performance monitoring, caching, and exception handling. In traditional OOP, implementing these concerns leads to <strong>code scattering</strong> (same logic duplicated across many classes) and <strong>code tangling</strong> (business logic mixed with infrastructure code like logging and security checks), making the system harder to maintain, test, and modify.</p>
    <p>AOP solves this by encapsulating cross-cutting concerns into separate, reusable modules called <strong>Aspects</strong>. These aspects are then <strong>woven</strong> into the main application code at specific execution points (called join points) without modifying the business logic. Spring Framework provides AOP support through its <code>spring-aop</code> module, using <strong>dynamic proxies</strong> at runtime. AOP was formalized by Gregor Kiczales at Xerox PARC in the 1990s and has become an essential part of enterprise Java development through the Spring ecosystem.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of AOP as a <strong>security checkpoint at an airport</strong>. Every passenger (method call) must pass through security (the aspect), regardless of which flight they are taking (which module). Instead of having security at every individual gate (code scattering), you have one centralized checkpoint (the aspect) that automatically applies to all passengers. The checkpoint runs before boarding (Before advice), can prevent boarding if there is an issue, and runs after boarding (After advice).</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Key AOP Terminology</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Term</th>
            <th className="border border-gray-300 p-2 text-left">Definition</th>
            <th className="border border-gray-300 p-2 text-left">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Aspect</strong></td><td className="border border-gray-300 p-2">Module encapsulating a cross-cutting concern</td><td className="border border-gray-300 p-2">LoggingAspect</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Join Point</strong></td><td className="border border-gray-300 p-2">A point in program execution</td><td className="border border-gray-300 p-2">Method execution</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Pointcut</strong></td><td className="border border-gray-300 p-2">Expression selecting join points</td><td className="border border-gray-300 p-2">execution(* service.*(..))</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Advice</strong></td><td className="border border-gray-300 p-2">Action taken at a join point</td><td className="border border-gray-300 p-2">@Before, @Around</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Weaving</strong></td><td className="border border-gray-300 p-2">Applying aspects to target objects</td><td className="border border-gray-300 p-2">Runtime (Spring proxies)</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== AOP Aspect in Spring =====
@Aspect
@Component
public class LoggingAspect {

    @Before("execution(* com.example.service.*.*(..))")
    public void logBefore() {
        System.out.println("[LOG] Method called...");
    }

    @Around("execution(* com.example.service.*.*(..))")
    public Object logTime(ProceedingJoinPoint pjp)
            throws Throwable {
        long start = System.currentTimeMillis();
        Object result = pjp.proceed(); // execute method
        long time = System.currentTimeMillis() - start;
        System.out.println("[PERF] " + time + "ms");
        return result;
    }
}

// Business code stays CLEAN
@Service
public class StudentService {
    public Student getStudent(int id) {
        return repository.findById(id);
        // Logging & timing handled by aspect!
    }
}`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A banking application needs logging for all 50 service methods. Without AOP, each method starts with <code>logger.info("Entering method X")</code> and ends with <code>logger.info("Exiting method X")</code> — 100 extra lines. With AOP, one <code>@Before</code> and one <code>@After</code> advice handle all 50 methods automatically. Adding a new method automatically gets logging — zero code duplication.</p>
    <p><strong>Scenario 2:</strong> An e-commerce site uses <code>@Around</code> advice for transaction management. When <code>placeOrder()</code> is called, the aspect begins a database transaction, lets the method execute, commits on success, or rolls back on exception. The business developer writes only order-processing logic — transaction handling is completely transparent.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>AOP modularizes <strong>cross-cutting concerns</strong> (logging, security, transactions)</li>
      <li>Key terms: Aspect, Join Point, Pointcut, Advice, Weaving</li>
      <li>5 Advice types: @Before, @AfterReturning, @AfterThrowing, @After, @Around</li>
      <li>Solves <strong>code scattering</strong> and <strong>code tangling</strong></li>
      <li>Spring AOP uses dynamic proxies (runtime weaving)</li>
      <li>AOP complements OOP — it does not replace it</li>
    </ul>
  </div>,

  // 1h. Table attributes
  <div key="1h" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1h. What are the various attributes of Tables?</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p>HTML tables are defined using the <code>&lt;table&gt;</code> element and are used to display data in a structured grid of rows and columns. Tables organize information into a two-dimensional format that makes data easy to read, compare, and analyze. A table consists of rows (<code>&lt;tr&gt;</code>), header cells (<code>&lt;th&gt;</code>), data cells (<code>&lt;td&gt;</code>), and optional structural elements like <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>, and <code>&lt;caption&gt;</code>. HTML tables were originally designed for tabular data (like spreadsheets), though in the early web they were frequently misused for page layout — a practice now replaced by CSS Grid and Flexbox.</p>
    <p>The <code>&lt;table&gt;</code> tag and its child elements support various attributes that control the table's appearance and behavior. While many presentational attributes (like <code>border</code>, <code>bgcolor</code>, <code>cellpadding</code>, <code>cellspacing</code>) are <strong>deprecated in HTML5</strong> in favor of CSS styling, they remain important for exam preparation and understanding legacy code. Modern best practice uses CSS for all visual styling while reserving HTML attributes for structural and semantic purposes like <code>colspan</code>, <code>rowspan</code>, and <code>scope</code>.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Table Attributes Reference</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Attribute</th>
            <th className="border border-gray-300 p-2 text-left">Element</th>
            <th className="border border-gray-300 p-2 text-left">Description</th>
            <th className="border border-gray-300 p-2 text-left">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>border</strong></td><td className="border border-gray-300 p-2">&lt;table&gt;</td><td className="border border-gray-300 p-2">Border thickness in pixels</td><td className="border border-gray-300 p-2"><code>border="1"</code></td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>cellpadding</strong></td><td className="border border-gray-300 p-2">&lt;table&gt;</td><td className="border border-gray-300 p-2">Space between cell content and border</td><td className="border border-gray-300 p-2"><code>cellpadding="10"</code></td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>cellspacing</strong></td><td className="border border-gray-300 p-2">&lt;table&gt;</td><td className="border border-gray-300 p-2">Space between cells</td><td className="border border-gray-300 p-2"><code>cellspacing="5"</code></td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>width</strong></td><td className="border border-gray-300 p-2">&lt;table&gt;, &lt;td&gt;</td><td className="border border-gray-300 p-2">Width of table or cell</td><td className="border border-gray-300 p-2"><code>width="100%"</code></td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>bgcolor</strong></td><td className="border border-gray-300 p-2">&lt;table&gt;, &lt;tr&gt;, &lt;td&gt;</td><td className="border border-gray-300 p-2">Background color</td><td className="border border-gray-300 p-2"><code>bgcolor="#f0f0f0"</code></td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>align</strong></td><td className="border border-gray-300 p-2">&lt;table&gt;</td><td className="border border-gray-300 p-2">Horizontal alignment</td><td className="border border-gray-300 p-2"><code>align="center"</code></td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>colspan</strong></td><td className="border border-gray-300 p-2">&lt;th&gt;, &lt;td&gt;</td><td className="border border-gray-300 p-2">Span across multiple columns</td><td className="border border-gray-300 p-2"><code>colspan="3"</code></td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>rowspan</strong></td><td className="border border-gray-300 p-2">&lt;th&gt;, &lt;td&gt;</td><td className="border border-gray-300 p-2">Span across multiple rows</td><td className="border border-gray-300 p-2"><code>rowspan="2"</code></td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>nowrap</strong></td><td className="border border-gray-300 p-2">&lt;th&gt;, &lt;td&gt;</td><td className="border border-gray-300 p-2">Prevent text wrapping</td><td className="border border-gray-300 p-2"><code>nowrap</code></td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>scope</strong></td><td className="border border-gray-300 p-2">&lt;th&gt;</td><td className="border border-gray-300 p-2">Defines header scope (accessibility)</td><td className="border border-gray-300 p-2"><code>scope="col"</code></td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`<!-- ===== Complete Table with Attributes ===== -->
<table border="2" cellpadding="10" cellspacing="5"
       width="80%" align="center" bgcolor="#f9f9f9">

  <caption><strong>Student Report Card</strong></caption>

  <thead bgcolor="#4a90d9">
    <tr>
      <th scope="col">Roll No</th>
      <th scope="col">Name</th>
      <th scope="col" colspan="2">Marks</th>
      <!-- colspan="2" merges 2 columns -->
    </tr>
    <tr bgcolor="#6ba3e0">
      <th></th><th></th>
      <th>Theory</th><th>Practical</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td rowspan="2" bgcolor="#e8f5e9">101</td>
      <!-- rowspan="2" merges 2 rows -->
      <td>Rahul Sharma</td>
      <td>85</td><td>90</td>
    </tr>
    <tr>
      <!-- Roll No cell continues from above (rowspan) -->
      <td>Total: 175</td>
      <td colspan="2" bgcolor="#fff3e0" align="center">
        <strong>Grade: A</strong>
      </td>
    </tr>
    <tr bgcolor="#fce4ec">
      <td>102</td>
      <td>Priya Patel</td>
      <td>92</td><td>88</td>
    </tr>
  </tbody>

  <tfoot bgcolor="#e0e0e0">
    <tr>
      <td colspan="2"><strong>Class Average</strong></td>
      <td colspan="2" align="center">88.5</td>
    </tr>
  </tfoot>
</table>`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A university result page uses a table with <code>border="1"</code>, <code>cellpadding="8"</code>, <code>colspan</code> for the header row spanning all columns, and <code>rowspan</code> for a student ID that applies to multiple subjects. The <code>&lt;thead&gt;</code> has a blue background, <code>&lt;tbody&gt;</code> has alternating row colors using <code>bgcolor</code>, and <code>&lt;tfoot&gt;</code> shows the class average.</p>
    <p><strong>Scenario 2:</strong> A modern timetable display uses CSS instead of deprecated attributes: <code>border-collapse: collapse</code> replaces <code>cellspacing="0"</code>, <code>padding: 10px</code> replaces <code>cellpadding="10"</code>, <code>border: 1px solid #ddd</code> replaces <code>border="1"</code>. The <code>colspan</code> and <code>rowspan</code> attributes remain in HTML5 since they define structure, not presentation.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Table structure: <code>&lt;table&gt;</code> → <code>&lt;tr&gt;</code> → <code>&lt;td&gt;</code>/<code>&lt;th&gt;</code></li>
      <li>Key attributes: border, cellpadding, cellspacing, width, bgcolor, align</li>
      <li><code>colspan</code> merges columns; <code>rowspan</code> merges rows (still valid in HTML5)</li>
      <li>Structural elements: <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>, <code>&lt;caption&gt;</code></li>
      <li>Many presentational attributes are <strong>deprecated in HTML5</strong> — use CSS instead</li>
      <li><code>scope</code> attribute on <code>&lt;th&gt;</code> improves accessibility for screen readers</li>
    </ul>
  </div>,

  // 1i. Why Spring Boot preferred
  <div key="1i" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1i. Why is Spring Boot preferred over any other framework?</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>Spring Boot</strong> is an extension of the Spring Framework that simplifies the creation of production-ready, stand-alone Spring applications. Developed by Pivotal (now VMware) and first released in 2014, Spring Boot follows the philosophy of <strong>"convention over configuration"</strong> — it provides sensible defaults and auto-configuration so developers can start building applications immediately without writing boilerplate XML configuration. Before Spring Boot, setting up a Spring application required extensive XML configuration (dispatcher servlets, data sources, view resolvers, transaction managers), often exceeding 100 lines of XML for even a simple project.</p>
    <p>Spring Boot is preferred over other frameworks (Struts, JSF, Play, Django, Express, etc.) because it combines the power of the mature Spring ecosystem with modern developer productivity features. It provides an embedded web server (Tomcat/Jetty), auto-configuration based on classpath dependencies, starter dependencies that simplify Maven/Gradle setup, production-ready monitoring through Actuator, and a vibrant community with extensive documentation. For enterprise Java development, Spring Boot has become the <strong>de facto standard</strong>, adopted by companies like Netflix, Amazon, LinkedIn, and thousands of startups worldwide.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of Spring Boot as a <strong>pre-furnished apartment</strong> versus other frameworks as <strong>empty shells</strong>. With traditional Spring or Struts, you must install plumbing, electrical wiring, furniture, and appliances yourself (configure every component). Spring Boot gives you a fully furnished apartment with sensible defaults — you just move in and customize what you need. The furniture is already there, but you can replace any piece if you want something different.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Spring Boot vs Other Frameworks</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Feature</th>
            <th className="border border-gray-300 p-2 text-left">Spring Boot</th>
            <th className="border border-gray-300 p-2 text-left">Other Frameworks</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Configuration</strong></td><td className="border border-gray-300 p-2">Auto-configured (zero XML)</td><td className="border border-gray-300 p-2">Manual XML/annotation config</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Server</strong></td><td className="border border-gray-300 p-2">Embedded (standalone JAR)</td><td className="border border-gray-300 p-2">External WAR deployment</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Setup Time</strong></td><td className="border border-gray-300 p-2">Minutes (Spring Initializr)</td><td className="border border-gray-300 p-2">Hours of manual setup</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Microservices</strong></td><td className="border border-gray-300 p-2">Built-in support</td><td className="border border-gray-300 p-2">Requires additional tools</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Production Ready</strong></td><td className="border border-gray-300 p-2">Actuator (health, metrics)</td><td className="border border-gray-300 p-2">Must build monitoring</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Community</strong></td><td className="border border-gray-300 p-2">Massive (largest Java community)</td><td className="border border-gray-300 p-2">Smaller or fragmented</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Technical Implementation</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== Spring Boot: Complete API in 15 lines =====
@SpringBootApplication
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}

@RestController
@RequestMapping("/api")
class HelloController {
    @GetMapping("/hello")
    public String hello() { return "Hello, World!"; }
}
// That's it! No XML, no web.xml, no server setup.
// Run: java -jar myapp.jar → Server starts on port 8080

// Compare: Traditional Spring needs:
// 1. web.xml (DispatcherServlet config)
// 2. applicationContext.xml (bean definitions)
// 3. spring-mvc.xml (MVC configuration)
// 4. External Tomcat server installation
// 5. WAR packaging and deployment
// Total: 50-100+ lines of XML configuration`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> A startup needs to build a REST API for their food delivery app. Using Spring Boot, a developer creates the project on start.spring.io, adds the "Spring Web" and "Spring Data JPA" starters, writes the controller and entity classes, and has a working API in 30 minutes. With traditional Spring MVC, the same setup would take hours of XML configuration, server installation, and dependency management.</p>
    <p><strong>Scenario 2:</strong> A microservices architecture with 10 services needs health monitoring. Spring Boot Actuator provides <code>/actuator/health</code> endpoints out of the box for each service, enabling Kubernetes to monitor and auto-scale. Metrics are automatically exposed via Micrometer. Building equivalent monitoring from scratch in other frameworks would take days of additional development.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Spring Boot = Spring + Auto-Configuration + Embedded Server</li>
      <li>Philosophy: <strong>"Convention over Configuration"</strong> — zero XML needed</li>
      <li>Key features: auto-config, starters, embedded Tomcat, Actuator</li>
      <li>Runs as standalone JAR — no external server deployment needed</li>
      <li>Ideal for <strong>microservices</strong> and cloud-native applications</li>
      <li>Largest Java framework community with extensive documentation</li>
    </ul>
  </div>,

  // 1j. Spring Boot vs JAX-RS
  <div key="1j" className="space-y-4">
    <h3 className="text-xl font-bold text-indigo-700 mb-2">1j. What makes Spring Boot superior to JAX-RS?</h3>
    <hr className="border-gray-300" />

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📖 Definition &amp; Introduction</h4>
    <p><strong>JAX-RS (Java API for RESTful Web Services)</strong> is a Java specification (JSR 370) that provides a standard API for building RESTful web services. Implementations include Jersey (reference implementation), RESTEasy, and Apache CXF. JAX-RS defines annotations like <code>@Path</code>, <code>@GET</code>, <code>@POST</code>, <code>@Produces</code>, and <code>@Consumes</code> for creating REST endpoints. While JAX-RS is a <strong>specification</strong> (not a framework), it focuses exclusively on the REST API layer and leaves other concerns (dependency injection, data access, configuration, security) to be handled separately.</p>
    <p><strong>Spring Boot</strong>, on the other hand, is a <strong>complete application framework</strong> that includes REST capabilities (via Spring MVC) along with dependency injection, data access (Spring Data JPA), security (Spring Security), batch processing, messaging, AOP, and production monitoring. Spring Boot's REST support uses <code>@RestController</code>, <code>@GetMapping</code>, <code>@PostMapping</code> annotations — similar in concept to JAX-RS but integrated into a much broader ecosystem. This comprehensiveness makes Spring Boot superior for building complete, production-ready applications.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🧠 Core Concepts &amp; Logic</h4>
    <p>Think of JAX-RS as a <strong>specialized tool</strong> (like a screwdriver) — it does one thing well (REST APIs) but nothing else. Spring Boot is a <strong>complete toolbox</strong> — it has the screwdriver (REST APIs) plus a hammer (dependency injection), wrench (data access), drill (security), and measuring tape (monitoring). For building just a simple API, both work fine. But for a real-world application that needs a database, security, transactions, and monitoring, Spring Boot gives you everything in one integrated package.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">📊 Comparison: Spring Boot vs JAX-RS</h4>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border border-gray-300 p-2 text-left">Feature</th>
            <th className="border border-gray-300 p-2 text-left">Spring Boot</th>
            <th className="border border-gray-300 p-2 text-left">JAX-RS</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border border-gray-300 p-2"><strong>Nature</strong></td><td className="border border-gray-300 p-2">Complete framework</td><td className="border border-gray-300 p-2">Specification (API only)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Scope</strong></td><td className="border border-gray-300 p-2">Full-stack (DI, DB, Security, REST)</td><td className="border border-gray-300 p-2">REST only</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>DI Support</strong></td><td className="border border-gray-300 p-2">Built-in (@Autowired)</td><td className="border border-gray-300 p-2">External (CDI or manual)</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Data Access</strong></td><td className="border border-gray-300 p-2">Spring Data JPA (auto-CRUD)</td><td className="border border-gray-300 p-2">Manual JDBC / JPA setup</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Server</strong></td><td className="border border-gray-300 p-2">Embedded Tomcat</td><td className="border border-gray-300 p-2">Requires external container</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Config</strong></td><td className="border border-gray-300 p-2">application.properties</td><td className="border border-gray-300 p-2">Implementation-specific</td></tr>
          <tr><td className="border border-gray-300 p-2"><strong>Monitoring</strong></td><td className="border border-gray-300 p-2">Actuator built-in</td><td className="border border-gray-300 p-2">Not included</td></tr>
          <tr className="bg-gray-50"><td className="border border-gray-300 p-2"><strong>Community</strong></td><td className="border border-gray-300 p-2">Very large</td><td className="border border-gray-300 p-2">Smaller</td></tr>
        </tbody>
      </table>
    </div>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">💻 Side-by-Side Code Comparison</h4>
    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm"><code>{`// ===== JAX-RS (Jersey) =====
@Path("/students")
@Produces(MediaType.APPLICATION_JSON)
public class StudentResource {

    // Manual DI or CDI
    @Inject
    private StudentService service;

    @GET
    @Path("/{id}")
    public Student getStudent(@PathParam("id") int id) {
        return service.findById(id);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response create(Student student) {
        service.save(student);
        return Response.status(201).entity(student).build();
    }
}
// Needs: web.xml, external Tomcat, manual JPA setup

// ===== Spring Boot (Equivalent) =====
@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired  // Auto-injected by Spring
    private StudentService service;

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable int id) {
        return service.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Student create(@RequestBody Student student) {
        return service.save(student);
    }
}
// Needs: Nothing! Auto-configured, embedded server`}</code></pre>
    </div>

    <p className="mt-3"><strong>Scenario 1:</strong> An enterprise builds a REST API with JAX-RS (Jersey). They need a separate framework for DI (CDI/Weld), another for data access (JPA/Hibernate with manual setup), another for security (Spring Security or custom filters), and an external Tomcat server. With Spring Boot, all of these come integrated — one dependency for each concern, auto-configured, with an embedded server. Setup time drops from days to minutes.</p>
    <p><strong>Scenario 2:</strong> A team needs to add health checks, metrics, and environment info to their API. With JAX-RS, they must build custom endpoints or integrate Micrometer manually. Spring Boot Actuator provides <code>/actuator/health</code>, <code>/actuator/metrics</code>, and <code>/actuator/env</code> out of the box — zero code needed. This "batteries included" approach is why Spring Boot dominates in enterprise environments.</p>

    <h4 className="text-lg font-semibold text-emerald-700 mt-4">🔑 Key Points for Revision</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>JAX-RS is a <strong>REST-only specification</strong>; Spring Boot is a <strong>complete framework</strong></li>
      <li>Spring Boot includes DI, data access, security, AOP, monitoring — JAX-RS does not</li>
      <li>Spring Boot has embedded server; JAX-RS requires external deployment</li>
      <li>Spring Boot auto-configures everything; JAX-RS needs manual setup</li>
      <li>Spring Boot has a much larger community and ecosystem</li>
      <li>JAX-RS is good for simple APIs; Spring Boot is superior for real-world applications</li>
    </ul>
  </div>,
];
