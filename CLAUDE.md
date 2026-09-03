# Repository Guidelines

## Project Structure & Module Organization

This is an npm-managed **Astro** portfolio deployed to **Cloudflare Pages**, using TypeScript and Tailwind CSS v4.

- `src/pages/` contains routes: `.astro` pages, `404.astro`, the static `robots.txt.ts` endpoint, and the `api/send-email.ts` POST endpoint.
- `src/layouts/layout.astro` is the shared page shell (head/SEO, theme script, scroll restoration).
- `src/components/` holds shared UI; `src/components/ui/` holds reusable primitives (`badge.astro`, `button.astro`, `button.tsx`, `input.tsx`, `toast.tsx`); page sections and their hardcoded content arrays live in `src/components/sections/`.
- `src/validation/` holds Zod schemas; `src/styles/global.css` holds theme tokens, design tokens, and global CSS.
- `public/` stores static assets: `projects/` (project images), `companies/` (employer logos), fonts, the résumé PDF, profile image, favicon, and SEO thumbnail.
- Root configuration lives in `astro.config.mjs`, `wrangler` config, `tsconfig.json`, and `biome.json`.

Use the `@/*` alias for imports from `src/`. Keep route-specific code near its route and reusable UI in `components/` (primitives in `components/ui/`).

## Build, Test, and Development Commands

Use npm; `package-lock.json` is the source of dependency resolution.

- `npm install` installs dependencies.
- `npm run dev` starts the dev server at `http://localhost:4321`.
- `npm run build` creates a production build and runs type validation.
- `npm run preview` serves the production build locally.
- `npm run deploy` builds and deploys via `wrangler`.
- `npm run lint` runs Biome checks; `npm run format` rewrites with Biome formatting.

## Coding Style & Naming Conventions

Biome enforces two-space indentation, recommended rules, and organized imports. Use strict TypeScript and double quotes. Component and asset filenames are **kebab-case / lowercase** (e.g. `layout.astro`, `section-title.astro`, `noise` removed in favor of CSS). React components are PascalCase in code; Astro components are imported under a PascalCase local name regardless of filename.

Prefer static Astro/HTML; reach for a React island (`client:*`) only when interactivity requires it. Icons are inline `<svg>` at the call site — do not add an icon library. Keep color-theme keys (`default`, `teal`, `azure`, `crimson`, `aurora`) synchronized between the inline script in `layout.astro`, the toggle logic in `navbar.astro`, and the CSS variables in `src/styles/global.css`.

## Testing Guidelines

No automated test runner is configured. Before submitting changes, run `bun run lint` and `bun run build`, then manually verify affected routes and responsive states. For UI changes, check light/dark and all color themes (`default`, `teal`, `azure`, `crimson`, `aurora`), and verify scroll restoration and the contact form.

## Security & Configuration

The contact endpoint calls Resend with the `RESEND_API_KEY` secret from the Pages Function runtime. Provide it through `.env` locally and Cloudflare Pages Variables and Secrets in production. `.env*`/`.dev.vars` are intentionally ignored — never commit credentials.

## Commit & Pull Request Guidelines

Follow Conventional Commit style: `feat(projects): ...`, `refactor(layout): ...`, `perf(noise): ...`, or `chore(deps): ...`. Keep commits focused and imperative. Pull requests should explain behavior changes, list validation performed, link related issues, and include screenshots for visual changes. Call out new environment variables or configuration changes explicitly.
