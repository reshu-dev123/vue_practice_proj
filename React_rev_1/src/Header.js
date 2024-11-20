
import React from 'react'

const Header = () => {
console.log("Header Rendered")
  return (
    <>
    <h3>Header</h3>
    </>    )
}

export default React.memo(Header) // stop rerendering of header comp everytime count val changes.

