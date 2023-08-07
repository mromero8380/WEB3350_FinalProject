import { json, useLoaderData } from "react-router-dom";
import TaskList from "../components/TaskList";

const TasksPage = () => {
  const data = useLoaderData();
  const task = Object.values(data);

  return <TaskList tasks={task} />;
};

export default TasksPage;

export async function taskLoader() {
  const response = await fetch(
    "https://task-app-27674-default-rtdb.firebaseio.com/tasks.json"
  );

  if (!response.ok) {
    throw json({ message: "Could not fetch tasks." }, { status: 500 });
  } else {
    return response;
  }
}
