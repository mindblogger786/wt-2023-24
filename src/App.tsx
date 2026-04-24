import { useState, useRef } from "react";
import { q1Answers } from "./data/q1";
import { q2Answers, q3Answers } from "./data/q2q3";
import { q4Answers, q5Answers, q6Answers, q7Answers } from "./data/q4q5q6q7";

interface QuestionGroup {
  id: string;
  title: string;
  icon: string;
  subQuestions: { id: string; label: string }[];
}

const questionGroups: QuestionGroup[] = [
  {
    id: "q1",
    title: "Question 1",
    icon: "🌐",
    subQuestions: [
      { id: "1a", label: "1a. Internet & Applications" },
      { id: "1b", label: "1b. HTML vs HTML5" },
      { id: "1c", label: "1c. JavaScript & Applications" },
      { id: "1d", label: "1d. MARQUEE" },
      { id: "1e", label: "1e. API and CGI" },
      { id: "1f", label: "1f. Cookies" },
      { id: "1g", label: "1g. AOP" },
      { id: "1h", label: "1h. Table Attributes" },
      { id: "1i", label: "1i. Why Spring Boot?" },
      { id: "1j", label: "1j. Spring Boot vs JAX-RS" },
    ],
  },
  {
    id: "q2",
    title: "Question 2",
    icon: "💻",
    subQuestions: [
      { id: "2a", label: "2a. Internet Protocols" },
      { id: "2b", label: "2b. Library Mgmt HTML Form" },
      { id: "2c", label: "2c. Servlet Life Cycle" },
      { id: "2d", label: "2d. Java Bean & Spring" },
      { id: "2e", label: "2e. Save Image in DB" },
    ],
  },
  {
    id: "q3",
    title: "Question 3",
    icon: "📝",
    subQuestions: [
      { id: "3a", label: "3a. Form & List" },
      { id: "3b", label: "3b. Background Color Code" },
    ],
  },
  {
    id: "q4",
    title: "Question 4",
    icon: "⚡",
    subQuestions: [
      { id: "4a", label: "4a. DOM vs COM" },
      { id: "4b", label: "4b. Switch Case & Control" },
    ],
  },
  {
    id: "q5",
    title: "Question 5",
    icon: "🔗",
    subQuestions: [
      { id: "5a", label: "5a. Client-Server Architecture" },
      { id: "5b", label: "5b. GET vs POST Requests" },
    ],
  },
  {
    id: "q6",
    title: "Question 6",
    icon: "🍃",
    subQuestions: [
      { id: "6a", label: "6a. Spring Framework Arch." },
      { id: "6b", label: "6b. Scopes in Spring" },
    ],
  },
  {
    id: "q7",
    title: "Question 7",
    icon: "🚀",
    subQuestions: [
      { id: "7a", label: "7a. Dependency Injection" },
      { id: "7b", label: "7b. Alert & Confirm Box" },
    ],
  },
];

const allAnswers: Record<string, React.ReactNode[]> = {
  q1: q1Answers,
  q2: q2Answers,
  q3: q3Answers,
  q4: q4Answers,
  q5: q5Answers,
  q6: q6Answers,
  q7: q7Answers,
};

function App() {
  const [activeQId, setActiveQId] = useState<string>("1a");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [progress, setProgress] = useState<Set<string>>(new Set());
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSelectQuestion = (id: string) => {
    setActiveQId(id);
    setSidebarOpen(false);
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleProgress = (id: string) => {
    setProgress((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const getActiveAnswer = (): React.ReactNode => {
    for (const group of questionGroups) {
      const idx = group.subQuestions.findIndex((q) => q.id === activeQId);
      if (idx !== -1) {
        return allAnswers[group.id]?.[idx] ?? <p>Answer not found.</p>;
      }
    }
    return <p>Question not found.</p>;
  };

  const totalQuestions = questionGroups.reduce(
    (acc, g) => acc + g.subQuestions.length,
    0
  );
  const completedCount = progress.size;
  const progressPercent = Math.round(
    (completedCount / totalQuestions) * 100
  );

  const currentGroup = questionGroups.find((g) =>
    g.subQuestions.some((q) => q.id === activeQId)
  );

  const navigateQuestion = (direction: "prev" | "next") => {
    const allQs = questionGroups.flatMap((g) => g.subQuestions);
    const globalIdx = allQs.findIndex((q) => q.id === activeQId);
    const newIdx = direction === "next" ? globalIdx + 1 : globalIdx - 1;
    if (newIdx >= 0 && newIdx < allQs.length) {
      handleSelectQuestion(allQs[newIdx].id);
    }
  };

  const allQs = questionGroups.flatMap((g) => g.subQuestions);
  const globalIdx = allQs.findIndex((q) => q.id === activeQId);
  const hasPrev = globalIdx > 0;
  const hasNext = globalIdx < allQs.length - 1;

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen z-40 w-72 flex flex-col transition-transform duration-300 bg-white border-r border-gray-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="p-5 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
              WT
            </div>
            <div>
              <h1 className="font-bold text-sm leading-tight text-gray-900">
                Web Technology
              </h1>
              <p className="text-xs text-gray-500">MCA PYQ Solutions Vol. 2</p>
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-500">Progress</span>
              <span className="font-semibold text-indigo-600">
                {completedCount}/{totalQuestions} ({progressPercent}%)
              </span>
            </div>
            <div className="h-2 rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {questionGroups.map((group) => (
            <div key={group.id}>
              <div className="text-xs font-semibold uppercase tracking-wider px-3 py-2 text-gray-400">
                {group.icon} {group.title}
              </div>
              {group.subQuestions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleSelectQuestion(q.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-0.5 flex items-center gap-2 transition-all ${
                    activeQId === q.id
                      ? "bg-indigo-100 text-indigo-700 font-medium"
                      : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs flex-shrink-0 ${
                      progress.has(q.id)
                        ? "bg-emerald-500 border-emerald-500 text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {progress.has(q.id) ? "✓" : ""}
                  </span>
                  <span className="truncate">{q.label}</span>
                </button>
              ))}
            </div>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="text-center text-xs text-gray-400">
            📚 25 Questions • Score 100%!
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-20 px-4 py-3 flex items-center justify-between border-b border-gray-200 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <span className="text-sm font-medium text-gray-500">
              {currentGroup?.title} •{" "}
              <span className="text-indigo-600">{activeQId.toUpperCase()}</span>
            </span>
          </div>
          <button
            onClick={() => toggleProgress(activeQId)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              progress.has(activeQId)
                ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {progress.has(activeQId) ? "✓ Completed" : "Mark Complete"}
          </button>
        </header>

        {/* Content */}
        <div
          ref={contentRef}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 130px)" }}
        >
          {/* Welcome banner */}
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🎓</div>
              <div>
                <h2 className="text-xl font-bold mb-1">
                  Web Technology — PYQ Exam Guide Vol. 2
                </h2>
                <p className="text-sm text-indigo-100">
                  Comprehensive solutions for MCA University Exams. Each answer follows the strict exam format: Definition, Concepts, Diagrams, Code, Scenarios, and Revision Points.
                </p>
                <div className="flex flex-wrap gap-3 mt-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white">
                    {totalQuestions} Questions
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white">
                    7 Units
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white">
                    400-600 Words Each
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Answer content */}
          <div className="content-area">{getActiveAnswer()}</div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => navigateQuestion("prev")}
              disabled={!hasPrev}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                hasPrev
                  ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  : "opacity-30 cursor-not-allowed text-gray-400"
              }`}
            >
              ← Previous
            </button>
            <span className="text-xs text-gray-400">
              Question {globalIdx + 1} of {allQs.length}
            </span>
            <button
              onClick={() => navigateQuestion("next")}
              disabled={!hasNext}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                hasNext
                  ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                  : "opacity-30 cursor-not-allowed text-gray-400"
              }`}
            >
              Next →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
