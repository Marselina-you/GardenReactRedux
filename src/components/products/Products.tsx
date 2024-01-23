import React from 'react';
import { ProductType } from '../../types/types';
import BtnLoader from '../common/btnLoader/BtnLoader';
import Crumbs from '../crumbs/Crumbs';
import Filter from '../filter/Filter';
import Pagination from '../pagination/Pagination';
import Product from './product/Product';
import s from './Products.module.css'

type PropsType = {
  products: Array<ProductType>
}
const Products: React.FC<PropsType> = (props) => {
 // debugger;
  let product =  props.products.map( i => (<Product key={i.id} name={i.name} price={i.price} />))
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