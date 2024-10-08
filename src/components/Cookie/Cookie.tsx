import React, { useEffect, useState } from "react";
import styles from "./Cookie.module.css";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccept, setIsAccept] = useState(() => {
    const saved = localStorage.getItem('acceptCookie');
    return saved === 'true';
  });

  useEffect(() => {
    const saved = localStorage.getItem('acceptCookie');
    if (saved === 'true' || saved === 'false') {
      setIsVisible(false);
    } else {
        setIsVisible(true);
    }
  }, [isAccept]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    setIsAccept(true);
    localStorage.setItem('acceptCookie', isAccept.toString());
    handleClose();
  };

  const handleDeclineAll = () => {
    setIsAccept(false);
    localStorage.setItem('acceptCookie', isAccept.toString());
    handleClose();
  };

  return (
    <>
      {isVisible && (
        <section
          className={`${styles["position-fixed"]} ${styles["bottom-0"]} ${styles["start-0"]} ${styles["p-4"]}`}
        >
          <div
            className={`${styles["position-relative"]} ${styles["mw-md"]} ${styles["py-4"]} ${styles["ps-4"]} ${styles["pe-8"]} ${styles["bg-black"]} ${styles["rounded-5"]}`}
          >
            <button
              type="button"
              onClick={handleClose}
              className={`${styles["button"]} ${styles["position-absolute"]} ${styles["top-0"]} ${styles["end-0"]} ${styles["me-6"]} ${styles["mt-6"]} ${styles["btn"]} ${styles["p-0"]}`}
            >
              <i className="fa-thin fa-x"></i>
            </button>
            <div className={`${styles["container"]} ${styles["position-relative"]}`}>
              <div className={`${styles["row"]} ${styles["align-items-center"]}`}>
                <h3 className={`${styles["h3"]} ${styles["mb-2"]} ${styles["fs-6"]} ${styles["fw-medium"]}`}>
                  Cookie Consent
                </h3>
                <p className={`${styles["p"]} ${styles["text-light"]} ${styles["mb-8"]}`}>
                  We use cookies to ensure that we give you the best experience on
                  our website. If you continue to use this site we will assume that
                  you are happy with it.
                </p>
                <div className={`${styles["d-flex"]} ${styles["flex-column"]} ${styles["flex-sm-row"]} ${styles["gap-4"]}`}>
                  <button
                    className={`${styles["button"]} ${styles["btn"]} ${styles["btn-primary"]} ${styles["fw-medium"]}`}
                    onClick={handleAcceptAll}
                  >
                    Allow
                  </button>
                  <button
                    className={`${styles["button"]} ${styles["btn"]} ${styles["btn-outline-light"]} ${styles["fw-medium"]}`}
                    onClick={handleDeclineAll}
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CookieConsent;