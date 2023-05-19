"use client"
import React, { useState, useEffect } from "react";
import axios from 'axios';

interface Product {
  productid: number;
  productname: string;
  productprice: number;
  productquantity: number;
  productcolor: string;
  productcategory: string;
  'productsub-category': string;
  'productsub-sub-category': string;
  productimage: string;
}

const Men: React.FC = (): React.ReactElement => {
  const [data, setData] = useState<Product[]>([]);

  const fetchData = () => {
    axios.get(`http://localhost:5000/api/products/all/Kid`)
      .then((res) => {
        setData(res.data);
        console.log(res.data,'product');
      })
      .catch((err) => {
        console.log(err);
      });
  };
 useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data.map((product) => (
        <h2 key={product.productid}>{product['productsub-category']}</h2>
      ))}
    </>
  );
}

export default Men;
