import { useState } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";

const App = () => {

  const createNewTask = (taskName) => {
    // setTaskItems([...taskItems, {name:taskName, done:false}]);
  }

  const [taskItems, setTaskItems] = useState([
    { name: "Mi primer tarea", done: false },
    { name: "Mi segunda tarea", done: false },
    { name: "Mi tercera tarea", done: false },
  ]);

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask}/>

      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {
            taskItems.map(task => (
              <tr key={task.name}>
                <td>
                  {task.name}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
}

export default App;
