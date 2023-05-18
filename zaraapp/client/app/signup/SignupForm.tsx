'use client';
import React, {useState} from 'react';
import axios from "axios";
import "./signup.css"
export default function SignupForm() {
  const [useremail, setEmail] = useState("")
  const [userpw, setPassword] = useState("")
  const [confirmuserpw, setConfirmPassword] = useState("")
  const [username, setName] = useState("")
  const [userlastname, setUserLastName] = useState("")

  const handleSubmit = async (e :React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault
    const newUser = {
      username: username,
      userlastname:userlastname,
      useremail,
      userpw,
    }
    const res =  axios.post("http://localhost:3000/api/user/signup", newUser, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    window.localStorage.setItem("User", JSON.stringify(res.data))
  }
  return (
    <div className="signup-container">
      <div className='g-0 d-flex'>
        <div id="signup-card">
          <h1 style={{marginBottom: "2rem"}} >Personal Details</h1>


        <div className='8'>

          <div className="card-body">
            <form  >
            <input  placeholder='E-MAIL' id='form1' className='input' onChange={(e) => setEmail(e.target.value)}/>
            <div style={{width: "65vw"}} className='dbl-input'>
                <div className='pw-input'>
                    <input id='mb-4' className='input' placeholder='PASSWORD' type='password' onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className='pw-input'>
                    <input id='mb-4' className='input' placeholder='CONFIRM PASSWORD' type='password' onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
            </div>
            <div style={{width: "65vw", marginBottom: "4rem"}} className='dbl-input'>
                <div className='pw-input'>
                    <input id='mb-4' className='input' placeholder='NAME' type='text' onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='pw-input'>
                    <input id='mb-4' className='input' placeholder='userLastname' type='text' onChange={(e) => setUserLastName(e.target.value)}/>
                </div>
            </div>

            <button  className="mb-4 signup-btn" onClick={handleSubmit}  >Create Account</button >
            </form> 
          </div>

        </div>

        </div>
        
      </div>

  </div>
  );
}