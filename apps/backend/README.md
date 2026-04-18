# Backend - Gravity

NestJS GraphQL API with TypeORM and MariaDB.

## Stack

- **NestJS** - Framework
- **Apollo GraphQL** - Code-first GraphQL API
- **TypeORM** - ORM
- **MariaDB** - Database

## Prerequisites

- Node.js + pnpm
- MariaDB (local or accessible)

## Environment Setup

Copy `.env.example` to `.env`:

```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=gravity
```

## Installation & Running

```bash
# Install dependencies (from repo root)
pnpm install

# Start dev server (from repo root)
pnpm --filter @gravity/backend start:dev

# Or from apps/backend
pnpm start:dev
```

Server runs on configured `PORT`. GraphQL playground: `http://localhost:3000/graphql`

## Available Commands

```bash
pnpm start:dev          # Start with hot reload
pnpm build              # Build for production
pnpm start:prod         # Run production build
pnpm lint               # Check code quality
pnpm lint:fix           # Auto-fix lint issues
pnpm test               # Run tests
pnpm test:cov           # Coverage report
```

## Database

- **Driver**: `mariadb`
- **Entity Discovery**: `src/**/*.entity.ts`
- **Synchronize**: Enabled in development, disabled in production
- **Migrations**: Use TypeORM migrations for production deployments

## GraphQL Schema

The schema is auto-generated at `src/schema.gql` from code-first definitions. Query it in the GraphQL playground.
