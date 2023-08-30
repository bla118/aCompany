import './Footer.css';
import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState('');

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();
    setYear(currentYear.toString());
  }, []);
  
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>&copy; {year} ICICOM Solutions. All rights reserved.</p>
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
