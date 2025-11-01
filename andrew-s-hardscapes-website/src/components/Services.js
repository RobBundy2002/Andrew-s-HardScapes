import React from 'react';
import './Services.css';

function Services() {
  return (
    <main className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <h3>Custom Deck Design and Installation</h3>
          <p>We create beautiful and functional decks tailored to your specific needs and preferences.</p>
        </div>
        <div className="service-item">
          <h3>Patio and Walkway Construction</h3>
          <p>Enhance your outdoor living space with stunning patios and walkways.</p>
        </div>
        <div className="service-item">
          <h3>Garden Design and Planting</h3>
          <p>Transform your garden into a lush oasis with our expert design and planting services.</p>
        </div>
        <div className="service-item">
          <h3>Outdoor Lighting Solutions</h3>
          <p>Extend the usability of your outdoor space with our custom lighting solutions.</p>
        </div>
      </div>
    </main>
  );
}

export default Services;