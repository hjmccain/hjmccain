import React from 'react';
import keepInTouch from '../../public/keep-in-touch.png';
import banana from '../../public/naner.png';

const ContactInfo = () => {
  return (
    <div className="contact-container" id="contact">
      <img className="keep-in-touch" src={keepInTouch} alt="Thanks for stopping by. Keep in touch!" />
      <div className="contact-info-container">
        <br />
        <br />
        <br />
        <p className="contact">
          E-mail <a href="mailto:hannahjmccain@gmail.com" className="contact-link">
            hannahjmccain@gmail.com
          </a>
        </p>
        <p className="contact">
          Github <a href="https://github.com/hjmccain" className="contact-link" target="_blank">
            hjmccain
          </a>
        </p>
        <p className="contact">
          Twitter <a href="https://twitter.com/hjmccain" className="contact-link" target="_blank">
            @hjmccain
          </a>
        </p>
        <p className="contact">
          LinkedIn <a href="https://www.linkedin.com/in/hjmccain/" className="contact-link" target="_blank">
            Hannah McCain
          </a>
        </p>
      </div>
      <img className="banana" src={banana} alt="banana" />
    </div>
  )
}

export default ContactInfo;
