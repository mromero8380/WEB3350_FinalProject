import { json, redirect, useRouteLoaderData } from "react-router-dom";
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

export async function action({ params, request }) {
  const taskId = params.taskId;

  if (request.method === "DELETE") {
    const response = await fetch(
      "https://task-app-27674-default-rtdb.firebaseio.com/tasks/" +
        taskId +
        ".json",
      {
        method: request.method,
      }
    );

    if (!response.ok) {
      throw json({ message: "Could not delete event." }, { status: 500 });
    }
  } else if (request.method === "PATCH") {
    const taskData = {
      isComplete: true,
    };

    const response = await fetch(
      "https://task-app-27674-default-rtdb.firebaseio.com/tasks/" +
        taskId +
        ".json",
      {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      }
    );

    if (response.status === 422) {
      return response;
    }

    if (!response.ok) {
      throw json({ message: "Could not save complete." }, { status: 500 });
    }
  } else if (request.method === "POST") {
    const taskData = {
      isComplete: false,
    };

    const response = await fetch(
      "https://task-app-27674-default-rtdb.firebaseio.com/tasks/" +
        taskId +
        ".json",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      }
    );

    if (response.status === 422) {
      return response;
    }

    if (!response.ok) {
      throw json({ message: "Could not save incomplete." }, { status: 500 });
    }
  }

  return redirect("/tasks");
}
