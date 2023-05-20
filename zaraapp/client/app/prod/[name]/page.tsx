'use client'
import { use, useEffect, useState } from "react";
import axios from "axios"
interface Product {
    productname: string;
    productprice: number;
    productquantity: number;
    productcolor: string;
    productcategory: string;
    'productsub-category': string;
    'productsub-sub-category': string;
    productimage: string;
    orderid:number
  }
export default function detailname() {
    const [name,setName]=useState<string>("")
    const [data, setData] = useState<Product[]>([]);
    const [product,setProduct]=useState('')
    useEffect(()=>{
    setName(window.location.pathname.split('/')[2])
    if(name){
            axios.get(`http://localhost:5000/api/products/one/${name}`)
                .then((res) => {setData(res.data)
                console.log(res.data)})
                .catch((err) => console.log(err))
    }
    },[name])
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
          const userid = parsedData.user?.[0].userid;
          const username = parsedData.user?.[0].username;
          axios.post(`http://localhost:5000/api/orders/`,{orderdate:12,userid:userid})
            .then((res) => {
              console.log(res);
            })
            .then((res) => {
                axios.get(`http://localhost:5000/api/user/one/${username}`)
                .then((res) => {
                  console.log(res);
                  setOrderId(res.data[0].orderid);
                })
              })

            .catch((err) => {
              console.log(err);
            });
        }
      }, []);
0
const prod: Product = {
    productname: data[0]?.productname || '',
    productprice: data[0]?.productprice || 0,
    productquantity: data[0]?.productquantity || 0,
    productcolor: data[0]?.productcolor || '',
    productcategory: data[0]?.productcategory || '',
    'productsub-category': data[0]?.['productsub-category'] || '',
    'productsub-sub-category': data[0]?.['productsub-sub-category'] || '',
    productimage: data[0]?.productimage || '',
    orderid: orderid,
  };

  const postData = (prod: object | undefined) => {
    axios
      .post(`http://localhost:5000/api/products/`,prod)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAdd = () => {
    console.log('Add to bag button clicked');
    console.log(prod)
    postData(prod);
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
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
              src={data[0].productimage}
              alt="Product Image"
            />
          </div>
        </div>
        <div>
          <div className="right" style={{marginRight : "40px"}} >
            <h2 className="cat">{data[0].productname}</h2>
            <h3>Lapelless blazer made of a linen blend fabric. Long sleeves. Flap pockets on the front. Tie belt in the same fabric. Matching lining. Double-breasted fastening with hidden button.</h3>
            <br />

            <span> <p className="pricetag"> {data[0].productprice}$ </p></span>
            <p>MRP incl. of all taxes</p>
            <br />
            <p>{data[0].productcolor} | 0647/301</p>
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
   
  }