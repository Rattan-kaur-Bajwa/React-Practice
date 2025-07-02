import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const increment=()=>{
    if(count<20)
     setCount(count+1);
    
  }

  const decrement=()=>{
    if(count>0)
    setCount(count-1);
  }

  return (
    <>
       <h1>Hooks Practice</h1>
       <h2>counter value: {count}</h2>
       <button onClick={increment} disabled={count === 20}>Increment</button>
       <button onClick={decrement} disabled={count === 0}>Decrement</button>

    </>
  )
}

export default App
