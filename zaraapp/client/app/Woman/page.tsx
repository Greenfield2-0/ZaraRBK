'use client'
import React, { useState, useEffect } from 'react';
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

const Woman: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);

  const fetchData = () => {
    axios
      .get<Product[]>('http://localhost:5000/api/products/all/WOMAN')
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
          <h2>{product['productsub-category']}</h2>
        </div>
      ))}
    </div>
  );
};

export default Woman;
