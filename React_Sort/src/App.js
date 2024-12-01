import React from 'react'
import Child from './ArrayObjSort'
import ArraySort from './ArraySort'
import StringSort from './StringSort'
import Employee from './Employee'
import EmployeeData from './EmployeeData'

const App = () => {
  return (
    <> 
    <div>
    <ArraySort/>
    <StringSort/>
    <h3>sort order salary, dob (date of birth), name, and experience</h3>
    <Child/>
    <h3>sorting order id , dob , name , exp</h3>
    <Employee/>
    <h3>sorting order dob , name , exp </h3>
    <EmployeeData/>
    </div>
  </>
  )
}

export default App
