import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.css";
import { loadSvgs } from "../../utils";

interface AuthProps {
  mode: "signIn" | "signUp" | null;
  onClose: () => void;
}

const Auth: React.FC<AuthProps> = ({ mode: initialMode, onClose }) => {
  const googleLogo = loadSvgs("google-logo");
  const appleLogo = loadSvgs("apple-logo");
  const websiteLogo = loadSvgs("website-logo");

  const popupRef = useRef<HTMLDivElement | null>(null);

  const [mode, setMode] = useState<"signIn" | "signUp">(
    initialMode || "signIn"
  );
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const [fullName, setFullName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const isSignIn = () => mode === "signIn";

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  const handleSwitchMode = () => {
    setMode((prevMode) => (prevMode === "signIn" ? "signUp" : "signIn"));
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    setMode(initialMode || "signIn");
  }, [initialMode]);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Kiểm tra định dạng email
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    } else {
      setEmailError("");
    }

    // Xử lý đăng ký tại đây...
    console.log("Submitting:", {
      fullName,
      birthDate,
      address,
      phoneNumber,
      email,
    });
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
            {websiteLogo.status === 200 && websiteLogo.data && (
              <img
                className={`${styles["img"]} ${styles["img-fluid"]}`}
                src={websiteLogo.data}
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
                  className={`${styles["input"]} ${styles["form-control"]} ${styles["bg-transparent"]}`}
                  type="text"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <input
                  className={`${styles["input"]} ${styles["form-control"]} ${styles["bg-transparent"]}`}
                  type="date"
                  placeholder="Birth date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  required
                />
                <input
                  className={`${styles["input"]} ${styles["form-control"]} ${styles["bg-transparent"]}`}
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <input
                  className={`${styles["input"]} ${styles["form-control"]} ${styles["bg-transparent"]}`}
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
                className={`${styles["input"]} ${styles["form-control"]} ${styles["bg-transparent"]} ${styles["mb-4"]}`}
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
                  className={`${styles["form-control"]} ${styles["bg-transparent"]} ${styles["mb-6"]}`}
                  type={!isPasswordVisible ? "password" : "text"}
                  placeholder="Password"
                />
                <button
                  className={`${styles["position-absolute"]} ${styles["top-50"]} ${styles["end-0"]} ${styles["me-8"]} ${styles["translate-middle-y"]} ${styles["btn"]} ${styles["p-0"]}`}
                  onClick={togglePasswordVisibility}
                  type="button"
                >
                  <i className={`fa-thin ${!isPasswordVisible ? "fa-eye-slash" : "fa-eye"}`} style={{ color: "#ffffff" }} />
                </button>
              </div>
            </div>
            <button
              className={`${styles["btn"]} ${styles["btn-primary"]} ${styles["mb-6"]} ${styles["w-100"]} ${styles["fw-medium"]}`}
              type="submit"
            >
              {isSignIn() ? "Sign In" : "Sign Up"}
            </button>
            <Link
              className={`${styles["btn"]} ${styles["fs-9"]} ${styles["ms-1"]} ${styles["p-0"]}  ${styles["text-secondary-light"]}`}
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
              className={`${styles["btn"]} ${styles["mb-2"]} ${styles["w-100"]} ${styles["bg-dark"]} ${styles["bg-opacity-50"]}`}
              to="#"
            >
              {googleLogo.status === 200 && googleLogo.data && (
                <img
                  className={`${styles["img"]} ${styles["img-fluid"]}`}
                  src={googleLogo.data}
                  alt=""
                />
              )}
              <span className={`${styles["ms-4"]} ${styles["fw-medium"]}`}>
                {isSignIn() ? "Sign in" : "Sign up"} with Google
              </span>
            </Link>
            <Link
              className={`${styles["btn"]} ${styles["w-100"]} ${styles["bg-dark"]} ${styles["bg-opacity-50"]}`}
              to="#"
            >
              {appleLogo.status === 200 && appleLogo.data && (
                <img
                  className={`${styles["img"]} ${styles["img-fluid"]}`}
                  src={appleLogo.data}
                  alt=""
                />
              )}
              <span className={`${styles["ms-4"]} ${styles["fw-medium"]}`}>
                {isSignIn() ? "Sign in" : "Sign up"} with Apple
              </span>
            </Link>
          </form>
          <div className={`${styles["text-center"]} ${styles["mt-4"]}`}>
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
