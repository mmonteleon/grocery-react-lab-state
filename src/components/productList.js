import React from 'react';
import './productList.css';
// Be sure to uncomment this line before trying to use the Product component!
import Product from './product'




function ProductList(props) {
  return (
    <div>
        <div className="ProductList">
        <Product name={props.inventory[0].name} price={props.inventory[0].price} add={props.add} remove={props.remove}/>
        <Product name={props.inventory[1].name} price={props.inventory[1].price} add={props.add} remove={props.remove}/>
        </div>

        <div className="ProductList">
        <Product name={props.inventory[2].name} price={props.inventory[2].price} add={props.add} remove={props.remove}/>
        </div>
    </div>

  );
}

export default ProductList;
