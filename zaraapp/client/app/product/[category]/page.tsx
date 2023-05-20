'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import './product.css'
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
    const [category, setCategory] = useState<String>("")
    const [products, setProducts] = useState<Array<Object>>([])

    useEffect(() => {
        setCategory(window.location.pathname.split("/")[2])
        console.log(category,"this is 1")
        if (category) {
            axios.get(`http://localhost:5000/api/products/all/sub/${category}`)
                .then((res) => setProducts(res.data))
                .catch((err) => console.log(err))
        }
    }, [category])
    console.log(category,"this is 2")
    if (products.length > 0)

        return (

            <div className='Main'style={{marginLeft :"520px" , marginTop : "7px" }} >
              <div className="render-data ">
             {products.map((product, index) => (
              <div key={index}>
                <Link href="/productdetails" e={product} >
                <img src={product.productimage} className='Product_image_tri' style={{ marginTop : "120px"}}  />
                </Link>
                <div className='subdivproduct'   >
                <h6>{product.productname}</h6>
                <h5>{product.productprice}</h5>
                </div>
              </div>
            ))} 
            </div>
          </div>

  );
};

export default OneProduct;