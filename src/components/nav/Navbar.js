import React from 'react'
import "./Navbar.css"


export const Navbar  = () => {
  return (
    <div className="header">
      <div className="menu">
        <div className="menu_burger"></div>
      </div>
      <div className='navbar'>
        <div className="links">
            <a className="page-link" href="#">HOME</a>
            <a className="page-link" href="#about">ABOUT</a>
            <a className="page-link" href="#skills">SKILLS</a>
            <a className="page-link" href="#projects">PROJECTS</a>
            <a className="page-link" href="#contact">CONTACT</a> 
        </div>
    </div>
  </div>
  );
};


