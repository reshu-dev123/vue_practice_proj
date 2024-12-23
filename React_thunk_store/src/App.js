import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const App = () => {
  let dispatch = useDispatch();
  let data = useSelector(state=>state)
  console.log(data);
  const fetchData = async(dispatch,getState)=>{
     let res = await fetch('https://jsonplaceholder.typicode.com/users/2')
     let data = await res.json();
     dispatch({type:'add',payload:data});
  }
  return (
    <>
      <button onClick={()=>{dispatch(fetchData)}}>Get</button>  
        
    </>
  )
}

export default App