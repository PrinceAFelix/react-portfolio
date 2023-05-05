import React, { useRef, useState, useContext, useEffect } from 'react'
import classes from './Contact.module.css'
import sharedstyle from '../styles/Sharedstyles.module.css'

import Input from '../common/input/Input'
import PortfolioContext from '../../context/portfolio-context'

import emailjs from '@emailjs/browser';
import { Alert } from '../common/alert/Alert'

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
    message: '',
    isSent: false
  })

  const [isError, setError] = useState({
    isErr: false,
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setContactForm((prev) => ({
        ...prev,
        isSent: false
      }))
    }, 3000)
    return () => clearTimeout(timer)
  }, [contactForm.isSent])


  const handleSubmitForm = (e) => {
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    e.preventDefault();
    const fields = [nameref, emailref, subjectref, messageref]
    let index = -1
    //Validate

    setContactForm((prev) => ({
      ...prev,
      isSent: true
    }))


    for (let i = 0; i < fields.length; i++) {
      if (fields[i].current.value === '') {
        index = i
        fields[i].current.style.border = "1px solid red";
        break
      }
    }
    if (index >= 0) {
      fields[index].current.focus()
      setError((prev) => ({
        ...prev,
        isErr: true
      }))
      return false;
    }

    if (emailref.current.value !== '') {

      if (!validateEmail.test(emailref.current.value)) {
        emailref.current.style.color = 'red'
        emailref.current.style.border = "1px solid red";

        setError((prev) => ({
          ...prev,
          isErr: true
        }))

        return false;
      }


    }


    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, {
      name: portfolioCtx.form.name,
      message: portfolioCtx.form.message,
      email: portfolioCtx.form.email,
      subject: portfolioCtx.form.subject,
    }, process.env.REACT_APP_PUBLIC_KEY).then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

    setContactForm((prev) => ({
      ...prev,
      name: '',
      email: '',
      subject: '',
      message: ''
    }))

    setError((prev) => ({
      ...prev,
      isErr: false
    }))

    return true;


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
      <Alert err={isError.isErr} className={contactForm.isSent ? 'toggle' : ''} />

    </section>

  )
}

