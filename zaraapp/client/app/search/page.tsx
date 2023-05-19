"use client"
import { useState, useEffect } from "react";
import axios from 'axios';
import "./search.css"

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<any[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLInputElement>) => {
    const searchTerm = (e.target as HTMLInputElement).value;
    setSearch(searchTerm);
  };

  useEffect(() => {
    let searchTimer: NodeJS.Timeout | null = null;

    const fetchData = (searchTerm: string) => { 
      axios.get(`http://localhost:5000/api/products/one/${searchTerm}`)
        .then((response: any) => {
          setResults(response.data);
          console.log(response.data);
          console.log("hi");
        })
        .catch((error: any) => {
          console.error(error);
        });
    };

    if (typeof window !== 'undefined') {
      fetchData(search)
    }

    return () => {
      if (searchTimer) {
        clearTimeout(searchTimer);
      }
    };
  }, [search]);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <input style={{
  fontFamily: 'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
  color: 'rgb(134, 134, 134)',
  fontSize: '15px',
  marginTop : '200px'
}} className="searchbar" type="text" placeholder="Search for an item" value={search} onChange={handleSearchChange} />

      {results.map((result) => (
        <div key={result.productId}>
          <img src={result.productimage} alt="image" style={{ width: "230px", height: "350px" }} />
          <div>Product Name: {result.productname}</div>
          <div>Product Price: {result.productprice}</div>
        </div>
      ))}
    </div>
  );
};

export default Search;
