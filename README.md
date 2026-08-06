# Bold Typography Portfolio

A personal portfolio built as **poster design translated to the web**. Typography is the visual language—color exists for contrast, space frames letterforms, and interaction reveals typographic detail.

Pure **HTML · CSS · JavaScript**. No frameworks, no build step.

---

## Features

- **Bold type system** — extreme scale contrast (up to ~8rem heroes), tight tracking on display, wide tracking on labels
- **Dark & light themes** — toggle in the header; preference saved to `localStorage` and respects `prefers-color-scheme`
- **Animated preloader** — mono counter + accent progress bar before content appears
- **Scroll reveals** — fade + slide-up on sections (respects `prefers-reduced-motion`)
- **Responsive** — mobile-first layout, adaptive type, hamburger nav under 768px
- **Accessible** — WCAG-minded contrast, visible focus rings, 44px touch targets, semantic structure
- **Zero border-radius** — sharp edges only, matching the typographic voice
- **Subtle grain** — fractal noise overlay for tactile depth

---

## Quick start

```bash
# Clone
git clone https://github.com/dariushishere-code/Blog.git
cd Blog

# Open in browser (or serve locally)
open index.html
# or
npx serve .
```

No install or build required. Edit the files and refresh.

---

### Theme

Theme is controlled by `data-theme` on `<html>`:

- `"dark"` — near-black background, warm white text (default design system)
- `"light"` — inverted surfaces, slightly deeper vermillion for contrast

Users can switch via the sun/moon button. Choice persists in `localStorage` under the key `theme`.

### Colors (design tokens)

Defined in `styles.css` under `:root` / `[data-theme="dark"]` and `[data-theme="light"]`:

| Token                | Dark      | Light     |
| -------------------- | --------- | --------- |
| `--background`       | `#0A0A0A` | `#FAFAFA` |
| `--foreground`       | `#FAFAFA` | `#0A0A0A` |
| `--muted`            | `#1A1A1A` | `#F0F0F0` |
| `--muted-foreground` | `#737373` | `#525252` |
| `--accent`           | `#FF3D00` | `#E63600` |
| `--border`           | `#262626` | `#E5E5E5` |

Accent is used sparingly: headlines, underlines, key CTAs, and focus rings.

---

## Project structure

```
.
├── index.html    # Markup + early theme script (prevents flash)
├── styles.css    # Design tokens, layout, components, themes
├── script.js     # Preloader, theme toggle, nav, scroll reveals
└── README.md
```

---

## Design principles

1. **Type as hero** — headlines are the visual centerpiece, not decoration
2. **Extreme scale contrast** — large gap between H1 and body
3. **Deliberate negative space** — generous section padding frames the type
4. **Strict hierarchy** — eye flows headline → subhead → body → action
5. **Restrained palette** — black, white, one accent

Motion is fast and decisive (`cubic-bezier(0.25, 0, 0, 1)`, 150–500ms). Primary buttons are text with an animated underline—no filled pills.

Fonts loaded from Google Fonts:

- **Inter Tight** / **Inter** — UI and headlines
- **Playfair Display** — optional display/serif moments
- **JetBrains Mono** — labels, stats, preloader

---

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses:

- CSS custom properties
- `color-mix()` for header backdrop (graceful fallback)
- `IntersectionObserver` for reveals
- `matchMedia` + `localStorage` for theme

---

## License

use it, fork it, make it yours.

---

## Credits

Design system inspired by editorial and poster typography. Built to be readable in the source and easy to extend.
