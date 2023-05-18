"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './form.css';
import axios from 'axios';

interface LoginFormProps {
  onSubmit: (useremail: string, userpw: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [useremail, setUserEmail] = useState('');
  const [userpw, setUserPassword] = useState('');
  const [Error,setError]=useState('');
  const [username,setName]=useState('LOG IN')


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      useremail,
      userpw,
    };
    const res = await axios.post('http://localhost:5000/api/user/login', user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    window.localStorage.setItem('User', JSON.stringify(res.data));
    setError('Authentication successful')
    window.location.href = '/';
    // const a=  window.localStorage.getItem('User');
    // console.log(a);

   
  };
  // const handleSubmit = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/user/login', {
  //       useremail: useremail,
  //       userpw: userpw
  //     })


  //   window.localStorage.setItem('User',  JSON.stringify(res.data));
  //     setError('Authentication successful')
  //     // window.location.href = '/';
  
  //   } catch (err:any) {
  //     console.log(err.response.data);
  //     setError(err.response.data)
  //   }
  // };
  

  return (
    <div>
    <div   className='container-login'>
  <div className='Left-login-form'>
  <h3 className='login-heading'>LOG IN TO YOUR ACCOUNT</h3>
 <div className='form-input-label'>
      <input  className='form-input-label'type="text" id="fname" name="email" placeholder='E-MAIL' value={useremail} onChange={(e) => setUserEmail(e.target.value)}/>
      <input  className='form-input-label' type="password" id="fname" name="password" placeholder='PASSWORD' style={{"outline":"none",'border':"none"}}  value={userpw} onChange={(e) => setUserPassword(e.target.value)}/>
  </div>

  <button  className="login-btn" onClick={handleSubmit}>LOGIN </button> <br></br>
  <p>{Error}</p> <br></br>
  <a className="forgotpassword"href='#'>HAVE YOU FORGOTTEN YOUR PASSWORD?</a>

  </div>
 

<div className='right-login-form'>
<h4 >NEEED ACCOUNT</h4>
<Link  href="/signup" className="create-btn" type="button" >REGISTER </Link>
  </div>

</div>
    </div>
    )
}

export default LoginForm;