import React, { useState } from 'react'

const Child = () => {
const[color,setColor]=useState('red');
const changeColor=()=>{
    setColor('Blue')
  }
  return (
    <>
    <h3>change color {color}</h3>
    <button onClick={changeColor}>change color</button>
    </>
  )
}

export default Child