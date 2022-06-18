import { useState } from "react";
import React from 'react'

const TaskCreator = (props) => {
 

  const [ newTaskName, setNewTaskName ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskName);
    localStorage.setItem('task', newTaskName);
    setNewTaskName('');
  }

  return (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Enter a new task"
      value={newTaskName}
      onChange={(e) => setNewTaskName(e.target.value)}
    />
    <input type="submit" value="Save task" onClick={() => alert(newTaskName)} />
  </form>
  )
}

export default TaskCreator;