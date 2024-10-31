import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.css";
import { loadSvgs } from "../../utils";
import { useToast, useAuth } from "../../context";
import { signIn, signUp } from "../../services";
import { LoadingError } from "../../components/LoadingError";

interface AuthProps {
  mode: "signIn" | "signUp" | null;
  onClose: () => void;
}

const Auth: React.FC<AuthProps> = ({ mode: initialMode, onClose }) => {
  const [svgData, setSvgData] = useState<{ [key: string]: string | null }>({});
  const popupRef = useRef<HTMLDivElement | null>(null);
  const { addToast } = useToast();
  const { setUser } = useAuth();

  const [mode, setMode] = useState<"signIn" | "signUp">(initialMode || "signIn");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isHandling, setIsHandling] = useState<boolean>(false);

  const [fullName, setFullName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [rememberMe, setRememberMe] = useState(false);

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

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSwitchMode = () => {
    setMode((prevMode) => (prevMode === "signIn" ? "signUp" : "signIn"));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsHandling(true);

    if (mode === "signUp" && !validateEmail(email)) {
      setEmailError("Invalid email format");
      setIsHandling(false);
      return;
    } else {
      setEmailError("");
    }

    try {
      const response = isSignIn()
        ? await signIn({ email, password })
        : await signUp({
          email,
          password,
          fullName,
          birthDate,
          address,
          phoneNumber,
        });

      if (response) {
        const { token, user } = response;

        setUser(user);
        localStorage.setItem("accountToken", token);
        onClose();
        addToast("success", isSignIn() ? "Login successful!" : "Sign Up successful!");
      }
    } catch (error: any) {
      handleError(error);
    } finally {
      setIsHandling(false);
    }
  };

  const handleError = (error: any) => {
    if (error.response) {
      const response = error.response;

      switch (response.status) {
        case 200: // Successful sign-in
          addToast("success", "Sign-in successful! Welcome back.");
          break;
        case 201: // Successful sign-up
          addToast("success", "Account created successfully! Welcome to the platform.");
          break;
        case 400: // Bad request (e.g., invalid input format)
          addToast("warning", "Please check your input and try again.");
          break;
        case 401: // Unauthorized (e.g., incorrect credentials)
          addToast("danger", "Incorrect email or password.");
          break;
        case 403: // Forbidden (e.g., account blocked)
          addToast("danger", "Your account is restricted. Please contact support.");
          break;
        case 409: // Conflict (e.g., email already in use for sign-up)
          addToast("warning", "An account with this email already exists.");
          break;
        case 500: // Internal server error
          addToast("danger", "An error occurred on the server. Please try again later.");
          break;
        default: // Unhandled errors
          addToast("neutral", "An unexpected error occurred. Please try again.");
          console.error('An error occurred:', response.status);
          break;
      }

    } else {
      addToast("dark", "Network error: Unable to connect. Please check your internet connection.");
      console.error('Network error or no response:', error);
    }
  };

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
    <>
      <div
        className={`${styles["popup"]} ${styles["d-flex"]} ${styles["justify-content-center"]} ${styles["align-items-center"]}`}
      >
        <div ref={popupRef}
          className={`${styles['auth-container']} ${styles["position-relative"]} ${styles["mw-lg"]} ${styles["mx-auto"]} ${styles["px-8"]} ${styles["pt-10"]} ${styles["pb-8"]} ${styles["rounded-5"]} ${styles["bg-black"]}`}
        >
          {isHandling && (
            <LoadingError type="loading" message="Please wait..." style={{ color: '#fff' }} />
          )}
          <button
            type="button"
            onClick={onClose}
            className={`${styles["button"]} ${styles["position-absolute"]} ${styles["top-0"]} ${styles["end-0"]} ${styles["me-6"]} ${styles["mt-6"]} ${styles["btn"]} ${styles["p-0"]}`}
          >
            <i className="fa-thin fa-x"></i>
          </button>
          <div className={`${isHandling ? "disabled" : ""} ${styles["text-center"]}`}>
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
                <div className={`${isHandling ? "disabled" : ""} ${styles["sign-up-grid"]}`}>
                  <input
                    className={`${styles["input"]} ${styles["bg-transparent"]} ${styles["form-control"]}`}
                    type="text"
                    placeholder="Full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                  <input
                    className={`${styles["input"]} ${styles["bg-transparent"]} ${styles["form-control"]}`}
                    type="date"
                    placeholder="Birth date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    required
                  />
                  <input
                    className={`${styles["input"]} ${styles["bg-transparent"]} ${styles["form-control"]}`}
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <input
                    className={`${styles["input"]} ${styles["bg-transparent"]} ${styles["form-control"]}`}
                    type="tel"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              )}
              <div className={`${isHandling ? "disabled" : ""} ${styles["email-password-container"]}`}>
                <input
                  className={`${styles["input"]} ${styles["bg-transparent"]} ${styles["form-control"]} ${styles["mb-4"]}`}
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
                    className={`${styles["input"]} ${styles["bg-transparent"]} ${styles["form-control"]} ${styles["mb-6"]}`}
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
              {isSignIn() && (<div className={`${isHandling ? "disabled" : ""} ${styles['form-check']} ${styles['form-control-plaintext']}`}>
                <input
                  type="checkbox"
                  className={`${styles['form-check-input']} ${styles['me-2']}`}
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleCheckboxChange}
                />
                <label className={`${styles['form-check-label']} ${styles['text-white']}`} htmlFor="rememberMe">Remember me</label>
              </div>)}
              {isSignIn() && (<Link
                className={`${isHandling ? "disabled" : ""} ${styles["btn"]} ${styles["fs-9"]} ${styles["p-0"]} ${styles["mt-4"]}  ${styles["text-secondary-light"]}`}
                to="#"
              >
                Forgot password?
              </Link>)}
              <div
                className={`${styles["d-flex"]} ${styles["mt-8"]} ${styles["align-items-center"]}`}
              >
                <div className={`${styles["w-100"]} ${styles["border-top"]}`} />
                <span
                  className={`${styles["d-inline-block"]} ${styles["flex-shrink-0"]} ${styles["mx-5"]} ${styles["fs-10"]} ${styles["fw-medium"]} ${styles["text-secondary-light"]}`}
                >
                  or {isSignIn() ? "sign in" : "sign up"} with
                </span>
                <div className={`${styles["w-100"]} ${styles["border-top"]}`} />
              </div>
              <div className={`${styles["d-flex"]} ${styles["justify-content-center"]} ${styles["gap-3"]} ${styles["mt-4"]}`}>
                <button
                  className={`${isHandling ? "disabled" : ""} ${styles["btn"]}`}
                  aria-label="Sign in with Google"
                >
                  {svgData['googleLogo'] && (
                    <img src={svgData['googleLogo']} alt="Google icon" className={`${styles["img-fluid"]}`} />
                  )}
                </button>

                <button
                  className={`${isHandling ? "disabled" : ""} ${styles["btn"]}`}
                  aria-label="Sign in with Apple"
                >
                  {svgData['appleLogo'] && (
                    <img src={svgData['appleLogo']} alt="Apple icon" className={`${styles["img-fluid"]}`} />
                  )}
                </button>

                <button
                  className={`${isHandling ? "disabled" : ""} ${styles["btn"]}`}
                  aria-label="Sign in with Email"
                >
                  <i className="fa-solid fa-envelope" style={{ color: "#ffffff" }} />
                </button>
              </div>

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
    </>
  );
};

export default Auth;
