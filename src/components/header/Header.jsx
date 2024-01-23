import React from "react";

import classes from "./Header.module.css";

import Nav from "../nav/Nav";
import Burger from "../burger/Burger";


const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        
       
          <Nav />
          <Burger/>
       
      </div>
    </header>
  );
};

export default Header;
