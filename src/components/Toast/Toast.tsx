import React, { useEffect, useState } from "react";
import styles from "./Toast.module.css";

interface ToastProps {
  mode: "notify" | "success" | "failed" | null;
  message?: string;
  timeout?: number | null;
}

const Toast: React.FC<ToastProps> = ({ mode, message, timeout }) => {
  const [isVisible, setIsVisible] = useState(true);

  let toastClass = "";
  let icon = null;

  switch (mode) {
    case "notify":
      toastClass = `${styles["alert-warning"]}`;
      icon = <i className="fa-thin fa-circle-exclamation fa-beat-fade fa-2xl"></i>;
      break;
    case "success":
      toastClass = `${styles["alert-success"]} ${styles["bg-success"]}`;
      icon = <i className="fa-thin fa-circle-check fa-fade fa-2xl"></i>;
      break;
    case "failed":
      toastClass = `${styles["alert-danger"]}`;
      icon = <i className="fa-thin fa-circle-xmark fa-fade fa-2xl"></i>;
      break;
  }

  useEffect(() => {
    if (!timeout) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout]);

  if (mode === null) return null;

  return (
    <div
      className={`${styles["position-fixed"]} ${styles["bottom-0"]} ${styles["start-50"]} ${styles["translate-middle-x"]} ${styles["p-3"]}`}
      style={{ zIndex: 1000 }}
    >
      <div className={`d-flex align-items-center justify-content-center`}>
        <div
          className={`${styles["alert"]} ${toastClass} ${styles["px-8"]} ${
            styles["border-0"]
          } ${styles["alert-container"]} ${
            !isVisible ? styles["alert-hidden"] : ""
          }`}
          role="alert"
        >
          <div
            className={`${styles["d-flex"]} ${styles["align-items-center"]}`}
          >
            <div className={`${styles["flex-shrink-0"]} ${styles["pe-6"]}`}>
              {icon}
            </div>
            <div
              className={`${styles["py-2"]} ${styles["ps-5"]} ${styles["border-start"]} ${styles["border-dark-light"]} ${styles["border-opacity-10"]}`}
            >
              <span
                className={`${styles["d-inline-block"]} ${styles["fw-semibold"]}`}
              >
                {message}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
