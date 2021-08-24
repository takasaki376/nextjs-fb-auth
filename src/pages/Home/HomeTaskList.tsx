import type { Dispatch, SetStateAction, VFC } from "react";
import { HomeTask } from "src/pages/Home/HomeTask";
import type { Task } from "src/types";

type Props = {
  tasks: Task[];
  setUpdateTask: Dispatch<SetStateAction<Task>>;
};

export const HomeTaskList: VFC<Props> = (props) => {
  return (
    <div className="h-full">
      {props.tasks.map((task) => {
        const handleOnClick = () => {
          props.setUpdateTask(task);
        };

        return (
          <HomeTask
            key={task.id}
            task={task}
            setUpdateTask={props.setUpdateTask}
            onClick={handleOnClick}
          />
        );
      })}
    </div>
  );
};
