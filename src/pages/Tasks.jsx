import { json, useLoaderData } from "react-router-dom";
import TaskList from "../components/TaskList";

const TasksPage = () => {
  const tasks = useLoaderData();

  return <TaskList tasks={tasks} />;
};

export default TasksPage;

export async function taskLoader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "";

  const response = await fetch(
    "https://task-app-27674-default-rtdb.firebaseio.com/tasks.json"
  );

  const data = await response.json();

  if (mode.includes("incomplete")) {
    if (!response.ok) {
      throw json({ message: "Could not fetch tasks." }, { status: 500 });
    } else {
      const tasksWithIds = Object.keys(data).map((id) => ({ id, ...data[id] }));
      const filteredTasks = tasksWithIds.filter(
        (task) => task.isComplete === false
      );
      return filteredTasks;
    }
  } else if (mode.includes("complete")) {
    if (!response.ok) {
      throw json({ message: "Could not fetch tasks." }, { status: 500 });
    } else {
      const tasksWithIds = Object.keys(data).map((id) => ({ id, ...data[id] }));
      const filteredTasks = tasksWithIds.filter(
        (task) => task.isComplete === true
      );
      return filteredTasks;
    }
  }

  if (!response.ok) {
    throw json({ message: "Could not fetch tasks." }, { status: 500 });
  } else {
    const tasksWithIds = Object.keys(data).map((id) => ({ id, ...data[id] }));
    return tasksWithIds;
  }
}
