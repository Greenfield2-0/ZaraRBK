import React, { useState } from "react";
import axios from 'axios';

const Search = () => {
  const [search, setSearch] = useState('');
  
  const fetchData = () => { 
    axios.get(`http://localhost:5000/api/products/one/${search}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {

        console.error(error);
      });
  };

  
  const handleSearch = () => {
    fetchData();
  };
  
  return (
    <div>
<input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;

