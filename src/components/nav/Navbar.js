import React from 'react'

import logo from '../../assets/logo.png'

import classes from "./Navbar.module.css"


export const Navbar = () => {
  return (
    <div className={classes.header}>

      <div className={classes.navbar}>
        <div>
          <a href="/#">
            <img className={classes.img} src={logo} alt="logo" />
          </a>
        </div>
        <div className={classes["nav-links"]}>
          <ol>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#skills">Skills</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ol>
        </div>
        <div className={classes.menu}>
          <div className={classes["menu_burger"]}></div>
        </div>
      </div>
    </div>
  );
};




export default Navbar;


