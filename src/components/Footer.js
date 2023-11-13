import './Footer.css';
import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; 2023 aCompany. All rights reserved.</p>
        <div className='footer-links'>
          <a href='/'>Home</a>
          <a href='/services'>Services</a>
          <a href='/contact'>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
