# Portfolio — workspace root

The actual app is a **React + Vite + TypeScript** portfolio in the **`Blog/`** directory.

## Quick start (from this folder)

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server → **http://localhost:5173** |
| `npm run build` | Production build → `Blog/dist` |
| `npm run preview` | Build + serve production build → **http://localhost:4173** |
| `npm run typecheck` | TypeScript check (`tsc --noEmit`) |

Every command is forwarded to the `Blog/` project via `npm --prefix Blog`.

> The one-off Vite starter scaffold that previously sat at the root (and shadowed the
> real app in previews) was moved to `_vite-template-backup/`. It can be deleted.