# Frontend - Gravity

React SPA with type-safe routing and Material-UI components.

## Stack

- **React 19** - UI framework
- **TanStack Router** - Type-safe, file-based routing
- **Material-UI v6** - Component library
- **Vite** - Build tool
- **TypeScript** - Type safety

## Prerequisites

- Node.js + pnpm

## Installation & Running

```bash
# Install dependencies (from repo root)
pnpm install

# Start dev server (from repo root)
pnpm --filter @gravity/frontend dev

# Or from apps/frontend
pnpm dev
```

Dev server runs on `http://localhost:3000`

## Available Commands

```bash
pnpm dev              # Start dev server (HMR enabled)
pnpm build            # TypeScript check + Vite build
pnpm preview          # Preview production build locally
pnpm lint             # Check code quality
pnpm lint:fix         # Auto-fix lint issues
```

## Project Structure

```
src/
├── routes/            # File-based route definitions
│   ├── __root.tsx     # Root layout (AppBar, Navigation, Footer)
│   ├── index.tsx      # Home page (/)
│   └── about.tsx      # About page (/about)
├── components/        # Reusable React components
├── App.tsx            # Router configuration
└── main.tsx           # React entry point + MUI theme
```

## Routing Pattern

Routes are defined in `src/routes/` using TanStack Router's type-safe API. Similar to Expo Router's file-based approach but with explicit route definitions.

**Navigate programmatically:**

```tsx
import { useNavigate } from '@tanstack/react-router';

const nav = useNavigate();
nav({ to: '/about' });
```

**Declarative navigation:**

```tsx
import { Link } from '@tanstack/react-router';

<Link to="/about">About</Link>;
```

## GraphQL Integration

Frontend has no server-side compute. Calls the backend GraphQL API directly.

**To integrate Apollo Client:**

```bash
pnpm add @apollo/client graphql
```

Add provider in `main.tsx` and create queries/mutations in components.

## Build Output

```bash
pnpm build
```

Outputs to `dist/` (~410KB gzipped).

## Styling

Material-UI components use Emotion for styling. Theme is configured in `src/main.tsx` and can be customized via `createTheme()`.
