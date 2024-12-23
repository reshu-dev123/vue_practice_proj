import React, { useReducer } from 'react'

const UseReducerEx = () => {
  const initialState = {
    count:0,
    balance:0
  }
  const reducer =(state,action)=>{
  switch(action.type){
    case 'increment':
        return{...state,count:state.count+1}
    case 'decrement':
        return{...state,count:state.count-1}
    case 'deposit':
        return{...state,balance:state.balance + action.payload}
    default:
        return state
  }
  }
  const[state,dispatch] =useReducer(reducer,initialState)
  return (
    <>
        <h3>UseReducerEx</h3>
        <button onClick={()=>dispatch({type:'increment'})}>+</button>
        <p>count:{state.count}</p>
        <button onClick={()=>dispatch({type:'decrement'})}>-</button><br></br>
        <button onClick={()=>dispatch({type:'deposit',payload:1000})}>deposit</button>
        <p>balance:{state.balance}</p>
    </>
  )
}

export default UseReducerEx