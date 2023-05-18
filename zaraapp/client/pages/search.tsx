import React, { useEffect, useState } from "react";
import axios from 'axios';

const Search = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => {
        setData(res.data)
       
      })
      .catch((error) => {
        console.log(error)
      })
  };

  useEffect(() => {
    fetchData()
  
    
  }, []);

  { console.log(data)}


};

export default Search;
