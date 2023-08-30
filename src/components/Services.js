import React from 'react';
import './Services.css'; 

const Services = () => {
  return (
    <div className='services'>
      <section className='services-container'>
        <h2>Our Services</h2>
        <div className='service'>
          <h3>Service 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus non urna tincidunt faucibus.</p>
        </div>
        <div className='service'>
          <h3>Service 2</h3>
          <p>Nulla facilisi. Proin at sapien vel orci dapibus aliquet.</p>
        </div>
        <div className='service'>
          <h3>Service 3</h3>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi vehicula libero in neque dapibus.</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
