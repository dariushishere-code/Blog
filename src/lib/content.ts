export const profile = {
  name: "Alireza Ebrahimi",
  title: "Front-End Developer",
  tagline: "Thoughtful interfaces, built to hold up.",
  taglineRest: "Design systems · front-end · creative code",
  intro:
    "Front-end developer crafting accessible interfaces, thoughtful interactions, and playful digital worlds.",
  about:
    "I’m Alireza, a front-end developer who cares as much about how a product feels as how it works. I turn ideas into accessible, responsive interfaces with thoughtful typography, considered motion, and code built to last. I enjoy solving the details behind the scenes—from performance and edge cases to the bugs nobody else can reproduce. Away from the screen, photography keeps my eye tuned to light, color, and composition.",
  email: "iamalirezaebrahimii@gmail.com",
  location: "Remote · Worldwide",
  site: "alirezaebrahimi.tech",
  // Résumé is served from the live site. Prefer a local copy? Drop the PDF
  // into `public/resume/` and point this path there instead.
  resumeUrl:
    "https://dev.alirezaebrahimi.tech/resume/AlirezaEbrahimi-Resume.pdf",
  status: "Available for work · 2026",
  availability: true,
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const languages = [
  { name: "Persian", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Turkish", level: "Beginner" },
];

export const stats = [
  { value: "12", label: "Public projects" },
  { value: "03", label: "Spoken languages" },
];

export type Work = {
  title: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
  artwork?: "tower" | "ledger" | "market" | "terminal";
};

export const works: Work[] = [
  {
    title: "Expense Tracker",
    year: "2026",
    category: "Personal Finance",
    description:
      "A personal finance dashboard for managing transactions, wallets, recurring reminders, budgets, and spending trends, with CSV import/export and local persistence.",
    tags: ["React", "TypeScript", "Redux Toolkit", "Recharts", "Tailwind CSS"],
    url: "https://github.com/dariushishere-code/expense-tracker2",
    artwork: "ledger",
  },
  {
    title: "Product Finder",
    year: "2026",
    category: "E-commerce",
    description:
      "A product discovery app with category and price filters, debounced search, related-product recommendations, a cart, and saved preferences.",
    tags: ["React", "Fake Store API", "Search", "Local Storage"],
    url: "https://github.com/dariushishere-code/productstore",
    artwork: "market",
  },
  {
    title: "Lumen — English Learning Platform",
    year: "2026",
    category: "Full-Stack / EdTech",
    description:
      "An AI-powered English learning platform with personalized lessons, speech recognition for pronunciation practice, spaced repetition vocabulary system, and real-time progress tracking — built with modern React ecosystem.",
    tags: ["React", "TypeScript", "AI / LLM", "Speech API", "Tailwind CSS"],
    url: "https://github.com/dariushishere-code/LumenEnglishLearning",
    artwork: "terminal",
  },
  {
    title: "Savoria — Recipe Platform",
    year: "2026",
    category: "Full-Stack / AI",
    description:
      "A production-grade recipe discovery platform with an AI cooking assistant (RAG over real recipes), admin CMS, meal planner, shopping lists and a React Native app.",
    tags: ["Next.js", "TypeScript", "AI / LLM", "Monorepo"],
    url: "https://github.com/dariushishere-code/savoria",
    artwork: "market",
  },
  {
    title: "JuniorPath — Internships",
    year: "2026",
    category: "Web App",
    description:
      "A virtual remote internship platform for junior developers — a horizontal roadmap, real portfolio-ready projects and a clear path from junior to job-ready.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    url: "https://github.com/dariushishere-code/JuniorPath",
    artwork: "tower",
  },
  {
    title: "Aureum — Gold Marketplace",
    year: "2025",
    category: "Storefront",
    description:
      "A Next.js + Tailwind CSS storefront concept for a gold marketplace — bars, coins, jewelry, antique pieces — wrapped in a black / gold / ivory theme.",
    tags: ["Next.js", "Tailwind CSS", "Design System"],
    url: "https://github.com/dariushishere-code/Goldmarketplace",
    artwork: "market",
  },
  {
    title: "Slice — Pizza Restaurant",
    year: "2026",
    category: "Creative Build",
    description:
      "A highly interactive, gamified site for a pizza-slice restaurant with a CoinSlice currency system — pure HTML, CSS and JavaScript with zero frameworks.",
    tags: ["HTML", "CSS", "JavaScript", "Motion"],
    url: "https://github.com/dariushishere-code/slicePizza",
    artwork: "market",
  },
  {
    title: "Burger & Pie — Restaurant",
    year: "2026",
    category: "Creative Build",
    description:
      "A mobile-first luxury website for a gourmet burger & artisan pie concept — dark-and-gold aesthetic with layered scroll and interactive menu moments.",
    tags: ["HTML", "CSS", "JavaScript", "Motion"],
    url: "https://github.com/dariushishere-code/Meat-Pie-Resturant",
    artwork: "market",
  },
  {
    title: "Spotify Search — Full-Stack",
    year: "2026",
    category: "Full-Stack",
    description:
      "A Spotify-inspired search interface backed by a Node + Express API on the Spotify Web API — search songs, artists and albums with secure env-based auth.",
    tags: ["Node.js", "Express", "Spotify API"],
    url: "https://github.com/dariushishere-code/spotify-search-app",
    artwork: "terminal",
  },
  {
    title: "Quiz App — Open Trivia",
    year: "2026",
    category: "Web App",
    description:
      "A single-page quiz engine on the Open Trivia Database — filters, score tracking, a 15-second timer and full localStorage persistence so a refresh never loses progress.",
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    url: "https://github.com/dariushishere-code/QuizApp",
    artwork: "terminal",
  },
  {
    title: "Service UI",
    year: "2026",
    category: "UI Recreation",
    description:
      "A pixel-close recreation of a light-themed salon / barbershop Services + Order interface, built with nothing but HTML and CSS.",
    tags: ["HTML", "CSS", "Service Design"],
    url: "https://github.com/dariushishere-code/services-ui",
    artwork: "tower",
  },
  {
    title: "This Portfolio",
    year: "2026",
    category: "Portfolio",
    description:
      "A considered portfolio bringing selected work and front-end practice into one clear experience.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    url: "https://github.com/dariushishere-code/Blog",
    artwork: "tower",
  },
];

export const services = [
  {
    n: "01",
    title: "Front-End Development",
    desc: "Responsive marketing sites, storefronts and interactive interfaces — designed and shipped end-to-end with React & Next.js, tuned for accessibility and Core Web Vitals.",
    tags: ["React", "Next.js", "Responsive"],
  },
  {
    n: "02",
    title: "Design Systems",
    desc: "Figma specs turned into reusable, documented component libraries — consistent type, color and spacing across every screen.",
    tags: ["Design System", "TypeScript", "Tailwind"],
  },
  {
    n: "03",
    title: "Motion & Creative Code",
    desc: "WebGL scenes, shader-driven motion and typography-first interfaces — built with Three.js and Framer Motion. Engineered, not decorated.",
    tags: ["WebGL", "Three.js", "Framer Motion"],
  },
  {
    n: "04",
    title: "Bug Hunting & Refactoring",
    desc: "I audit, reproduce and fix bugs in existing products — then refactor the mess into something maintainable. The goal: it gets fixed once and stays fixed.",
    tags: ["Debugging", "Code Audit", "Refactoring"],
  },
  {
    n: "05",
    title: "Photography",
    desc: "Beyond the browser I shoot photography — portraits, textures and light. Available for select photo projects and visual content for brands.",
    tags: ["Photography", "Visual Direction"],
  },
];

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML & CSS",
  "WebGL",
  "Three.js",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Design Systems",
  "Responsive Design",
  "Web Performance",
];

export type Experience = {
  period: string;
  role: string;
  org: string;
  points?: string[];
};

export const experience: Experience[] = [
  {
    period: "2025 — Present",
    role: "Front-End Developer",
    org: "Freelance · Remote",
    points: [
      "Design and ship responsive marketing sites, storefronts and interactive interfaces end-to-end.",
      "Translate design systems into reusable, documented component libraries with React & Next.js.",
      "Chase performance budgets: static generation, image pipelines and Core Web Vitals in the green.",
    ],
  },
  {
    period: "2024 — 2025",
    role: "UI Engineer",
    org: "Contract Projects",
    points: [
      "Built pixel-close interfaces from Figma specs across salon booking, e-commerce and music tooling.",
      "Integrated REST APIs (incl. Spotify Web API) with Node.js / Express backends.",
      "Introduced browser-based admin tooling so non-technical owners can publish without code.",
    ],
  },
];

export const education = [
  {
    period: "Ongoing",
    title: "Self-directed front-end engineering",
    detail:
      "React ecosystem, design systems, WebGL & creative code — continuous, project-driven learning.",
  },
];

export type Social = { label: string; handle: string; href: string };

export const socials: Social[] = [
  {
    label: "X / Twitter",
    handle: "@alirezaebdev",
    href: "https://x.com/alirezaebdev",
  },
  {
    label: "LinkedIn",
    handle: "in/alirezaebrahimi-dev",
    href: "https://www.linkedin.com/in/alirezaebrahimi-dev/",
  },
  {
    label: "GitHub",
    handle: "dariushishere-code",
    href: "https://github.com/dariushishere-code",
  },
];

export const faqs = [
  {
    q: "What exactly do you build?",
    a: "Front-end products with substance: responsive marketing sites, storefronts, design systems and motion-heavy experiments — engineered with React, Next.js and TypeScript, and tuned for accessibility and Core Web Vitals.",
  },
  {
    q: "How do you fix bugs?",
    a: "Like a detective. I reproduce it first, isolate the smallest possible cause, then apply a clean minimum fix — never a patch on top of a patch. After the fix I add a regression check so the bug stays dead forever.",
  },
  {
    q: "What does “sharp and forever” mean to you?",
    a: "Interfaces that look sharp on every screen and stay sharp over time. That means accessible markup, fast loads, maintainable components and a codebase you can come back to in two years and still understand instantly.",
  },
  {
    q: "Is it true you do photography too?",
    a: "Yes — photography is a real part of who I am. Light, composition and patience from the camera carry directly into how I design interfaces.",
  },
  {
    q: "Can you jump into my existing project?",
    a: "Absolutely. I audit first, then refactor, fix or extend whatever is there — on any tech stack. If the code is messy I make it clean; if it is already clean I keep it that way.",
  },
  {
    q: "Are you available for freelance or full-time work?",
    a: "Yes — remote, worldwide. I am open to collaborations, contract work and full-time front-end roles. The fastest way to reach me is email at the bottom of this page.",
  },
];
