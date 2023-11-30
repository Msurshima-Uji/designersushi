import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { FormControl, FormGroup } from 'react-bootstrap'

const Contact = () => {
  const form = useRef();

  const register = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2tuk9lr', 'template_0u0yanw', form.current, 'nF2jxCwwnqZBRjblx');
      e.target.reset();
        
  }; 

  const sendMail = () => {
      window.alert("Mail sent! Sushi will get to you shortly");
  
    };
  return (
    <>
      <div className="contact" id='contact'>
        <h3>Contact Sushi</h3>
        <div className="contactform">
          <form className='forms' ref={form} onSubmit={register} method='POST'>
            <input className="name-input" type="text" placeholder="Name" name="name"></input><br/>
            <input className="email-input" type="text" placeholder="Email" name="email"></input><br/>
            <input className="message-input" type="textarea" placeholder="Message" name="message"></input><br/>
            <button className="sendbtn" onClick={sendMail} value="submit" type="submit">Send</button>
          </form>
        </div>
        <p>"Good design is the fundamental building block of a good product"</p>
      </div>
    </>
   
  )
}

export default Contact