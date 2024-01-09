import React from 'react';
import s from './Product.module.css'
import Image from '../../../images/categories/category-1.png';
import BtnCart from '../../common/btnCart/BtnCart';
import Eye from '../../common/eye/Eye';
import Like from '../../common/like/Like';


const Product = (props) => {
    return (
        <li className={s.item}>
        <a href="#" className={s.link}>
          <article className={s.block}>
            <div className={s.img}>
              <img src={Image} alt=""/>
              <div className={s.btns}>
              <Eye/>
               <Like/>
               </div>
              <div className={s.cart}>
                <BtnCart value="В корзину"/>
              </div>
            </div>
            <div className={s.content}>
              <div className={s.name}>
                <span>{props.name}</span></div>
            </div>
            <div className={s.price}>{props.price} Р</div>
          </article>
          </a>
       </li>
    );
};

export default Product;