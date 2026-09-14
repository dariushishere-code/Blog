# Alireza Ebrahimi — Portfolio

A premium, dark-themed front-end developer portfolio built with **Next.js 15 (App Router) + Tailwind CSS v4 + Framer Motion**, deployed on **Netlify**.

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
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve production build
npm run typecheck  # tsc --noEmit
```

## Deploying to Netlify

`netlify.toml` and the `@netlify/plugin-nextjs` dev dependency are already
configured — the plugin handles the Next.js build, ISR and image optimization
at deploy time, so **do not** pass `--dir`. From the repo root:

```bash
npm run build
npx netlify deploy --prod
```

> Using the CLI for the very first time? Run `npx netlify login` and
> `npx netlify init` once to link this folder to your Netlify site.

Or simply connect the repo in the Netlify dashboard — the build command,
Node version and plugin are picked up automatically.

## Project structure

```
app/
  layout.tsx         # fonts, metadata, dark theme base
  page.tsx           # page composition (sidebar + sections)
  gallery/page.tsx   # photo archive
  globals.css        # Tailwind v4 theme tokens (dark palette)
components/
  sidebar.tsx        # sticky left column with portrait photo
  works.tsx          # horizontal scroll project rail
  faq.tsx            # accessible 6-question accordion
  services.tsx       # numbered services
  stack.tsx          # tools
  experience.tsx     # timeline + bullet points
  education.tsx      # education list
  capabilities.tsx   # focus areas, toolbox, languages
  contact.tsx        # reach out + socials
lib/
  content.ts         # all editable content (profile, projects, copy)
public/
  profile.jpg        # portrait photo (sidebar + Open Graph)
```

## Content

Everything editable lives in `lib/content.ts` — profile, works, services, stack,
experience, education, focus, toolbox, languages, socials, FAQs and the gallery.
Gallery images are served from `dev.alirezaebrahimi.tech/webp/` (configured via
`next.config.ts` → `images.remotePatterns`); works images from
`images.unsplash.com` and `github.com/user-attachments/`.