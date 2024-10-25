// src/components/Footer/Footer.tsx
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { loadSvgs } from "../../utils";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const [svgData, setSvgData] = useState<{ [key: string]: string | null }>({});

  useEffect(() => {
    const svgPaths = {
        twitterLogo: () => import('../../assets/svg/twitter-logo-30.svg'),
        discordLogo: () => import('../../assets/svg/discord-logo.svg'),
        telegramLogo: () => import('../../assets/svg/telegram-logo.svg'),
        websiteLogo: () => import('../../assets/svg/website-logo.svg'),
    };

    const loadAndSetSvgs = async () => {
        const svgMap = await loadSvgs(svgPaths);
        setSvgData(svgMap);
    };

    loadAndSetSvgs();
}, []);

  return (
    <footer
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
                {svgData['websiteLogo'] && (
                  <img
                    className={`${styles["img"]} ${styles["img-fluid"]} ${styles["mb-7"]}`}
                    src={svgData['websiteLogo']}
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
                  {svgData['twitterLogo'] && (
                    <img
                      className={`${styles["img"]} ${styles["img-fluid"]} ${styles["w-8"]}`}
                      src={svgData['twitterLogo']}
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
                  {svgData['discordLogo'] && (
                    <img
                      className={`${styles["img"]} ${styles["img-fluid"]} ${styles["w-8"]}`}
                      src={svgData['discordLogo']}
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
                  {svgData['telegramLogo'] && (
                    <img
                      className={`${styles["img"]} ${styles["img-fluid"]} ${styles["w-8"]}`}
                      src={svgData['telegramLogo']}
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
                to="/ToS"
              >
                Terms of Use
              </Link>
              <Link
                className={`${styles["a"]} ${styles["btn"]} ${styles["btn-link"]} ${styles["p-0"]} ${styles["fs-9"]} ${styles["fw-medium"]} ${styles["text-secondary-light"]}`}
                to="/Policy"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
