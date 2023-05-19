import React from 'react';
import Image from 'next/image'
import "./details.css"
const Details: React.FC = () => {
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
              src="https://static.zara.net/photos///2023/V/0/1/p/2494/586/251/2/w/563/2494586251_1_1_1.jpg?ts=1676033721731"
              alt="Product Image"
            />
          </div>
        </div>
        <div>
          <div className="right" style={{marginRight : "40px"}} >
            <h2 className="cat">LINEN BLEND BLAZER WITH BELT</h2>
            <h3>Lapelless blazer made of a linen blend fabric. Long sleeves. Flap pockets on the front. Tie belt in the same fabric. Matching lining. Double-breasted fastening with hidden button.</h3>
            <br />

            <span> <p className="pricetag"> $ </p></span>
            <p>MRP incl. of all taxes</p>
            <br />
            <p>Colour Linen | 0647/301</p>
            <br />
            <select name="" id="prodsize">
              <option value="null">Select your size</option>
              <option value="EU 36 (UK 29)">EU 36 (UK 29)</option>
              <option value="EU 38 (UK 38)">EU 38 (UK 38)</option>
              <option value="EU 40 (UK 40)">EU 40 (UK 40)</option>
              <option value="EU 42 (UK 42)">EU 42 (UK 42)</option>
              <option value="EU 44 (UK 34)">EU 44 (UK 34)</option>
            </select>

            <button>Add to bag</button>

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
