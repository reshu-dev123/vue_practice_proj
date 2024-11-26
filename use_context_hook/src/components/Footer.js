import React, { useContext } from 'react'
import { AppContext } from './context/AppContext';

const Footer = () => {
const {phone} = useContext(AppContext);
  return (
    <>
    <h3>Footer</h3>
    <div> Harry, 456 Elm Street, Suite 3, Los Angeles, CA 90001, USA,@contact {phone}</div>
    </>
  )
}

export default Footer