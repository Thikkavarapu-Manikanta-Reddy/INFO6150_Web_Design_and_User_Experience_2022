import React from 'react'
import Card from '../../Components/Card'
import Navbar from '../Navbar/Navbar'
import "./Contact.css";

function Contact() {
  return (
    <div>
      <Navbar title="contact" />
      <div style={{marginTop: "40px"}}>
        <div id="left-column">
          <h1 className="contact-title">Get In Touch.</h1>
          <p className="contact-des">Want to discuss anything with me ? <br />
            Fill up this form or write me an email to <a target="_blank"
              href="mailto:t.manikantareddy160@gmail.com">t.manikantareddy160@gmail.com</a> or give me a call to
            <a target="_blank" href="tel:+16172384047">+16172384047</a>
          </p>
          <form className="input-container">
            <div className="form-group"><label>Your Name</label><input type="text" name="name" id="name"
              className="form-control" required="" /></div>
            <div className="form-group"><label>Your Email</label><input type="email" name="email" id="email"
              className="form-control" required="" /></div>
            <div className="form-group"><label>Your Message</label><input type="text" name="message"
              id="mmessage" className="form-control" required="" /></div>
            <button type="submit" className="contact-send-btn">
              Send Message
            </button>
          </form>

          <div>
            <div className="social_links">
              <a href="#" aria-label="LinkedIn"
                target="_blank" className="main_social_links">
                <img className="link_images" src="images/linkedin.png" />
              </a>

              <a href="#" aria-label="Github" target="_blank"
                className="main_social_links">
                <img className="link_images" src="images/github-sign.png" />
              </a>

              <a href="#" aria-label="LinkedIn" target="_blank"
                className="main_social_links">
                <img className="link_images" src="images/bitbucket-sign.png" />
              </a>

              <a href="#" aria-label="Instagram" target="_blank"
                className="main_social_links">
                <img className="link_images" src="images/instagram.png" />
              </a>

              <a href="#" aria-label="Twitter" target="_blank"
                className="main_social_links">
                <img className="link_images" src="images/twitter-sign.png" />
              </a>
            </div>
          </div>
        </div>

        <div id="contact-right">
          <img className="contact-img" src="images/contact_us.svg" />
        </div>

      </div>
    </div>

  )
}

export default Contact