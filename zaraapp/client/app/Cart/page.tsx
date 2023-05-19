import React from 'react';
import Cart from './Cart'
import Header from '../header/page';
const CartPage: React.FC = (): JSX.Element => {
    return (
      <div>

        <Header/>
      <div id="cartPage">
        
        <Cart />
      </div>
      </div>
    );
  };

export default CartPage;
