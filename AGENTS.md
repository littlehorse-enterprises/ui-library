# AGENTS.md

This file provides guidance to AI coding agents (Codex, etc.) when working with code in this repository.

## Project Overview

This is `@littlehorse-enterprises/ui-library` — a React component library built on shadcn/ui and Radix UI primitives, providing reusable UI components for LittleHorse frontend projects.

## Commands

```bash
pnpm dev           # Start Vite dev server + Storybook concurrently
pnpm build         # Build library + regenerate package.json exports
pnpm lint          # Run ESLint
pnpm lint:fix      # Fix ESLint issues
pnpm test          # Run tests once
pnpm test:coverage # Run tests with coverage
pnpm test:ui       # Run tests with Vitest UI dashboard
```

To run a single test file:

```bash
pnpm exec vitest run src/button/index.test.tsx
```

The pre-commit hook (via the `pre-commit` framework, config in `.pre-commit-config-front.yaml`) runs lint:fix, test, and build. Commit messages must follow Conventional Commits format (`--strict`).

## Architecture

### Component Structure

Each component lives in `src/[component-name]/` with three colocated files:

- `index.tsx` — component implementation
- `index.stories.tsx` — Storybook stories
- `index.test.tsx` — Vitest unit tests

### Build & Export System

`vite build` compiles each component as a separate ES module entry point. After building, `scripts/generate-exports.js` scans `src/` and dynamically rewrites the `exports` field in `package.json`, creating per-component deep imports (e.g., `@littlehorse-enterprises/ui-library/button`).

### Key Patterns

**Styling:** CVA (`class-variance-authority`) for variant-based styling, `cn()` utility (`src/lib/utils.ts`) combining `clsx` + `tailwind-merge` for class merging. CSS uses Tailwind v4 with OKLch color tokens defined as CSS variables in `src/index.css`.

**Components:** Radix UI primitives (imported from the unified `radix-ui` package) underpin most interactive components. The `asChild` prop (via `Slot` from `radix-ui`) enables polymorphic rendering. All components use plain functions with `data-slot` attributes and `React.ComponentProps` — do not use `React.forwardRef`, `ElementRef`, `ComponentPropsWithoutRef`, or `displayName`.

**Forms:** `react-hook-form` + Zod via `@hookform/resolvers`. The `form/` component exposes `FormProvider`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, and `FormMessage`.

**Style conventions:** Prefer `outline-hidden` over `outline-none`, `type` over `interface`, `h-px` over `h-[1px]`.

**Path alias:** `@/*` resolves to `src/*`.

### Adding a New Component

1. Create `src/[component-name]/index.tsx` using plain functions with `data-slot` attributes, `React.ComponentProps`, and CVA for variants. Import Radix primitives from `radix-ui` (e.g., `import { Dialog as DialogPrimitive } from 'radix-ui'`). Do not use `forwardRef` or `displayName`.
2. Create colocated `.stories.tsx` and `.test.tsx` files
3. Run `pnpm build` to regenerate exports in `package.json`
