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
  let product =  props.products.map( i => (<Product key={i.id} name={i.name} price={i.price} addToCart={props.addToCart} deleteFromCart={props.deleteFromCart} likes={props.likes} unlikes={props.unlikes} product={i}/>))
    return (
        <section className={s.block}>
        <div className='container'>
        <div className="shop__top">
    <Crumbs />
       <Filter/>
         </div>
        <ul className={s.list}>
         {product}
        </ul>
        <div className="shop__bottom">
      <div className="shop__btn">
        <BtnLoader value="загрузить еще"/>
        
      </div>
      <div className="shop__pagination">
       <Pagination />
      </div>
      <div className="shop__nav">
        <button className="shop__nav__btn btn-reset btn btn--light">Подобрать по цене</button>
        <button className="shop__nav__btn btn-reset btn btn--light">В каталог</button>
      </div>
    </div>
        </div>
       </section>
    );
};
export default Products;