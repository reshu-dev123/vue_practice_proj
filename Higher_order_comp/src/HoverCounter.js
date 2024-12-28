import React from 'react'
import EnhancedCounter from './EnhancedCounter'

const HoverCounter = (props) => {
  return (
    <>
    <button onMouseEnter={props.incrementCount}>hoverCounter {props.count}</button>
    </>
  )
}

export default EnhancedCounter(HoverCounter,5);