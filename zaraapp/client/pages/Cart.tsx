import React from 'react'
import axios from 'axios'
import { useState ,useEffect} from 'react'

function Cart() {
 const[data,setData]=useState([]);
 const[order,setOrder]=useState([])
 const user=getItem();
 const orderid=
 axios.get(`http://localhost:3000/api/products/${user.username}`)
 .then((res) => {
   setData(res.data)
   console.log(data)
 })
 .catch((err) => {
   console.log(err);
 });

 const fetchData=(orderid:any)=>{
   axios.get(`http://localhost:3000/api/products/${orderid}`)
    .then((res) => {
      setData(res.data)
      console.log(data)
    })
    .catch((err) => {
      console.log(err);
    });
};
useEffect(() => {
  fetchData()
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
