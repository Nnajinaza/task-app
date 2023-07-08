import React from 'react';
import'./App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


function App() {

  return (
    <main>
      <div className='heading'>
        <h1>TO-DO LIST</h1>
      </div>
      <div className='form-box'>
        <TaskForm />
        <div className='list-box'>
        <TaskList/>
        </div>
      </div>
      {/* <div className='list-box'>
        <TaskList/>
      </div> */}
      {/* <TaskItem /> */}
    </main>
  );
}

export default App;
