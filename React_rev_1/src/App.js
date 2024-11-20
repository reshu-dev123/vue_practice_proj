import React from 'react'
import Child from './usestate'
import CounterUeff from './useEffect'
import CounterUref from './useRef'
import CounterMemo from './useMemo'
import CounterCb from './useCallback'
const App = () => {
  return (
    <>
    <h1>-----useState-----</h1>
    <div><Child/></div>

    <h1>-----useEffect-----</h1>
    <div><CounterUeff/></div>

    <h1>-----useRef-----</h1>
    <div><CounterUref/></div>

    <h1>-----useMemo-----</h1>
    <div><CounterMemo/></div>

    <h1>-----useCallback-----</h1>
    <div><CounterCb/></div>
    </>
  )
}

export default App