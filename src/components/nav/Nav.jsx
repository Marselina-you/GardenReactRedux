import React from "react";
import classes from "./Nav.module.scss";
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <nav>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink to="/products" className={classes.link}>
            Главная
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/products" className={classes.link}>
            Каталог
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/contacts" className={classes.link}>
            Контакты
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/services" className={classes.link}>
            Услуги
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/cart" className={classes.link}>
            Корзина
          </NavLink>
        </li>
      </ul>
    </nav>
    
  );
};

export default Nav;
