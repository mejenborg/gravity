import AppsIcon from '@mui/icons-material/Apps';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Link as RouterLink, useLocation } from '@tanstack/react-router';

export const DRAWER_WIDTH = 240;

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', path: '/', icon: <DashboardIcon /> },
  { label: 'AI Tasks', path: '/tasks', icon: <AutoAwesomeIcon /> },
  { label: 'Connected Apps', path: '/apps', icon: <AppsIcon /> },
  {
    label: 'Notifications',
    path: '/notifications',
    icon: <NotificationsIcon />,
  },
];

function SidebarHeader() {
  return (
    <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
      <Typography variant="h6" fontWeight="bold">
        Gravity
      </Typography>
    </Box>
  );
}

function SidebarItem({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <ListItem disablePadding>
      <ListItemButton component={RouterLink} to={item.path} selected={active}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.label} />
      </ListItemButton>
    </ListItem>
  );
}

function SidebarNavList() {
  const { pathname } = useLocation();
  return (
    <List>
      {NAV_ITEMS.map((item) => (
        <SidebarItem
          key={item.path}
          item={item}
          active={pathname === item.path}
        />
      ))}
    </List>
  );
}

export function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box' },
      }}
    >
      <SidebarHeader />
      <SidebarNavList />
    </Drawer>
  );
}
