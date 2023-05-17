'use client'
import React, { useState }  from 'react';
import Link from 'next/link'
import  './form.css'

interface LoginFormProps {
  onSubmit: (useremail: string, userpw: string) => void;
}

const LoginForm = () => {
  const [useremail, setEmail] = useState('');
  const [userpw, setPassword] = useState('');

  return (
    <form  className="login-container">
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
              <div className="d-flex justify-content-between mx-4 mb-4">
                <a href="!#">Forgot password?</a>
              </div>
              <button type="submit" className="mb-4 w-100">Log in</button>
            </div>
          </div>
        </div>
        <div className='6' id="need-account">
          <h3>Need an Account?</h3>
          <Link href={"/signup"}><button className="mb-4" id="register-btn"> Register </button></Link>
          
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
