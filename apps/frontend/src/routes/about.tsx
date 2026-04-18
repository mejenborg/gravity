import { Box, Paper, Typography } from '@mui/material';
import { Route } from '@tanstack/react-router';
import { rootRoute } from './__root';

function About() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        About
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1" paragraph>
          This is a React frontend application using TanStack Router for
          type-safe routing and Material-UI for components.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Tech Stack:
        </Typography>
        <Typography variant="body2" component="ul">
          <li>React 19</li>
          <li>
            TanStack Router - Type-safe routing with file-based organization
          </li>
          <li>Material-UI (MUI) v6 - Component library</li>
          <li>TypeScript - Type safety</li>
          <li>Vite - Fast build tool</li>
        </Typography>
      </Paper>
    </Box>
  );
}

export const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});
