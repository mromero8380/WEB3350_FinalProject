import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import TaskRoot from "./pages/TaskRoot";
import TasksPage, { taskLoader } from "./pages/Tasks";
import TaskDetailPage, { taskDetailLoader } from "./pages/TaskDetail";

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
            element: <TaskDetailPage />,
            loader: taskDetailLoader,
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
