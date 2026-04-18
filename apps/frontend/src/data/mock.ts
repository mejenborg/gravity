export type TaskStatus =
  | 'pending'
  | 'running'
  | 'awaiting_approval'
  | 'completed'
  | 'rejected';

export interface Task {
  id: string;
  title: string;
  app: string;
  type: 'feature' | 'advertisement' | 'automation';
  status: TaskStatus;
  createdAt: string;
  summary: string;
  aiOutput: string;
}

export interface ConnectedApp {
  id: string;
  name: string;
  description: string;
  status: 'connected' | 'disconnected';
  lastActivity: string;
  taskCount: number;
}

export interface GravityNotification {
  id: string;
  message: string;
  time: string;
  read: boolean;
  type: 'task' | 'app' | 'system';
}

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Add dark mode toggle',
    app: 'Storefront',
    type: 'feature',
    status: 'awaiting_approval',
    createdAt: '2026-04-18',
    summary:
      'Implement a user-facing dark/light mode toggle in the navigation bar.',
    aiOutput:
      '```tsx\n// DarkModeToggle.tsx\nexport function DarkModeToggle() {\n  // implementation\n}\n```',
  },
  {
    id: '2',
    title: 'Generate Q2 ad copy',
    app: 'Marketing Hub',
    type: 'advertisement',
    status: 'completed',
    createdAt: '2026-04-17',
    summary: 'Create 5 ad copy variants for the Q2 spring campaign.',
    aiOutput:
      '**Variant A:** "Spring into savings..." **Variant B:** "Fresh deals, fresh season..."',
  },
  {
    id: '3',
    title: 'Auto-tag blog posts',
    app: 'Blog Engine',
    type: 'automation',
    status: 'running',
    createdAt: '2026-04-18',
    summary:
      'Automatically categorize and tag existing blog posts using AI classification.',
    aiOutput: '',
  },
  {
    id: '4',
    title: 'Refactor checkout flow',
    app: 'Storefront',
    type: 'feature',
    status: 'pending',
    createdAt: '2026-04-18',
    summary:
      'Simplify the checkout process to reduce drop-off at the payment step.',
    aiOutput: '',
  },
  {
    id: '5',
    title: 'Weekly performance report',
    app: 'Analytics',
    type: 'automation',
    status: 'completed',
    createdAt: '2026-04-15',
    summary: 'Generate and email the weekly metrics digest.',
    aiOutput: '**Report:** Active users up 12%, conversion rate 3.4%...',
  },
];

export const mockApps: ConnectedApp[] = [
  {
    id: '1',
    name: 'Storefront',
    description: 'E-commerce frontend with product catalog and checkout.',
    status: 'connected',
    lastActivity: '2 hours ago',
    taskCount: 12,
  },
  {
    id: '2',
    name: 'Marketing Hub',
    description: 'Campaign management, ad copy, and social scheduling.',
    status: 'connected',
    lastActivity: '1 day ago',
    taskCount: 8,
  },
  {
    id: '3',
    name: 'Blog Engine',
    description: 'Content publishing and SEO tooling.',
    status: 'connected',
    lastActivity: '10 minutes ago',
    taskCount: 5,
  },
  {
    id: '4',
    name: 'Analytics',
    description: 'Performance dashboards and reporting.',
    status: 'connected',
    lastActivity: '30 minutes ago',
    taskCount: 3,
  },
  {
    id: '5',
    name: 'CRM',
    description: 'Customer relationship and support ticketing.',
    status: 'disconnected',
    lastActivity: '1 week ago',
    taskCount: 0,
  },
];

export const mockNotifications: GravityNotification[] = [
  {
    id: '1',
    message: 'Task "Add dark mode toggle" requires your approval',
    time: '10 minutes ago',
    read: false,
    type: 'task',
  },
  {
    id: '2',
    message: 'Q2 ad copy generation completed successfully',
    time: '1 hour ago',
    read: false,
    type: 'task',
  },
  {
    id: '3',
    message: 'Blog Engine connected successfully',
    time: '3 hours ago',
    read: true,
    type: 'app',
  },
  {
    id: '4',
    message: 'Weekly performance report delivered',
    time: '2 days ago',
    read: true,
    type: 'task',
  },
  {
    id: '5',
    message: 'Gravity updated to v0.2.0',
    time: '3 days ago',
    read: true,
    type: 'system',
  },
];
