import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <main className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="placeholder-image.jpg" alt="Project 1" />
        </div>
        <div className="portfolio-item">
          <img src="placeholder-image.jpg" alt="Project 2" />
        </div>
        <div className="portfolio-item">
          <img src="placeholder-image.jpg" alt="Project 3" />
        </div>
      </div>
    </main>
  );
}

export default Portfolio;