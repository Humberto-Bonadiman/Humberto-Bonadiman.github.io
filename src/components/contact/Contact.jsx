import React, { useState } from 'react';
import './contact.scss';
import shake from '../../images/shake.png'

function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={ shake } alt="shake hands" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="E-mail" />
          <textarea placeholder="Message"></textarea>
          <button type="submit" post="">Send</button>
          {message && <span>Thanks, I'll reply as soon as possible</span>}
        </form>
      </div>
    </div>
  )
};

export default Contact;
