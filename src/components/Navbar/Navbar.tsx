import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { loadSvgs } from "../../utils";
import { Auth } from "../Auth";
import { useAuth } from "../../context";

const Navbar: React.FC = () => {
  const [svgData, setSvgData] = useState<{ [key: string]: string | null }>({});
  const { isLoggedIn, user, logOut } = useAuth(); 
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'signIn' | 'signUp' | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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


  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as Node;
    
    if (dropdownRef.current && !dropdownRef.current.contains(target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const pathList = {
    home: "/#",
    mentors: "/mentors",
    about: "/about",
    contact: "/contact",
    login: "/auth",
    signup: "/auth",
  };


  const handleSignIn = () => {
    setAuthMode('signIn');
    setShowAuth(true);
  };

  const handleSignUp = () => {
    setAuthMode('signUp');
    setShowAuth(true);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (action?: string) => {
    switch (action) {
      case 'logout':
          logOut();
          break;
      default:
        break;
    }
    setIsOpen(false);
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
                    {isOpen && (<ul ref={dropdownRef} className={`${styles["dropdown-menu"]}`}>

                      <li>
                        <Link className={`${styles["dropdown-item"]}`} to="/user/profile" onClick={() => handleItemClick()}>

                          Log out
                        </Link>
                      </li>
                      <li>
                        <Link className={`${styles["dropdown-item"]}`} to="/user/setting" onClick={() => handleItemClick()}>
                          Log out
                        </Link>
                      </li>
                      <li>
                        <button className={`${styles["dropdown-item"]}`} type="button" onClick={() => handleItemClick("logout")}>
                          Log out
                        </button>
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
