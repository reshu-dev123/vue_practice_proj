import React from 'react'
import getApiData from './utils'
const CustomhookExample = () => {
   
    let product = getApiData('https://fakestoreapi.com/products/1')

  return (
    <>
        <div>CustomhookExample</div>
        <div>{Object.keys(product)}</div>
        <div>{product.title}</div>
        <div></div>
    </>
  )
}

export default CustomhookExample