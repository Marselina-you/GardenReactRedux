import React from 'react';
import classes from './Burger.module.css' 



const Burger = () => {
    return (
        <button className={classes.burger} aria-label="Открыть меню">
        <span className={classes.line}></span>
      </button>
    );
};



export default Burger;