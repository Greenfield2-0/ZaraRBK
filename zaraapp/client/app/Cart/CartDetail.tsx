"use client"
import React from 'react'

function CartDetail({e}:any) {
  console.log('heelo from detail')
  return (
    <div className="product bg-white m2">
  <div className="clearfix rounded overflow-hidden">
    <div className="sm-col sm-col-6 bg-gray border border-white rounded">
      <img
        className="block fit mx-auto"
        src="https://static.zara.net/photos///2023/V/0/1/p/3519/022/104/2/w/296/3519022104_2_1_1.jpg?ts=1673950705136"
      />
    </div>
    <div>
       <h1>{e.productname}</h1> 
       <h1>{e.productprice}</h1> 
       <h1>{e.productcolor}</h1>   
    </div>
    <div className="sm-col sm-col-6">
      <div className="details p2">
        <a className="blue text-decoration-none" href="#!">
          {" "}
        </a>
      </div>
    </div>
  </div>
  <div className="clearfix border-top border-silver">
    <div className="related">
      <h5 className="caps gray center mb0">Also Enjoy</h5>
      <div className="clearfix p2">
        <div className="col col-6 sm-col-3">
          <a className="block border border-white" href="#!">
            <img
              className="block fit mx-auto"
              src="https://web.archive.org/web/20170721214248if_/http://springbankwhisky.com/static/img/hazelburn/12-years.jpg"
            />
          </a>
        </div>
        <div className="col col-6 sm-col-3">
          <a className="block border border-white" href="#!">
            <img
              className="block fit mx-auto"
              src="https://web.archive.org/web/20170721214248if_/http://springbankwhisky.com/static/img/springbank/12-years.jpg"
            />
          </a>
        </div>
        <div className="col col-6 sm-col-3">
          <a className="block border border-white" href="#!">
            <img
              className="block fit mx-auto"
              src="https://web.archive.org/web/20170721214248if_/http://springbankwhisky.com/static/img/springbank/18-years.jpg"
            />
          </a>
        </div>
        <div className="col col-6 sm-col-3">
          <a className="block border border-white" href="#!">
            <img
              className="block fit mx-auto"
              src="https://web.archive.org/web/20170721214248if_/http://springbankwhisky.com/static/img/longrow/peated.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  <p className="center gray h6 p2">
    {" "}
    All Images ©{" "}
    <a
      className="gray text-decoration-none"
      href="https://web.archive.org/web/20170721214248if_/http://springbankwhisky.com"
      target="_dram"
    >
      Springbank Distillers Ltd
    </a>
  </p>
</div>
  )
}


export default CartDetail