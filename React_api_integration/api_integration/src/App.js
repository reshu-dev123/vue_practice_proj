import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const App = () => {
  const[products,updProducts] = useState([]);
  useEffect(()=>
    {
      getProducts()},[]
    )

    const getProducts = async () =>{
      let res = await fetch('https://fakestoreapi.com/products')
      let productList = await res.json();
      updProducts(productList)
      console.log(productList)
    }

  if(products.length == 0){
    return <h3>fetching data....</h3>
  }
  return (
    <div>
      <h1>product list</h1>
      {products.map((p)=> <ProductCard key={p.id} {...p}/>)}
    </div>
  )
}

export default App

