import React from 'react'
import s from './Product.module.css'
import Image from '../../../images/categories/category-1.png'
import BtnCart from '../../common/btnCart/BtnCart'
import clsx from 'clsx'

const Product = ({likes, unlikes, name, price, product, deleteFromCart, addToCart}) => {
    return (
        <li className={s.item}>
        <a href="#" className={s.link}>
          <article className={s.block}>
            <div className={s.img}>
              <img src={Image} alt=""/>
              <div className={s.btns}>
                {product.added
                ? <button className='btnSign' onClick={() => deleteFromCart(product.id)}>
                <svg><use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#eye`}/></svg>
                </button>
                :  <button className={clsx('btnSign', 'btnSignActive')} onClick={() => addToCart(product.id)}>
                <svg><use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#eye`}/></svg>
                </button>}
             
              {product.liked
            ?<button className='btnSign' onClick={() => unlikes(product.id)}>
              <svg><use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#like`}/></svg>
                 </button>
            : 
               <button className={clsx('btnSign', 'btnSignActive')} onClick={() => likes(product.id)}>
              <svg><use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#like`}/></svg>
                 </button>
              }
               </div>
              <div className={s.cart}>
                <BtnCart value="В корзину"/>
              </div>
            </div>
            <div className={s.content}>
              <div className={s.name}>
                <span>{name}</span></div>
            </div>
            <div className={s.price}>{price} Р</div>
          </article>
          </a>
       </li>
    );
};

export default Product;