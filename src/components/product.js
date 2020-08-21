import React from 'react';

function Product(props) {
  return (
    <div className="Product" >
      <h2>{props.food}</h2>
      <h3>{props.price}</h3>
      <div className="buttons">
        <button onClick={()=>{console.log("add button test")}}>Add</button>
        <button onClick={()=>{console.log("remove button test")}}>Remove</button>
      </div>
    </div>
  );
}

export default Product;
