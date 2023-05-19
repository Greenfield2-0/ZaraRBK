'use client'
import { useState } from "react";
import axios from 'axios';
import "./search.css"

const Search: React.FC = () => {

  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<any[]>([]);

  const fetchData = () => { 
    axios.get(`http://localhost:5000/api/products/one/${search}`)
      .then((response: any) => {
        setResults(response.data);
        console.log(response.data);
        console.log("hi");
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  const handleSearch = () => {
    fetchData();
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <input style={{ marginTop: "200px" }} className="searchbar" type="text" placeholder="Search for an ITEM" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>search</button>

      {results.map((result) => (
        <div key={result.productId}>
          <div>Product: {result.productimage}</div>
          <div>Product Name: {result.productname}</div>
          <div>Product Price: {result.productprice}</div>
        </div>
      ))}
    </div>
  );
};

export default Search;