'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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

const Product: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);

  const fetchData = () => {
    axios
      .get<Product[]>(`http://localhost:5000/api/products/all/sub/${productsub-category}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map((product, index) => (
        <div key={product.productid}>
          <img src={product.productimage}  />
          <h6>{product.productname}</h6>
          <h5>{product.productprice}</h5>
        </div>
      ))}
    </div>
  );
};

export default Product;
