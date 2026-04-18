import { TaskStatusChip } from '@/components/TaskStatusChip';
import { mockTasks } from '@/data/mock';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {
  Alert,
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Route, Link as RouterLink } from '@tanstack/react-router';
import { rootRoute } from './__root';

function TaskNotFound() {
  return (
    <Alert severity="error">
      Task not found. <RouterLink to="/tasks">Back to tasks</RouterLink>
    </Alert>
  );
}

function ApprovalActions() {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Button variant="contained" color="success" startIcon={<CheckIcon />}>
        Approve
      </Button>
      <Button variant="outlined" color="error" startIcon={<CloseIcon />}>
        Reject
      </Button>
    </Stack>
  );
}

function AiOutputSection({ output }: { output: string }) {
  if (!output) return null;
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        AI Output
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          bgcolor: 'grey.50',
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap',
          overflowX: 'auto',
        }}
      >
        {output}
      </Paper>
    </Box>
  );
}

function TaskDetail() {
  const { taskId } = taskDetailRoute.useParams();
  const task = mockTasks.find((t) => t.id === taskId);
  if (!task) return <TaskNotFound />;
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <RouterLink to="/tasks">← Back to tasks</RouterLink>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 1,
          flexWrap: 'wrap',
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontSize: { xs: '1.75rem', sm: '2.125rem' } }}
        >
          {task.title}
        </Typography>
        <TaskStatusChip status={task.status} />
        <Chip label={task.type} size="small" />
      </Box>
      <Typography color="text.secondary" gutterBottom>
        {task.app} · {task.createdAt}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <Typography paragraph>{task.summary}</Typography>
      <AiOutputSection output={task.aiOutput} />
      {task.status === 'awaiting_approval' && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Review
          </Typography>
          <ApprovalActions />
        </Box>
      )}
    </Box>
  );
}

export const taskDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/task/$taskId',
  component: TaskDetail,
});
