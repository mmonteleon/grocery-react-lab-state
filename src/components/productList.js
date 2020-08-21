import React from 'react';
import './productList.css';
// Be sure to uncomment this line before trying to use the Product component!
import Product from './product'

function ProductList(props) {
  return (
    <div>
        <div className="ProductList">
        <Product food={props.inventory[0].name} price={props.inventory[0].price}/>
        <Product food={props.inventory[1].name} price={props.inventory[1].price}/>
        </div>

        <div className="ProductList">
        <Product food={props.inventory[2].name} price={props.inventory[2].price}/>
        </div>
    </div>

  );
}

export default ProductList;
