import { TaskStatusChip } from '@/components/TaskStatusChip';
import { mockApps, mockNotifications, mockTasks, type Task } from '@/data/mock';
import AppsIcon from '@mui/icons-material/Apps';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { Route, Link as RouterLink } from '@tanstack/react-router';
import { rootRoute } from './__root';

interface Stat {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

const STATS: Stat[] = [
  {
    label: 'Connected Apps',
    value: mockApps.filter((a) => a.status === 'connected').length,
    icon: <AppsIcon />,
    color: '#1976d2',
  },
  {
    label: 'Active Tasks',
    value: mockTasks.filter((t) => t.status === 'running').length,
    icon: <AutoAwesomeIcon />,
    color: '#388e3c',
  },
  {
    label: 'Awaiting Approval',
    value: mockTasks.filter((t) => t.status === 'awaiting_approval').length,
    icon: <PendingActionsIcon />,
    color: '#f57c00',
  },
  {
    label: 'Unread Notifications',
    value: mockNotifications.filter((n) => !n.read).length,
    icon: <NotificationsIcon />,
    color: '#d32f2f',
  },
];

function StatCard({ stat }: { stat: Stat }) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ color: stat.color, display: 'flex' }}>{stat.icon}</Box>
          <Box>
            <Typography variant="h4" fontWeight="bold">
              {stat.value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {stat.label}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

function StatsRow() {
  return (
    <Grid container spacing={3}>
      {STATS.map((stat) => (
        <Grid item xs={12} sm={6} md={3} key={stat.label}>
          <StatCard stat={stat} />
        </Grid>
      ))}
    </Grid>
  );
}

function RecentTaskRow({ task }: { task: Task }) {
  return (
    <TableRow hover>
      <TableCell>
        <RouterLink to="/task/$taskId" params={{ taskId: task.id }}>
          {task.title}
        </RouterLink>
      </TableCell>
      <TableCell>{task.app}</TableCell>
      <TableCell>
        <TaskStatusChip status={task.status} />
      </TableCell>
    </TableRow>
  );
}

function RecentTasks() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Recent Tasks
      </Typography>
      <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
        <Table size="small">
          <TableBody>
            {mockTasks.slice(0, 3).map((task) => (
              <RecentTaskRow key={task.id} task={task} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function Index() {
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ fontSize: { xs: '1.75rem', sm: '2.125rem' } }}
      >
        Dashboard
      </Typography>
      <StatsRow />
      <Box sx={{ mt: 4 }}>
        <RecentTasks />
      </Box>
    </Box>
  );
}

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
});
