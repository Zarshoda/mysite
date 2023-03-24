import React from 'react';
import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine, RiTelegramLine} from 'react-icons/ri';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jqs7g6g', 'template_92vskkh', form.current, 'DmRfD5PnBkftbd1ub')
      .then((result) => {
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
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>zariabdumalikova02@gmail.com</h5>
            <a href="mailto:zariabdumalikova02gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>zariabdumalikova</h5>
            <a href="https://m.me" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiTelegramLine className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>abdumalikovazzz</h5>
            <a href="https://t.me/abdumalikovazzz" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact