import React from 'react'
import Child from './child'
import Form from './form'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Parent, {MainChild, SubChild } from './Parent'
import Header from './Header'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Child/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/Parent' element={<Parent/>}>
      <Route path='MainChild' element={<MainChild/>}/>
      <Route path='SubChild' element={<SubChild/>}/>
      <Route/>
      </Route>
    </Routes>
    </BrowserRouter>
   {/* <Child/>
   <Form/> */}
    </>
  )
}

export default App