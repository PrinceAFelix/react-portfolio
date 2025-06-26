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
          <p className={sharedstyle.p}>I'm Prince!<br /> A <a target='_blank' href='https://www.algonquincollege.com/sat/program/computer-engineering-technology-computing-science/' rel="noreferrer">Computer Engineering Technology</a> graduate with a passion for designing, developing, and maintaining applications. I love the challenges that come with coding, as well as the ability to bring ideas to life through programming.</p>
          <p className={sharedstyle.p}>I have full-stack development experience from academic and personal projects. I recently completed a Graduate Certificate in <a target='_blank' href='https://www.algonquincollege.com/sat/program/cloud-development-and-operations/' rel="noreferrer">Cloud Development and Operations</a> to deepen my understanding of cloud technologies and DevOps.</p>
          <p className={sharedstyle.p}>I'm a self-starter with a strong work ethic and a problem solver with a great passion for programming.</p>
          <p className={sharedstyle.p}><a href="#contact">Say hello!</a></p>
        </div>
      </div>
      <div className={`${sharedstyle['end-section']}`} />

    </section>
  )
}
