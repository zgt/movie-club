# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Movie Club** application built with the create-t3-turbo monorepo structure using Turborepo. The application is a curated movie subscription service that delivers personalized DVD selections monthly with exclusive forum access for subscribers.

### Movie Club Concept

- **Personalized Curation**: Users input movie preferences to receive hand-picked monthly recommendations tailored to their unique tastes
- **Physical Media**: Monthly featured movies are shipped as DVDs with custom artwork and handwritten curator notes explaining the selection
- **Exclusive Community**: Each DVD includes a unique access code for joining movie-specific discussion forums
- **Verified Viewers**: Only users who received and watched the specific movie can access that film's forum discussions
- **Collector's Experience**: DVDs feature custom artwork, exclusive bonus content, and personal curator notes

The project includes both web (Next.js) and mobile (Expo) frontends sharing the same backend for a unified user experience across platforms. The service combines the tactile experience of physical media with the connectivity of digital communities.

## Architecture

- **Monorepo Structure**: Turborepo with workspace packages in `apps/`, `packages/`, and `tooling/`
- **Frontend Apps**: 
  - `apps/nextjs/` - Next.js 15 web app with React 19
  - `apps/expo/` - Expo SDK 53 React Native app with React 19
- **Shared Packages**:
  - `@acme/api` - tRPC v11 router definitions and type inference
  - `@acme/db` - Drizzle ORM with PostgreSQL (Supabase) and schema definitions
  - `@acme/auth` - Better Auth configuration with Discord OAuth and Expo support
  - `@acme/ui` - shadcn/ui components for shared UI elements
  - `@acme/validators` - Zod validation schemas
- **Tooling**: Shared ESLint, Prettier, Tailwind, and TypeScript configurations

## Essential Commands

### Development
```bash
# Install dependencies
pnpm i

# Start all development servers (web + mobile)
pnpm dev

# Start only Next.js web app
pnpm dev:next

# Start Android/iOS
pnpm android  # or pnpm ios
```

### Database Operations
```bash
# Push schema changes to database
pnpm db:push

# Open Drizzle Studio (database GUI)
pnpm db:studio

# Generate Better Auth schema (required after auth config changes)
pnpm auth:generate
```

### Code Quality
```bash
# Type checking across all packages
pnpm typecheck

# Linting with auto-fix
pnpm lint:fix

# Formatting with auto-fix
pnpm format:fix

# Check workspace dependencies
pnpm lint:ws
```

### Building
```bash
# Build all packages and apps
pnpm build

# Clean build artifacts
pnpm clean
pnpm clean:workspaces
```

### UI Components
```bash
# Add new shadcn/ui components interactively
pnpm ui-add
```

## Key Technical Details

### Package Manager
- Uses **pnpm** with workspace protocol for internal dependencies
- Package catalog for shared external dependencies (React, tRPC, etc.)
- Hoisted node linker for better performance

### Authentication
- **Better Auth** with Drizzle adapter for PostgreSQL
- Discord OAuth provider configured
- OAuth proxy plugin for stable callback URLs in development
- Expo-specific auth handling via `@better-auth/expo`
- Auth schema must be generated with `pnpm auth:generate` before use

### Database
- **PostgreSQL** via Supabase with edge-compatible driver
- **Drizzle ORM** with schema-first approach
- Auth schema auto-generated in `packages/db/src/auth-schema.ts`
- Main schema in `packages/db/src/schema.ts`

### API Layer
- **tRPC v11** for type-safe client-server communication
- Router definitions in `packages/api/src/router/`
- Type inference helpers exported from `@acme/api`
- Separate client setups for Next.js and Expo

### Environment Setup
Environment variables in `.env` (copy from `.env.example`):
- `POSTGRES_URL` - Supabase connection string
- `AUTH_SECRET` - Better Auth secret (generate with `openssl rand -base64 32`)
- `AUTH_DISCORD_ID` / `AUTH_DISCORD_SECRET` - Discord OAuth credentials

### Workspace Dependencies
Always use workspace protocol for internal packages:
```json
"@acme/db": "workspace:*"
```

### Testing
No specific test framework configured - check individual package.json files for test scripts if added.

## Development Workflow

1. **Initial Setup**: `pnpm i` → copy `.env.example` to `.env` → `pnpm db:push` → `pnpm auth:generate`
2. **Development**: Use `pnpm dev` for hot reloading across all apps
3. **Schema Changes**: Modify schema → `pnpm db:push` → restart dev servers
4. **Auth Changes**: Modify auth config → `pnpm auth:generate` → restart
5. **Quality Checks**: Run `pnpm typecheck`, `pnpm lint:fix`, `pnpm format:fix` before commits

## Important Notes

- Never run individual package managers (npm, yarn) - always use pnpm
- Auth schema generation (`pnpm auth:generate`) is required after any Better Auth configuration changes
- The OAuth proxy plugin requires a production URL for stable callback handling
- Expo app requires the Next.js API to be deployed for production authentication
- Replace `@acme` namespace with your organization name when customizing