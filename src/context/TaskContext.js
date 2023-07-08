import React, {createContext, useState} from "react";

// Setting the context, the 2 parameters will be pased
export const TaskContext = createContext({currentTask: [], setCurrentTask: () => {}})

// This parameters will e what will e used after the state has been set
export const TaskProvider = function({children}) {
    const [currentTask, setCurrentTask] = useState([])

    // const addTask = (newTask) => {
    //     if (!currentTask.includes(newTask)) {
    //         setCurrentTask([...currentTask, newTask])
    //     }
    // }

    return (
        <>
            <TaskContext.Provider value={{currentTask,  setCurrentTask}}>
                {children}
            </TaskContext.Provider>
        </>
    )
}