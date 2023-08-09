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
              end
            >
              All Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/tasks?mode=complete"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Complete Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/tasks?mode=incomplete"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Incomplete Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              New Task
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TaskNavigation;
