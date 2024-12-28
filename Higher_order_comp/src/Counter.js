import React from 'react'
import EnhancedCounter from './EnhancedCounter'
const Counter = (props) => {

  return (
    <>
    <button onClick={props.incrementCount}>Counter{props.count} {props.name}</button>
    </>
  )
}

export default EnhancedCounter(Counter,3)