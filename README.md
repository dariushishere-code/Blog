# Kima Davidson — Digital Designer Portfolio

A premium, minimalist digital designer portfolio built with **Next.js 15 (App Router) + Tailwind CSS v4 + Framer Motion**.

## Design

- Soft off-white background, ink-black type, hairline borders
- Black & white photography as the main visual language
- Sticky left sidebar (profile, availability, CTA, clients, about, stats)
- Scrollable right content: works masonry, services, stack, experience, awards, testimonials, contact
- Subtle scroll-triggered Framer Motion reveals (respects `prefers-reduced-motion`)
- Fully responsive — the sidebar collapses into a hero block on mobile

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve production build
npm run typecheck  # tsc --noEmit
```

## Project structure

```
app/
  layout.tsx         # fonts, metadata
  page.tsx           # page composition (sidebar + sections)
  globals.css        # Tailwind v4 theme tokens (paper/ink/hairline/accent)
components/
  sidebar.tsx        # sticky left column
  works.tsx          # masonry project grid
  services.tsx       # numbered services
  stack.tsx          # tools
  experience.tsx     # timeline
  awards.tsx         # awards list
  testimonials.tsx   # quote cards
  contact.tsx        # reach out + socials
lib/
  content.ts         # all editable content (profile, projects, copy)
```

## Content

Everything editable lives in `lib/content.ts` — profile, works, services, stack,
experience, awards, testimonials and socials. Drop in your own Unsplash IDs or
local images by replacing the `src` values there.

> Works grid images are served from `images.unsplash.com` (configured via
> `next.config.ts` → `images.remotePatterns`).