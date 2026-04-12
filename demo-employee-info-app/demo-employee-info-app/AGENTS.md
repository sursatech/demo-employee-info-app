# AGENTS.md

This file provides working instructions for coding agents in this service.

## Project

- Service: `demo-employee-info-app`
- Stack: React 18, TypeScript, Vite, Tailwind CSS
- Primary code location: `src/`

## Setup

- Install dependencies: `npm install`
- Run development server: `npm run dev -- --host 0.0.0.0 --port 5173`
- Run development server with Docker: `docker compose up --build`
- Build production Docker image: `docker build -t <image-name> .`
- Build production assets: `npm run build`
- Preview production build: `npm run preview`

## Validate Before Handoff

- Type check: `npm run type-check`
- Lint: `npm run lint`
- Full build validation: `npm run build:check`

## Implementation Guidelines

- Keep changes small and scoped to the requested behavior.
- Use TypeScript for app logic and keep module boundaries typed.
- Follow existing component and state patterns in `src/`.
- Prefer Tailwind utility classes over new global CSS.

## Testing Notes

- No dedicated `npm test` script is defined.
- For functional changes, at minimum run:
  - `npm run type-check`
  - `npm run lint`
  - `npm run build:check`

## Safety

- Do not commit secrets or credentials.
- Do not add or depend on `.env` files.
- Validate user input before rendering or persisting data.
