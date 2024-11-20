import React, { useEffect, useState,useRef } from 'react'

const CounterUref = () => {
const[value,setValue] = useState(0);
// const[count,setCount] = useState(0);
const count = useRef(0);// when we don't want to rerender component when val changes
console.log(count);
// useEffect(()=>{setCount(count=>count + 1)});
useEffect(()=>{count.current = count.current + 1});
  return (
    <>
    <button onClick={()=>{setValue(value=>value + 1)}}>+1</button>
    <h3>value:{value}</h3>
    <button onClick={()=>{setValue(value=>value - 1)}}>-1</button>
    {/* <h3>render count:{count}</h3> */}
    <h3>render count: {count.current}</h3>
    </>
    
  )
}

export default CounterUref