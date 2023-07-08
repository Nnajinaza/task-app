export function addToLocalStorage(newTask) {
    let task = JSON.parse(localStorage.getItem("task"))
    if (!task) {
        task = []
    }
    task.push(newTask)
    localStorage.setItem("task", JSON.stringify(task))
}

export function editToLocalStorage(editValue, id) {
    const task = JSON.parse(localStorage.getItem("task"))
    const updatedTasks = task.map((task) => {
        if (task.id === id) {
            task.text = editValue
        }
        return task
    })
    localStorage.setItem("task", JSON.stringify(updatedTasks))
}

export function deleteFromLocalStorage(deleteTask) {
    localStorage.setItem("task", JSON.stringify(deleteTask))
}

export function viewFromLocalStorage(id) {
    const task = JSON.parse(localStorage.getItem("task"))
    return task
}

export function taskCompletedLocalStorage(id) {
    const task = JSON.parse(localStorage.getItem("task"))
    const updatedTasks = task.map((task) => {
        if (task.id === id) {
            task.completed = !task.completed
        }
        return task;
    })
    localStorage.setItem("task", JSON.stringify(updatedTasks))
}