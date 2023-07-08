import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'
// import { deleteFromLocalStorage, editToLocalStorage, taskCompletedLocalStorage } from '../localstorage/localstorage'

function TaskItem({id, text, completed}) {
  const {currentTask, setCurrentTask} = useContext(TaskContext)
  const [checked, setChecked] = useState(completed)
  const [output, setOutput] = useState(text)
  const [editTask, setEditTask] = useState(false)

  function taskCompleteHandler(e) {
    setChecked(!checked)
    setCurrentTask(currentTask.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed
        // taskCompletedLocalStorage(completed)
      }
      return task
    }), [])
  }

  function editHandler(e) {
    setEditTask(!editTask)
    if (editTask) {
      setCurrentTask(currentTask.map((task) => {
        if (task.id === id) {
          task.text = output
          // editToLocalStorage(output, id)
        }
        return task
      }))

    }
  }
  function deleteHandler(e) {
    const deleteTask = currentTask.filter((task) => task.id !== id)
    setCurrentTask(deleteTask)
    // deleteFromLocalStorage(deleteTask)
  }

  return (
    <div className='task-item'>
      {/* <input
        type="checkbox"
        name='task-done'
        className='checkbox'
        checked={checked}
        onChange={taskCompleteHandler} /> */}
      <button className="checkbox" onClick={taskCompleteHandler}>
            {!checked && (<div >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"/></svg>
            </div>)
            }
            {checked && (<div>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
            </div>)
            }
        </button>
      <input
        type="text"
        name="task-name"
        value={output}
        className={`task-text ${checked ? "completed" : ""}`}
        onChange={(e) => setOutput(e.target.value)}
        disabled={editTask ? false : true} />
      {!editTask ? (
        <button className='edit-btn' onClick={editHandler}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></button>) : (
        <button className='edit-btn' onClick={editHandler}>Done</button>)}

      <button className='delete-btn' onClick={deleteHandler}>
      <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
    </div>
  )
}

export default TaskItem