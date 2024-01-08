import React from "react";

import classes from "./Header.module.css";
import LOGO from "../../images/logo-min.svg";
import Nav from "../nav/Nav";
import Burger from "../burger/Burger";


const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.logo}>
            <img src={LOGO} alt="logo" />
          </div>
        </div>
        <div className={classes.right}>
          <Nav />
          <Burger/>
        </div>
      </div>
    </header>
  );
};

export default Header;
