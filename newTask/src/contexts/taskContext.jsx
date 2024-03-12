import { createContext, useContext, useState } from "react";

export const TaskContext = createContext(null);

export const useTaskContext = () => useContext(TaskContext)

export const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);
  const updateTasks = (userTasks) => {
    console.log(userTasks);
    setTasks(userTasks);
  };

  const addTask = (newTask) => {
    setTasks(...tasks, newTask);
  };

  return (
    <TaskContext.Provider value={{tasks, updateTasks, addTask}}>
      {children}
    </TaskContext.Provider>
  );
}