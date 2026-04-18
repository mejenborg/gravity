# Gravity

A full-stack application with a NestJS GraphQL backend and React frontend.

## Workspace Structure

- **`apps/backend`** - NestJS with GraphQL, TypeORM, MariaDB
- **`apps/frontend`** - React with TanStack Router, Material-UI, Vite

## Tech Stack

### Backend

- NestJS + Apollo GraphQL
- TypeORM + MariaDB
- TypeScript

### Frontend

- React 19
- TanStack Router (type-safe, file-based routing)
- Material-UI v6
- Vite
- TypeScript

### Shared

- pnpm workspaces
- ESLint + Prettier

## Quick Start

### Install dependencies

```bash
pnpm install
```

### Run backend (dev)

```bash
pnpm --filter @gravity/backend start:dev
```

Runs on `http://localhost:3000` (GraphQL playground available)

### Run frontend (dev)

```bash
pnpm --filter @gravity/frontend dev
```

Runs on `http://localhost:3000`

## Common Commands

From repository root:

```bash
# Lint & format
pnpm lint
pnpm lint:fix
pnpm format

# Build all apps
pnpm --filter @gravity/backend build
pnpm --filter @gravity/frontend build

# Test
pnpm --filter @gravity/backend test
```

## Documentation

- [Backend README](apps/backend/README.md) - Database setup, environment config, GraphQL schema
- [Frontend README](apps/frontend/README.md) - Routing patterns, component structure
