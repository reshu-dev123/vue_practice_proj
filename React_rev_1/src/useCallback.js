import React, { useCallback } from 'react'
import { useState } from 'react'
import Header from './Header'

const CounterCb = () => {
    const[count,setCount] = useState(0);
    const newFn = useCallback(()=>{},[])
  return (
    <>
    <Header newFn = {newFn} />
    <h3>count:{count}</h3>
    <button onClick={()=>setCount(count=>count + 1)}>click here</button>
    </>
  )
}

export default CounterCb


