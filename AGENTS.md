<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Overview

Single-page Persian (RTL) resume/portfolio site built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Bun**.

## Commands

- **Package manager:** Bun (not npm/yarn/pnpm)
- `bun dev` — start dev server
- `bun build` — production build
- `bun lint` — ESLint (flat config, ESLint 9)

No test suite, no typecheck script, no CI workflows.

## Structure

All source code lives in `src/app/`. The app is a single client-rendered page:

- `src/app/layout.tsx` — root layout, sets `lang="fa" dir="rtl"`
- `src/app/(navigation)/page.tsx` — the entire app (1000+ line client component)
- `src/app/feature/content.js` — all resume data (profile, skills, experience, projects)
- `src/app/feature/icons.js` — SVG icon components
- `src/app/globals.css`, `style.css`, `fonts.css` — Tailwind + custom styles

## Key Conventions

- **RTL layout:** All UI is right-to-left. Navigation, timeline, grid ordering all follow RTL.
- **Dark mode:** Toggle-based, persisted in `localStorage`. Uses Tailwind `dark:` variant via custom variant (`@custom-variant dark (&:where(.dark, .dark *))`) — not the default.
- **Tailwind v4:** Uses `@tailwindcss/postcss` plugin. No `tailwind.config.*` file — configuration is in CSS via `@theme inline`.
- **Font:** Vazirmatn (Persian), set in `style.css` body.
- **No API routes, no server components, no data fetching.** Everything is static and client-side.

## Content Editing

To change resume content (name, skills, experience, projects), edit `src/app/feature/content.js`. This is the single source of truth for all displayed data.
