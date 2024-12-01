import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import IncButton from './IncButton'
const UseCallbackExample = () => {
  const[age,setAge]  = useState(0)
  const[salary,setSalary]  = useState(10000)

//   const incrementAge=()=>{
//     setAge(age=>age+1);
//   }
  
//   const incrementSalary=()=>{
//     setSalary(salary=>salary+7000);
//   }
  const incrementAge=useCallback(()=>{
    setAge(age+1)
  },[age]);

  const incrementSalary=useCallback(()=>{
    setSalary(salary+7000);
  },[salary])

  return (
    <div>
      <Title/>
      <Count text={"employee age"} number={age}/>
      <IncButton handleClick={incrementAge}>incremet age</IncButton>
      <Count text={"employee salary"} number={salary}/>
      <IncButton handleClick={incrementSalary}>increment salary</IncButton>
    </div>
  )
}

export default UseCallbackExample
