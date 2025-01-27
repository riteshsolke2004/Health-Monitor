import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Brief Information */}
        <div className="footer-section logo-section">
          <img src="world.png" alt="WHO Logo" className="logo" />
          <p className="footer-description">
            The Disease Prediction App provides innovative solutions to health challenges through data-driven insights and predictions. Trusted by healthcare professionals globally.
          </p>
        </div>

        {/* Important Links */}
        <div className="footer-section links-section">
          <h4>Important Links</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://www.facebook.com/WHO" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/WHO" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.linkedin.com/company/world-health-organization" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/who" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section contact-info">
          <h4>Contact Information</h4>
          <p>Email: <a href="mailto:support@diseasepredict.com">support@diseasepredict.com</a></p>
          <p>Phone: +1 234 567 890</p>
        </div>

        {/* Certifications & Trust */}
        <div className="footer-section certifications">
          <h4>Certifications & Trust</h4>
          <p>We adhere to the highest standards of data protection and medical guidelines. Certified by WHO and HIPAA compliant.</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Disease Prediction App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
