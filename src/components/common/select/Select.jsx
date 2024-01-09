import React from 'react';
import s from './Select.module.css'


const Select = () => {
    return (
        <select name="sort" className={s.select}>
        <option value="">сортировка</option>
        <option value="dog">по убыванию</option>
        <option value="cat">популярное</option>
        <option value="hamster">новинки</option>
        <option value="parrot">скидки</option>
      </select>
    );
};



export default Select;