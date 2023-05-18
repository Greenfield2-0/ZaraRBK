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

    const fetchData=()=>{
        axios.get('http://localhost:5000/api/products/all/WOMAN')
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])

    return(
        <div>
            {data.map((e,i)=>{
                return(
                    <div key={i}>
                        <h2>{e['productsub-category']}</h2>
                    </div>
                )
            })

            }
        </div>
    )


}