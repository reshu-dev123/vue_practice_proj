import React from 'react'

const Parent = ({name="unknown",quantity=0}) => {
  return (
    <>
    <p>product_name:{name}</p>
    <p>product_quant:{quantity}</p>
    </>
  )
}

export default Parent