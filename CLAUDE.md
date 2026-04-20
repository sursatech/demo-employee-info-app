# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

- Service: `demo-employee-info-app`
- Stack: React 18, TypeScript, Vite 7, Tailwind CSS 3
- Source: `src/`
- Dev server port: `5173` (configured in `vite.config.ts`)

## Common commands

- Install: `npm install`
- Dev server: `npm run dev` (binds to `0.0.0.0:5173`)
- Build: `npm run build`
- Type check: `npm run type-check`
- Lint: `npm run lint`
- Full build validation: `npm run build:check`
- Preview production build: `npm run preview`

## Validation before handoff

For any functional change, run:

- `npm run type-check`
- `npm run lint`
- `npm run build:check`

## Conventions

- TypeScript for app logic; keep module boundaries typed.
- Follow existing component and state patterns in `src/`.
- Prefer Tailwind utility classes over new global CSS.
- Keep changes small and scoped to the requested behavior.

## Safety

- Do not commit secrets or credentials.
- Do not add or depend on `.env` files.
- Validate user input before rendering or persisting data.
