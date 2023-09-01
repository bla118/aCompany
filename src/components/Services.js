import React from 'react';
import './Services.css'; 

const Services = () => {
  return (
    <div className='services'>
      <section className='services-container'>
        <h2>Our Services</h2>
        <div className='service'>
          <h3>Data Integration Consulting</h3>
          <p>Offer expertise in designing and implementing data integration solutions, including ETL (Extract, Transform, Load) processes using tools like SSIS.</p>
        </div>
        <div className='service'>
          <h3>ERP Data Loading</h3>
          <p>Specialize in loading and transforming ERP reports into SQL Server or Oracle databases, ensuring data accuracy and efficiency.</p>
        </div>
        <div className='service'>
          <h3>Custom Report Development</h3>
          <p>Create custom reports tailored to clients' specific business needs, using your experience with publisher data models.</p>
        </div>
        <div className='service'>
          <h3>Data Modeling Services</h3>
          <p>Provide assistance in designing and optimizing data models for databases, ensuring efficient storage and retrieval of information.</p>
        </div>
        <div className='service'>
          <h3>Integration Strategy Planning</h3>
          <p>Help businesses plan their integration strategies, recommending the best practices and tools for their unique requirements.</p>
        </div>
        <div className='service'>
          <h3>Oracle Integration Solutions</h3>
          <p>Offer expertise in integrating various systems with Oracle databases, ensuring smooth data flow and interoperability.</p>
        </div>
        <div className='service'>
          <h3>SSIS Training and Workshops</h3>
          <p>Conduct training sessions or workshops to educate clients on using SQL Server Integration Services effectively.</p>
        </div>
        <div className='service'>
          <h3>Data Quality Assessment</h3>
          <p>Evaluate the quality of data within databases, identify issues, and propose solutions to improve data accuracy.</p>
        </div>
        <div className='service'>
          <h3>ETL Performance Optimization</h3>
          <p>Optimize existing ETL processes to enhance performance and reduce processing time.</p>
        </div>
        <div className='service'>
          <h3>Data Migration Services</h3>
          <p> Assist businesses in migrating their data from one system to another, ensuring a seamless transition.</p>
        </div>
        <div className='service'>
          <h3>Integration Troubleshooting</h3>
          <p> Provide troubleshooting and debugging services for integration-related issues, helping clients overcome technical challenges.</p>
        </div>
        <div className='service'>
          <h3>Data Migration Services</h3>
          <p> Assist businesses in migrating their data from one system to another, ensuring a seamless transition.</p>
        </div>
        <div className='service'>
          <h3>Data Governance Consultation</h3>
          <p>  Advise clients on data governance best practices, ensuring compliance, security, and data management.</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
