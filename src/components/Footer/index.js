import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-brand">Abun</h3>
            <p className="footer-description">
              AI Content Writer that creates valuable, SEO-optimized content 
              to help you rank on Google and grow organic traffic.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">𝕏</a>
              <a href="#" className="social-icon">in</a>
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">▶</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">Product</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#integrations">Integrations</a></li>
              <li><a href="#samples">Content Samples</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="#blog">Blog</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#tutorials">Tutorials</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Abun. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
