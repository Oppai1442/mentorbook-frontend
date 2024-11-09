import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { loadSvgs } from "../../utils";
import { useAuth } from "../../context";
import styles from "./Navbar.module.css";
import websiteLogo from '../../assets/svg/website-logo.png';

const Navbar: React.FC = () => {
  const [svgData, setSvgData] = useState<{ [key: string]: string | null }>({});
  const { isLoggedIn, user, logOut, renderAuth, showAuthModal } = useAuth();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const svgPaths = {
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
    showAuthModal("signIn");
  };

  const handleSignUp = () => {
    showAuthModal("signUp");
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (action?: string) => {
    switch (action) {
      case "logout":
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
          <img
            className={`${styles["img-fluid"]} ${styles["img"]}`}
            src={websiteLogo}
            alt=""
          />
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
                <div
                  className={`${styles["d-flex"]} ${styles["align-items-center"]}`}
                >
                  <img
                    src={user?.avatarUrl}
                    alt="Avatar"
                    className={`${styles["rounded-circle"]} ${styles["me-2"]}`}
                    style={{ width: "40px", height: "40px" }}
                  />
                  <span className={`${styles["me-2"]} ${styles["username"]}`}>
                    {user?.fullName}
                  </span>
                  <div ref={dropdownRef} className={`${styles["dropdown"]}`}>
                    <button
                      className={`${styles["btn"]} ${styles["btn-secondary"]}`}
                      type="button"
                      onClick={toggleDropdown}
                      aria-expanded={isOpen}
                    >
                      <i
                        className={`fa-light fa-caret-down ${styles["dropdown-arrow"]
                          } ${isOpen ? styles["rotate"] : ""}`}
                      ></i>
                    </button>
                    {isOpen && (
                      <ul
                        className={`${styles["dropdown-menu"]}`}
                      >
                        <li>
                          <Link
                            className={`${styles["dropdown-item"]}`}
                            to="/dashboard/settings"
                            onClick={() => handleItemClick()}
                          >
                            <i className="fa-light fa-user" />
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`${styles["dropdown-item"]}`}
                            to="/user/setting"
                            onClick={() => handleItemClick()}
                          >
                            <i className="fa-light fa-gear" />
                            Settings
                          </Link>
                        </li>
                        <li>
                          <button
                            className={`${styles["dropdown-item"]}`}
                            type="button"
                            onClick={() => handleItemClick("logout")}
                          >
                            <i className="fa-light fa-right-from-bracket" />
                            Log out
                          </button>
                        </li>
                      </ul>
                    )}
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
        {renderAuth()}
      </nav>
    </>
  );
};

export default Navbar;
