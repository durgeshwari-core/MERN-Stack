import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter =5;

  const addValue = () =>{
    console.log("add avlue ",Math.random());
  }

  return (
    <>
    <h1>shreya</h1>
    <h3> hey!! how are you?</h3>
    <h5>counter:{counter}</h5>
    <button onClick={addValue}> ADD</button>
    <br />
    <button> REMOVE</button>

    </>
  )
}

export default App
