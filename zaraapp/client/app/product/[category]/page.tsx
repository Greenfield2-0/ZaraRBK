'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import './product.css';

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

const OneProduct: React.FC = () => {
  const [category, setCategory] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setCategory(window.location.pathname.split("/")[2]);
    console.log(category, "this is 1");

    if (category) {
      axios.get(`http://localhost:5000/api/products/all/sub/${category}`)
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    }
  }, [category]);

  console.log(category, "this is 2");

  if (products.length > 0) {
    return (
      <div className='Main' style={{ marginLeft: "150px" }}>
        <div className="render-data">
          {products.map((product) => (
            <div key={product.productid}>
              <Link href="/productdetails">
                <img src={product.productimage} className='Product_image_tri' />
              </Link>

              <div className='subdivproduct'>
                <h6>{product.productname}</h6>
                <h5>{product.productprice}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default OneProduct;
