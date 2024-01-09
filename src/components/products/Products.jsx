import React from 'react';
import BtnLoader from '../common/btnLoader/BtnLoader';
import Select from '../common/select/Select';
import Crumbs from '../crumbs/Crumbs';
import Filter from '../filter/Filter';
import Pagination from '../pagination/Pagination';
import Product from './product/Product';
import s from './Products.module.css'


const Products = (props) => {
 // debugger;
  let product =  props.productsProps.products.map( i => (<Product key={i.id} name={i.name} price={i.price} />))
    return (
        <section className={s.block}>
        <div className={s.container}>
        <div class="shop__top">
    <Crumbs />
       
         <Filter/>
         
          
     
    </div>
        <ul className={s.list}>
         {product}
        </ul>
        <div class="shop__bottom">
      <div class="shop__btn">
        <BtnLoader value="загрузить еще"/>
        
      </div>
      <div class="shop__pagination">
       <Pagination />
      </div>
      <div class="shop__nav">
        <button class="shop__nav__btn btn-reset btn btn--light">Подобрать по цене</button>
        <button class="shop__nav__btn btn-reset btn btn--light">В каталог</button>
      </div>
    </div>
        </div>
       </section>
    );
};



export default Products;