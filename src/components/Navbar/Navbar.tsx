import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { loadSvgs } from "../../utils";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const websiteLogo = loadSvgs("website-logo");

  const pathList = {
    home: '/#',
    mentors: '/mentors',
    about: '/about',
    contact: '/contact',
    login: '/auth',
    signup: '/auth',
  }

  const handleLoginRedirect = () => {
    navigate("/auth", { state: { isLogin: true } });
  };

  const handleSignUpRedirect = () => {
    navigate("/auth", { state: { isLogin: false } });
  };

  return (
    <nav
        className={`${styles["navbar"]} ${styles["navbar-expand-lg"]} ${styles["navbar-dark"]} ${styles["bg-black"]}`}
      >
        <div className={`${styles["container"]}`}>
          <Link
            className={`${styles['a']} ${styles["navbar-brand"]}`}
            to={pathList['home']}
          >
            {websiteLogo.status === 200 && websiteLogo.data && (
              <img
                className={`${styles["img-fluid"]} ${styles['img']}`}
                src={websiteLogo.data}
                alt=""
              />
            )}
          </Link>
          <div
            className={`${styles["collapse"]} ${styles["navbar-collapse"]}`}
          >
            <ul
              className={`${styles['ul']} ${styles["navbar-nav"]} ${styles["ms-auto"]}`}
            >
              <li className={`${styles["nav-item"]}`}>
                <Link
                  className={`${styles['a']} ${styles["nav-link"]}`}
                  aria-current="page"
                  to={pathList['home']}
                >
                  Home
                </Link>
              </li>
              <li className={`${styles["nav-item"]}`}>
                <Link
                  className={`${styles['a']} ${styles["nav-link"]}`}
                  aria-current="page"
                  to={pathList['mentors']}
                >
                  Mentors
                </Link>
              </li>
              <li className={`${styles["nav-item"]}`}>
                <Link
                  className={`${styles['a']} ${styles["nav-link"]}`}
                  aria-current="page"
                  to={pathList['contact']}
                >
                  Contact
                </Link>
              </li>
              <li className={`${styles["nav-item"]}`}>
                <Link
                  className={`${styles['a']} ${styles["nav-link"]}`}
                  aria-current="page"
                  to={pathList['about']}
                >
                  About us
                </Link>
              </li>
            </ul>
            <div className={`${styles["ms-14"]}`} >
              <Link
                className={`${styles['a']} ${styles["btn"]} ${styles["me-4"]} ${styles["btn-outline-light"]}`}
                to={pathList['login']}
              >
                Sign In
              </Link>
              <Link
                className={`${styles['a']} ${styles["btn"]} ${styles["me-4"]} ${styles["btn-outline-light"]}`}
                to={pathList['login']}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
