import { DRAWER_WIDTH, Sidebar } from '@/components/Sidebar';
import AppsIcon from '@mui/icons-material/Apps';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import {
  Outlet,
  RootRoute,
  Link as RouterLink,
  useLocation,
} from '@tanstack/react-router';

export const rootRoute = new RootRoute({
  component: RootLayout,
});

type MobileNavValue = 'dashboard' | 'tasks' | 'apps' | 'notifications';

function getMobileNavValue(pathname: string): MobileNavValue {
  if (pathname.startsWith('/task') || pathname.startsWith('/tasks'))
    return 'tasks';
  if (pathname.startsWith('/apps')) return 'apps';
  if (pathname.startsWith('/notifications')) return 'notifications';
  return 'dashboard';
}

function MobileBottomNav() {
  const { pathname } = useLocation();
  const value = getMobileNavValue(pathname);
  return (
    <BottomNavigation
      showLabels
      value={value}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        display: { md: 'none' },
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <BottomNavigationAction
        label="Home"
        value="dashboard"
        component={RouterLink}
        to="/"
        icon={<DashboardIcon />}
      />
      <BottomNavigationAction
        label="Tasks"
        value="tasks"
        component={RouterLink}
        to="/tasks"
        icon={<AutoAwesomeIcon />}
      />
      <BottomNavigationAction
        label="Apps"
        value="apps"
        component={RouterLink}
        to="/apps"
        icon={<AppsIcon />}
      />
      <BottomNavigationAction
        label="Alerts"
        value="notifications"
        component={RouterLink}
        to="/notifications"
        icon={<NotificationsIcon />}
      />
    </BottomNavigation>
  );
}

function PageContent() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: { xs: 2, sm: 3 },
        minHeight: '100vh',
        bgcolor: 'grey.50',
        width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
        pb: { xs: 10, md: 3 },
      }}
    >
      <Outlet />
      <MobileBottomNav />
    </Box>
  );
}

function RootLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Sidebar />
      </Box>
      <PageContent />
    </Box>
  );
}
