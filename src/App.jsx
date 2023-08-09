import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import TaskRoot from "./pages/TaskRoot";
import TasksPage, { taskLoader } from "./pages/Tasks";
import TaskDetailPage, {
  taskDetailLoader,
  action as deleteTaskAction,
} from "./pages/TaskDetail";
import NewTaskPage from "./pages/NewTask";
import { action as manipulateTaskAction } from "./components/TaskForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "tasks",
        element: <TaskRoot />,
        children: [
          { index: true, element: <TasksPage />, loader: taskLoader },
          {
            path: ":taskId",
            id: "task-detail",
            loader: taskDetailLoader,
            children: [
              {
                index: true,
                element: <TaskDetailPage />,
                action: deleteTaskAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewTaskPage />,
            action: manipulateTaskAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
