import React from 'react'
import classes from './About.module.css'
import sharedstyle from '../styles/Sharedstyles.module.css'
import profile from '../../assets/PRIMG.jpg';

export const About = () => {
  return (
    <div>
      <section className={classes.aboutsection} id="about">
        <h1 className={sharedstyle["section-title"]}>About me</h1>
        <span className={sharedstyle["divider"]}></span>
        <div className={classes.aboutcontent}>
          <div className={classes.myInfo}>
            <div id="profile" className={classes['profile']}>
              <img className={classes.image} src={profile} alt="myPic" />
            </div>
          </div>
          <div className={classes["about-text"]}>
            <p>
              I'm Prince!<br /> A recent Computer Engineering Technology - Computing Science Graduate at Algonquin College. I've been passionate about technology since then and I found myself enjoying the software side of it.
              <br /><br />
              Well-organized developer, love challenges, problem solver with great passion for programming.
              <br /><br />
              Aside from computer, I play different sports during my free time and spend time with families and friends.
              <a href="#contact">Say hello.</a>
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

