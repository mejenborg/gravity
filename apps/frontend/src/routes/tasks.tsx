import { TaskStatusChip } from '@/components/TaskStatusChip';
import { mockTasks, type Task } from '@/data/mock';
import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Route, Link as RouterLink } from '@tanstack/react-router';
import { rootRoute } from './__root';

const TYPE_COLOR: Record<Task['type'], 'default' | 'primary' | 'secondary'> = {
  feature: 'primary',
  advertisement: 'secondary',
  automation: 'default',
};

function TaskRow({ task }: { task: Task }) {
  return (
    <TableRow hover>
      <TableCell>
        <RouterLink to="/task/$taskId" params={{ taskId: task.id }}>
          {task.title}
        </RouterLink>
      </TableCell>
      <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>
        {task.app}
      </TableCell>
      <TableCell>
        <Chip label={task.type} color={TYPE_COLOR[task.type]} size="small" />
      </TableCell>
      <TableCell>
        <TaskStatusChip status={task.status} />
      </TableCell>
      <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
        {task.createdAt}
      </TableCell>
    </TableRow>
  );
}

function TasksHeader() {
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
        AI Tasks
      </Typography>
      <Button variant="contained" startIcon={<AddIcon />}>
        New Task
      </Button>
    </Box>
  );
}

function TaskTable() {
  return (
    <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>
              App
            </TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
              Created
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockTasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function Tasks() {
  return (
    <Box>
      <TasksHeader />
      <TaskTable />
    </Box>
  );
}

export const tasksRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/tasks',
  component: Tasks,
});
