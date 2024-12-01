import React from 'react'
const numbers = [40, 100, 1, 5, 25, 10];
const ArraySort = () => {  
const AscNumArr =   numbers.sort((a, b) => a - b)  // acending
// const DscNumArr = numbers.sort((a, b) => b - a) //descending

const AscSortNumArr = AscNumArr.map((num1)=> <li>{num1}</li>)
// const DscSortNumArr = DscNumArr.map((num2)=> <li>{num2}</li>)

  return (
    <div>
      <h3>Ascending sort</h3>
      <ul>{AscSortNumArr}</ul>
      {/* <h3>Descending sort</h3>
      <ul>{DscSortNumArr}</ul> */}
    </div>
  )
}

export default ArraySort
