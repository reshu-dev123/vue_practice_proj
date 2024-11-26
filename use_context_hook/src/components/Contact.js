import React ,{useContext} from 'react'
import { AppContext } from './context/AppContext';

const Contact = () => {
const {phone,name,email} = useContext(AppContext);
  return (
    <>
    <h3>Contact</h3>
    <div>
       <div> Contact:{phone}</div>
       <div> Name:{name}</div>
       <div> Email:{email}</div>
    </div>
    </>
  )
}

export default Contact