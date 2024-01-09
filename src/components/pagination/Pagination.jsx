import React from 'react';
import s from './Pagination.module.css'


const Pagination = () => {
    return (
        <ul className={s.list}>
          <li className={`${s.item} ${s.item__current}`}>
            <span className={`${s.number} ${s.current}`}>1</span>
          </li>
          <li className={s.item}>
          
            <span className={s.number}>2</span>
          </li>
          <li className={s.item}>
            <span className={`${s.number} ${s.next}`}></span>
          </li>
        </ul>
    );
};



export default Pagination;