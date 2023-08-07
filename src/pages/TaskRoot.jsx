import { Outlet } from "react-router-dom";
import TaskNavigation from "../components/TaskNavigation";

const TaskRoot = () => {
  return (
    <>
      <TaskNavigation />
      <Outlet />
    </>
  );
};

export default TaskRoot;
