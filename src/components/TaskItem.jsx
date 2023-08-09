import { useSubmit } from "react-router-dom";
import classes from "./TaskItem.module.css";

const TaskItem = ({ task }) => {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  function startCompleteHandler() {
    submit(null, { method: "PATCH" });
  }

  function startIncompleteHandler() {
    submit(null, { method: "POST" });
  }

  return (
    <article className={classes.task}>
      <h1>{task.name}</h1>
      <p>{task.description}</p>
      <menu className={classes.actions}>
        {task.isComplete ? (
          <button onClick={startIncompleteHandler}>Mark Incomplete</button>
        ) : (
          <button onClick={startCompleteHandler}>Mark Complete</button>
        )}

        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
};

export default TaskItem;
