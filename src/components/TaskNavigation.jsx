import { NavLink } from "react-router-dom";
import classes from "./TaskNavigation.module.css";

const TaskNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={"/tasks"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              All Tasks
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TaskNavigation;