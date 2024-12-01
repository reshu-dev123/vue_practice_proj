import React, { useState } from 'react'
import Child from './Child';
const ReactMemo = () => {
  console.log('state dependent main comp rendering----')
    const[count,setCount] = useState(0);
    const handleClick =()=>{
      setCount(count=>count+1);
    }

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleClick}>count++</button>
       <Child name="tom" age={20}/>
    </div>
  )
}

export default ReactMemo
