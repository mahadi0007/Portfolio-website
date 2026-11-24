# Portfolio-website: notes for Claude Code

Personal portfolio for Md Mahadi Hasan. A single-page React app deployed to GitHub Pages.

## Ground rules (read first)

- **Pushing to `main` deploys the live site.** `.github/workflows/deploy.yml` builds and publishes on every push to `main`. Do redesign work on a separate branch (e.g. `redesign`). Never commit, push or deploy unless the user asks.
- **Work step by step.** Finish one step, report it, and wait for the user's go-ahead before the next.
- **Free tools only.** The user won't pay for tools or services. Never call metered or paid APIs. Ask before anything that could cost money.
- **Redesign has not been approved yet.** Don't change pages, styles or content until the user explicitly approves the redesign.
- **No secrets.** Never print, copy or commit API keys, tokens or `.env` values.

Setup guide for other developers: `docs/setup/portfolio_claude_environment_setup.md`. The setup history and progress log are in `docs/setup/ENVIRONMENT_AUDIT.md`.

## Project facts

- **The app lives in `client/`**, not the repo root. Run every npm command from `client/`. Skills, `.mcp.json` and this file live at the repo root.
- Stack: Vite 8 (Rolldown), React 19, react-router-dom 7 (`HashRouter`; routes `/` and `/projects`), Tailwind CSS v4 via `@tailwindcss/vite`, `motion` 12, `gsap` 3, `react-icons`. Plain JavaScript (`.jsx`), no TypeScript.
- Vite `base` is `/Portfolio-website/` (the GitHub Pages path). Keep it.
- Styling is hand-written Tailwind. There's no component library (no shadcn, Radix, `cn()` or `@/` alias).
- Dark mode is class-based: `ThemeContext` toggles `.dark` on `<html>`, and `index.css` defines `@custom-variant dark`. `tailwind.config.js` is v3-style and **ignored** by Tailwind v4. Put design tokens in CSS `@theme`.
- Layout: `src/main.jsx` (providers, router), `src/App.jsx` (home: Hero + sections wrapped in `SectionReveal`), `src/sections/*`, `src/components/*`, `src/pages/AllProjects.jsx`, `src/data/projects.js`.
- Package manager: **npm** (`client/package-lock.json`). Don't switch package managers or upgrade dependencies wholesale.
- Local Node is 24; CI uses Node 20. On Windows, use `python`, not `python3` (that's a Store stub).

## Commands (from `client/`)

| Task | Command |
|---|---|
| Dev server | `npm run dev` (http://localhost:5173/Portfolio-website/) |
| Build | `npm run build` (output in `client/dist`) |
| Preview build | `npm run preview` |
| Lint | `npm run lint` |
| Typecheck / tests | none |

**Lint already has 4 errors** (2026-11-23). The bar is "no new lint errors", not "lint passes":
`Navbar.jsx:32` setState in effect · `SectionReveal.jsx:1` `motion` unused (false positive) · `SectionReveal.jsx:3` `delay` unused · `ThemeContext.jsx:37` react-refresh only-export-components.

## Tool responsibilities

| Tool | Responsibility |
|---|---|
| UI/UX Pro Max (`.claude/skills/ui-ux-pro-max` + 6 companion skills) | Foundational design system and UX guidance |
| Taste (`.claude/skills/design-taste-frontend`) | Creative direction and visual refinement |
| ~~21st.dev~~ | **Skipped** (metered). Instead, the user supplies screenshots or links and Claude rebuilds components by hand. |
| Motion (`motion/react`) | Primary React animation library |
| GSAP | Complex timelines and scroll choreography only |
| Playwright MCP (`.mcp.json`) | Browser inspection and testing (installed Chrome, isolated, headless; output in `.playwright-mcp/`) |
| Claude Code | Repository analysis and implementation |

Taste notes: its Stop hook (`scripts/gate.mjs`) does nothing unless a Taste build is armed (`.taste-skill/build.json`). Once armed, it can block finishing until its checks pass. Taste aims at company sites; adapt its rules to a personal portfolio rather than following them literally.

## Design rules

- Establish one coherent design system before building new sections.
- Use UI/UX Pro Max for foundational UX and design-system decisions. Use Taste to refine creative direction without replacing that system.
- When rebuilding from a user's screenshot, match the layout and feel, but write original code and don't copy third-party branding or images.
- Keep typography, spacing, colour, borders and interaction patterns consistent.
- Prefer accessible, reusable, responsive components.
- Respect `prefers-reduced-motion` (e.g. `MotionConfig reducedMotion="user"`, `gsap.matchMedia()`).
- Avoid excessive glow, parallax, 3D and decorative animation. Keep mobile and low-powered devices in mind.
- Motion is the default. Use GSAP only where timelines or ScrollTrigger clearly help. Never animate the same element with both.
- Do not invent publications, research results, credentials, statistics or achievements.
- Preserve existing content unless the user approves changes.

## Known follow-ups (for the redesign, not done yet)

Fix the 4 lint errors · load the intended font (`Inter` is declared but never loaded) · remove the unused `src/App.css` and the stray `react-icon` package · compress project PNGs (1.6–3.4 MB each, about 25 MB total) to WebP/AVIF · add reduced-motion handling · consider `motion` v14 and running `npm audit fix` · consider bumping CI to Node 22.
