import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const[count,setCount] = useState('');
    const handleClick=(data)=>{
        setCount(data);  
    }
  return (
    <>
        <h1>Parent</h1>
        <h3>data from child:{count}</h3>
        --------------------------child ----------
        <Child  parFn={handleClick}/>
    </>
  )
}

export default Parent