import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <section class="contact-section" id="contact">
    <h1 class="section-title center">Get In Touch</h1>
    <span class="divider center"></span>
    <div class="contact-content fade">
      <span>Have a question? Connect with me!</span>
      <div class="contact-form">
        <form name="contact" action="https://formspree.io/f/xpzbvyno" method="POST">
          <input class="inputField" type="text" name="name" id="nameField" for="fname" placeholder="Name" /><br/>
          <input class="inputField" type="email" name="email" id="emailField" for="email" placeholder="Email"/><br/>
          <textarea class="inputField" type="text" name="message" id="messageField" for="message" placeholder="Message"></textarea><br/>
          <input type="submit" id="sendBtn" value="Send"/>
        </form>
      </div>
    </div>
    </section>
    
  )
}

