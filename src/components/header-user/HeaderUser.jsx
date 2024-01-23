import React from 'react';
import LOGO from "../../images/logo-min.svg";
import s from "./HeaderUser.module.scss"

const HeaderUser = () => {
    return (
        <div className='container'>
            <div className={s.block}>
           
           
<ul className={s.list}>
<li className={s.logo}>
{/* <svg className={s.icon}>
                        <use
                          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#logo-min`}
                        />
                      </svg> */}
<img src={LOGO} alt="logo" />
         <div>Доставка цветов Кемерово</div>
       </li>
    <li className={s.item}>
        <span>Ближайшая доставка</span>
        <div className={s.info}>от 1-3 часов(0 ₽)</div>
    </li>
    <li className={s.item}>
        <span>Для России бесплатно</span>
        <div className={s.info}>8(600) 555-3498</div>
    </li>
    <li className={s.item}>
        <span>В корзине 0 товаров</span>
        <div className={s.info}>0 ₽</div>
    </li>
    <li className={s.item}>
        <span>Регистрация</span>
        <div className={s.info}>Личный кабинет</div>
    </li>
</ul>
            
            </div>
        </div>
    );
};



export default HeaderUser;