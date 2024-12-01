import React, { useState,useMemo} from 'react'

const UseMemoExample = () => {
const [a, setA] = useState(0);
const [b, setB] = useState(0);
const[txt,setText] = useState('old text');

const sumNum = (num1,num2) => {
    console.log('Computing sum...');
  return  num1 + num2;
    } ;

// const result = sumNum(a,b);
const result = useMemo(()=>sumNum(a,b),[a,b]) //we memoized the returned value of sum,

  return (
    <div>
      <p>text:{txt}</p>
      <p>a:{a}</p>
      <p>b:{b}</p>
      <p>sum:{result}</p>
      <button onClick={()=>setText('text is changed')}>change txt</button>
      <button onClick={()=>setA(a=>a+1)}>a++</button>
      <button onClick={()=>setB(b=>b+1)}>b++</button>
    </div>
  )
}

export default UseMemoExample
