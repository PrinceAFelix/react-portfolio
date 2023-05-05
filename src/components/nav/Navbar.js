import React, { useState } from 'react'

import logo from '../../assets/logo.png'

import classes from "./Navbar.module.css"


export const Navbar = () => {

  const [isOn, setIsOn] = useState(false)

  const handleSetIsOn = () => {
    return setIsOn(!isOn);
  }


  return (
    <div>

      <div className={classes.header}>
        <div onClick={handleSetIsOn} className={`${classes.menu} ${isOn ? classes['toggle-on'] : ''}`}>
          <div className={`${classes['menu_burger']}`} />
        </div>
        <div className={classes.navbar}>
          <div className={classes.logo}>
            <a href="/#">
              <img className={classes.img} src={logo} alt="logo" />
            </a>
          </div>
          <div className={`${classes["nav-links"]} ${isOn ? classes['toggle-on'] : ''}`}>
            <ul className={classes.ul}>
              <li className={classes.li}>
                <a onClick={handleSetIsOn} href="/#about">About</a>
              </li>
              <li className={classes.li}>
                <a onClick={handleSetIsOn} href="/#skills">Skills</a>
              </li>
              <li className={classes.li}>
                <a onClick={handleSetIsOn} href="/#projects">Projects</a>
              </li>
              <li className={classes.li}>
                <a onClick={handleSetIsOn} href="/#contact">Contact</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};




export default Navbar;


