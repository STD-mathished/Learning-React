import { useState } from 'react'
import './App.css'
import Form from './components/form'
import Task from './components/task'

function App() {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  {/* Form doesn't submit */}
  const handleSubmit = (e) => {
    e.preventDefault()

  {/* NEW TASK */}
    const newTask = {
      id: Date.now(),
      text,
      status: 'pending'
  }
  {/* Emptying the fields */}
    setTasks([...tasks, newTask])
    setText('')
  }

  {/* filter -6> create a new array of tasks without the taks with the id provided */}
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const handleComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: "done" } : task
    );
  setTasks(updatedTasks);
};
  

  return (
    <div className='max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md flex gap-3 flex-col'>
      <h1 className='text-4xl'>To-Do List</h1>
      <Form text={text} setText={setText} onSubmit={handleSubmit}/>
      <ul className='ml-1.5 mr-1.5 flex flex-col gap-3'>
        {
          tasks.map((task) => (
            <Task key={task.id} text={task.text} handleDelete={() => handleDelete(task.id)} handleComplete={() => handleComplete(task.id)} status={task.status}/>
          ))
        }
      </ul>
    </div>
    
  )
}

export default App
