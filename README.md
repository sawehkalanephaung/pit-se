# PIT STEM Explorer

A modern single-page application built with Nx and React that showcases PIT's free, research-backed STEM simulations, community, and donation initiatives. The project emphasises modular UI composition, accessible components, and a design system implemented with Tailwind CSS.

## Table of Contents
- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Conventions](#conventions)
- [Troubleshooting](#troubleshooting)

## Quick Start

### Prerequisites
- **Node.js** v24.4.1 or newer
- **pnpm** v9.x (preferred) — install with `npm install -g pnpm`

### Clone & Install
```bash
# clone the repository
git clone https://github.com/<your-org>/pit-se.git
cd pit-se

# install dependencies using pnpm
pnpm install
```

### Run the App
```bash
# start the Vite dev server for the web app
pnpm dev
# or
nx run web:dev
```
- The application is served at `http://localhost:4200` by default.
- Hot Module Replacement (HMR) is enabled.

### Additional Commands
```bash
# run the unit test suite (Jest via Nx)
pnpm test

# perform static type checking
pnpm typecheck

# lint the project with ESLint and Nx
pnpm lint

# production build output (Vite)
pnpm build
```

> **Note:** The Nx Jest target relies on the Vite test configuration. If the test runner cannot load `apps/web/vite.config.ts`, ensure the file exists and the path is correct before running `pnpm test`.

## Tech Stack

| Category             | Technology | Version |
| ------------------- | ---------- | ------- |
| Monorepo tooling     | [Nx](https://nx.dev) | 21.5.3 |
| Language             | [TypeScript](https://www.typescriptlang.org/) | 5.9.x |
| Package manager      | [pnpm](https://pnpm.io) | 9.0.0 |
| Framework            | [React](https://react.dev) | 19.0.0 |
| Router               | [React Router DOM](https://reactrouter.com) | 6.29.0 |
| Bundler / Dev server | [Vite](https://vitejs.dev) | 7.x |
| Styling              | [Tailwind CSS](https://tailwindcss.com) | 3.4.x |
| Testing              | [Jest](https://jestjs.io) | 30.x |
| UI Testing           | [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) | 16.1.0 |
| E2E (optional)       | [Cypress](https://www.cypress.io) | 14.2.1 |

## Project Structure

```
apps/
 ├─ web/                  # React SPA (Vite)
 │   ├─ src/
 │   │   ├─ app/          # Feature modules, routes, layouts
 │   │   │   ├─ components # Reusable UI primitives
 │   │   │   ├─ sections   # Page-level sections (Hero, Browse Simulations, etc.)
 │   │   │   ├─ layouts    # Shared layout shells (MainLayout)
 │   │   │   └─ pages      # Route-level page compositions (Home)
 │   │   ├─ assets/       # Local images & illustrations
 │   │   └─ main.tsx      # SPA entry point
 │   └─ project.json      # Nx project configuration
 └─ web-e2e/              # Cypress setup (optional)
```

## Conventions
- **Component naming:** snake_case files for sections (e.g., `browse_simulations.tsx`), camelCase exports (e.g., `BrowseSimulations`).
- **Styling:** Tailwind CSS utility classes with minimal custom CSS. Shared styles live in component props.
- **Tests:** colocated in `*.spec.tsx` files using Testing Library and Jest.
- **Assets:** Stored under `apps/web/src/assets/`, imported via Vite for bundling.

## Troubleshooting
- **Tests fail to start:** Make sure `apps/web/vite.config.ts` can be imported by Nx Jest. Adjust the path or temporarily skip running `pnpm test` if the configuration is still being finalised.
- **Port conflicts:** Vite defaults to port `4200`. Override via `pnpm dev -- --port=<number>`.
- **Tailwind IntelliSense:** Install the Tailwind VSCode extension and ensure the workspace root contains `tailwind.config.js`.

---
Maintained by the PIT engineering team. Contributions via feature branches and pull requests are encouraged.
