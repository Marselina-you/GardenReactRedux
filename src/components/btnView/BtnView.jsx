import React from 'react';
import classes from './BtnView.module.scss'


const BtnView = (props) => {
    return (
        <button className={`${classes.btn} ${classes.grey}`}>
        {props.value}
      </button>
    );
};



export default BtnView;