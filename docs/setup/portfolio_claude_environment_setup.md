# Claude Code environment: setup guide

How to work on this portfolio with the same Claude Code environment. Project rules and design rules are in the root [`CLAUDE.md`](../../CLAUDE.md), which Claude reads automatically.

## What's in the environment

| Tool | Role | Where it comes from |
|---|---|---|
| UI/UX Pro Max (7 skills) | Design system and UX guidance | Committed in `.claude/skills/` |
| Taste (`design-taste-frontend`) | Creative direction and visual refinement | Committed in `.claude/skills/` |
| Motion (`motion/react`) | Main React animation library | `client/package.json` |
| GSAP | Complex timelines and scroll animation only | `client/package.json` |
| Playwright MCP | Browser inspection and testing | `.mcp.json` |

21st.dev is **not used**, because its component code and generation are paid. To recreate a design, give Claude a screenshot or link and it builds the component by hand.

## Prerequisites

- **Node.js 22+** (Taste needs 22; the app itself builds on 20+)
- **Google Chrome** (used by Playwright MCP and Taste's checks)
- **Python 3** (for UI/UX Pro Max search scripts; on Windows use `python`, not `python3`)
- **Claude Code** (CLI, desktop app or VS Code extension)

## Setup

```bash
git clone https://github.com/mahadi0007/Portfolio-website.git
cd Portfolio-website/client
npm ci
npm run dev        # http://localhost:5173/Portfolio-website/
```

Then open the **repo root** (not `client/`) in Claude Code:

1. When asked, approve the **`playwright`** MCP server from `.mcp.json`.
2. Check that the skills `ui-ux-pro-max` and `design-taste-frontend` appear in Claude Code's skills list. There's nothing to install, because they're committed.

## Rules to know

- **Pushing to `main` deploys the live site** (GitHub Pages). Work on a branch.
- **Free tools only.** Don't add paid services or call metered APIs.
- Run every npm command from `client/`.
- Lint has 4 errors that predate this setup (listed in `CLAUDE.md`). Don't add new ones.
- Taste has a Stop hook that only runs once a Taste build is armed (`.taste-skill/build.json`). It can then hold Claude's turn open until its checks pass.

## Updating a tool

- Skills: `npx -y ui-ux-pro-max-cli@<version> init --ai claude` and `npx -y skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend" --agent claude-code -y` from the repo root, then commit the changed `.claude/skills/`.
- Playwright MCP: change the pinned version in `.mcp.json`.

The full history of how this was set up is in [`ENVIRONMENT_AUDIT.md`](ENVIRONMENT_AUDIT.md) and [`ENVIRONMENT_SETUP_REPORT.md`](ENVIRONMENT_SETUP_REPORT.md).
