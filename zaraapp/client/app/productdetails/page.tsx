"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./details.css"
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

const Details: React.FC<{ e: Product }> = ({ e }) => {
  const [orderid, setOrderId] = useState<number>(0);
    interface UserData {
        token: string;
        user: { userid: number; username: string; userlastname: string; useremail: string; userpw: string }[];
        message: string;
      }   

      useEffect(() => {
        const storedData = window.localStorage.getItem('User');
        if (storedData) {
          const parsedData: UserData = JSON.parse(storedData);
          console.log(storedData)
          const username = parsedData.user?.[0].username;
          axios.get(`http://localhost:5000/api/user/one/${username}`)
            .then((res) => {
              console.log(res);
              setOrderId(res.data[0].orderid);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }, []);

    const prod = {
       productname: e.productname,
       productprice: e.productprice,
       productquantity: e.productquantity,
       productcolor: e.productcolor,
       productcategory: e.productcategory,
       'productsub-category': e['productsub-category'],
      'productsub-sub-category': e['productsub-sub-category'],
       productimage: e.productimage,
       orderid: orderid,
      }; 
      const postData = (prod:object | undefined) => {
        axios.post(`http://localhost:5000/api/products/`,prod)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };
  const handleAdd=()=>{
    console.log('it works')
     postData(prod)
  }
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div   >
      <div className="container">
        <div className="left">
          <h2>MATERIALS, CARE AND ORIGIN</h2>
          <h3>JOIN LIFE</h3>
          <p>Care for water produced using less water.</p>
          <br />
          <p>
          COMPOSITION & CARE


To assess compliance, we have developed a programme of audits and continuous improvement plans.
          </p>
          <br />

          <h2>MATERIALS</h2>
          <p>
          We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.

          </p>
          <br />
          <p>The Green to Wear 2.0 standard aims to minimize the environmental impact.</p>
          <a href="">
            <p>View more</p>
          </a>
        </div>
        <div className="containerprod">
          <div className="img1">
            <img
              className="centerimgprod"
              src={e.productimage}
              alt="Product Image"
            />
          </div>
        </div>
        <div>
          <div className="right" style={{marginRight : "40px"}} >
            <h2 className="cat">{e.productname}</h2>
            <h3>Lapelless blazer made of a linen blend fabric. Long sleeves. Flap pockets on the front. Tie belt in the same fabric. Matching lining. Double-breasted fastening with hidden button.</h3>
            <br />

            <span> <p className="pricetag"> {e.productprice}$ </p></span>
            <p>MRP incl. of all taxes</p>
            <br />
            <p>{e.productcolor} | 0647/301</p>
            <br />
            <select name="" id="prodsize">
              <option value="null">Select your size</option>
              <option value="EU 36 (UK 29)">EU 36 (UK 29)</option>
              <option value="EU 38 (UK 38)">EU 38 (UK 38)</option>
              <option value="EU 40 (UK 40)">EU 40 (UK 40)</option>
              <option value="EU 42 (UK 42)">EU 42 (UK 42)</option>
              <option value="EU 44 (UK 34)">EU 44 (UK 34)</option>
            </select>

            <button onClick={handleAdd}>Add to bag</button>

            <button>Process order</button>

            <p>CHECK IN-STORE AVAILABILITY
DELIVERY, EXCHANGES AND RETURNS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
