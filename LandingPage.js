import React from 'react';
import './LandingPage.css';
import Footer from './Footer';
import GetInTouch from './GetInTouch';


export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">⚡ Alfabolt</div>
        <nav className="nav">
          <a href="#">Services</a>
          <a href="#">Industries</a>
          <a href="#">Our Work</a>
          <a href="#">Pricing</a>
          <a href="#">Contact Us</a>
          <button className="send-request">Send Request ➤</button>
        </nav>
      </header>

      <main className="hero">
        <h1>Custom Software Development Tailored to Your Business Needs</h1>
        <p>
          Looking for a reliable custom software development company? We build
          scalable, secure, bespoke solutions to help your business grow.
        </p>
        <button className="contact-button">📞 Contact Us</button>
        
      </main>
      <section className="core-services">
        <h2>Core Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2889/2889732.png"
                alt="Mobile App"
              />
            </div>
            <h3>Mobile App Development</h3>
            <p>Develop scalable mobile apps optimised for high performance.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2799/2799199.png"
                alt="Web App"
              />
            </div>
            <h3>Web App Development</h3>
            <p>Complete engineering solutions for high-performance web apps.</p>
          </div>
 
          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1048/1048941.png"
                alt="API Development"
              />
            </div>
            <h3>API Development</h3>
            <p>
              Boost your systems with our custom APIs, designed for seamless integration and outstanding performance.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1048/1048941.png"
                alt="AI Agents"
              />
            </div>
            <h3>AI Agents</h3>
            <p>
              Boost your systems with our custom APIs, designed for seamless integration and outstanding performance.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1048/1048941.png"
                alt="Cloud Optimisation"
              />
            </div>
            <h3>Cloud Optimisation</h3>
            <p>
              Optimise your AWS / GCP costs and effectively manage your cloud infrastructure.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1048/1048941.png"
                alt="Product Analytics"
              />
            </div>
            <h3>Product Analytics</h3>
            <p>
              Get deep insights into how your customers are interacting with your platform.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1048/1048941.png"
                alt="Data Migration"
              />
            </div>
            <h3>Data Migration</h3>
            <p>
              Seamlessly transition between databases in real time without worrying about downtime.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
                alt="UI/UX"
              />
            </div>
            <h3>UI/UX</h3>
            <p>Create products that blend intuitive design with a user-friendly experience for maximum engagement.</p>
          </div>
        </div>
      </section>
      <section className="industries">
  <h2>Industries We Serve</h2>
  <div className="industries-grid">
    <div className="industry-card">
      <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Fintech" />
      <h3>Fintech</h3>
      <p>Enhance Financial Services with Cutting-Edge Technology</p>
      <a href="#">Discover Fintech solutions</a>
    </div>
    <div className="industry-card">
      <img src="https://cdn-icons-png.flaticon.com/512/3043/3043706.png" alt="HR Tech" />
      <h3>HR Tech</h3>
      <p>Automate HR Processes with Software</p>
      <a href="#">Discover HR Tech solutions</a>
    </div>
    <div className="industry-card">
      <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Social" />
      <h3>Social</h3>
      <p>Leverage AI and Software Solutions to Enhance your Social Application</p>
      <a href="#">Discover Social solutions</a>
    </div>
    <div className="industry-card">
      <img src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png" alt="Health Tech" />
      <h3>Health Tech</h3>
      <p>Optimize Healthcare Operations with Innovative Solutions</p>
      <a href="#">Discover Health Tech solutions</a>
    </div>
    <div className="industry-card">
      <img src="https://cdn-icons-png.flaticon.com/512/1692/1692181.png" alt="Logistics" />
      <h3>Logistics</h3>
      <p>Enhance Supply Chains with Advanced Logistics Solutions</p>
      <a href="#">Discover Logistics solutions</a>
    </div>
    <div className="industry-card">
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" alt="Insurance" />
      <h3>Insurance</h3>
      <p>Empower Your Insurance Business with Innovative IT Solutions</p>
      <a href="#">Discover Insurance solutions</a>
    </div>
  </div>
</section>


      
      <GetInTouch />
     <Footer/>
    </div>
  );
}