import React from 'react';
import './shoppingcart.css';

function format(item){
    return(
    <div className="cartItem">
        <h3>{item.name}</h3>
        <h5>${item.price}</h5>
    </div>
    );
};

function ShoppingCart(props) {
//   const items = props.map((item) =>
//     <div className="cartItem">
//         <h3>{item.name}</h3>
//         <h5>${item.price}</h5>
//     </div>
//   );
  return (
      
    <div className="ShoppingCart">
    
    </div>
    
  );
}

export default ShoppingCart;
