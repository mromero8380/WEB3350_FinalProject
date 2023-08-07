import { json, useRouteLoaderData } from "react-router-dom";
import TaskItem from "../components/TaskItem";

const TaskDetailPage = () => {
  const data = useRouteLoaderData("task-detail");

  return (
    <>
      <TaskItem task={data} />
    </>
  );
};

export default TaskDetailPage;

export async function taskDetailLoader({ request, params }) {
  const id = params.taskId;

  const response = await fetch(
    "https://task-app-27674-default-rtdb.firebaseio.com/tasks/" + id + ".json"
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected task." },
      { status: 500 }
    );
  } else {
    return response;
  }
}
