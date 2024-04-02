import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaMapMarkerAlt size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>Addis Abeba</p>
              <p>Ethiopia.</p>
            </div>
          </div>
          <div className='email'>
            <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>eyobedabreham9@gmail.com</p>
            </div>
          </div>
          <div className='social'>
            <FaFacebook size={20} style={{ color: '#fff', marginRight: '1rem' }} />
            <FaTwitter size={20} style={{ color: '#fff', marginRight: '1rem' }} />
            <FaLinkedin size={20} style={{ color: '#fff', marginRight: '1rem' }} />
          </div>
        </div>
        <div className='right'>
          <h3 className='interest-heading'>Interest</h3>
          <ul className='interest-list'>
            <li>Web development</li>
            <li>ML</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;