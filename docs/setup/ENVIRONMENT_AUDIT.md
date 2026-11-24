# Environment Audit — Portfolio-website

**Date:** 2026-11-23
**Phase:** A (read-only inspection; no application files changed)
**Repository:** https://github.com/mahadi0007/Portfolio-website
**Local path:** `porfolio-website modify/Portfolio-website`

---

## 1. Git state

| Item | Value |
|---|---|
| Branch | `main` (tracking `origin/main`, up to date) |
| Other remote branches | `origin/dev` (behind `main`; latest is `0ec9a37`) |
| Working tree | Clean on a fresh clone. The only new file is this one, which is untracked. |
| Total commits | 38 |
| Last 5 commits | `037ccc3` cursor pointer in Navbar + ThemeToggle · `42b226f` GitHub link button on landing · `b58858a` merge PR #6 from dev · `0ec9a37` experience section update, CV button hidden · `c977e44` site title → "Md Mahadi Hasan" |

## 2. Architecture summary

The app is a single-page React app built with Vite. It lives in the **`client/`** subfolder, not at the repo root.

```
Portfolio-website/
├── .github/workflows/deploy.yml   GitHub Pages deploy on push to main
├── .gitignore                     node_modules, dist, .env, .vite, .DS_Store
└── client/                        ← all app code, package.json, lockfile
    ├── index.html                 title "Md Mahadi Hasan", favicon.svg
    ├── vite.config.js             react() + tailwindcss() plugins, base '/Portfolio-website/'
    ├── tailwind.config.js         v3-style config (darkMode: "class"); effectively unused under v4
    ├── eslint.config.js           flat config: js recommended + react-hooks + react-refresh
    ├── public/                    favicon.svg, icons.svg, Md_Mahadi_Hasan_CV.pdf
    └── src/
        ├── main.jsx               ThemeProvider → HashRouter → Navbar / Routes / Footer
        ├── App.jsx                Home page: Hero + 8 sections, each wrapped in <SectionReveal>
        ├── pages/AllProjects.jsx  route "/projects"
        ├── sections/              Hero, About, Skills, Experience, Projects, Research,
        │                          Education, Achievements, Contact
        ├── components/            Navbar (329 lines), Footer, ProjectModal, ScrollToTop,
        │                          SectionReveal, ThemeToggle
        ├── context/ThemeContext   dark/light via `.dark` on <html>, saved in localStorage, default dark
        ├── data/projects.js       project content and images
        ├── index.css              Tailwind import, dark variant, CSS vars --bg-main / --text-main
        ├── App.css                Leftover Vite template CSS; **not imported anywhere**
        └── assets/                profile photo, 10 project PNGs, Profile.pdf
```

- **Routing:** `react-router-dom` 7 with `HashRouter` (works on GitHub Pages without server rewrites). Two routes: `/` and `/projects`.
- **Size:** about 1,900 lines of JSX/JS across 20 source files.
- **Language:** plain JavaScript (`.jsx`). There is no TypeScript, even though `@types/react` is installed.

## 3. Stack and versions

| Area | Declared | Resolved (lockfile) |
|---|---|---|
| Framework / bundler | Vite `^8.0.1` | **8.0.8** (Rolldown-based) |
| React / React DOM | `^19.2.4` | **19.2.5** |
| Router | react-router-dom `^7.14.1` | 7.14.1 |
| Styling | Tailwind CSS `^4.2.2` + `@tailwindcss/vite` | 4.2.2 |
| Animation | framer-motion `^12.38.0` | 12.38.0 (motion-dom 12.38.0) |
| Icons | react-icons `^5.6.0` | 5.6.0 |
| Icons (stray) | `react-icon` `^1.0.0` | 1.0.0, an unrelated, unused package |
| Lint | eslint 9.39.4, react-hooks 7, react-refresh 0.5 | |
| Component library | **None.** Everything is hand-written Tailwind. | |

**Node requirement:** Vite 8, plugin-react 6 and Rolldown need `^20.19.0 || >=22.12.0`. CI uses Node **20**, which installs the latest 20.x and passes.
**Local tools:** Node **v24.15.0**, npm **11.12.1**, Python **3.12.10** (only as `python`, because `python3` is a Microsoft Store stub).

**Package manager:** **npm**, with `client/package-lock.json` (lockfileVersion 3). No pnpm or yarn files. All npm commands must run in `client/`.

## 4. Commands (run from `client/`)

| Purpose | Command | Exists? |
|---|---|---|
| Dev server | `npm run dev` | ✅ (`vite`) |
| Lint | `npm run lint` | ✅ (`eslint .`) |
| Typecheck | — | ❌ none (JS project) |
| Build | `npm run build` | ✅ (`vite build` → `client/dist`) |
| Preview | `npm run preview` | ✅ |
| Tests | — | ❌ none |

### Baseline results (before any setup changes)

**`npm ci`** — ✅ succeeded. Only `client/node_modules` was created, and it's git-ignored.

**`npm run build`** — ✅ **passes** (458 modules, built in about 0.9 s).
- JS bundle 415.9 kB (129.9 kB gzip), CSS 42.0 kB.
- ⚠️ Project PNGs are **1.6–3.4 MB each** (about 25 MB total). This is the main performance problem for the redesign.

**`npm run lint`** — ❌ **fails with 4 errors that were already there:**

| File | Error | Note |
|---|---|---|
| `src/components/Navbar.jsx:32` | `react-hooks/set-state-in-effect`: `setActiveSection("")` called synchronously in an effect | Real issue (React Compiler-era rule) |
| `src/components/SectionReveal.jsx:1` | `'motion' is defined but never used` | **False positive:** used as `<motion.div>`. The ESLint config has no JSX-uses-vars rule. |
| `src/components/SectionReveal.jsx:3` | `'delay' is assigned a value but never used` | Real: the prop is ignored and the delay is hard-coded to `0.05` |
| `src/context/ThemeContext.jsx:37` | `react-refresh/only-export-components` (exports `useTheme` hook alongside provider) | Dev-only HMR warning promoted to error |

CI only runs `npm ci` and `npm run build`, **not lint**, so these errors don't block deploys.

**`npm audit`** — 13 advisories (1 low, 2 moderate, 10 high). They're in transitive or dev tooling (`@babel/core`, `brace-expansion`, `postcss`, `nanoid`, `source-map-js`, `browserslist`, …) and also in **`vite` 8.0.0–8.1.5** and **`react-router` ≤ 7.18.1**. `npm audit fix` is available. I haven't run it, because the brief says not to upgrade dependencies wholesale.

## 5. Existing relevant dependencies

- **Animation:** `framer-motion` 12.38.0 is installed and used in exactly **one** file, `SectionReveal.jsx` (fade-up on scroll, `once: true`). **No GSAP.** The newer `motion` package is **not** installed.
- **Reduced motion:** **Not handled.** Nothing in the code checks `prefers-reduced-motion` or uses `MotionConfig reducedMotion`.
- **Theme:** class-based dark mode (`@custom-variant dark` in `index.css`) driven by `ThemeContext`.
- **Fonts:** `index.css` sets `font-family: "Inter"`, but **Inter is never loaded** (no Google Fonts link or `@font-face`). The site falls back to the system sans-serif.
- **Tailwind config:** `tailwind.config.js` is v3-style. Tailwind v4 with `@tailwindcss/vite` ignores it unless it's referenced with `@config`, so dark mode actually comes from the CSS `@custom-variant`.

## 6. Claude Code, skills and MCP configuration

| Item | Status |
|---|---|
| `CLAUDE.md` (repo or `client/`) | ❌ none |
| `.claude/` in repo | ❌ none |
| `.mcp.json` in repo | ❌ none |
| User-level MCP servers (`~/.claude.json`) | none configured (names checked only) |
| Project-level MCP servers for this folder | none |
| User skills | Only the synced claude.ai skills (docx, pdf, pptx, xlsx, docs, etc.). **None of UI/UX Pro Max, Taste, or 21st.dev are present.** |
| Plugins | Only a built-in store entry. **No 21st.dev or Taste plugin.** |
| Playwright / browser tests | ❌ none (no Playwright, Vitest, Jest or Cypress) |

## 7. Build and deployment

- **GitHub Actions** `.github/workflows/deploy.yml`: on every **push to `main`**, it runs Node 20 → `npm ci` → `npm run build` in `client/`, then deploys `client/dist` to **GitHub Pages**.
- Vite `base: '/Portfolio-website/'` matches the Pages URL path.
- ⚠️ **Any push to `main` deploys the live site.** Redesign work should happen on a separate branch (e.g. `redesign`) and be merged only after review.

## 8. Missing tools

| Tool | Status | Needed for |
|---|---|---|
| UI/UX Pro Max skill | Missing | Phase B |
| Taste skill (`design-taste-frontend`) | Missing | Phase C |
| 21st.dev MCP / plugin | Missing (needs your browser login) | Phase D |
| `motion` package | Missing, but `framer-motion` 12 is the same library | Phase E |
| `gsap` package | Missing | Phase E |
| Playwright MCP | Missing | Phase F |
| `CLAUDE.md` | Missing | Phase G |

## 9. Compatibility risks

1. **App lives in `client/`.** Skill installers and `npm install` must run in the right folder. Skills and `CLAUDE.md` usually go at the repo root, while npm packages go in `client/`.
2. **`framer-motion` vs `motion`.** `motion` is the renamed successor of `framer-motion` (same team, same v12 engine). Installing both would bundle two copies. **Recommendation:** replace `framer-motion` with `motion` and change the one import in `SectionReveal.jsx` to `motion/react`, or keep `framer-motion` for now. This touches one application file, so I'll need your approval.
3. **GSAP and React 19.** GSAP is framework-agnostic. `@gsap/react` (the `useGSAP` hook) is optional and supports React 19. It isn't needed until we actually write scroll timelines.
4. **Vite 8 / Rolldown is very new.** Some 21st.dev components assume shadcn/ui, TypeScript, `@/` path aliases, `cn()`/`clsx`/`tailwind-merge`, or Radix. This project has none of these. Each component will need adapting to JSX and a local alias, or the helper dependencies added one at a time.
5. **Tailwind v4.** Components written for Tailwind v3 (with `tailwind.config.js` theme extensions) need their tokens moved into `@theme` in CSS.
6. **CI uses Node 20** while you run Node 24 locally. This is fine for now. Bumping CI to Node 22 LTS would be safer later.
7. **Python.** UI/UX Pro Max search scripts may call `python3`, which here is a Microsoft Store stub. They may need `python` or `py` instead.
8. **Lint already fails**, so after setup "lint passes" isn't the bar. The bar is "no new lint errors."
9. **Large images** (about 25 MB of PNGs) will hurt any animation-heavy redesign on mobile unless they're compressed or converted to WebP/AVIF.
10. **Pushing to `main` auto-deploys.** Never push setup or redesign work straight to `main`.

## 10. Recommended preparation steps

1. **Phase B:** install UI/UX Pro Max **project-local at the repo root** (`npx ui-ux-pro-max-cli init --ai claude`), then check its Python usage.
2. **Phase C:** install Taste with the `npx skills add …` route, run from the repo root.
3. **Phase D:** you run the 21st.dev `/plugin` commands and complete the browser login yourself. I'll then check the tools are discoverable.
4. **Phase E:** **Decided (2026-11-23): use `motion`.** Inside `client/`: `npm install motion gsap`, `npm uninstall framer-motion`, then change the one import in `SectionReveal.jsx` from `framer-motion` to `motion/react`.
5. **Phase F:** add Playwright MCP with the official command (`claude mcp add playwright npx @playwright/mcp@latest`, to be confirmed against current Microsoft docs), scoped to this project.
6. **Phase G:** create a root `CLAUDE.md` with the tool table and design rules. Note that the app is in `client/`, that pushing to `main` deploys, and that lint errors already exist.
7. **Phase H:** re-run `npm run lint` and `npm run build` and compare them against the baseline above.
8. **Later (not part of setup):** create a `redesign` branch, fix the 4 lint errors, load the intended font, remove the unused `App.css` and `react-icon`, compress the images, and add `prefers-reduced-motion` handling.

## 11. Progress log (handoff for the next Claude Code session)

Brief: `../portfolio_claude_environment_setup.md` (one level above this repo).

| Step | Status |
|---|---|
| 0 Clone repo | ✅ Done |
| 1 Phase A audit | ✅ Done (this file) |
| 2 Phase B UI/UX Pro Max | ✅ Installed project-local with `npx -y ui-ux-pro-max-cli@2.15.0 init --ai claude` → `.claude/skills/` (7 skills: ui-ux-pro-max, design-system, ui-styling, design, brand, banner-design, slides). The user chose to **keep all 7**. `python .claude/skills/ui-ux-pro-max/scripts/search.py --help` works; on Windows use `python`, not `python3`. **Verified 2026-11-23:** all 7 skills appear in Claude Code's skills list with the repo open as the workspace. |
| 3 Phase C Taste | ✅ Installed project-local (option 1) with `npx -y skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend" --agent claude-code -y` → `.claude/skills/design-taste-frontend/` (tasteskill 2.5.1, upstream commit `6c0b5c7`; 1,631 files, about 39 MB). Also created `skills-lock.json` at the repo root. Claude Code discovers the skill. **Installer security scan:** Gen "Critical", Snyk "Med", Socket 0 alerts. **Manual review (sampled):** no exfiltration or credential access found. Scripts start local headless Chrome/Edge over CDP to check pages. Env reads are limited to Chrome paths, temp dirs and the skill's own flags. Network use: photo, font and map sources, plus localhost. **Caveat:** SKILL.md declares a **Stop hook** (`node scripts/gate.mjs --hook claude`, 600 s timeout). It exits immediately unless `.taste-skill/build.json` is armed, but once a build is armed it can block Claude from stopping until its checks pass (capped). Needs Node 22+ (have 24) and Chrome (found). Option 2 (plugin route) was **not** run: doing both would duplicate the skill. |
| 4 Phase D 21st.dev | ⏭️ **Skipped by user decision (2026-11-23), because of cost:** fetching component code and generation are metered, and the user does not want to spend money. Nothing was installed, no API key was created, and no env var was set. Replacement workflow: the user supplies design screenshots or links, and Claude rebuilds them by hand with Tailwind + `motion`, guided by UI/UX Pro Max and Taste. Original pre-check notes follow for reference. Pre-check done (2026-11-23): not installed. No 21st plugin or marketplace, no MCP servers (user or project), no `.mcp.json`, no `21st` CLI, `API_KEY_21ST` not set. **The current official docs differ from the brief:** auth is an **API key** (from https://21st.dev/settings/api-keys), not browser login. The plugin reads the key from the `API_KEY_21ST` env var and sends it as an `x-api-key` header to `https://21st.dev/api/mcp`. The docs don't mention `21st login` / `install-skill`. Route chosen: **plugin** (`/plugin marketplace add 21st-dev/claude-code-plugin`, then `/plugin install 21st@21st`). It bundles the MCP server and the CLI skills, so the CLI `init` route is not used, which avoids a duplicate MCP entry. Search is free; component code and generation are metered. **Waiting on user:** create the key, set the env var, install the plugin, restart. |
| 5 Phase E Motion + GSAP | ✅ Done (2026-11-23), in `client/`. Ran `npm install motion@^12.38.0 gsap@^3.15.1`, then `npm uninstall framer-motion`. One import changed in `src/components/SectionReveal.jsx`: `framer-motion` → `motion/react`. Resolved versions: **motion 12.43.0** (brings in framer-motion 12.43.0 as its only copy; motion-dom 12.43.0, motion-utils 12.39.0) and **gsap 3.15.1**. Lockfile changes are limited to these packages. I deliberately did **not** take motion 14.14.0 (latest): it's a two-major jump released 2026-11-13, and the upgrade can be weighed during the redesign. **Build:** ✅ passes (JS 416.3 kB / 130.0 kB gzip, baseline 415.9 / 129.9). **Lint:** the same 4 errors as before; nothing new. No animation code was added. `@gsap/react` was not installed (optional; add it when the first GSAP timeline is written). |
| 6 Phase F Playwright MCP | ✅ Configured (2026-11-23). The official README command is `claude mcp add playwright npx @playwright/mcp@latest`. The `claude` CLI isn't on PATH (VS Code extension only), so I wrote the project-scope equivalent by hand: **`.mcp.json` at the repo root** → `cmd /c npx -y @playwright/mcp@0.0.85 --browser chrome --isolated --headless --output-dir .playwright-mcp`. Pinned 0.0.85 (released 2026-11-09; 0.0.86 was 5 days old). It uses the installed Chrome, so no `npx playwright install` and no browser download. `--isolated` means an in-memory profile that never touches the user's Chrome logins. It contains no secrets. Added `.playwright-mcp/` to `.gitignore`. **Verified outside Claude Code:** the server starts (Playwright 1.66.0-alpha) and lists 25 tools (`browser_navigate`, `browser_take_screenshot`, `browser_snapshot`, `browser_click`, `browser_emulate_media`, `browser_console_messages`, …), and a test page was navigated and screenshotted successfully. **Verified inside Claude Code (same session, no restart needed):** the `mcp__playwright__*` tools loaded, and navigate, screenshot and close worked. Output landed in `.playwright-mcp/` (git-ignored). The README notes that Microsoft's Playwright CLI + skills is a more token-efficient alternative for coding agents; not adopted. |
| 7 Phase G CLAUDE.md | ✅ Created a root `CLAUDE.md` (2026-11-23; none existed before). It covers the ground rules (main deploys, step-by-step, free tools only, no redesign until approved, no secrets), project facts, commands, the 4 existing lint errors, the tool table (21st.dev marked skipped), the brief's design rules, and known follow-ups. |
| 8 Phase H verification | ✅ Done (2026-11-23). Build passes (462 modules, JS 416.3 kB). Lint shows the same 4 errors as before, none new. Audit unchanged (13). Playwright smoke test of the production build: 9 sections reveal on scroll, 0 console errors or warnings. No secret patterns found in the setup files. Branch still level with `origin/main`; nothing committed. |
| 9 Final report | ✅ `ENVIRONMENT_SETUP_REPORT.md` written. **Setup complete: STOPPED, waiting for the user's approval before any redesign.** |
| 10 Handoff (2026-11-24) | ✅ User decisions: commit `.claude/skills/` (option 1, so other developers get identical skills), keep the brief but shortened. I created the branch **`redesign`** from `main` and moved the brief, this audit and the setup report to `docs/setup/`. The in-repo brief was rewritten as a short, current developer setup guide; the original full brief still exists outside the repo at `../portfolio_claude_environment_setup.md`. I added a root `README.md` and a docs pointer in `CLAUDE.md`. All setup work is committed in one commit on `redesign` (`4a6df04`; repo-local author "Mahadi Hasan <mahadi@example.com>", by user choice). **Pushed to `origin/redesign` on 2026-11-24 at the user's request**; `main` and the live site are untouched. Redesign implementation has still not started. |

Decisions: use `motion` and remove `framer-motion` (Phase E). The user wants step-by-step work, and each step waits for their go-ahead.

---
*No secrets or `.env` values were read or recorded. No application files were changed. Nothing was committed, pushed or deployed.*
