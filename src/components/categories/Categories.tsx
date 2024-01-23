import React from 'react';
import { CategoryType } from '../../types/types';
import s from './Categories.module.css'
import Category from './category/Category';
//import Category from './category/category';

type PropsType = {
    categories: Array<CategoryType>
}
const Categories: React.FC<PropsType> = ({categories}) => {
//debugger;
    let CategoryItem =  categories.map( i => (<Category key={i.id} img={i.img} title={i.title} style={i.style}/>))
   
    
    return (
        <section className={s.categories}>
        <div className={s.container}>
         
            <ul className={s.list}>
          {CategoryItem}
      </ul>
    
  </div>
</section>
    );
};



export default Categories;