import React from 'react';
import s from './BtnCart.css'


const BtnCart = (props) => {
    return (
        <button className={s.btn}>{props.value}</button>
    );
};



export default BtnCart;