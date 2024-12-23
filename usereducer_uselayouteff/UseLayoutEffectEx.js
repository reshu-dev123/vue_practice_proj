import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffectEX = () => {
 useEffect(
    ()=>{console.log('message of useeffect')},[]
  )
useLayoutEffect(
  ()=>{console.log('message of useLayoutEffect')},[]
)
  return (
    <div>UseLayoutEffectEX</div>
  )
}

export default UseLayoutEffectEX