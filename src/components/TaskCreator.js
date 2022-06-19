import { useState } from "react";
import React from 'react'

const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName('');
  }

  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
      <div className='col-9'>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className='form-control'
        />
      </div>
      <div className="col-3 my-1">
        <input className='btn btn-primary btn-sm' type="submit" value="Save task" onClick={() => console.log(newTaskName)} />
      </div>
    </form>
  )
}

export default TaskCreator;