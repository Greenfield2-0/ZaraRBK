"use client"
import React, { FC, useState, useEffect } from 'react';
import './ff.css';
import axios from 'axios';
import Link from 'next/link';
import Woman from '../Woman/page';
import Men from '../Men/page';
import Kid from '../Kid/page';
import Beauty from '../Beauty/page';

const Header: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);
  const [show, setShow] = useState(false);
  const [showKid, setShowKid] = useState(false);
  const [showBeauty, setshowBeauty] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
    setShow(false);
    setShowKid(false);
    setshowBeauty(false);
  };

  const handleShow = () => {
    setShow(!show);
    setDisplay(false);
    setShowKid(false);
    setshowBeauty(false);
  };

  const handleShowKid = () => {
    setShowKid(!showKid);
    setDisplay(false);
    setShow(false);
    setshowBeauty(false);
  };

  const handleShowBeauty = () => {
    setshowBeauty(!showBeauty);
    setShowKid(false);
    setDisplay(false);
    setShow(false);
  };

  const fetchData = () => {
    axios
      .get('http://localhost:5000/api/products/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header
        style={{
          width: '100%',
          padding: '12px 24px 20px 24px',
          position: 'fixed',
          margin: '0px',
        }}
      >
        <div
          id="headerContents"
          style={{ display: 'flex', justifyContent: 'space-between', width: '100%', position: 'fixed' }}
        >
          <div id="headerLeft" style={{ display: 'flex' }}>
            <div>
              <input
                type="image"
                name="menu"
                src="https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-14.jpg"
                id="menu"
                style={{ width: '30px', height: '30px', marginRight: '30px' }}
                onClick={() => setMenuOpen(!isMenuOpen)}
              />
            </div>
            {!isMenuOpen && (
              <Link href="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg"
                  alt="Zara_Logo"
                  id="logo"
                  style={{ width: '212px' }}
                />
              </Link>
            )}
          </div>
          <div
            id="headerRight"
            style={{
              width: '30%',
              display: 'flex',
              marginRight: '30px',
              padding: '10px',
              justifyContent: 'space-between',
            }}
          >
            <div id="headerRightLeft">
              <Link
                href="/search"
                style={{
                  padding: '0% 60% 0% 0%',
                  fontSize: '13px',
                  textDecoration: 'none',
                  borderBottom: '1px solid black',
                  color: 'rgb(41, 41, 41)',
                  fontWeight: 700,
                  fontFamily: 'Neue-Helvetica, Helvetica, Arial, Sans-Serif',
                  fontStretch: 'ultra-condensed',
                }}
              >
                <span className="menuLink">SEARCH</span>
              </Link>
            </div>
            <div id="headerRightRight">
              <Link
                href="/Login"
                style={{
                  textDecoration: 'none',
                  padding: '0px 10px 0px 10px',
                  fontSize: '13px',
                  color: 'rgb(41, 41, 41)',
                  fontWeight: 100,
                  fontFamily: 'Neue-Helvetica, Helvetica, Arial, Sans-Serif',
                  fontStretch: 'ultra-condensed',
                }}
              >
                <span className="menuLink">LOG IN</span>
              </Link>
              
                <Link
                href="./help"
                style={{
                  textDecoration: 'none',
                  padding: '0px 10px 0px 10px',
                  fontSize: '13px',
                  color: 'rgb(41, 41, 41)',
                  fontWeight: 100,
                  fontFamily: 'Neue-Helvetica, Helvetica, Arial, Sans-Serif',
                  fontStretch: 'ultra-condensed',
                }}
              >
                <span className="menuLink">HELP</span>
                </Link>
              
                <Link
  href="./Cart"
  style={{
    textDecoration: 'none',
    padding: '0px 10px',
    fontSize: '13px',
    color: 'rgb(41, 41, 41)',
    fontWeight: 100,
    fontFamily: 'Neue-Helvetica, Helvetica, Arial, Sans-Serif',
    fontStretch: 'ultra-condensed',
  }}
>
  <img
    style={{
      width: '22px',
      height: '19px',
    }}
    src="https://cdn-icons-png.flaticon.com/512/3110/3110065.png"
    alt="Cart"
  />
</Link>

            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div id="menuModal" className="menuOpacity animatedMenuShow">
          <div className="menuContent">
            <header
              id="headerRight"
              style={{
                width: '1000%',
                display: 'flex',
                marginRight: '30px',
                padding: '10px',
                justifyContent: 'space-between',
              }}
            >
              <div id="menuTop"></div>
            </header>
            <div
              id="menuOptions"
              style={{
                position: 'fixed',
                overflow: 'hidden',
                height: '4000px',
                width: '470px',
                backgroundColor: 'white',
                marginTop: '-30px',
                marginLeft : "-20px"
              }}
            >
              <div id="menuMainOptions" style={{ display: 'flex' }}>
                <ul className="menuOptionsList">
                  <ul className="close" onClick={() => setMenuOpen(false)} style={{ marginRight: '100px' , marginLeft : "-41px" , fontSize : "21px" , color : "grey" }}>
                  ✕
                  </ul>

                  <div
                    style={{
                      marginTop: '90px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      marginBottom: '25px',
              
                    }}
                  >
 <p className="menuOption" style={{ marginLeft: '-10px', marginTop: '-40px' , fontFamily: 'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
  color: 'grey',
  fontSize: '11px'  , cursor : "pointer"}} onClick={handleShow}>
    WOMAN
  </p>
  <p className="menuOption" style={{ marginRight: '20px', marginTop: '-40px' , marginLeft : "25px" , fontFamily: 'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
  color: 'rgb(134, 134, 134)',
  fontSize: '11px' ,  cursor : "pointer" }} onClick={handleDisplay}>
    MEN
  </p>
  <p className="menuOption" style={{ marginRight: '20px', marginTop: '-40px' , fontFamily: 'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
  color: 'rgb(134, 134, 134)',
  fontSize: '11px',  cursor : "pointer" }} onClick={handleShowKid}>
    CHILDREN
  </p>
  <p className="menuOption" style={{ marginRight: '10px', marginTop: '-40px' , fontFamily: 'Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
  color: 'rgb(134, 134, 134)',
  fontSize: '11px' ,  cursor : "pointer" }} onClick={handleShowBeauty}>
    BEAUTY
  </p>
                  </div>
                  <li className="menuOption" style={{marginTop : "-20px" , fontsize : "20px"  }}   >NEW</li>
                  {display ? (
                    <div className="menuOption"   >
                      <Men />
                    </div>
                  ) : (
                    <></>
                  )}
                  {show ? (
                    <div className="menuOption">
                      <Woman />
                    </div>
                  ) : (
                    <></>
                  )}
                  {showKid ? (
                    <div className="menuOption">
                      <Kid />
                    </div>
                  ) : (
                    <></>
                  )}
                  {showBeauty ? (
                 <div className="menuOption" style={{ textDecoration: 'none', cursor: 'default' }}>
                 <Beauty />
               </div>
               
                
                  ) : (
                    <></>
                  )}
                  <div id="menuExtraOptions">
                    <ul>
                      <li>JOIN LIFE</li>
                      <li>+ INFO</li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
