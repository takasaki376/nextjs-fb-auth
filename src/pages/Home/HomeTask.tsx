import type { Dispatch, SetStateAction, VFC } from "react";
import type { DOMAttributes } from "react";
// import { useCallback } from "react";
import type { Task } from "src/types";

type Props = {
  task: Task;
  setUpdateTask: Dispatch<SetStateAction<Task>>;
  onClick?: DOMAttributes<HTMLButtonElement>["onClick"];
};

export const HomeTask: VFC<Props> = (props) => {
  //   const handleClick = useCallback(() => {
  //     props.setUpdateTask(props.task);
  //   }, [props]);

  return (
    <button
      className="my-2 px-4 py-2 w-full text-left bg-white rounded-3xl"
      //   onClick={handleClick}
      onClick={props.onClick}
    >
      {props.task.title}
    </button>
  );
};
