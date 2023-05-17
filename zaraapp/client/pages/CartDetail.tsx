import React from 'react'

function CartDetail({prod}) {
  return (
    <div>
       <h1>{prod.productname}</h1> 
       <h1>{prod.productprice}</h1> 
       <h1>{prod.productcolor}</h1>   
    </div>
  )
}

export default CartDetail