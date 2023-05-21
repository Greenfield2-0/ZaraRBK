"use client"
import React, { useState } from 'react';
import axios from 'axios';
import "./help.css"
const Help = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div
      style={{
      

      }}
    >
      <div className='help' >
        
         <h4 className="head"  >HOW CAN WE HELP YOU?</h4>
      <input
        type="text"
        value={searchText}
        className='searchbar'
        placeholder="look for "
       
        onChange={handleSearchChange}
      /></div>
     
    </div>
  );
};

export default Help;
