import { mockApps, type ConnectedApp } from '@/data/mock';
import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import { Route } from '@tanstack/react-router';
import { rootRoute } from './__root';

function AppStatusChip({ status }: { status: ConnectedApp['status'] }) {
  return (
    <Chip
      label={status}
      color={status === 'connected' ? 'success' : 'default'}
      size="small"
    />
  );
}

function AppCardHeader({ app }: { app: ConnectedApp }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        mb: 1,
      }}
    >
      <Typography variant="h6">{app.name}</Typography>
      <AppStatusChip status={app.status} />
    </Box>
  );
}

function AppCard({ app }: { app: ConnectedApp }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <AppCardHeader app={app} />
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {app.description}
        </Typography>
        <Typography variant="caption" color="text.secondary" display="block">
          Last activity: {app.lastActivity}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {app.taskCount} tasks
        </Typography>
      </CardContent>
    </Card>
  );
}

function AppsHeader() {
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
        Connected Apps
      </Typography>
      <Button variant="contained" startIcon={<AddIcon />}>
        Connect App
      </Button>
    </Box>
  );
}

function Apps() {
  return (
    <Box>
      <AppsHeader />
      <Grid container spacing={3}>
        {mockApps.map((app) => (
          <Grid item xs={12} sm={6} md={4} key={app.id}>
            <AppCard app={app} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export const appsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/apps',
  component: Apps,
});
