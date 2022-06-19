import React from 'react'

const VisibilityControl = ({ isChecked, setShowCompleted, cleanTasks }) => {


  const handleDelete = () => {
   if (window.confirm('Are you sure you want to delete this task?')) {
    cleanTasks()
   }
  }

  return (
    <div className='d-flex justify-content-between bg-secondary text-white text-center p-2 boder-secondary '>
      <div className='form-check form-switch'>
      <input type='checkbox' checked={isChecked} className='form-check-input'  onChange={(e) => setShowCompleted(e.target.checked)} />{" "} <label>Show tasks done</label>
      </div>
      <button onClick={handleDelete} className='btn btn-danger btn-sm'>
        clear
      </button>
    </div>
  )
}

export default VisibilityControl