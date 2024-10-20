import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { loadSvgs } from "../../utils";
import { Auth } from "../Auth";
import { useAuth } from "../../context";

const Navbar: React.FC = () => {
  const [svgData, setSvgData] = useState<{ [key: string]: string | null }>({});
  const [username, setUsername] = useState<string | null>(null); // User's name
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown state

  const {isLoggedIn} = useAuth(); //

  useEffect(() => {
    const svgPaths = {
      websiteLogo: () => import('../../assets/svg/website-logo.svg'),
    };

    const loadAndSetSvgs = async () => {
      const svgMap = await loadSvgs(svgPaths);
      setSvgData(svgMap);
    };

    loadAndSetSvgs();
  }, []);

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

  const handleLogOut = () => {
    setUsername(null);
    localStorage.removeItem("username"); // Clear the user's login data
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };


  return (
    <>
      <nav
        className={`${styles["navbar"]} ${styles["navbar-expand-lg"]} ${styles["navbar-dark"]} ${styles["bg-black"]}`}
      >
        <div className={`${styles["container"]}`}>
          <Link
            className={`${styles["a"]} ${styles["navbar-brand"]}`}
            to={pathList["home"]}
          >
            {svgData['websiteLogo'] && (
              <img
                className={`${styles["img-fluid"]} ${styles["img"]}`}
                src={svgData['websiteLogo']}
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
              {isLoggedIn ? (
                <div className={`${styles["nav-item"]} ${styles["dropdown"]}`}>
                  <div
                    onClick={toggleDropdown}
                    className={`${styles["nav-link"]} ${styles["d-flex"]} ${styles["align-items-center"]} ${styles["user-info"]}`}
                  >
                    <img
                      src="path/to/avatar.jpg"
                      alt="User Avatar"
                      className={`${styles["avatar"]} ${styles["me-2"]}`}
                    />
                    <span>{username}</span>
                    <i className={`${styles["ms-2"]} fas fa-chevron-down`}></i>
                  </div>
                  {showDropdown && (
                    <div className={`${styles["dropdown-menu"]} ${styles["show"]}`}>
                      <Link className={`${styles["dropdown-item"]}`} to="/profile">
                        Profile
                      </Link>
                      <Link className={`${styles["dropdown-item"]}`} to="/settings">
                        Settings
                      </Link>
                      <button className={`${styles["dropdown-item"]}`} onClick={handleLogOut}>
                        Log out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
        {showAuth && (
          <Auth mode={authMode} onClose={() => setShowAuth(false)} />
        )}
      </nav>
    </>
  );
};

export default Navbar;
