// src/pages/Home/Home.tsx
import React from 'react';
import './About.module.css';

const About: React.FC = () => {
    return (
        <section className="about-us py-5" style={{ backgroundColor: "#f8f9fa" }}>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 mb-4">
        <h2 className="mb-4">About Us</h2>
        <p className="lead">
          Welcome to <strong>MentorNest</strong>, your go-to platform for
          connecting with experienced professionals from a wide array of
          industries. Whether you're an aspiring professional seeking guidance,
          a student needing career advice, or a seasoned expert looking to
          enhance your skills, we are here to make those valuable connections
          happen.
        </p>
        <p>
          At MentorNest, we believe that everyone deserves access to quality
          mentorship that can help them grow both personally and professionally.
          That's why we have built an intuitive and easy-to-use platform where
          mentees can browse through a vast selection of mentors, book sessions
          at their convenience, and gain personalized insights from the top
          experts in their fields.
        </p>
        <p>
          Our platform is designed with flexibility and accessibility in mind,
          providing mentors from across the globe in fields such as{" "}
          <strong>
            Software Development, Career Coaching, Marketing, Sales, Business
            Strategy, Data Science
          </strong>
          , and more. Whether you're just starting your journey or looking to
          advance in your career, MentorNest has something for everyone.
        </p>
      </div>
      <div className="col-lg-6">
        <img
          src="https://source.unsplash.com/600x400/?teamwork,mentoring"
          alt="About Us"
          className="img-fluid rounded"
        />
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-lg-6">
        <img
          src="https://source.unsplash.com/600x400/?mentorship,guidance"
          alt="Mentorship"
          className="img-fluid rounded mb-4"
        />
      </div>
      <div className="col-lg-6">
        <h3>Our Mission</h3>
        <p>
          Our mission is to democratize access to mentorship by bridging the gap
          between those seeking knowledge and those who have it. We aim to
          create a global community of lifelong learners, where anyone can seek
          guidance from industry veterans, receive practical advice, and grow
          their careers with confidence.
        </p>
        <p>
          We understand that mentoring is not just about giving advice—it's
          about building meaningful relationships, offering encouragement, and
          sharing real-world experiences. That's why we carefully vet our
          mentors to ensure that they are not only experts in their respective
          fields but also passionate about helping others succeed.
        </p>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-lg-6 mb-4">
        <h3>Why Choose MentorNest?</h3>
        <ul className="list-unstyled">
          <li className="mb-3">
            <i className="fas fa-check-circle text-primary" />{" "}
            <strong>Diverse Range of Mentors</strong> – From tech to marketing,
            finance to leadership, we offer a broad spectrum of expertise to
            match your specific needs.
          </li>
          <li className="mb-3">
            <i className="fas fa-check-circle text-primary" />{" "}
            <strong>Flexible Booking Options</strong> – Book one-time or ongoing
            sessions that suit your schedule and goals.
          </li>
          <li className="mb-3">
            <i className="fas fa-check-circle text-primary" />{" "}
            <strong>Global Access</strong> – Connect with mentors from around
            the world and learn from the best, no matter where you're located.
          </li>
          <li className="mb-3">
            <i className="fas fa-check-circle text-primary" />{" "}
            <strong>Personalized Mentoring</strong> – Each session is tailored
            to meet your unique needs and challenges, providing insights that
            are relevant to your career or personal growth.
          </li>
          <li className="mb-3">
            <i className="fas fa-check-circle text-primary" />{" "}
            <strong>Affordable Rates</strong> – We ensure our services are
            accessible to all by offering affordable pricing plans to fit
            various budgets.
          </li>
        </ul>
      </div>
      <div className="col-lg-6">
        <img
          src="https://source.unsplash.com/600x400/?business,mentors"
          alt="Mentoring Process"
          className="img-fluid rounded"
        />
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-lg-12 text-center">
        <h3>Join Our Community of Learners and Mentors</h3>
        <p className="lead">
          Ready to take the next step in your personal or professional journey?
          Whether you're here to learn or to share your expertise, Mentor
          Booking offers you the opportunity to connect, grow, and thrive.
        </p>
        <a href="/register" className="btn btn-primary btn-lg mt-3">
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>

    );
};

export default About;