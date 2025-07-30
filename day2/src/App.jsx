import { useState } from 'react'
import './App.css'
import Form from './components/form'
import Task from './components/task'

function App() {


  return (
    <div className='max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md flex gap-3 flex-col'>
      <h1 className='text-4xl'>To-Do List</h1>
      <Form/>
      <ul className='ml-1.5 mr-1.5'>
        <Task text='terminer app hdhhhhfhhfh'/>
      </ul>
    </div>
    
  )
}

export default App
