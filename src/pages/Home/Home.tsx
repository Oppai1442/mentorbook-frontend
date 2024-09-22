// src/pages/Home/Home.tsx
import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <>
       {/* Find the right mentor */}
      <section
        className="hero bg-light text-dark py-5"
        style={{
          backgroundImage: 'url("path-to-background-image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center">
          <h1 className="display-4">Find the Right Mentor for You</h1>
          <p className="lead">
            Get professional guidance from experienced mentors across various
            fields.
          </p>
          <a href="/mentors" className="btn btn-primary btn-lg mt-3">
            Explore Mentors
          </a>
        </div>
      </section>

      {/* How it work */}
      <section className="how-it-works py-5">
        <div className="container text-center">
          <h2 className="mb-4">How It Works</h2>
          <div className="row">
            <div className="col-md-4">
              <i className="fas fa-search fa-3x mb-3" />
              <h5>Find a Mentor</h5>
              <p>
                Browse through hundreds of expert mentors in various fields.
              </p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-calendar-check fa-3x mb-3" />
              <h5>Book a Session</h5>
              <p>Select a suitable time and book a session with your mentor.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-comments fa-3x mb-3" />
              <h5>Start Learning</h5>
              <p>
                Get guidance and feedback through personalized mentoring
                sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* featured mentor */}
      <section className="featured-mentors bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Featured Mentors</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="mentor1.jpg"
                  className="card-img-top"
                  alt="Mentor 1"
                />
                <div className="card-body">
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">Expert in Software Development</p>
                  <a href="/mentors/john-doe" className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="mentor2.jpg"
                  className="card-img-top"
                  alt="Mentor 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Jane Smith</h5>
                  <p className="card-text">Professional Career Coach</p>
                  <a href="/mentors/jane-smith" className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="mentor3.jpg"
                  className="card-img-top"
                  alt="Mentor 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Michael Johnson</h5>
                  <p className="card-text">Marketing and Sales Expert</p>
                  <a
                    href="/mentors/michael-johnson"
                    className="btn btn-primary"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What our users say */}
      <section className="testimonials py-5">
        <div className="container text-center">
          <h2 className="mb-4">What Our Users Say</h2>
          <div className="row">
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p className="mb-0">
                  "This platform has transformed my career. The mentors are
                  highly knowledgeable and helpful."
                </p>
                <footer className={`${styles["usersName-footer"]} blockquote-footer`}>Alex Turner</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p className="mb-0">
                  "I found a mentor who helped me break into the tech industry.
                  Absolutely life-changing!"
                </p>
                <footer className={`${styles["usersName-footer"]} blockquote-footer`}>Sara Williams</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p className="mb-0">
                  "Excellent platform to get expert advice. Highly recommend
                  it!"
                </p>
                <footer className={`${styles["usersName-footer"]} blockquote-footer`}>John Markson</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ready to find your mentor */}
      <section
        className="call-to-action text-light text-center py-5"
        style={{ backgroundColor: "#333741" }}
      >
        <div className="container">
          <h2>Ready to Find Your Mentor?</h2>
          <p>
            Sign up now and start your journey towards success with expert
            guidance!
          </p>
          <a href="/register" className="btn btn-outline-light btn-lg">
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
