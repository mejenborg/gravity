import { Navigation } from '@/components/Navigation';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Outlet, RootRoute } from '@tanstack/react-router';

export const rootRoute = new RootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Gravity
          </Typography>
          <Navigation />
        </Toolbar>
      </AppBar>

      <Container component="main" sx={{ flex: 1, py: 4 }}>
        <Outlet />
      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
        }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          © 2026 Gravity. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
