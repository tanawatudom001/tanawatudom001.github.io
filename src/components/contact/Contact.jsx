import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q7oobvf', 'template_94h52uk', form.current, '2PJdFEvnLkrW2K1VC')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tanawatudom001@hotmail.com</h5>
            <a href="mailto:tanawatudom001@hotmail.com" target="_blank">Send a massage</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Bank Tanawat</h5>
            <a href="https://m.me/bank.tanawat.14" target="_blank">Send a massage</a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className='contact__option-icon'/>
            <h4>Phon Number</h4>
            <h5>+66 846046182</h5>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact