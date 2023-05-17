import React, { FC , useState , useEffect , useRef} from 'react';
import '@/styles/ff.module.css';
import Image from 'next/image'

const Header: FC = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header style={{ width: '100%', padding: '12px 24px 20px 24px', position: 'fixed', margin: '0px' }}>
        <div id="headerContents" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div id="headerLeft" style={{ display: 'flex' }}>
            <div>
              <input
                type="image"
                name="menu"
                src="https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-14.jpg"
                id="menu"
                style={{ width: '30px', height: '30px', marginRight: '30px' ,  }}
                onClick={() => setMenuOpen(!isMenuOpen)}

              />
            </div>
            {isMenuOpen ? null : (
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg"
                  alt="Zara_Logo"
                  id="logo"
                  style={{ width: '212px' }}
                />
              </div>
            )}
          </div>
          <div id="headerRight" style={{ width: '30%', display: 'flex', marginRight: '30px', padding: '10px', justifyContent: 'space-between' }}>
            <div id="headerRightLeft">
              <a href="" style={{ padding: '0% 60% 0% 0%', fontSize: '13px', textDecoration: 'none', borderBottom: '1px solid black', color: 'rgb(41, 41, 41)', fontWeight: 700, fontFamily: 'Neue-Helvetica, Helvetica, Arial, Sans-Serif', fontStretch: 'ultra-condensed' }}>
                SEARCH
              </a>
            </div>
            <div id="headerRightRight">
              <a href="./login.html" style={{ textDecoration: 'none', padding: '0px 10px 0px 10px', fontSize: '13px', color: 'rgb(41, 41, 41)', fontWeight: 100, fontFamily: 'Neue-Helvetica, Helvetica, Arial, Sans-Serif', fontStretch: 'ultra-condensed' }}>
                LOG IN
              </a>
              <a href="" style={{ textDecoration: 'none', padding: '0px 10px 0px 10px', fontSize: '13px', color: 'rgb(41, 41, 41)', fontWeight: 100, fontFamily: 'Neue-Helvetica, Helvetica, Arial, Sans-Serif', fontStretch: 'ultra-condensed' }}>
                HELP
              </a>
              <a href="./cart-page.html" style={{ textDecoration: 'none', padding: '0px 10px 0px 10px', fontSize: '13px', color: 'rgb(41, 41, 41)', fontWeight: 100, fontFamily: 'Neue-Helvetica, Helvetica, Arial, Sans-Serif', fontStretch: 'ultra-condensed' }}>
                CART
              </a>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (
      <div id="menuModal" className
="menuOpacity animatedMenuShow">
<div className="menuContent">
<header id="headerRight" style={{ width: '30%', display: 'flex', marginRight: '30px', padding: '10px', justifyContent: 'space-between' }}><div id="menuTop">

 <ul className="close" onClick={() => setMenuOpen(false)}>
×
</ul>
<ul>
<li id="selected">WOMAN</li>
<li>MAN</li>
<li>KIDS</li>
</ul>
</div>
</header>
<div id="emptySpace" style={{ height: '100px', width: '341.25px', backgroundColor: 'white' }}></div>
<div id="menuOptions" style={{ position: 'fixed', overflow: 'hidden', maxHeight: '380px', width: '341.25px', backgroundColor: 'white' }}>
<div id="menuMainOptions">
<ul>
<li>NEW</li>
<li>LINEN</li>
<li>BEST SELLERS</li>
<li><a href="./Shoes.html">SHOES</a></li>
<li>BAGS</li>
<li>SWIMWEAR</li>
<li>ACCESSORIES</li>
<li>PERFUMES</li>
<li>LIME GLAM</li>
<li>S P E C I A L E D I T I O N</li>
</ul>
</div>
<div id="menuExtraOptions">
<ul>
<li>JOIN LIFE</li>
<li>+ INFO</li>
</ul>
</div>
</div>
</div>
</div>
      ) }







</>
);
};

export default Header;