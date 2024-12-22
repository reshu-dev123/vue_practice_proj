import React, { useState } from 'react'

const Child = ({parFn}) => {
    const[data,setData] = useState('');
    const childHandleClick=()=>{
    parFn(data);
    }
  return (
    <div>
    <input type="text" value={data} onChange={(e) => setData(e.target.value)}/>
    <button onClick={childHandleClick}>send data to parent</button>
    </div>
  )
}

export default Child