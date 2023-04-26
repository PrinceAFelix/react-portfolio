import React, { useRef } from 'react'
import classes from './Contact.module.css'
import sharedstyle from '../styles/Sharedstyles.module.css'

import Input from '../common/input/Input'



export const Contact = () => {

  const ref = useRef();



  return (
    <section className={classes['contact-section']} id="contact">
      <div className={`${classes['section-head']} ${sharedstyle["container"]}`}>
        <h1 className={classes['section-title']}>Contact me</h1>
        <span className={sharedstyle["divider"]}></span>
      </div>
      <span className={classes['text-zone']}>
        <p style={{ textAlign: 'center' }} className={sharedstyle.p}>I'm interested in software development opportunities with exciting challenges. Not work-related? That's fine! I'm up for any other questions, so do reach out.</p>
      </span>

      <div className={classes['form-container']}>
        <form onSubmit={() => { }}>
          <div className={classes.join}>
            <Input inputRef={ref} label="Name" type="text" name="nameinput" />
            <Input inputRef={ref} label="Email" type="text" name="nameinput" />
          </div>
          <Input inputRef={ref} label="Subject" type="text" name="subjectinput" />
          <Input inputRef={ref} label="Message" type="text" name="messageinput" />
        </form>
      </div>
    </section>

  )
}

