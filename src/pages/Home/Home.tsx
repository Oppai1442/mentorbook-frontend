// src/pages/Home/Home.tsx
import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="homepage" style={{ backgroundColor: '#2c2c2c', color: '#ffffff' }}>
      {/* Banner with Video Background */}
      <section className="banner position-relative text-white text-center d-flex align-items-center justify-content-center" style={{ height: '70vh', overflow: 'hidden' }}>
        <video autoPlay muted loop className="position-absolute w-100 h-100" style={{ objectFit: 'cover', zIndex: -1 }}>
          <source src="/path/to/your-video.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <h1 className="display-3 fw-bold">Connect with Top Mentors</h1>
          <p className="lead">Enhance your skills with expert guidance, anytime, anywhere.</p>
          <Link to="/mentors" className="btn btn-outline-success btn-lg mt-3">Find Your Mentor</Link>
        </div>
      </section>

      {/* Services */}
      <section className="services py-5" style={{ backgroundColor: '#333' }}>
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">Our Key Services</h2>
          <p className="text-muted mb-5">Explore the core services we offer to help you succeed.</p>
          <div className="row g-4">
            {[
              { icon: 'fas fa-chalkboard-teacher', title: 'One-on-One Mentorship', description: 'Personalized sessions tailored to your goals.' },
              { icon: 'fas fa-calendar-check', title: 'Flexible Scheduling', description: 'Book sessions that fit your busy schedule.' },
              { icon: 'fas fa-cogs', title: 'Comprehensive Skill Sets', description: 'Choose mentors in fields like technology, business, and more.' }
            ].map((service, index) => (
              <div key={index} className="col-md-4">
                <div className="card shadow-sm h-100 text-center bg-dark border-0">
                  <div className="card-body">
                    <i className={`${service.icon} fa-3x mb-3`}></i>
                    <h5 className="card-title text-white">{service.title}</h5>
                    <p className="card-text text-muted">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Fields */}
      <section className="popular-fields py-5" style={{ backgroundColor: '#3a3a3a' }}>
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-4">Explore Popular Fields</h2>
          <div className="row g-4 text-center">
            {['Technology', 'Business', 'Design', 'Health', 'Finance', 'Marketing'].map((field, index) => (
              <div key={index} className="col-md-4">
                <div className="field-card position-relative overflow-hidden rounded-3 shadow-sm p-4 h-100 d-flex align-items-center justify-content-center" style={{ backgroundImage: `url('/path/to/${field.toLowerCase()}-background.jpg')`, backgroundSize: 'cover', backgroundBlendMode: 'multiply', backgroundColor: '#2c2c2c' }}>
                  <h5 className="display-6 fw-bold text-success">{field}</h5>
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="featured-mentors py-5" style={{ backgroundColor: '#333' }}>
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-4">Top Mentors</h2>
          <div className="row g-4">
            {[1, 2, 3].map((mentor) => (
              <div key={mentor} className="col-md-4">
                <div className="card shadow-sm h-100 border-0" style={{ backgroundColor: '#2c2c2c' }}>
                  <img src={`/path/to/mentor${mentor}-image.jpg`} className="card-img-top" alt={`Mentor ${mentor}`} />
                  <div className="card-body text-center">
                    <h5 className="card-title text-white">Mentor {mentor}</h5>
                    <p className="card-text text-muted">Technology Expert | 10+ years of experience</p>
                    <button className="btn btn-success btn-sm">View Profile</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Carousel */}
      <section className="testimonials py-5" style={{ backgroundColor: '#3a3a3a' }}>
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-4">What Our Users Say</h2>
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {[1, 2, 3].map((testimonial, index) => (
                <div key={testimonial} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <div className="d-flex justify-content-center">
                    <div className="col-md-8">
                      <blockquote className="blockquote text-center text-white">
                        <p className="mb-4">"This platform connected me to amazing mentors. It was a life-changing experience!"</p>
                        <footer className="blockquote-footer text-success">User {testimonial}</footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="call-to-action py-5 text-center text-white" style={{ backgroundColor: '#2c2c2c' }}>
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">Start Your Journey Today</h2>
          <p className="lead mb-4">Sign up now and unlock unlimited mentoring opportunities.</p>
          <button className="btn btn-outline-success btn-lg">Join Us</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
