# Alireza Ebrahimi — Portfolio

A front-end developer portfolio built with **React 19 + Vite + Tailwind CSS v4 + Framer Motion**, deployed on **Netlify**.

## Design

- Editorial visual direction — deep space, ivory type, crimson, and a considered sans/serif type system
- Hero sits on **Etched Accretion**, a self-contained WebGL2 black-hole background (`src/components/ui/etched-accretion.tsx`)
- Typography-led hero with a hand-built process preview and responsive navigation
- Responsive header, availability, CTA, résumé, languages, about, and stats
- Horizontal **left-to-right scroll** project rail with original interface studies, arrow navigation, and scroll snap
- Sections: works, services, stack, experience, education, focus & toolbox, **FAQ (6 questions)**, contact
- Subtle scroll-triggered Framer Motion reveals (respects `prefers-reduced-motion`)
- Fully responsive — navigation and hero stack cleanly on mobile

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
directory `dist`, plus a catch-all SPA redirect so unknown routes serve the app
shell. From the repo root:

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
src/
  main.tsx           # React root — BrowserRouter + global styles
  App.tsx            # routes (/, 404)
  index.css          # Tailwind v4 theme tokens and shared design system
  pages/
    Home.tsx         # page composition (sidebar + sections)
    NotFound.tsx     # 404 fallback
  components/
    sidebar.tsx      # responsive editorial hero and navigation
    works.tsx        # horizontal scroll project rail
    faq.tsx          # accessible 6-question accordion
    services.tsx     # numbered services
    stack.tsx        # tools
    experience.tsx   # timeline + bullet points
    education.tsx    # education list
    capabilities.tsx # focus areas, toolbox, languages
    contact.tsx      # reach out + socials
    ui/              # reusable visual experiments
  lib/
    content.ts       # all editable content (profile, projects, copy)
```

## Content

Everything editable lives in `src/lib/content.ts` — profile, works, services,
stack, experience, education, focus, toolbox, languages, socials and FAQs.
Project-card art is drawn with inline SVG.