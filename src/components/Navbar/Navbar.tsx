import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { loadSvgs } from "../../utils";
import { Auth } from "../Auth";

const Navbar: React.FC = () => {
  const websiteLogo = loadSvgs("website-logo");

  const pathList = {
    home: "/#",
    mentors: "/mentors",
    about: "/about",
    contact: "/contact",
    login: "/auth",
    signup: "/auth",
  };

  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'signIn' | 'signUp' | null>(null);

  const handleSignIn = () => {
    setAuthMode('signIn');
    setShowAuth(true);
  };

  const handleSignUp = () => {
    setAuthMode('signUp');
    setShowAuth(true);
  };

  return (
    <nav
      className={`${styles["navbar"]} ${styles["navbar-expand-lg"]} ${styles["navbar-dark"]} ${styles["bg-black"]}`}
    >
      <div className={`${styles["container"]}`}>
        <Link
          className={`${styles["a"]} ${styles["navbar-brand"]}`}
          to={pathList["home"]}
        >
          {websiteLogo.status === 200 && websiteLogo.data && (
            <img
              className={`${styles["img-fluid"]} ${styles["img"]}`}
              src={websiteLogo.data}
              alt=""
            />
          )}
        </Link>
        <div className={`${styles["collapse"]} ${styles["navbar-collapse"]}`}>
          <ul
            className={`${styles["ul"]} ${styles["navbar-nav"]} ${styles["ms-auto"]}`}
          >
            <li className={`${styles["nav-item"]}`}>
              <Link
                className={`${styles["a"]} ${styles["nav-link"]}`}
                aria-current="page"
                to={pathList["home"]}
              >
                Home
              </Link>
            </li>
            <li className={`${styles["nav-item"]}`}>
              <Link
                className={`${styles["a"]} ${styles["nav-link"]}`}
                aria-current="page"
                to={pathList["mentors"]}
              >
                Mentors
              </Link>
            </li>
            <li className={`${styles["nav-item"]}`}>
              <Link
                className={`${styles["a"]} ${styles["nav-link"]}`}
                aria-current="page"
                to={pathList["contact"]}
              >
                Contact
              </Link>
            </li>
            <li className={`${styles["nav-item"]}`}>
              <Link
                className={`${styles["a"]} ${styles["nav-link"]}`}
                aria-current="page"
                to={pathList["about"]}
              >
                About us
              </Link>
            </li>
          </ul>
          <div className={`${styles["ms-14"]}`}>
            <button
              className={`${styles["a"]} ${styles["btn"]} ${styles["me-4"]} ${styles["btn-outline-light"]}`}
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <button
              className={`${styles["a"]} ${styles["btn"]} ${styles["me-4"]} ${styles["btn-outline-light"]}`}
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {showAuth && (
        <Auth mode={authMode} onClose={() => setShowAuth(false)} />
      )}
    </nav>
  );
};

export default Navbar;
