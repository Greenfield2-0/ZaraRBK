'use client'
import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

const SignupForm: React.FC = () => {
  const [useremail, setEmail] = useState('');
  const [userpw, setPassword] = useState('');
  const [confirmuserpw, setConfirmPassword] = useState('');
  const [username, setName] = useState('');
  const [userlastname, setUserLastName] = useState('');
  const [error, setError]=useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = {
      username: username,
      userlastname: userlastname,
      useremail,
      userpw,
    };
    const res = await axios.post('http://localhost:3000/api/user/signup', newUser, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    window.localStorage.setItem('User', JSON.stringify(res.data));
    window.location.href = '/';
  };

  return (
    < div>
  
       <h2 className='headingform'>PERSONAL DETAILS</h2>
          <div className='changeform-btn'>
       </div>
     <h1>{error}</h1>
        <div className='container'>
          <div className='Left-form'> 
         <div className='input-text-box'></div>
         <input    className="input-text"type="text" id="fname" name="email" placeholder='E-MAIL'  value={useremail} onChange={(e) => setEmail(e.target.value)} />
         
  <div className='input-text-box'>
      <input type="password" id="fname" name="password" placeholder='PASSWORD'  value={userpw} onChange={(e) => setPassword(e.target.value)} />
  </div>
  <div className='input-text-box'>
      <input type="text" id="fname" name="fname" placeholder='NAME' value={username} onChange={(e) => setName(e.target.value)}/>
  </div>
  <div className='input-text-box1'>
   </div>
  <div className='checkbox'>
    <div>
      <input className="form-input-checkbox__input" type="checkbox" name="newsletterCheck" data-qa-input-qualifier="newsletterCheck" value="false"/>
    </div>
  <div>
  <h6 className="checkbox__label">I want to receive personalised commercial communications from ZARA by email.</h6>
  </div>
  </div>

  <div className='checkbox'>
    <div>
      <input className="form-input-checkbox__input" type="checkbox" name="newsletterCheck" data-qa-input-qualifier="newsletterCheck" value="false"/>
    </div>
  <div>
  <h6 className="checkbox__label">I have read and understand the Privacy and Cookies Policy</h6>
  </div>
  </div>
  <input type="submit" className='signupbtn' value="CREATE ACCOUNT" onClick={handleSubmit}/>
  </div>
  <div className='right-form'>
<div className='input-text-box'>
      <h1 className='dot'>.</h1>
  </div>
<div className='input-text-box'>
      <input type="password" id="fname" name="fname" value={confirmuserpw} placeholder='REPEATE PASSWORD'onChange={(e) => setConfirmPassword(e.target.value)}/>
  </div>

 
  <div className='input-text-box'>
      <input type="text" id="fname" name="fname" placeholder='SURNAME' value={userlastname} onChange={(e) => setUserLastName(e.target.value)}/>
  </div>
  <div className='input-text-box'>
  </div>
  </div> 
</div> 
</div>
  
  )
}
export default SignupForm;

   
   
      
 
  
 

 
