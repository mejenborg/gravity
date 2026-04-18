import { mockNotifications, type GravityNotification } from '@/data/mock';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Route } from '@tanstack/react-router';
import { rootRoute } from './__root';

const TYPE_ICON: Record<GravityNotification['type'], React.ReactNode> = {
  task: <TaskAltIcon />,
  app: <AppsRoundedIcon />,
  system: <InfoOutlinedIcon />,
};

function NotificationItem({
  notification,
}: {
  notification: GravityNotification;
}) {
  return (
    <>
      <ListItem
        sx={{
          bgcolor: notification.read ? 'transparent' : 'action.hover',
          borderRadius: 1,
        }}
      >
        <ListItemIcon
          sx={{ color: notification.read ? 'text.disabled' : 'primary.main' }}
        >
          {TYPE_ICON[notification.type]}
        </ListItemIcon>
        <ListItemText
          primary={notification.message}
          secondary={notification.time}
          primaryTypographyProps={{
            fontWeight: notification.read ? 'normal' : 'medium',
          }}
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
}

function NotificationsHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3,
        gap: 2,
        flexWrap: 'wrap',
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { xs: '1.75rem', sm: '2.125rem' } }}
      >
        Notifications
      </Typography>
      <Button variant="outlined" startIcon={<NotificationsIcon />}>
        Mark all read
      </Button>
    </Box>
  );
}

function Notifications() {
  return (
    <Box>
      <NotificationsHeader />
      <List disablePadding>
        {mockNotifications.map((n) => (
          <NotificationItem key={n.id} notification={n} />
        ))}
      </List>
    </Box>
  );
}

export const notificationsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/notifications',
  component: Notifications,
});
