const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const profile = {
  name: "Alireza Ebrahimi",
  title: "Front-End Developer",
  tagline: "Building sharp interfaces that stay forever sharp.",
  taglineRest: "Precision, contrast, deliberate space — and a camera.",
  intro:
    "Front-end developer & photographer — I build sharp, accessible interfaces, then hunt every bug until nothing breaks.",
  about:
    "Front-end developer focused on the intersection of typography, motion and engineering. I ship accessible, fast interfaces and treat every pixel as a decision — then stress-test them until they stay sharp and hold up forever. When something breaks, I love diving into the bug and fixing it for good. Outside the editor I shoot photography: light, composition and patience that find their way into every interface I build.",
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
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const languages = [
  { name: "Persian", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Turkish", level: "Beginner" },
];

export const stats = [
  { value: "09", label: "Public projects" },
  { value: "03", label: "Spoken languages" },
  { value: "62", label: "Photos in the archive" },
];

export type Work = {
  title: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
  src: string;
  alt: string;
  aspect: string;
};

export const works: Work[] = [
  {
    title: "Lumen — English Learning Platform",
    year: "2026",
    category: "Full-Stack / EdTech",
    description:
      "An AI-powered English learning platform with personalized lessons, speech recognition for pronunciation practice, spaced repetition vocabulary system, and real-time progress tracking — built with modern React ecosystem.",
    tags: ["React", "TypeScript", "AI / LLM", "Speech API", "Tailwind CSS"],
    url: "https://github.com/dariushishere-code/LumenEnglishLearning",
    src: u("photo-1516321318423-f06f85e504b3"),
    alt: "Lumen — AI-powered English learning platform",
    aspect: "aspect-[16/11]",
  },
  {
    title: "Savoria — Recipe Platform",
    year: "2026",
    category: "Full-Stack / AI",
    description:
      "A production-grade recipe discovery platform with an AI cooking assistant (RAG over real recipes), admin CMS, meal planner, shopping lists and a React Native app.",
    tags: ["Next.js", "TypeScript", "AI / LLM", "Monorepo"],
    url: "https://github.com/dariushishere-code/savoria",
    src: u("photo-1504674900247-0877df9cc836"),
    alt: "Savoria — recipe discovery platform",
    aspect: "aspect-[16/11]",
  },
  {
    title: "JuniorPath — Internships",
    year: "2026",
    category: "Web App",
    description:
      "A virtual remote internship platform for junior developers — a horizontal roadmap, real portfolio-ready projects and a clear path from junior to job-ready.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    url: "https://github.com/dariushishere-code/JuniorPath",
    src: u("photo-1522202176988-66273c2fd55f"),
    alt: "JuniorPath — virtual internship platform",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Aureum — Gold Marketplace",
    year: "2025",
    category: "Storefront",
    description:
      "A Next.js + Tailwind CSS storefront concept for a gold marketplace — bars, coins, jewelry, antique pieces — wrapped in a black / gold / ivory theme.",
    tags: ["Next.js", "Tailwind CSS", "Design System"],
    url: "https://github.com/dariushishere-code/Goldmarketplace",
    src: u("photo-1487958449943-2429e8be8625"),
    alt: "Aureum — gold marketplace storefront",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Slice — Pizza Restaurant",
    year: "2026",
    category: "Creative Build",
    description:
      "A highly interactive, gamified site for a pizza-slice restaurant with a CoinSlice currency system — pure HTML, CSS and JavaScript with zero frameworks.",
    tags: ["HTML", "CSS", "JavaScript", "Motion"],
    url: "https://github.com/dariushishere-code/slicePizza",
    src: "https://github.com/user-attachments/assets/e9e45c96-4d4a-4a23-93c4-5e4e76864f4c",
    alt: "Slice — pizza slice restaurant website",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Burger & Pie — Restaurant",
    year: "2026",
    category: "Creative Build",
    description:
      "A mobile-first luxury website for a gourmet burger & artisan pie concept — dark-and-gold aesthetic with layered scroll and interactive menu moments.",
    tags: ["HTML", "CSS", "JavaScript", "Motion"],
    url: "https://github.com/dariushishere-code/Meat-Pie-Resturant",
    src: "https://github.com/user-attachments/assets/35142337-7472-44db-b5f6-2d50b80e75cf",
    alt: "Burger & Pie — luxury gourmet restaurant",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Spotify Search — Full-Stack",
    year: "2026",
    category: "Full-Stack",
    description:
      "A Spotify-inspired search interface backed by a Node + Express API on the Spotify Web API — search songs, artists and albums with secure env-based auth.",
    tags: ["Node.js", "Express", "Spotify API"],
    url: "https://github.com/dariushishere-code/spotify-search-app",
    src: u("photo-1493225457124-a3eb161ffa5f"),
    alt: "Spotify Search — music search app",
    aspect: "aspect-square",
  },
  {
    title: "Quiz App — Open Trivia",
    year: "2026",
    category: "Web App",
    description:
      "A single-page quiz engine on the Open Trivia Database — filters, score tracking, a 15-second timer and full localStorage persistence so a refresh never loses progress.",
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    url: "https://github.com/dariushishere-code/QuizApp",
    src: u("photo-1526374965328-7f61d4dc18c5"),
    alt: "Quiz App — Open Trivia questions",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Service UI",
    year: "2026",
    category: "UI Recreation",
    description:
      "A pixel-close recreation of a light-themed salon / barbershop Services + Order interface, built with nothing but HTML and CSS.",
    tags: ["HTML", "CSS", "Service Design"],
    url: "https://github.com/dariushishere-code/services-ui",
    src: u("photo-1560066984-138dadb4c035"),
    alt: "Service UI — salon services interface",
    aspect: "aspect-[16/11]",
  },
  {
    title: "This Portfolio",
    year: "2026",
    category: "Portfolio",
    description:
      "The site you are on right now — Next.js 15 + Tailwind v4 + Framer Motion, dark theme, horizontal project rail, photo archive, FAQ and Turkish on the language list.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    url: "https://alirezaebrahimi.tech",
    src: u("photo-1460925895917-afdab827c52f"),
    alt: "Alireza Ebrahimi portfolio website",
    aspect: "aspect-square",
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
  "WebGL",
  "Three.js",
  "Tailwind CSS",
  "Framer Motion",
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

export const focus = [
  "HTML",
  "CSS",
  "JavaScript",
  "React / Next.js",
  "Responsive Design",
  "Performance",
  "Bug Hunting",
  "Photography",
];

export const toolbox = [
  "Tailwind CSS",
  "Three.js / WebGL",
  "Framer Motion",
  "Node.js / Express",
  "REST APIs",
  "Git / GitHub",
  "Figma",
  "Netlify",
  "SEO / A11y",
  "Debugging / QA",
  "Photography / Lightroom",
];

export const nowLine =
  "Currently exploring — WebGL scenes, creative shaders, motion systems — and a 50mm lens that never leaves my bag.";

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
    a: "Yes — photography is a real part of who I am. Light, composition and patience from the camera carry directly into how I design interfaces. Some of my favourite frames live in the photo archive on this site.",
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

export const gallery = [
  { src: "https://dev.alirezaebrahimi.tech/webp/Carpet.webp", alt: "Carpet" },
  { src: "https://dev.alirezaebrahimi.tech/webp/Dress.webp", alt: "Dress" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_0250.webp", alt: "IMG_0250" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_0251.webp", alt: "IMG_0251" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_0261.webp", alt: "IMG_0261" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_0262.webp", alt: "IMG_0262" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_0341.webp", alt: "IMG_0341" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_0359.webp", alt: "IMG_0359" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_0371.webp", alt: "IMG_0371" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_0372.webp", alt: "IMG_0372" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_0443.webp", alt: "IMG_0443" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_0593.webp", alt: "IMG_0593" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_0595.webp", alt: "IMG_0595" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_0628.webp", alt: "IMG_0628" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_0630.webp", alt: "IMG_0630" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_0651.webp", alt: "IMG_0651" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_0732.webp", alt: "IMG_0732" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1145.webp", alt: "IMG_1145" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1155.webp", alt: "IMG_1155" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1158.webp", alt: "IMG_1158" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1185.webp", alt: "IMG_1185" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1220.webp", alt: "IMG_1220" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1239.webp", alt: "IMG_1239" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1251.webp", alt: "IMG_1251" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1252.webp", alt: "IMG_1252" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1283.webp", alt: "IMG_1283" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1289.webp", alt: "IMG_1289" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1303.webp", alt: "IMG_1303" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1355.webp", alt: "IMG_1355" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1359.webp", alt: "IMG_1359" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1360.webp", alt: "IMG_1360" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1362.webp", alt: "IMG_1362" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1366.webp", alt: "IMG_1366" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1368.webp", alt: "IMG_1368" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_1385.webp", alt: "IMG_1385" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190314_202306_052.webp", alt: "IMG_20190314_202306_052" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190319_203904_509.webp", alt: "IMG_20190319_203904_509" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190324_222346_236.webp", alt: "IMG_20190324_222346_236" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190403_114236_896.webp", alt: "IMG_20190403_114236_896" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190403_214415_222.webp", alt: "IMG_20190403_214415_222" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190404_161624_648.webp", alt: "IMG_20190404_161624_648" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190405_151452_422.webp", alt: "IMG_20190405_151452_422" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190407_191509_607.webp", alt: "IMG_20190407_191509_607" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190411_211555_407.webp", alt: "IMG_20190411_211555_407" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190502_183152_164.webp", alt: "IMG_20190502_183152_164" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190506_194147_584.webp", alt: "IMG_20190506_194147_584" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190507_180812_276.webp", alt: "IMG_20190507_180812_276" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190508_200705_960.webp", alt: "IMG_20190508_200705_960" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190530_144145_791.webp", alt: "IMG_20190530_144145_791" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190629_144554_090.webp", alt: "IMG_20190629_144554_090" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190709_214916_402.webp", alt: "IMG_20190709_214916_402" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190710_221048_630.webp", alt: "IMG_20190710_221048_630" },
  { src: "https://dev.alirezaebrahimi.tech/webp/IMG_20190721_201604_129.webp", alt: "IMG_20190721_201604_129" },
  { src: "https://dev.alirezaebrahimi.tech/webp/Lady with beautiful eyes.webp", alt: "Lady with beautiful eyes" },
  { src: "https://dev.alirezaebrahimi.tech/webp/LRM_EXPORT_14700023858339_20190806_214822223.webp", alt: "LRM_EXPORT_14700023858339_20190806_214822223" },
  { src: "https://dev.alirezaebrahimi.tech/webp/LRM_EXPORT_14937612377363_20190806_215219812.webp", alt: "LRM_EXPORT_14937612377363_20190806_215219812" },
  { src: "https://dev.alirezaebrahimi.tech/webp/LRM_EXPORT_34914323241126_20190805_213949262.webp", alt: "LRM_EXPORT_34914323241126_20190805_213949262" },
  { src: "https://dev.alirezaebrahimi.tech/webp/LRM_EXPORT_35143776676976_20190805_214338716.webp", alt: "LRM_EXPORT_35143776676976_20190805_214338716" },
  { src: "https://dev.alirezaebrahimi.tech/webp/LRM_EXPORT_48673052026106_20190801_230048648.webp", alt: "LRM_EXPORT_48673052026106_20190801_230048648" },
  { src: "https://dev.alirezaebrahimi.tech/webp/LRM_EXPORT_51001152038083_20190801_233936748.webp", alt: "LRM_EXPORT_51001152038083_20190801_233936748" },
  { src: "https://dev.alirezaebrahimi.tech/webp/LRM_EXPORT_51265916921836_20190801_234401513.webp", alt: "LRM_EXPORT_51265916921836_20190801_234401513" },
  { src: "https://dev.alirezaebrahimi.tech/webp/The CHAIR.webp", alt: "The CHAIR" },
];

