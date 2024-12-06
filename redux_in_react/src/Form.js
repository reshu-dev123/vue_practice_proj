import React, { useState } from 'react'
// In component we decide to update state we have to use (useDispatch hook)
import { useDispatch } from 'react-redux' ;
import { deposit , withdraw,nameUpdate,mobileUpdate,reset} from './action';

const Form = () => {
    const[amount,setAmount]=useState('')
    const[fullName,setFullName]=useState('')
    const[mobile,setMobile]=useState('')
    let dispatch = useDispatch()
  return (
    <>
        <div>Form</div>
        <div>
            <input
             style={{marginRight:5 + 'px'}} 
             type= 'number' 
             placeholder='Enter amount'
             value={amount} 
             onChange={(e)=>{
                let data= e.target.value
                setAmount(data);
             }}
             />
            <button style={{borderRadius: 5 + 'px' ,backgroundColor: 'blueviolet',color: 'white',marginRight:5 + 'px'}}
            onClick={()=>{
                dispatch(deposit(amount));
                setAmount("");
                }}>Deposit
            </button>
            <button style={{borderRadius: 5 + 'px' ,backgroundColor: 'red',color: 'white'}}
            onClick={()=>{
                dispatch(withdraw(amount));
                setAmount("")
            }}
            >
            withdraw
            </button>

        </div>
        <div>
            <input
             style={{marginRight:5 + 'px'}} 
             type= 'text' 
             placeholder='Enter fullName'
             value={fullName} 
             onChange={(e)=>{
                let data= e.target.value
                setFullName(data);
             }}
             />
            <button style={{borderRadius: 5 + 'px' ,backgroundColor: 'blueviolet',color: 'white',marginRight:5 + 'px'}}
            onClick={()=>{
                dispatch(nameUpdate(fullName));
                setFullName("");
                }}>Update
            </button>
        </div>
        <div>
            <input
             style={{marginRight:5 + 'px'}} 
             type= 'text' 
             placeholder='Enter Mobile'
             value={mobile} 
             onChange={(e)=>{
                let data= e.target.value
                setMobile(data);
             }}
             />
            <button style={{borderRadius: 5 + 'px' ,backgroundColor: 'blueviolet',color: 'white',marginRight:5 + 'px'}}
            onClick={()=>{
                dispatch(mobileUpdate(mobile));
                setMobile("");
                }}>Update
            </button>
        </div>
        <div>
            <button style={{borderRadius: 5 + 'px' ,backgroundColor: 'red',color: 'white',marginRight:5 + 'px'}}
            onClick={()=>{
                dispatch(reset());
                }}>Reset
            </button>
        </div>
    </>
  )
}

export default Form