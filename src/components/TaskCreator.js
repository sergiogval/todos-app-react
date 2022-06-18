import { useState } from "react";
import React from 'react'

const TaskCreator = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('task', newTaskName);
    setNewTaskName('');
  }
  
  const [ newTaskName, setNewTaskName ] = useState();


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