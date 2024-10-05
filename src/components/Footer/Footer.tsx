// src/components/Footer/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { loadSvgs } from "../../utils";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const websiteLogo = loadSvgs("website-logo");
  const twitterLogo = loadSvgs("twitter-logo");
  const discordLogo = loadSvgs("discord-logo");
  const telegramLogo = loadSvgs("telegram-logo");

  return (
    <section
      className={`${styles["py-12"]} ${styles["bg-black"]} ${styles["position-relative"]} ${styles["overflow-hidden"]}`}
    >
      <div className={`${styles["container"]}`}>
        <div
          className={`${styles["mw-md"]} ${styles["mw-md-3xl"]} ${styles["mx-auto"]} ${styles["mw-xl-none"]}`}
        >
          <div className={`${styles["row"]} ${styles["mb-24"]}`}>
            <div
              className={`${styles["col-xl-3"]} ${styles["mb-12"]} ${styles["mb-xl-0"]}`}
            >
              <div className={`${styles["mw-xs"]}`}>
                {websiteLogo.status === 200 && websiteLogo.data && (
                  <img
                    className={`${styles["img"]} ${styles["img-fluid"]} ${styles["mb-7"]}`}
                    src={websiteLogo.data}
                    alt=""
                  />
                )}
                <p
                  className={`${styles["p"]} ${styles["pe-10"]} ${styles["text-secondary-light"]}`}
                >
                  Nightsable is a strategic branding agency focused on brand
                  creation, rebrands, and brand
                </p>
              </div>
            </div>
            <div
              className={`${styles["col-md-6"]} ${styles["col-xl-5"]} ${styles["mb-12"]} ${styles["mb-md-0"]}`}
            >
              <div
                className={`${styles["d-flex"]} ${styles["gap-24"]} ${styles["gap-xl-10"]} ${styles["justify-content-xl-around"]}`}
              >
                <div>
                  <h6
                    className={`${styles["h6"]} ${styles["mb-6"]} ${styles["fs-7"]} ${styles["fw-medium"]}`}
                  >
                    About
                  </h6>
                  <ul
                    className={`${styles["ul"]} ${styles["list-unstyled"]} ${styles["mb-0"]}`}
                  >
                    <li className={`${styles["mb-2"]}`}>
                      <Link
                        className={`${styles["a"]} ${styles["btn"]} ${styles["p-0"]} ${styles["fw-medium"]} ${styles["text-secondary-light"]}`}
                        to="#"
                      >
                        Contact
                      </Link>
                    </li>
                    <li className={`${styles["mb-2"]}`}>
                      <Link
                        className={`${styles["a"]} ${styles["btn"]} ${styles["p-0"]} ${styles["fw-medium"]} ${styles["text-secondary-light"]}`}
                        to="#"
                      >
                        Blog
                      </Link>
                    </li>
                    <li className={`${styles["mb-2"]}`}>
                      <Link
                        className={`${styles["a"]} ${styles["btn"]} ${styles["p-0"]} ${styles["fw-medium"]} ${styles["text-secondary-light"]}`}
                        to="#"
                      >
                        Our Storry
                      </Link>
                    </li>
                    <li className={`${styles["mb-2"]}`}>
                      <Link
                        className={`${styles["a"]} ${styles["btn"]} ${styles["p-0"]} ${styles["fw-medium"]} ${styles["text-secondary-light"]}`}
                        to="#"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6
                    className={`${styles["h6"]} ${styles["mb-6"]} ${styles["fs-7"]} ${styles["fw-medium"]}`}
                  >
                    Company
                  </h6>
                  <ul
                    className={`${styles["ul"]} ${styles["list-unstyled"]} ${styles["mb-0"]}`}
                  >
                    <li className={`${styles["mb-2"]}`}>
                      <Link
                        className={`${styles["a"]} ${styles["btn"]} ${styles["p-0"]} ${styles["fw-medium"]} ${styles["text-secondary-light"]}`}
                        to="#"
                      >
                        Press
                      </Link>
                    </li>
                    <li className={`${styles["mb-2"]}`}>
                      <Link
                        className={`${styles["a"]} ${styles["btn"]} ${styles["p-0"]} ${styles["fw-medium"]} ${styles["text-secondary-light"]}`}
                        to="#"
                      >
                        Brand Assets
                      </Link>
                    </li>
                    <li className={`${styles["mb-2"]}`}>
                      <Link
                        className={`${styles["a"]} ${styles["btn"]} ${styles["p-0"]} ${styles["fw-medium"]} ${styles["text-secondary-light"]}`}
                        to="#"
                      >
                        Changelog
                      </Link>
                    </li>
                    <li className={`${styles["mb-2"]}`}>
                      <Link
                        className={`${styles["a"]} ${styles["btn"]} ${styles["p-0"]} ${styles["fw-medium"]} ${styles["text-secondary-light"]}`}
                        to="#"
                      >
                        Help centre
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`${styles["col-md-6"]} ${styles["col-xl-4"]}`}>
              <div className={`${styles["mw-sm"]} ${styles["ms-lg-auto"]}`}>
                <Link
                  className={`${styles["a"]} ${styles["btn"]} ${styles["btn-link"]} ${styles["d-flex"]} ${styles["w-100"]} ${styles["mb-4"]} ${styles["bg-dark"]} ${styles["bg-opacity-50"]}`}
                  to="#"
                >
                  {twitterLogo.status === 200 && twitterLogo.data && (
                    <img
                      className={`${styles["img"]} ${styles["img-fluid"]} ${styles["w-8"]}`}
                      src={twitterLogo.data}
                      alt=""
                    />
                  )}
                  <span
                    className={`${styles["ms-4"]} ${styles["mt-1"]} ${styles["text-secondary-light"]}`}
                  >
                    Follow us on Twitter for updates
                  </span>
                </Link>
                <Link
                  className={`${styles["a"]} ${styles["btn"]} ${styles["btn-link"]} ${styles["d-flex"]} ${styles["w-100"]} ${styles["mb-4"]} ${styles["bg-dark"]} ${styles["bg-opacity-50"]}`}
                  to="#"
                >
                  {discordLogo.status === 200 && discordLogo.data && (
                    <img
                      className={`${styles["img"]} ${styles["img-fluid"]} ${styles["w-8"]}`}
                      src={discordLogo.data}
                      alt=""
                    />
                  )}
                  <span
                    className={`${styles["ms-4"]} ${styles["mt-1"]} ${styles["text-secondary-light"]}`}
                  >
                    Join our Discord channel for updates
                  </span>
                </Link>
                <Link
                  className={`${styles["a"]} ${styles["btn"]} ${styles["btn-link"]} ${styles["d-flex"]} ${styles["w-100"]} ${styles["mb-4"]} ${styles["bg-dark"]} ${styles["bg-opacity-50"]}`}
                  to="#"
                >
                  {telegramLogo.status === 200 && telegramLogo.data && (
                    <img
                      className={`${styles["img"]} ${styles["img-fluid"]} ${styles["w-8"]}`}
                      src={telegramLogo.data}
                      alt=""
                    />
                  )}
                  <span
                    className={`${styles["ms-4"]} ${styles["mt-1"]} ${styles["text-secondary-light"]}`}
                  >
                    Join our Telegram channel for updates
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`${styles["d-flex"]} ${styles["flex-column"]} ${styles["flex-sm-row"]} ${styles["align-items-center"]} ${styles["justify-content-between"]}`}
          >
            <span
              className={`${styles["d-inline-block"]} ${styles["mb-6"]} ${styles["mb-sm-0"]} ${styles["fs-9"]} ${styles["fw-medium"]} ${styles["text-secondary-light"]}`}
            >
              © 2023 Nightsablestudio.co
            </span>
            <div>
              <Link
                className={`${styles["a"]} ${styles["btn"]} ${styles["btn-link"]} ${styles["me-14"]} ${styles["p-0"]} ${styles["fs-9"]} ${styles["fw-medium"]} ${styles["text-secondary-light"]}`}
                to="#"
              >
                Terms of Use
              </Link>
              <Link
                className={`${styles["a"]} ${styles["btn"]} ${styles["btn-link"]} ${styles["p-0"]} ${styles["fs-9"]} ${styles["fw-medium"]} ${styles["text-secondary-light"]}`}
                to="#"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
