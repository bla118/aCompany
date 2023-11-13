import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Home = () => {
    const companies = [
        { name: 'aCompany', logo: 'IS_logo.png', website: '/'}
      ];
      
  return (
    <div className='home'>
      <section className='intro-container'>
        <div className='intro-content'>
          <h2>Welcome to aCompany</h2>
          <h4>Lorem Ipsum</h4>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link to="/services" className='cta-button'>Learn More</Link>
        </div>
        <div className='intro-image'>
          {/* image from: https://www.shutterstock.com/image-vector/team-meeting-illustration-diverse-professionals-collaborate-2321889057 */}
          <img src="meeting_illustration.png" alt="meeting illustration" />
        </div>
      </section>
      
      <section className='benefits-container'>
        <h3>Why Choose aCompany?</h3>
        <div className='benefits'>
          <div className='benefit'>
            <div className='benefit-icon'>🚀</div>
            <h4>Streamlined Processes</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='benefit'>
            <div className='benefit-icon'>🌐</div>
            <h4>Global Reach</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='benefit'>
            <div className='benefit-icon'>💡</div>
            <h4>Innovative Solutions</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
