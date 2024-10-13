import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.css";
import { loadSvgs } from "../../utils";
import { postData } from "../../services/apiService";
import { Fade } from "react-bootstrap";

interface AuthProps {
  mode: "signIn" | "signUp" | null;
  onClose: () => void;
  onLogin: (mode: "notify" | "success" | "failed", message: string) => void;
}

const Auth: React.FC<AuthProps> = ({ mode: initialMode, onClose, onLogin }) => {
  const [svgData, setSvgData] = useState<{ [key: string]: string | null }>({});
  const popupRef = useRef<HTMLDivElement | null>(null);

  const [mode, setMode] = useState<"signIn" | "signUp">(initialMode || "signIn");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isHandling, setHandling] = useState<boolean>(false);

  const [fullName, setFullName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Callback and Event Handlers
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const isSignIn = () => mode === "signIn";

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  const handleSwitchMode = () => {
    setMode((prevMode) => (prevMode === "signIn" ? "signUp" : "signIn"));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (mode === "signUp" && !validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    } else {
      setEmailError("");
    }

    if (isSignIn()) {
      onLogin("notify", "Signing in");
      try {
        const response = await postData("/user/login", { email, password });
        onLogin("success", "Login successful");
      } catch (error: any) {
        if (error.status === 401) {
          onLogin("failed", "Login failed. Please ensure your details are correct");
        }
      }
    } else {
      console.log("Submitting:", { fullName, birthDate, address, phoneNumber, email });
    }
  };

  // Effect Hooks
  useEffect(() => {
    const svgPaths = {
      googleLogo: () => import('../../assets/svg/google-logo.svg'),
      appleLogo: () => import('../../assets/svg/apple-logo.svg'),
      websiteLogo: () => import('../../assets/svg/website-logo.svg'),
    };

    const loadAndSetSvgs = async () => {
      const svgMap = await loadSvgs(svgPaths);
      setSvgData(svgMap);
    };

    loadAndSetSvgs();
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    setMode(initialMode || "signIn");
  }, [initialMode]);

  // Helper Functions
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div
      className={`${styles["popup"]} ${styles["d-flex"]} ${styles["justify-content-center"]} ${styles["align-items-center"]}`}
    >
      <div
        ref={popupRef}
        className={`${styles["position-relative"]} ${styles["mw-lg"]} ${styles["mx-auto"]} ${styles["px-8"]} ${styles["pt-10"]} ${styles["pb-8"]} ${styles["rounded-5"]} ${styles["bg-black"]}`}
      >
        <button
          type="button"
          onClick={onClose}
          className={`${styles["button"]} ${styles["position-absolute"]} ${styles["top-0"]} ${styles["end-0"]} ${styles["me-6"]} ${styles["mt-6"]} ${styles["btn"]} ${styles["p-0"]}`}
        >
          <i className="fa-thin fa-x"></i>
        </button>
        <div className={`${styles["text-center"]}`}>
          <Link
            className={`${styles["btn"]} ${styles["mb-8"]} ${styles["p-0"]}`}
            to="#"
          >
            {svgData['websiteLogo'] && (
              <img
                className={`${styles["img"]} ${styles["img-fluid"]}`}
                src={svgData['websiteLogo']}
                alt=""
              />
            )}
          </Link>
          <h5
            className={`${styles["h5"]} ${styles["mb-10"]}`}
            style={{ letterSpacing: "-0.1rem" }}
          >
            {isSignIn() ? "Log in to your account" : "Register new account"}
          </h5>
          <form onSubmit={handleSubmit} className={styles["form-grid"]}>
            {!isSignIn() && (
              <div className={styles["sign-up-grid"]}>
                <input
                  disabled={isHandling}
                  className={`${styles["input"]} ${styles["bg-transparent"]} ${styles["form-control"]}`}
                  type="text"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <input
                  disabled={isHandling}
                  className={`${styles["input"]} ${styles["bg-transparent"]} ${styles["form-control"]}`}
                  type="date"
                  placeholder="Birth date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  required
                />
                <input
                  disabled={isHandling}
                  className={`${styles["input"]} ${styles["bg-transparent"]} ${styles["form-control"]}`}
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <input
                  disabled={isHandling}
                  className={`${styles["input"]} ${styles["bg-transparent"]} ${styles["form-control"]}`}
                  type="tel"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
            )}
            <div className={styles["email-password-container"]}>
              <input
                disabled={isHandling}
                className={`${isHandling ? "disabled" : ""} ${styles["input"]} ${styles["bg-transparent"]} ${styles["form-control"]} ${styles["mb-4"]}`}
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && (
                <div className={`${styles["text-danger"]}`}>{emailError}</div>
              )}

              <div className={`${styles["position-relative"]}`}>
                <input
                  disabled={isHandling}
                  className={`${styles["bg-transparent"]} ${styles["form-control"]} ${styles["mb-6"]}`}
                  type={!isPasswordVisible ? "password" : "text"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className={`${styles["button"]} ${styles["position-absolute"]} ${styles["top-50"]} ${styles["end-0"]} ${styles["me-8"]} ${styles["translate-middle-y"]} ${styles["btn"]} ${styles["p-0"]}`}
                  onClick={togglePasswordVisibility}
                  type="button"
                >
                  <i className={`fa-thin ${!isPasswordVisible ? "fa-eye-slash" : "fa-eye"}`} style={{ color: "#ffffff" }} />
                </button>
              </div>
            </div>
            <button
              disabled={isHandling}
              className={`${styles["button"]} ${styles["btn"]} ${styles["btn-primary"]} ${styles["mb-6"]} ${styles["w-100"]} ${styles["fw-medium"]}`}
              type="submit"
            >
              {isSignIn() ? "Sign In" : "Sign Up"}
            </button>
            <Link
              className={`${isHandling ? "disabled" : ""} ${styles["btn"]} ${styles["fs-9"]} ${styles["ms-1"]} ${styles["p-0"]}  ${styles["text-secondary-light"]}`}
              to="#"
            >
              Forgot password?
            </Link>
            <div
              className={`${styles["d-flex"]} ${styles["mt-8"]} ${styles["mb-10"]} ${styles["align-items-center"]}`}
            >
              <div className={`${styles["w-100"]} ${styles["border-top"]}`} />
              <span
                className={`${styles["d-inline-block"]} ${styles["flex-shrink-0"]} ${styles["mx-5"]} ${styles["fs-10"]} ${styles["fw-medium"]} ${styles["text-secondary-light"]}`}
              >
                or {isSignIn() ? "sign in" : "sign up"} with email
              </span>
              <div className={`${styles["w-100"]} ${styles["border-top"]}`} />
            </div>
            <Link
              className={`${isHandling ? "disabled" : ""} ${styles["btn"]} ${styles["mb-2"]} ${styles["w-100"]} ${styles["bg-dark"]} ${styles["bg-opacity-50"]}`}
              to="#"
            >
              {svgData['googleLogo'] && (
                <img
                  className={`${styles["img"]} ${styles["img-fluid"]}`}
                  src={svgData['googleLogo']}
                  alt=""
                />
              )}
              <span className={`${styles["ms-4"]} ${styles["fw-medium"]}`}>
                {isSignIn() ? "Sign in" : "Sign up"} with Google
              </span>
            </Link>
            <Link
              className={`${isHandling ? "disabled" : ""} ${styles["btn"]} ${styles["w-100"]} ${styles["bg-dark"]} ${styles["bg-opacity-50"]}`}
              to="#"
            >
              {svgData['appleLogo'] && (
                <img
                  className={`${styles["img"]} ${styles["img-fluid"]}`}
                  src={svgData['appleLogo']}
                  alt=""
                />
              )}
              <span className={`${styles["ms-4"]} ${styles["fw-medium"]}`}>
                {isSignIn() ? "Sign in" : "Sign up"} with Apple
              </span>
            </Link>
          </form>
          <div className={`${isHandling ? "disabled" : ""} ${styles["text-center"]} ${styles["mt-4"]}`}>
            {isSignIn() ? (
              <p className={`${styles["p"]}`}>
                Don't have an account?{" "}
                <Link
                  to="#"
                  onClick={handleSwitchMode}
                  className={`${styles["a"]}`}
                >
                  Sign Up
                </Link>
              </p>
            ) : (
              <p className={`${styles["p"]}`}>
                Already have an account?{" "}
                <Link
                  to="#"
                  onClick={handleSwitchMode}
                  className={`${styles["a"]}`}
                >
                  Sign In
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
