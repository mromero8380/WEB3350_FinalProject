import classes from "./TaskItem.module.css";

const TaskItem = ({ task }) => {
  return (
    <article className={classes.task}>
      <h1>{task.name}</h1>
      <p>{task.description}</p>
      <button>Mark Complete</button>
    </article>
  );
};

export default TaskItem;
