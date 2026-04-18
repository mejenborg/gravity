import { RouterProvider, createRouter } from '@tanstack/react-router';
import { rootRoute } from './routes/__root';
import { appsRoute } from './routes/apps';
import { indexRoute } from './routes/index';
import { notificationsRoute } from './routes/notifications';
import { taskDetailRoute } from './routes/taskDetail';
import { tasksRoute } from './routes/tasks';

const routeTree = rootRoute.addChildren([
  indexRoute,
  tasksRoute,
  taskDetailRoute,
  appsRoute,
  notificationsRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
