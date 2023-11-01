import { useState } from 'react'


function App() {
  const [count, setCount] = useState(1)

  return (
    <>
     <div>
      <h1>Counter App</h1>
    <h3>Count is {count}</h3>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
    <button onClick={()=>setCount(0)}>Reset</button>
       </div>
    </>
  )
}

export default App
