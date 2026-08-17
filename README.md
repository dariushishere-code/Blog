# Alireza Ebrahimi — Portfolio

**Maximalism / Dopamine** redesign of a bilingual (EN · FA) frontend portfolio.

A dark, high-energy personal site for a frontend developer & photographer. The visual language rejects minimal restraint in favor of color rotation, stacked shadows, pattern layering, and playful motion — while keeping the original structure, i18n, and interactions intact.

---

## Design system: Maximalism / Dopamine

### Philosophy

**More is more.** Empty space is treated as wasted opportunity. Patterns clash on purpose, accents rotate section by section, and interactive elements overshoot on hover. The emotional target is euphoric, Y2K-meets-hyperpop, digital maximalism — without sacrificing readability or accessibility on critical text.

### Color tokens

| Token | Hex | Role |
|--------|-----|------|
| Background | `#0D0D1A` | Deep cosmic purple-black |
| Foreground | `#FFFFFF` | Primary text (AAA contrast) |
| Muted surface | `#2D1B4E` | Cards, elevated panels |
| **Accent** (magenta) | `#FF3AF2` | Primary energy |
| **Secondary** (cyan) | `#00F5D4` | Digital glow |
| **Tertiary** (yellow) | `#FFE600` | Attention / active states |
| **Quaternary** (orange) | `#FF6B35` | Warm chaos |
| **Quinary** (purple) | `#7B2FFF` | Mystical depth |

**Section rotation:** major sections cycle accents (hero → magenta, work → cyan, about → yellow/orange, contact → orange, gallery → yellow/purple). Borders intentionally clash with backgrounds (e.g. yellow border on magenta areas).

### Typography

| Role | Family | Notes |
|------|--------|--------|
| Headings | **Outfit** | 700–900, tight tracking, multi-layer text shadows |
| Body | **DM Sans** | Readable in busy layouts |
| Display / accent | **Bangers** | Sparingly, if needed |
| Mono / HUD | **JetBrains Mono** | Labels, codes, EN/FA switch |
| Persian (RTL) | **Vazirmatn** | Body + display when `lang="fa"` |

Hero name and key titles use **stacked text shadows** (purple → magenta → cyan) and, on accent words, **animated gradient text**.

### Borders, shadows, patterns

- Borders: mostly `4px`–`6px`, solid or dashed; colors from the accent set
- Shadows: hard offset stacks (`6px/12px` in two colors) + soft colored glows
- Global layers: fixed dot grid + diagonal stripes + radial mesh on `body`
- Cards / gallery frames: thick accent borders + multi-layer box shadows, rotating by index

### Motion

- Float / bounce / wiggle on decorative shapes
- Pulse-glow on primary CTAs
- Gradient-shift on hero name and header scan line
- Scroll reveals and 3D gallery transforms preserved from the original build
- All continuous animation respects `prefers-reduced-motion`

---

## Project structure

```
.
├── index.html          # Home: hero, work, about, contact
├── gallery.html        # Photography gallery (horizontal 3D track)
├── style.css           # Design tokens + full layout & RTL
├── script.js           # i18n, preloader, gallery, FX, nav
└── README.md
```

Production may map CSS/JS under `/css/` and `/js/`; local preview uses relative `./style.css` and `./script.js`.

Gallery images are expected under `./webp/` (referenced by `gallery.html`).

---

## Features

- **Bilingual EN / FA** with `localStorage` persistence and a short page transition on switch
- **RTL layout** when Persian is active (`dir="rtl"`, Vazirmatn, mirrored nav/hover, no forced uppercase on Persian copy)
- **Hero name i18n:** `Alireza` / `Ebrahimi` → `علیرضا` / `ابراهیمی`
- Preloader, fixed header, mobile drawer nav
- Viking rune background + left glyph rail (desktop)
- Cursor soft light + hero flashlight (desktop, motion allowed)
- Work list, about stats, contact topo + particle mist
- Horizontal scroll / drag **3D gallery** with per-frame accent borders
- Accessible focus rings (double ring using accent + cyan)

---

## Getting started

1. Serve the folder over HTTP (needed for some fonts and consistent behavior):

   ```bash
   npx serve .
   # or: python -m http.server 8080
   ```

2. Open `index.html` in the browser.
3. Toggle **EN / FA** in the header to verify layout and copy.

No build step: plain HTML, CSS, and JS.

---

## Customization

### Tokens

All core colors, type scales, and radii live in `:root` at the top of `style.css`. Change accents there to re-theme the site.

### Copy & languages

Strings are in `script.js` under `translations.en` and `translations.fa`.  
Keys are applied via `data-i18n="…"`. Add a key in both locales and on the element to extend i18n.

Hero name:

```html
<span class="line" data-i18n="hero.name1">Alireza</span>
<span class="accent" data-i18n="hero.name2">Ebrahimi</span>
```

### Section accent

Section border and label colors are set per block in CSS (e.g. `.work`, `.about`, `.contact`). Adjust those rules to change the rotation order.

---

## Accessibility

- Primary text stays white on `#0D0D1A` (high contrast)
- Accent colors are decorative / labels, not sole carriers of meaning
- Focus: `outline` + offset ring in contrasting accents
- `prefers-reduced-motion: reduce` disables continuous animations and simplifies transitions
- Decorative shapes and pattern layers use `aria-hidden` where appropriate

---

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses:

- CSS custom properties, `color-mix`, logical properties (`inset-inline`, etc.)
- `backdrop-filter` on the header
- Canvas for contact particles (skipped on mobile / reduced motion)

---

## Credits

- Design direction: **Maximalism / Dopamine** system (color rotation, stacked shadows, pattern abundance)
- Site content & structure: Alireza Ebrahimi portfolio
- Fonts: [Outfit](https://fonts.google.com/specimen/Outfit), [DM Sans](https://fonts.google.com/specimen/DM+Sans), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono), [Vazirmatn](https://fonts.google.com/specimen/Vazirmatn) via Google Fonts

---

**Built with intention — and a little chaos.**
