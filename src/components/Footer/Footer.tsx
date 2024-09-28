// src/components/Footer/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
      <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 col-12">
            <h5>About Us</h5>
            <p>
              We provide an easy and reliable way to connect with mentors for
              professional guidance and development.
            </p>
          </div>
          {/* Quick Links Section */}
          <div className="col-md-4 col-12">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-light">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/FAQs" className="text-light">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Information Section */}
          <div className="col-md-4 col-12">
            <h5>Contact Us</h5>
            <p>
              <i className="fas fa-envelope" /> support@mentorbooking.com
            </p>
            <p>
              <i className="fas fa-phone" /> +123 456 7890
            </p>
            <p>
              <i className="fas fa-map-marker-alt" /> 123 Mentor St, Education City,
              USA
            </p>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="row mt-3">
          <div className="col text-center">
            <a href="#" className="text-light mx-2">
              <i className="fab fa-facebook" />
            </a>
            <a href="#" className="text-light mx-2">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="text-light mx-2">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#" className="text-light mx-2">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="row mt-3">
          <div className="col text-center">
            <p className="mb-0">© 2024 MentorNest. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    
    
    );
};

export default Footer;