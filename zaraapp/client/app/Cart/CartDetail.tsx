"use client"
import React from 'react'

function CartDetail({e}:any) {
  console.log('heelo from detail')
  return (
    <div  >
  <div >
    <div >
      <img
      
        src={e.productimage}
        style={{ width: "230px", height: "350px" , marginTop : "150px" }}
      
      />
    </div>
    <div style={{
  fontFamily: 'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
  color: 'rgb(134, 134, 134)',
  fontSize: '10px'
}}>
 
    
       <h3>{e.productname}</h3> 
       <h3>{e.productprice}</h3> 
       <h3>{e.productcolor}</h3>   
    </div>
    <div className="sm-col sm-col-6">
      <div className="details p2">
        <a className="blue text-decoration-none" href="#!">
          {" "}
        </a>
      </div>
    </div>
  </div>
 
       
    </div>


  )
}


export default CartDetail