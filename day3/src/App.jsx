import { useState } from 'react'
import './App.css'
import Form from './Components/Form'

function App() {
  const [name, setName] = useState('')
  const [fname, setFname] = useState('')
  
  return (
    <>
      <h1 className='text-4xl mb-4'>Enter you information</h1>
      <div className=' flex flex-col gap-2 justify-center items-center'>
        <Form handleName={setName} handleFname={setFname}/>
        <p>The ticket is for : {name} {fname}</p>
      </div>
    </>
  )
}

export default App
