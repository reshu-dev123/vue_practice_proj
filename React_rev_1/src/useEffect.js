import React, { useEffect, useState } from 'react'

const CounterUeff = () => {
    const[count,setCount]= useState(0);
//if dependency is empt array (renders 1 time) , 
//if dependency is [var] renders everytime var value changes,
//no dep renders everytime stat val changes.
    useEffect(()=>{
        setTimeout(()=>{setCount(count => count + 1)},2000);
    },[] 
    )

  return (
    <>
    <h3>i have rendered {count} times!</h3>
    </>
  )
}

export default CounterUeff