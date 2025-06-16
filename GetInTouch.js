import React, { useState } from 'react';
import './LandingPage.css'; 

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Form:', formData);
    alert('Thanks! We will contact you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      message: ''
    });
  };

  return (
    <section className="get-in-touch">
      <div className="reviews-overview">
        <h2>Hear what our satisfied clients have to say</h2>
        <div className="review-metrics">
          <div>
            <h3>35</h3>
            <p>Verified Reviews</p>
          </div>
          <div>
            <h3>4.9/5</h3>
            <p>Average Rating</p>
          </div>
          <div>
            <h3>50+</h3>
            <p>Projects Delivered</p>
          </div>
        </div>
      </div>

      <div className="get-started-info">
        <h2>Contact Us</h2>
        <p><strong>How can we help you?</strong></p>

        <div className="info-grid">
          <div>
            <h4>Explore Our Solutions</h4>
            <p>Discover how Alfabolt's tailored services can help grow your business with innovative solutions.</p>
          </div>
          <div>
            <h4>Discover Our Expertise</h4>
            <p>Learn about the industries we specialize in and how we deliver impactful results across various sectors.</p>
          </div>
          <div>
            <h4>Learn from Real Results</h4>
            <p>See how we've helped businesses succeed through our case studies and effective solutions.</p>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} required />
        </div>
        <textarea name="message" placeholder="How can we help?" value={formData.message} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
