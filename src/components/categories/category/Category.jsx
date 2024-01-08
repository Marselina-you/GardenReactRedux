import React from 'react';

import Image from '../../../images/categories/category-1.png';
import s from './Category.module.css';





const Category = (props) => {
    let style = props.style
    console.log(style)
    return (
        <li className={`${s.item} ${s.item1}`}>
        <a href="#" className={s.link}>
          <article className={s.block}>
            <div className={s.img}>
              <img src={Image} alt=""/>
            </div>
            <div className={s.content}>
              <div className={s.title}>
                <span>{props.title}</span></div>
            </div>
          </article>
        </a>
      </li>
    );
};



export default Category;