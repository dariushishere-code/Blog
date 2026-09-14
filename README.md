# Alireza Ebrahimi — Portfolio

A premium, dark-themed front-end developer portfolio built with **React 19 + Vite + Tailwind CSS v4 + Framer Motion**, deployed on **Netlify**.

## Design

- Dark theme — near-black background, warm off-white type, hairline borders, green accent
- Real portrait photo (`public/profile.jpg`) in the sidebar
- Sticky left sidebar (photo, availability, CTA, résumé, languages, about, stats)
- Horizontal **left-to-right scroll** project rail with arrow navigation and scroll snap
- Sections: works, services, stack, experience, education, focus & toolbox, **FAQ (6 questions)**, contact
- Dedicated `/gallery` page — a photo archive served from `dev.alirezaebrahimi.tech`
- Subtle scroll-triggered Framer Motion reveals (respects `prefers-reduced-motion`)
- Fully responsive — the sidebar collapses into a hero block on mobile

## Languages

- Persian — Native · English — Professional · **Turkish — Beginner**

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000 (Vite dev server)
npm run build      # typecheck + production build → dist/
npm run preview    # serve the production build locally
npm run typecheck  # tsc --noEmit
```

## Deploying to Netlify

`netlify.toml` is already configured — build command `npm run build`, publish
directory `dist`, plus a catch-all SPA redirect so `/gallery` (and any unknown
route) serves the app shell. From the repo root:

```bash
npm run build
npx netlify deploy --prod
```

> Using the CLI for the very first time? Run `npx netlify login` and
> `npx netlify init` once to link this folder to your Netlify site.

Or simply connect the repo in the Netlify dashboard — the build command and
publish directory are picked up automatically.

## Project structure

```
index.html           # HTML shell, fonts, SEO + Open Graph metadata
vite.config.ts       # Vite config (@ alias → src/)
public/
  icon.svg           # favicon
  profile.jpg        # portrait photo (sidebar + Open Graph)
src/
  main.tsx           # React root — BrowserRouter + global styles
  App.tsx            # routes (/, /gallery, 404) + dotted background
  index.css          # Tailwind v4 theme tokens (dark palette)
  pages/
    Home.tsx         # page composition (sidebar + sections)
    Gallery.tsx      # photo archive
    NotFound.tsx     # 404 fallback
  components/
    sidebar.tsx      # sticky left column with portrait photo
    works.tsx        # horizontal scroll project rail
    faq.tsx          # accessible 6-question accordion
    services.tsx     # numbered services
    stack.tsx        # tools
    experience.tsx   # timeline + bullet points
    education.tsx    # education list
    capabilities.tsx # focus areas, toolbox, languages
    contact.tsx      # reach out + socials
    ui/              # dot pattern + liquid metal shader button
  lib/
    content.ts       # all editable content (profile, projects, copy)
```

## Content

Everything editable lives in `src/lib/content.ts` — profile, works, services,
stack, experience, education, focus, toolbox, languages, socials, FAQs and the
gallery. Gallery images are served from `dev.alirezaebrahimi.tech/webp/`; works
images from `images.unsplash.com` and `github.com/user-attachments/`.