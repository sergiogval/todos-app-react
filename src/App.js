import { useState, useEffect } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";

const App = () => {


  const [taskItems, setTaskItems] = useState([]);

  const createNewTask = (taskName) => {
    if (!taskItems.find(task => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  }, [taskItems])

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={taskItems} />

    </div>
  );
}

export default App;
