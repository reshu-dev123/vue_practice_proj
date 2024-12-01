import React from 'react'
let EmpData = [
    {
      eId:"01",
      name:"Kumar",
      dob:"01-01-2020",
      experience:"02",
      salary:"20000"
    },
    {
      eId:"02",
      name:"Ravi",
      dob:"12-05-1996",
      experience:"06",
      salary:"70000"
    },
    {
      eId:"03",
      name:"Shyam",
      dob:"01-01-2020",
      experience:"03",
      salary:"25000"
    },
    {
      eId:"04",
      name:"Shyam",
      dob:"12-05-1996",
      experience:"05",
      salary:"25000"
    }
  ]
const Employee = () => {
const emp_Data = EmpData.sort((a,b)=>{
  let eIdComparison = parseInt(a.eId) - parseInt(b.eId); // sorting order id >> dob >> name >> exp
   if(eIdComparison !==0){
   let dateComparision = new Date(a.dob)-new Date(b.dob)
   if(dateComparision === 0){
    let nameComparision = a.name.localeCompare(b.name) ; 
    if(nameComparision === 0){
     return parseInt(a.experience) - parseInt(b.experience)
    }
   } 
}
    return eIdComparison;
})
const sorted_emp_Data = emp_Data.map((emp)=>
<li key={emp.eId}>{emp.eId}: {emp.name} ({emp.dob}) , {emp.experience} , {emp.salary}</li>
)
  return (
    <div>
      <ul>{sorted_emp_Data}</ul>
    </div>
  )
}

export default Employee
