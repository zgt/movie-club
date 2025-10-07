# CRUSH.md
Monorepo uses pnpm@10.15.1 + Turbo across Next.js, Expo, and shared packages.

## Commands
Build all packages: `pnpm build`
Dev (watch): `pnpm dev`
Lint all: `pnpm lint`
Fix lint: `pnpm lint:fix`
Format check: `pnpm format`
Format write: `pnpm format:fix`
Typecheck all: `pnpm typecheck`
Run single package lint: `pnpm -F <package> lint`
Run single package typecheck: `pnpm -F <package> typecheck`
Tests currently not defined; add scripts per package before running single tests.

## Style
Prettier sorts imports via `@ianvs/prettier-plugin-sort-imports` and tailwind plugin; follow enforced order in tooling/prettier/index.js.
Use TypeScript strict mode with bundler resolution; favor type-only imports (`@typescript-eslint/consistent-type-imports`).
Avoid `process.env`; import typed `env` modules instead (`restrictEnvAccess` rule).
React components rely on compiler and functional components; no legacy head duplicate (Next config).
Prefer `cn` utility for class composition and Tailwind tokens from shared config.
Do not use non-null assertions or unused vars; prefix intentional unused with `_`.
Naming: shared packages under `@acme/*`, default exports uncommon; prefer named exports and PascalCase for components, camelCase for utilities.
Error handling: surface typed errors, avoid silent failure; use `trpc` procedures for validation with `zod/v4`.
Keep files comment-light, no added comments unless required; rely on props/TypeScript for documentation.
Use `dotenv` wrapper scripts (`pnpm with-env ...`) when running Next.js or db tasks to ensure env parity.
Use Tailwind from shared config; keep class lists alphabetized by plugin output.
Use `superjson` for TRPC data and `prefetch` pattern as in `apps/nextjs/src/app/page.tsx`.
When adding new UI components run `pnpm ui-add` for shadcn integration and format afterwards.
Ensure Expo builds via `pnpm android`/`pnpm ios` after configuring Expo CLI.
