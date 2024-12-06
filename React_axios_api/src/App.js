import axios from 'axios'
import  { useEffect } from 'react'
import CustomhookExample from './CustomhookExample'

const App = () => {
 useEffect(
  ()=>{
    getProducts()
  },[]
 )
 
 const getProducts = async()=>{
  let res = await axios.get('https://fakestoreapi.com/products');
  console.log('res..',res.data);
 }
 return(
  <div><CustomhookExample/></div>
 )
}

export default App