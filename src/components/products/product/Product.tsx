import React from 'react';
import s from './Product.module.css'
import Image from '../../../images/categories/category-1.png';
import BtnCart from '../../common/btnCart/BtnCart';
import Eye from '../../common/eye/Eye';
import Like from '../../common/like/Like';
type PropsType = {
name: string
price: number
like: (productId: number) => void
productId: number

}

const Product: React.FC<PropsType> = ({name, price, like, productId}) => {
    return (
        <li className={s.item}>
        <a href="#" className={s.link}>
          <article className={s.block}>
            <div className={s.img}>
              <img src={Image} alt=""/>
              <div className={s.btns}>
              <Eye />
               <Like propsOnClick={() => {
               like(productId)
              }}/>
               </div>
              <div className={s.cart}>
                <BtnCart value='in cart'/>
              </div>
            </div>
            <div className={s.content}>
              <div className={s.name}>
                <span>{name}</span></div>
                <span>{productId}</span>
            </div>
            <div className={s.price}>{price} Р</div>
          </article>
          </a>
       </li>
    );
};

export default Product;