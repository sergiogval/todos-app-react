import React from 'react'

const VisibilityControl = ({ setShowCompleted }) => {


  const handleDelete = () => {
    console.log('cleaning')
  }

  return (
    <div>
      <input type='checkbox' onChange={(e) => setShowCompleted(e.target.checked)} />{" "} <label>Show tasks done</label>
      <button onClick={handleDelete}>
        clear
      </button>
    </div>
  )
}

export default VisibilityControl