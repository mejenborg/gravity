import { Box, Button } from '@mui/material';
import { Link as RouterLink, useLocation } from '@tanstack/react-router';

export function Navigation() {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button
        component={RouterLink}
        to="/"
        color="inherit"
        variant={location.pathname === '/' ? 'outlined' : 'text'}
      >
        Home
      </Button>
      <Button
        component={RouterLink}
        to="/about"
        color="inherit"
        variant={location.pathname === '/about' ? 'outlined' : 'text'}
      >
        About
      </Button>
    </Box>
  );
}
