import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Andrew's HardScapes</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="social-links">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://instagram.com">Instagram</a>
        <a href="https://youtube.com">YouTube</a>
        <a href="https://tiktok.com">TikTok</a>
      </div>
    </header>
  );
}

export default Header;