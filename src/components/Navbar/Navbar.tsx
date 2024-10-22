import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { loadSvgs } from "../../utils";
import { Auth } from "../Auth";
import { useAuth } from "../../context";

const Navbar: React.FC = () => {
  const [svgData, setSvgData] = useState<{ [key: string]: string | null }>({});
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown state

  const { isLoggedIn, user } = useAuth(); //

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
    localStorage.removeItem("username"); // Clear the user's login data
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (action: string) => {
    if (action === 'logout') {
      handleLogOut();
    }
    setIsOpen(false); // Đóng dropdown sau khi click
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
                <div className={`${styles["d-flex"]} ${styles["align-items-center"]}`}>
                  <img
                    src={user?.avatarUrl}
                    alt="Avatar"
                    className={`${styles["rounded-circle"]} ${styles["me-2"]}`}
                    style={{ width: '40px', height: '40px' }}
                  />
                  <span className={`${styles["me-2"]} ${styles["username"]}`}>{user?.fullName}</span>
                  <div className={`${styles["dropdown"]}`}>
                    <button
                      className={`${styles["btn"]} ${styles["btn-secondary"]}`}
                      type="button"
                      onClick={toggleDropdown}
                      aria-expanded={isOpen}
                    >
                      {!isOpen ? (<i className={`fa-light fa-caret-down ${styles["dropdown-arrow"]}`}></i>) :  (<i className={`fa-light fa-caret-up ${styles["dropdown-arrow"]}`}></i>)}
                    </button>
                    {isOpen && (<ul className={`${styles["dropdown-menu"]}`}>

                      <li>
                        <a className={`${styles["dropdown-item"]}`} href="#action1">
                          Action 1
                        </a>
                      </li>
                      <li>
                        <a className={`${styles["dropdown-item"]}`} href="#action2">
                          Action 2
                        </a>
                      </li>
                      <li>
                        <a className={`${styles["dropdown-item"]}`} href="#action3">
                          Action 3
                        </a>
                      </li>
                    </ul>)}
                  </div>
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
