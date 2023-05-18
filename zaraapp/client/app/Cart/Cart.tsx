"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartDetail from './CartDetail';

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

const Cart: React.FC = (): JSX.Element => {
  const [prod, setProd] = useState<Product[]>([]);
  const [orderid, setOrderId] = useState<number>(0);

  interface UserData {
    token: string;
    user: { userid: number; username: string; userlastname: string; useremail: string; userpw: string }[];
    message: string;
  }

  useEffect(() => {
    const storedData = window.localStorage.getItem('User');
    console.log(storedData,'mystored')
    if (storedData) {
      const parsedData: UserData = JSON.parse(storedData);
      console.log(parsedData,'my local')
      const username = parsedData.user?.[0].username;
      axios.get(`http://localhost:3000/api/user/one/${username}`)
        .then((res) => {
          console.log(res);
          setOrderId(res.data[0].orderid);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const fetchData = (id: number | undefined) => {
    axios.get(`http://localhost:3000/api/products/${id}`)
      .then((res) => {
        setProd(res.data);
        console.log(res.data,'product');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData(orderid);
  }, [orderid]);


  return (
    <>
      {prod.map((e: Product) => (
        <CartDetail key={e.productid} e={e} />
      ))}
    </>
  );
};

export default Cart;
