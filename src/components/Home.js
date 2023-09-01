import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Home = () => {
    const companies = [
        { name: 'Ballard Power', logo: 'Ballard_logo.png', website: 'https://www.ballard.com/'}
      ];
      
  return (
    <div className='home'>
      <section className='intro-container'>
        <div className='intro-content'>
          <h2>Welcome to ICICOM Solutions</h2>
          <h4>Unlocking Your Business Potential Through Expert ERP Consultation</h4>
          <p>
            At ICICOM Solutions, we're dedicated to propelling your business forward with our top-tier ERP consultation services. With a wealth of experience and a deep understanding of Enterprise Resource Planning (ERP) systems, we're your trusted partner in optimizing your operations for peak efficiency and growth.
          </p>
          <Link to="/services" className='cta-button'>Learn More</Link>
        </div>
        <div className='intro-image'>
          {/* image from: https://www.shutterstock.com/image-vector/team-meeting-illustration-diverse-professionals-collaborate-2321889057 */}
          <img src="meeting_illustration.png" alt="meeting illustration" />
        </div>
      </section>
      
      <section className='benefits-container'>
        <h3>Why Choose ICICOM Solutions?</h3>
        <div className='benefits'>
          <div className='benefit'>
            <div className='benefit-icon'>🚀</div>
            <h4>Streamlined Processes</h4>
            <p>Optimize your workflows and streamline business processes with our expert ERP solutions.</p>
          </div>
          <div className='benefit'>
            <div className='benefit-icon'>🌐</div>
            <h4>Global Reach</h4>
            <p>Navigate the complexities of global operations with confidence using our international ERP expertise.</p>
          </div>
          <div className='benefit'>
            <div className='benefit-icon'>💡</div>
            <h4>Innovative Solutions</h4>
            <p>Stay ahead of the curve with innovative ERP solutions tailored to your industry and needs.</p>
          </div>
        </div>
      </section>

      <section className='clients-container'>
        <h3>Clients</h3>
        <div className='client-logos'>
          {companies.map((company, index) => (
            <div key={index} className='client-logo'>
              <a href={company.website} target='_blank' rel='noopener noreferrer'>
                <img src={company.logo} alt={company.name} />
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
