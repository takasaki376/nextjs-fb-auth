import type { NextPage } from "next";
import { useState } from "react";
import { Layout } from "src/layouts/Layout";
import { HomeInput } from "src/pages/Home/HomeInput";
import { HomeTaskList } from "src/pages/Home/HomeTaskList";
import type { Task } from "src/types";

const initTasks: Task[] = [
  {
    id: 1,
    title: "test1",
    createAt: "2021/10/10",
    updateAt: "2021/10/10",
  },
  {
    id: 2,
    title: "test2",
    createAt: "2021/1/4",
    updateAt: "2021/2/3",
  },
];
const initTask: Task = {
  id: 0,
  title: "",
  createAt: "",
  updateAt: "",
};

const Home: NextPage = () => {
  const [tasks, settasks] = useState<Task[]>(initTasks);
  const [updateTask, setUpdateTask] = useState<Task>(initTask);

  return (
    <Layout>
      <div className="flex flex-col ml-8 mt-4 w-full h-full">
        <div className="flex-auto my-auto w-1/2 h-full">
          <HomeTaskList tasks={tasks} setUpdateTask={setUpdateTask} />
        </div>
        <div className="flex-1 h-20 md:mb-2">
          <HomeInput
            setTasks={settasks}
            tasks={tasks}
            updateTask={updateTask}
            setUpdateTask={setUpdateTask}
          />
        </div>
      </div>
    </Layout>
  );
};
export default Home;
