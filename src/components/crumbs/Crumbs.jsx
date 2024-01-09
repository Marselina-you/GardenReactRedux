import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Crumbs.module.css';


const Crumbs = () => {
    return (
        <div className={classes.block}>
           <NavLink to="/news" className = { navData => navData.isActive ? classes.active : classes.item }>Главная</NavLink>
           <NavLink to="/news" className = { navData => navData.isActive ? classes.active : classes.item }>Каталог</NavLink>
      
        <h2 className={classes.category}>Комнатные растения</h2>
      </div>
      
    );
};


export default Crumbs;