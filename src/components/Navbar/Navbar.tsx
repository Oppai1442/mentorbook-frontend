import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import navBar from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Brand/Logo */}
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="Logo"
            className={`d-inline-block align-text-top ${navBar['logo']}`}
          />
        </a>
        {/* Hamburger Menu for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/mentors">
                Mentors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            {/* Dropdown for logged-in users */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="userDropdown"
              >
                <li>
                  <a className="dropdown-item" href="/profile">
                    My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/bookings">
                    My Bookings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/logout">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
            {/* Login/Register Buttons for non-logged-in users */}
            <li className="nav-item">
              <a className="nav-link btn btn-outline-light ms-lg-3" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-outline-light ms-lg-2"
                href="/register"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;