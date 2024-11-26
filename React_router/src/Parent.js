import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Parent = () => {
  return (
    <>
        <div>i am Parent</div>
<button><Link style={{textDecoration:"none"}} to='MainChild'>MainChild</Link></button>
<button><Link style={{textDecoration:"none"}}  to='SubChild'>SubChild</Link></button>
<Outlet/>
    </>

  )
}
export const MainChild = () => {
  return (
    <div>i am MainChild</div>
  )
}
export const SubChild = () => {
  return (
    <div>i am SubChild</div>
  )
}


export default Parent