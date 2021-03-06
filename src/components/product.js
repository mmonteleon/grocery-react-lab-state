import React from 'react';

function Product(props) {
  return (
    <div className="Product" >
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <div className="buttons">
        <button onClick={()=>{props.add(props)}}>Add</button>
        <button onClick={()=>{props.remove(props)}}>Remove</button>
      </div>
    </div>
  );
}

export default Product;
