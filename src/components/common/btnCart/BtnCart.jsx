import React from 'react';
import s from './BtnCart.module.css'


const BtnCart = (props) => {
    return (
        <button className={s.btn}>{props.value}</button>
    );
};



export default BtnCart;