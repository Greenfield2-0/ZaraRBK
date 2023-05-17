import React from 'react'
import axios from 'axios'
import { useState ,useEffect} from 'react'

function Cart() {
 const[data,setData]=useState([]);
 const user=getItem();
 let orderid;
 const getOrderId=axios.get(`http://localhost:3000/api/user/one/${user.username}`)
 .then((res) => {
   console.log(res)
   orderid=res.data[0].orderid
 })
 .catch((err) => {
   console.log(err);
 });

 const fetchData=(id:any)=>{
   axios.get(`http://localhost:3000/api/products/${id}`)
    .then((res) => {
      setData(res.data)
      console.log(data)
    })
    .catch((err) => {
      console.log(err);
    });
};
useEffect(() => {
  fetchData(orderid)
});
 
  return (
     data.map((prod)=>(
      <>
      <CartDetail prod={prod}/>
      </>
     ))

  )
}

export default Cart
