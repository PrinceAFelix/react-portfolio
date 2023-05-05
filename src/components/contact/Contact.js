import React, { useRef, useState, useContext, useEffect } from 'react'
import classes from './Contact.module.css'
import sharedstyle from '../styles/Sharedstyles.module.css'

import Input from '../common/input/Input'
import PortfolioContext from '../../context/portfolio-context'

import emailjs from '@emailjs/browser';
import dotenv from 'dotenv';

dotenv.config();
export const Contact = () => {

  const portfolioCtx = useContext(PortfolioContext)

  const formref = useRef();
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


  const onInputChange = (e, inputref) => {
    inputref.current.style.color = "white";
    inputref.current.style.border = "none";
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
    const fields = [nameref, emailref, subjectref, messageref]
    let index = -1
    //Validate

    for (let i = 0; i < fields.length; i++) {
      if (fields[i].current.value === '') {
        index = i
        fields[i].current.style.border = "1px solid red";
        break
      }
    }
    if (index >= 0) {
      fields[index].current.focus()
      return
    }

    if (emailref.current.value !== '') {
      if (!emailref.current.value.includes('@')) {
        emailref.current.style.color = 'red'
        emailref.current.style.border = "1px solid red";
        return
      }

    }

    //Handle Email Sender api
    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, formref.current, process.env.PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    })




  }




  return (
    <section className={classes['contact-section']} id="contact">
      <div className={`${classes['section-head']} ${sharedstyle["container"]}`}>
        <h1 className={classes['section-title']}>Contact me!</h1>
        <span className={sharedstyle["divider"]}></span>
      </div>
      <span className={classes['text-zone']}>
        <p style={{ textAlign: 'center' }} className={sharedstyle.p}>I'm interested in software development opportunities with exciting challenges. Not work-related? That's fine! I'm up for any other questions, so do reach out.</p>
      </span>

      <div className={classes['form-container']}>
        <form ref={formref} onSubmit={handleSubmitForm}>
          <div className={classes.join}>
            <Input onChange={(e) => onInputChange(e, nameref)} value={contactForm.name} inputRef={nameref} label="Name" type="text" name="name" />
            <Input onChange={(e) => onInputChange(e, emailref)} value={contactForm.email} inputRef={emailref} label="Email" type="text" name="email" />
          </div>
          <Input onChange={(e) => onInputChange(e, subjectref)} value={contactForm.subject} inputRef={subjectref} label="Subject" type="text" name="subject" />
          <Input onChange={(e) => onInputChange(e, messageref)} value={contactForm.message} inputRef={messageref} label="Message" type="textarea" name="message" />

          <button className={classes.button} type="submit">
            Send! ツ
          </button>
        </form>
      </div>
    </section>

  )
}

