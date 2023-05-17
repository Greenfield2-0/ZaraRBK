'use client'
import React, { useState }  from 'react';
import Link from 'next/link'
import  './form.css'
import axios from "axios";
interface LoginFormProps {
  onSubmit: (useremail: string, userpw: string) => void;
}

const LoginForm = () => {
  const [useremail, setEmail] = useState('');
  const [userpw, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newUser = {
      useremail,
      userpw,
    }
    const res = await axios.post("http://localhost:3000/api/user/signup", newUser, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    window.localStorage.setItem("User", JSON.stringify(res.data))
  }
  

  return (
    <div   className="login-container"  >
    <form >
      <div className="login-card">
        <div className='g-0 d-flex'>
          <div className='8'>
            <div className="card-body">
              <input
                className='mb-4'
                placeholder='E-MAIL'
                id='form1'
                type='email'
                value={useremail}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className='mb-4'
                placeholder='PASSWORD'
                id='form2'
                type='password'
                value={userpw}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="mb-4 w-100" onSubmit={handleSubmit} >Log in</button>
            </div>
          </div>
        </div>
      </div>
    </form>
          <div className="d-flex justify-content-between mb-4">
          <a href="!#">Have you forgotten your password?</a>
        </div>
        <div className='6' id="need-account">
          <h3>Need an Account?</h3>
          <Link href={"/signup"}><button className="mb-4" id="register-btn"> Register </button></Link>
          
        </div>
        </div>
  );
}

export default LoginForm;
