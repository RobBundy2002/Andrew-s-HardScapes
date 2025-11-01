import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>

            <div className="footer-center">
                <a href="/" className="footer-link">Home</a>
                <a href="/about" className="footer-link">About</a>
                <a href="/services" className="footer-link">Services</a>
                <a href="/portfolio" className="footer-link">Portfolio</a>
                <a href="/contact" className="footer-link">Contact</a>
            </div>

            <div className="footer-right">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;