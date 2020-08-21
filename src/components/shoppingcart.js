import React from 'react';
import './shoppingcart.css';

function ShoppingCart(props) {
  const items = (props.cart).map((item) =>
    <div className="cartItem">
        <h3>{item.name}</h3>
        <h5>${item.price}</h5>
    </div>
  );
  return (
      
    <div className="ShoppingCart">
        {items}
    </div>
    
  );
}

export default ShoppingCart;
