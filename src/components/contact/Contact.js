import React, { useRef, useState, useContext, useEffect } from 'react'
import classes from './Contact.module.css'
import sharedstyle from '../styles/Sharedstyles.module.css'

import Input from '../common/input/Input'
import PortfolioContext from '../../context/portfolio-context'


export const Contact = () => {


  const portfolioCtx = useContext(PortfolioContext)

  const nameref = useRef();
  const emailref = useRef();
  const subjectref = useRef();
  const messageref = useRef();

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })


  const onInputChange = (e) => {
    const { name, value } = e.target
    setContactForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }


  useEffect(() => {
    const timer = setTimeout(() => {
      portfolioCtx.onSubmitForm({ name: contactForm.name, email: contactForm.email, subject: contactForm.subject, message: contactForm.message })
    }, 500)

    return () => clearTimeout(timer)

  }, [contactForm])


  const handleSubmitForm = (e) => {
    e.preventDefault();

    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    //Handle Email Sender api

  }





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
        <form onSubmit={handleSubmitForm}>
          <div className={classes.join}>
            <Input onChange={onInputChange} value={contactForm.name} inputRef={nameref} label="Name" type="text" name="name" />
            <Input onChange={onInputChange} value={contactForm.email} inputRef={emailref} label="Email" type="text" name="email" />
          </div>
          <Input onChange={onInputChange} value={contactForm.subject} inputRef={subjectref} label="Subject" type="text" name="subject" />
          <Input onChange={onInputChange} value={contactForm.message} inputRef={messageref} label="Message" type="textarea" name="message" />

          <button className={classes.button} type="submit">
            Send! ツ
          </button>
        </form>
      </div>
    </section>

  )
}

