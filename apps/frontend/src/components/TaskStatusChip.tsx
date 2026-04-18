import type { TaskStatus } from '@/data/mock';
import { Chip } from '@mui/material';

type ChipColor = 'default' | 'warning' | 'success' | 'error' | 'info';

const STATUS_CONFIG: Record<TaskStatus, { label: string; color: ChipColor }> = {
  pending: { label: 'Pending', color: 'default' },
  running: { label: 'Running', color: 'info' },
  awaiting_approval: { label: 'Awaiting Approval', color: 'warning' },
  completed: { label: 'Completed', color: 'success' },
  rejected: { label: 'Rejected', color: 'error' },
};

export function TaskStatusChip({ status }: { status: TaskStatus }) {
  const config = STATUS_CONFIG[status];
  return <Chip label={config.label} color={config.color} size="small" />;
}
