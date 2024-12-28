import React, { useState } from 'react'

const EnhancedCounter = (OriginalComponent,incNum) => {
    const NewCmponent = (props)=>{
     const[count,setCount] = useState(0);
     const increment=()=>{
        setCount(count+incNum);
    }
    return <OriginalComponent 
            count={count} 
            incrementCount={increment}
            {...props}/>

    }
  return NewCmponent
}

export default EnhancedCounter