import React from 'react'

const ProductCard = ({title,image,price}) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image}/>
      <h3>{price}</h3>
    </div>
  )
}

export default ProductCard
