import type {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  VFC,
} from "react";
import { useEffect } from "react";
import { useCallback, useState } from "react";
import type { Task } from "src/types";

type Props = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  updateTask: Task | undefined;
  setUpdateTask: Dispatch<SetStateAction<Task>>;
};

const initTask: Task = {
  id: 0,
  title: "",
  createAt: "",
  updateAt: "",
};

export const HomeInput: VFC<Props> = (props) => {
  const [editTask, setEditTask] = useState<Task>(props.updateTask || initTask);

  const handleInputTask = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEditTask({ ...editTask, title: String(e.currentTarget.value) });
    },
    [editTask]
  );

  // 登録ボタンクリック
  const handleInsertTask = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const nowAt = new Date();
      const now = nowAt.toISOString();
      editTask.updateAt = now;

      if (props.updateTask && props.updateTask?.id !== 0) {
        // id が 0以外 の場合は更新時
        const tmpTasks = props.tasks.map((task) => {
          // タスクデータの中から更新対象を入力値で入れ替える
          if (task.id !== editTask.id) {
            return task;
          } else {
            return editTask;
          }
        });
        props.setTasks(tmpTasks);
      } else {
        editTask.id = Math.max(...props.tasks.map((task) => task.id)) + 1;
        editTask.createAt = editTask.updateAt;

        props.setTasks([...props.tasks, editTask]);
      }
      props.setUpdateTask(initTask);
      setEditTask(initTask);
    },
    [editTask, props]
  );

  useEffect(() => {
    setEditTask(props.updateTask || initTask);
  }, [props.updateTask]);

  return (
    <form onSubmit={handleInsertTask}>
      <div className="flex flex-row justify-between">
        <input
          type="text"
          className="m-2 pl-4 w-full h-8 border border-gray-500 rounded-lg"
          autoFocus
          value={editTask.title}
          onChange={handleInputTask}
          placeholder="タスクの新規追加"
        />
        <button
          type="submit"
          className="right-5 ml-2 my-2 w-12 h-8 text-sm bg-gray-50 border border-gray-400 rounded-lg md:mr-6"
        >
          登録
        </button>
      </div>
    </form>
  );
};
