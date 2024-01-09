import React from 'react';
import classes from './BtnLoader.module.scss'


const BtnLoader = (props) => {
    return (
        <button className={`${classes.btn} ${classes.violet}`}>
        {props.value}
      </button>
    );
};



export default BtnLoader;