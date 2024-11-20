import {React,useState,useMemo} from 'react'

const CounterMemo = () => {
    const[number,setNumber] = useState(0);
    const[count,setCount]= useState(0);

  function cubeNum(num) {
    console.log('calculation done!')
    return Math.pow(num,3)
  }

  const result = useMemo(()=>cubeNum(number),[number]);

  return (
    <>
    <input type="number" value={number} onChange = {(e)=>setNumber(e.target.value)}/>
    <h3>cube of number: {result}</h3>
    <button onClick={()=>{setCount(count=>count + 1)}}>+1</button>
    <h3>{count}</h3>
    </>

  )
}

export default CounterMemo