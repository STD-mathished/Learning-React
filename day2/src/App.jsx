import { useState } from 'react'
import './App.css'
import Form from './components/form'

function App() {

  return (
    <div className='max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md flex gap-3 flex-col'>
      <h1 className='text-4xl'>To-Do List</h1>
      <Form/>
    </div>
    
  )
}

export default App
