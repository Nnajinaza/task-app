import React, { useContext} from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskItem from './TaskItem'
// import { viewFromLocalStorage } from '../localstorage/localstorage'

function TaskList() {
  const { currentTask} = useContext(TaskContext)

  // useEffect(() => {
  //   const tasks = viewFromLocalStorage()
  //   setCurrentTask(tasks)
  // })

  return (
    <div className='tasklist'>
      {currentTask && currentTask.map((task) => {
        return <TaskItem key={task.id} {...task} />
      })}
    </div>
  )
}

export default TaskList