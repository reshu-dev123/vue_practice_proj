import React from 'react'

const IncButton = ({children,handleClick}) => {
    console.log(`${children} rendered`);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default React.memo(IncButton)
