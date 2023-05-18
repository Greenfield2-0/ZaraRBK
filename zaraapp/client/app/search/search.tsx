import React, { useState } from "react";
import axios from 'axios';

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const fetchData = () => { 
    axios.get(`http://localhost:5000/api/products/one/${search}`)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
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

