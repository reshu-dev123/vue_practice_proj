import React, { useState } from 'react'
const Child = (props) => {
const count = 10;// child data
// const newTask = 'Task 3' static child data
const[newTask,setNewtask] = useState('')
  return (
    <>
    <div>Child</div>
    <button onClick ={()=>props.parentFunction(count)} >{/*st-3 provide child data as param or i/p to prop fn.*/}
        click here!
    </button>
    <p><input value = {newTask} onChange={(e)=>{setNewtask(e.target.value)}}/></p>{/*value = {newTask} in react it takes one way binding ,so input don't take any values to solve we use callback*/}
    <p><button onClick={()=>{props.prntSecFn(newTask)}}>Add Todos</button></p>
    </>
  )
}

export default Child