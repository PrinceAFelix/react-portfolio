import React from 'react'
import classes from './About.module.css'
import sharedstyle from '../styles/Sharedstyles.module.css'
import profile from '../../assets/PRIMG.jpg';

export const About = () => {
  return (
    <section className={classes.aboutsection} id="about">
      <div className={sharedstyle["container"]}>
        <h1 className={sharedstyle["section-title"]}>About</h1>
        <span className={sharedstyle["divider"]}></span>
      </div>
      <div className={classes.aboutcontent}>
        <div className={classes.myInfo}>
          <div id="profile" className={classes['profile']}>
            <img className={classes.image} src={profile} alt="myPic" />
          </div>
        </div>
        <div className={classes["about-text"]}>
          <p className={sharedstyle.p}>I'm Prince!<br /> A recent Computer Engineering Technology - Computing Science Graduate with frontend and backend skills and a strong interest in software development. My passion for technology started early when I looked up to my cousin who graduated with a Bachelor of Information Technology. Since then, I found myself enjoying the software side of it.</p>
          <p className={sharedstyle.p}>My main focus today is to land a job that will help me excel in learning different things in this field and will help me explore the things I could do that I thought I couldn't.</p>
          <p className={sharedstyle.p}>Well-organized developer who love challenges, a problem solver with a great passion for programming.</p>
          <p className={sharedstyle.p}><a href="#contact">Say hello!</a></p>
        </div>
      </div>
      <div className={`${sharedstyle['end-section']}`} />

    </section>
  )
}
