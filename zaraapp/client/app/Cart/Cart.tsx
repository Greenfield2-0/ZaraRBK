import React from 'react'
import axios from 'axios'
import { useState ,useEffect} from 'react'
import CartDetail from '../CartDetail/CartDetail';

function Cart() {
 const[prod,setProd]=useState([]);
 const user=localStorage.getItem("");
 interface Product {
  id: number;
  name: string;
  price: number;
}
 let orderid: number | undefined;
 const getOrderId=()=>(axios.get(`http://localhost:3000/api/user/one/${user.username}`)
 .then((res) => {
   console.log(res)
   orderid=res.data[0].orderid
 })
 .catch((err) => {
   console.log(err);
 }));

 const fetchData=(id:any)=>{
   axios.get(`http://localhost:3000/api/products/${id}`)
    .then((res) => {
      setProd(res.data)
      console.log(prod)
    })
    .catch((err) => {
      console.log(err);
    });
};
useEffect(() => {
  fetchData(orderid)
  getOrderId()
});
 
  return (
     prod.map((e:any)=>(
      <>
      <CartDetail e={e}/>
      </>
     ))

  )
}

export default Cart
