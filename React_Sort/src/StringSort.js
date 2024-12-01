import React from 'react'
 const fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.sort();
//  fruits.reverse();
const StringSort = () => {
  const sortedFruits =fruits.map((frt)=> <li>{frt}</li>)
  return (
    <div>
        <ul>{sortedFruits}</ul>
    </div>
  )
}

export default StringSort
