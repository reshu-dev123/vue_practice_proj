import React, { useState } from 'react'
import Child from './Child';
// pass data from child - parent 
// st-1 In parent Component Create a function
// st-2 pass that fn as prop to child comp
// st-3 provide child data as param/i/p to prop fn.
const App = () => {
  const[Todos,updTodos] = useState(['Task1','Task2'])

  const addTodos =(task)=>{
   updTodos([...Todos,task])
  }

  const handleClick = (cnt) => {
   console.log("parent = handleclickevent",cnt);// st-1 In parent Component Create a function
  }
  return (
    <>
    <div>i am parent</div>
   <Child parentFunction = {handleClick} prntSecFn = {addTodos}/>{/*st-2 pass that fn as prop to child comp */}
   <ul>{Todos.map((t)=> <li>{t}</li>)}</ul>
   </>
  )
}

export default App