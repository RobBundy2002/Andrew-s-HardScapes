import React from 'react';
import './Home.css';

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h2>Welcome to Andrew's HardScapes</h2>
        <p>Luxury landscaping and decking services.</p>
        <p>
          We specialize in creating beautiful and functional outdoor spaces that enhance your property's value and appeal. From custom decks and patios to stunning landscaping designs, we bring your vision to life with quality craftsmanship and attention to detail.
        </p>
        <a href="/portfolio" className="contact-button">View Our Portfolio</a>
        <a href="/contact" className="contact-button">Contact Us</a>
      </section>
    </main>
  );
}

export default Home;