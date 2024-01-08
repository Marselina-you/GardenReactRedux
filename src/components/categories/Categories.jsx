import React from 'react';
import s from './Categories.module.css'
import Category from './category/Category';
//import Category from './category/category';


const Categories = (props) => {
//debugger;
    let CategoryItem =  props.categoriesProps.categories.map( i => (<Category key={i.id} img={i.img} title={i.title}/>))
    //props.categoriesProps
    //console.log(CategoryItem)
    
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