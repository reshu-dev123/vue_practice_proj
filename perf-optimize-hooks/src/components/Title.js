import React from 'react'

const Title = () => {
    console.log("title rendered");
  return (
    <div>
    <h3>useCallback and React.memo</h3>
    </div>
  )
}

export default React.memo(Title)
