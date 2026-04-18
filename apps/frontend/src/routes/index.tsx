import { Box, Button, Typography } from '@mui/material';
import { Route, Link as RouterLink } from '@tanstack/react-router';
import { rootRoute } from './__root';

function Index() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to Gravity
      </Typography>
      <Typography variant="body1" paragraph>
        A modern React application with TanStack Router and Material-UI.
      </Typography>
      <Button variant="contained" component={RouterLink} to="/about">
        Learn More
      </Button>
    </Box>
  );
}

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
});
