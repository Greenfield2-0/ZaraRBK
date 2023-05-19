"use client"
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Link from 'next/link';
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

const Beauty: React.FC = (): React.ReactElement => {
  const [data, setData] = useState<Product[]>([]);

  const fetchData = () => {
    axios.get(`http://localhost:5000/api/products/all/Beauty`)
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
        <Link href={`/product/[category]=${product['productsub-category']}`} as={`/product/${product['productsub-category']}`}>
        <h2>{product['productsub-category']}</h2>
    </Link>
      ))}
    </>
  );
}

export default Beauty;
