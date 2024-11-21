import React, { useState } from 'react'

const Form = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[errors,setErrors] = useState({
        email : '',
        password:''
    })
    const emaiPtrrnMatch = /\S+@\S+\.\S+/
   
   const handleClick =(event) =>{
    event.preventDefault();
    if(email.trim()===''){
        setErrors((errors)=>({...errors,email : "enter email"}))
    }
    else if(!emaiPtrrnMatch.test(email)){
        setErrors((errors)=>({...errors,email : "enter valid email"}))
    }
   else{
        setErrors((errors)=>({...errors,email : ""}))
    }
    if(password.trim()===''){
        setErrors((errors)=>({...errors,password : "enter password"}))
    }
    else if(password.trim().length < 8){
        setErrors((errors)=>({...errors,password : "password should be more than 8 characters"}))
    }
   else{
        setErrors((errors)=>({...errors,password : ""}))
    }
    console.log('credentials',email,password)
   }
  return (
    <form>
        <div style={{marginLeft:'10'+'px'}}>
            <h3>login form</h3>
            <label>email</label><br></br>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
            {errors.email && <span className='cred'>{errors.email}</span>}<br></br>
            <label>password</label><br></br>
            <input type='text'value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
            {errors.password && <span className='cred'>{errors.password}</span>}<br></br>
            <button onClick={handleClick}>Login</button>
        </div>
    </form>
  )
}

export default Form