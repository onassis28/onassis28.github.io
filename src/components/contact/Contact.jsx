import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react'


const Contact = () => {
  const [alertVisibility , setAlertVisibility ] = useState(false)
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wsll6jw', 'template_hl0eeca', form.current, 'othVDZvM83rFOSRIL')
      .then((result) => {
        setAlertVisibility(true);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    
    <div className="container contact__container">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full name' required />
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button className='btn__contact'>{alertVisibility? 'Your Message has been sent!' :'Send Message'}</button>
        
        
        
        
        
        </form>
      
      </div>
    
    
    </section>
  )
}

export default Contact