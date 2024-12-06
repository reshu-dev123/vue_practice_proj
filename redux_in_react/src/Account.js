import React from 'react'
import { useSelector } from 'react-redux'

const Account = () => {
    let data = useSelector( (state)=>{
      return  state;
    }      
    )
  return (
    <>
                <h3 style={{color:'blueviolet'}}>Account Details</h3>
                <table style={{width:50+'%'}}>
                 <thead>
                    <tr>
                        <th>Balance</th>
                        <th>Name</th>
                        <th>Mobile</th>
                    </tr>
                    <tr>
                        <td>{data.balance}</td>
                        <td>{data.fullname}</td>
                        <td>{data.mobile}</td>
                    </tr>
                 </thead>
               </table>
            
    </>
    )
}

export default Account