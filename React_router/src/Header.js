import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div></div>
        <ul style={{listStyle: "none",display: "flex"}}>
        <li style={{marginRight:20+"px"}}> <Link style={{textDecoration:"none"}} to='/'>Child</Link></li>
        <li style={{marginRight:20+"px"}}><Link style={{textDecoration:"none"}} to='/parent'>Parent</Link></li>
        <li style={{marginRight:20+"px"}}><Link style={{textDecoration:"none"}} to='/form'>Form</Link></li>
        </ul>
    </>
  )
}

export default Header