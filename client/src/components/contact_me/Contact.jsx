import React, { useState } from "react";
import { FaLinkedin, FaTelegram, FaGithub ,FaInstagram} from 'react-icons/fa';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
// import Proj from '../project/Proj';
import "./contact.css";

const Contact = () => {
  return (
    <body className="contact-body">
      <Navbar />

      <div className="contact-card">
        <div className="contact-form">
          <form action="/" method="POST">
            <div className="name-phone">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="contact-input"
              />
              <input
                type="phone"
                name="phone"
                placeholder="Phone"
                className="contact-input"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contact-input"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="contact-input"
            ></textarea>
            <button class="btn">Submit</button>

          </form>
        </div>
        <div className="content">
          
          <h1 className="contact-h1">Get in touch</h1>
          <p className="contact-p">
            Thank you for visiting my website. I would love to hear from you and
            answer any questions or inquiries you may have. I look forward to
            connecting with you.
          </p>
        </div>
        <div className="contact-icons">
          <FaLinkedin size={30} className="contact-icon" />
          <FaTelegram size={30} className="contact-icon" />
          <FaGithub size={30} className="contact-icon" />
          <FaInstagram size={30} className="contact-icon" />
        </div>
      </div>
      {/* <Footer /> */}
    </body>
  );
};
export default Contact;
