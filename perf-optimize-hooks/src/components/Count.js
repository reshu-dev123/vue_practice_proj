import React from 'react'

const Count = ({text,number,}) => {
    console.log(`${text} rendered`);
  return (
    <div>
      <p>{text}:{number}</p>
    </div>
  )
}

export default React.memo(Count)
