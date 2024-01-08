import React from 'react';
import Product from './product/Product';
import s from './Products.module.css'


const Products = (props) => {
 // debugger;
  let product =  props.productsProps.products.map( i => (<Product key={i.id} name={i.name} price={i.price} />))
    return (
        <ul className={s.list}>
         {product}
        </ul>
    );
};



export default Products;