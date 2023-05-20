"use client"
import { useEffect, useState } from 'react';
import axios from "axios"
import React from 'react';
import './help.css'
import Header from '../header/page';

const Help=()=>{
    const [data,setData]=useState<any>([])

return(
  <div>
  <Header/>
  <div className="help">
  <div className="form">
    <h4>HOW CAN WE HELP YOU?</h4>
    <input
      type="input"
      className="searchHelp"
      placeholder="Search"
      name="name"
      id="name"
      onChange={(e)=>setData(e.target.value)}
    />
  </div>
    </div>
    </div>

) 
}
export default Help