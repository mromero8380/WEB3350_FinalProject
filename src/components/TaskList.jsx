import { Link } from "react-router-dom";
import classes from "./TaskList.module.css";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
  return (
    <div className={classes.tasks}>
      <h1>All Tasks</h1>
      <ul className={classes.list}>
        {props.tasks.map((task) => (
          <li key={task.id} className={classes.item}>
            <Link to={task.id}>
              <div className={classes.content}>
                <h2 className={task.isComplete ? classes.active : ""}>
                  {task.name}
                </h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
