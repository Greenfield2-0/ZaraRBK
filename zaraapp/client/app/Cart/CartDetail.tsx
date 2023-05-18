"use client"
import React from 'react'

function CartDetail({e}:any) {
  return (
    <div>
       <h1>{e.productname}</h1> 
       <h1>{e.productprice}</h1> 
       <h1>{e.productcolor}</h1>   
    </div>
  )
}

export default CartDetail