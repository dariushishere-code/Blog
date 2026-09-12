const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const profile = {
  name: "Kima Davidson",
  title: "Digital Designer",
  intro:
    "I design digital experiences — from modern websites and visual identities and graphic design — focused on clarity, usability, and strong visual storytelling.",
  about:
    "I'm Kima — a digital designer working with independent brands, startups and studios around the world. My work sits where timeless aesthetics meet modern usability: deliberate layouts, considered typography and visuals that always carry meaning.",
  email: "hello@kimadavidson.com",
  image: u("photo-1494790108377-be9c29b29330", 400),
  availability: true,
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const clients = [
  "NORTHWIND",
  "ATELIER",
  "KLIM",
  "MONO",
  "FORM&CO",
  "VERVE",
];

export const stats = [
  { value: "11+", label: "Years of experience" },
  { value: "60+", label: "Clients worldwide" },
  { value: "100+", label: "Projects delivered" },
  { value: "97%", label: "Client satisfaction rate" },
];

export type Work = {
  title: string;
  category: string;
  src: string;
  alt: string;
  aspect: string;
};

export const works: Work[] = [
  {
    title: "Pulse",
    category: "Visual Identity",
    src: u("photo-1487958449943-2429e8be8625"),
    alt: "Pulse — minimalist white architecture",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Eclipse",
    category: "Web Design",
    src: u("photo-1460925895917-afdab827c52f"),
    alt: "Eclipse — laptop with analytics dashboard",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Nova",
    category: "Branding",
    src: u("photo-1523275335684-37898b6baf30"),
    alt: "Nova — minimal product photography",
    aspect: "aspect-square",
  },
  {
    title: "Zenith",
    category: "Web Design",
    src: u("photo-1519389950473-47ba0277781c"),
    alt: "Zenith — team working at a desk",
    aspect: "aspect-[16/11]",
  },
  {
    title: "Ember",
    category: "Branding",
    src: u("photo-1522444195799-478538b28823"),
    alt: "Ember — design workspace",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Scarlet",
    category: "Graphic Design",
    src: u("photo-1441986300917-64674bd600d8"),
    alt: "Scarlet — minimal retail interior",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Aurelia",
    category: "Visual Identity",
    src: u("photo-1511818966892-d7d671e672a2"),
    alt: "Aurelia — minimal white architecture",
    aspect: "aspect-square",
  },
  {
    title: "Meridian",
    category: "Graphic Design",
    src: u("photo-1497366216548-37526070297c"),
    alt: "Meridian — minimal office interior",
    aspect: "aspect-[5/4]",
  },
];

export const services = [
  {
    n: "01",
    title: "Web Design",
    desc: "Modern, fast and conversion-focused websites — designed around the story of your brand and built with care for every detail.",
    tags: ["Framer", "UI / UX", "Responsive"],
  },
  {
    n: "02",
    title: "Branding",
    desc: "Complete visual identities — strategy, logo, typography and colour systems that make your brand unmistakable at every touchpoint.",
    tags: ["Identity", "Strategy", "Guidelines"],
  },
  {
    n: "03",
    title: "Graphic Design",
    desc: "Editorial layouts, posters and campaign assets — visual communication with strong hierarchy and a refined point of view.",
    tags: ["Editorial", "Posters", "Campaigns"],
  },
];

export const stack = [
  "Framer",
  "Figma",
  "Photoshop",
  "Illustrator",
  "Midjourney",
  "Spline",
];

export const experience = [
  {
    period: "2019 — Present",
    role: "Senior Digital Designer",
    org: "Studio Nova · Copenhagen",
  },
  {
    period: "2014 — 2019",
    role: "Product & Digital Designer",
    org: "Kayra Labs · Berlin",
  },
  {
    period: "2011 — 2014",
    role: "Graphic Designer",
    org: "Folk & Co · London",
  },
];

export const awards = [
  { year: "2024", title: "Awwwards — Site of the Day", project: "Zenith" },
  {
    year: "2023",
    title: "CSS Design Awards — Website of the Year",
    project: "Pulse",
  },
  { year: "2022", title: "Behance — Featured Project of the Year", project: "Eclipse" },
  { year: "2021", title: "The Webby Awards — Honoree", project: "Nova" },
];

export const testimonials = [
  {
    quote:
      "Kima has an exceptional eye for balance and detail. She took our brand from a rough idea to a full visual language we're proud to use every day.",
    name: "Lena Osprey",
    role: "Founder — Osprey Studio",
  },
  {
    quote:
      "One of the most considered designers we've ever worked with. Calm, precise and endlessly creative under pressure.",
    name: "Marco Delacroix",
    role: "Creative Director — Northwind",
  },
  {
    quote:
      "Our new website more than doubled conversion in the first quarter. Kima's design did the heavy lifting.",
    name: "Sofia Marek",
    role: "CEO — Form & Co",
  },
];

export const socials = [
  { label: "Behance", href: "https://behance.net/kimadavidson" },
  { label: "Dribbble", href: "https://dribbble.com/kimadavidson" },
  { label: "Instagram", href: "https://instagram.com/kimadavidson" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kimadavidson" },
  { label: "X / Twitter", href: "https://x.com/kimadavidson" },
];