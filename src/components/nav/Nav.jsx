import React from "react";
import classes from "./Nav.module.scss";
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink to="/products" className={classes.link}>
            О нас
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/products" className={classes.link}>
            Услуги
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/contacts" className={classes.link}>
            Бонусы
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/categories" className={classes.link}>
            Доставка
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/cart" className={classes.link}>
           Отзывы
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/cart" className={classes.link}>
          Контакты
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/cart" className={classes.link}>
         Блог
          </NavLink>
        </li>
      </ul>
    </nav>
    
  );
};

export default Nav;
