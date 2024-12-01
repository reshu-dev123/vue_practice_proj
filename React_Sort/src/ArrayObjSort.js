import React from 'react'
let OrgData = [
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
  //sort order salary, dob (date of birth), name, and experience
const Child = () => {
  const sortedData = OrgData.sort((a, b) => {
    // First, compare by salary (convert to number for numerical comparison)
    const salaryComparison = parseInt(a.salary) - parseInt(b.salary);
    if (salaryComparison !== 0) {
      return salaryComparison; // If salary differs, return the comparison result
    }

    // If salary is the same, compare by dob (date of birth)
    const dobComparison = new Date(a.dob.split('-').reverse().join('-')) - new Date(b.dob.split('-').reverse().join('-'));
    if (dobComparison !== 0) {
      return dobComparison; // If dob differs, return the comparison result
    }

    // If dob is the same, compare by name alphabetically
    const nameComparison = a.name.localeCompare(b.name);
    if (nameComparison !== 0) {
      return nameComparison; // If name differs, return the comparison result
    }

    // If name is also the same, compare by experience numerically
    return parseInt(a.experience) - parseInt(b.experience);
  });
const finalData= sortedData.map(employee => (
    <li key={employee.eId}>
      {employee.name} (DOB: {employee.dob}) - {employee.experience} years experience - ${employee.salary}
    </li>
  ))
  return (
    <div>
     <ul>{finalData}</ul>
    </div>
  )
}

export default Child
