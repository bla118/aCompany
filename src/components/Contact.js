import './Contact.css';
import Modal from './Modal'; 
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({ name: '', email: '', message: '' });
          setIsSuccess(true);
          setShowModal(true);
        },
        (error) => {
          console.log(error.text);
          setIsSuccess(false);
          setShowModal(true); 
        }
      );
  };

  return (
    <div className='contact'>
      <section className='contact-container'>
        <h2>Contact Us</h2>
        <form ref={form} className='contact-form' onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name='message'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type='submit'>Submit</button>
        </form>
      </section>
      {showModal && (
        <Modal
          title={isSuccess ? 'Success' : 'Error'}
          message={isSuccess ? 'Message sent successfully!' : 'An error occurred. Please try again later.'}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Contact;
