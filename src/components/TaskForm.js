import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'
// import { addToLocalStorage } from '../localstorage/localstorage';

function TaskForm() {
  const [input, setInput] = useState("");

  const { currentTask, setCurrentTask } = useContext(TaskContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = { id: Math.random(), text: input, completed: false };
    console.log(currentTask)

    // if (input.trim() !== '' && !currentTask.some(task => task.text === input)) {
    //   setCurrentTask([newTask])
    //   console.log(newTask)
    // }
    if (currentTask.some(task => task.text === input)) {
      alert("Task Already Exist")
      console.log(newTask)
        }
    // if (task => task.text === "") {
    //   alert("Task Title Required")
    //   console.log(newTask)
    // }
    else {
      setCurrentTask([...currentTask, newTask]);
    }
    // addToLocalStorage(newTask);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="task-name"
        placeholder='ADD A NEW TASK'
        value={input} onChange={(e) => setInput(e.target.value)} />
      <button type='submit'>+</button>
    </form>
  );
}

export default TaskForm