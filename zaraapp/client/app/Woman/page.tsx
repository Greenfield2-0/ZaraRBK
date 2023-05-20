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

const Woman: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);

  const fetchData = () => {
    axios
      .get<Product[]>('http://localhost:5000/api/products/all/Woman')
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
          <Link href={`/product/[category]=${product['productsub-category']}`} as={`/product/${product['productsub-category']}`}>
              <h2>{product['productsub-category']}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Woman;
