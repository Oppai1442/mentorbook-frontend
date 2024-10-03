import React from "react";
import styles from "./Auth.module.css";
import { loadSvgs } from "../../utils";

const Auth: React.FC = () => {
  const googleLogo = loadSvgs("google-logo");
  const appleLogo = loadSvgs("apple-logo");
  const netflixLogo = loadSvgs("netflix-logo");
  const spotifyLogo = loadSvgs("spotify-logo");
  const uberLogo = loadSvgs("uber-logo");
  const allianzLogo = loadSvgs("allianz-logo");
  const websiteLogo = loadSvgs("website-logo");
 //
  return (
    <section
      className={`${styles["bg-black"]} ${styles["position-relative"]} ${styles["overflow-hidden"]}`}
    >
      <div
        className={`${styles["d-none"]} ${styles["d-lg-block"]} ${styles["position-absolute"]} ${styles["top-0"]} ${styles["end-0"]} ${styles["col-6"]} ${styles["h-100"]} ${styles["bg-dark"]} ${styles["bg-opacity-10"]} ${styles["text-center"]} ${styles["pt-52"]} ${styles["pb-12"]}`}
        style={{
          background:
            "radial-gradient(72.2% 78.49% at 49.87% 50.1%,rgba(71,80,98,.26) 0,rgba(137,137,137,0) 100%)",
        }}
      >
        <img
          className={`${styles["d-block"]} ${styles["mx-auto"]} ${styles["mb-40"]} ${styles["img-fluid"]} ${styles["img"]}`}
          src="./Shuffle Editor_files/stats.png"
          alt=""
        />
        <span
          className={`${styles["d-block"]} ${styles["fs-9"]} ${styles["text-secondary-light"]} ${styles["mb-8"]}`}
        >
          Trusted by
        </span>
        <div
          className={`${styles["d-flex"]} ${styles["align-items-center"]} ${styles["justify-content-center"]} ${styles["gap-8"]}`}
        >
          {netflixLogo.status === 200 && netflixLogo.data && (
            <img
              className={`${styles["img-fluid"]} ${styles["img"]}`}
              src={netflixLogo.data}
              alt=""
            />
          )}
          {allianzLogo.status === 200 && allianzLogo.data && (
            <img
              className={`${styles["img-fluid"]} ${styles["img"]}`}
              src={allianzLogo.data}
              alt=""
            />
          )}
          {spotifyLogo.status === 200 && spotifyLogo.data && (
            <img
              className={`${styles["img-fluid"]} ${styles["img"]}`}
              src={spotifyLogo.data}
              alt=""
            />
          )}
          {uberLogo.status === 200 && uberLogo.data && (
            <img
              className={`${styles["img-fluid"]} ${styles["img"]}`}
              src={uberLogo.data}
              alt=""
            />
          )}
        </div>
      </div>
      <div className={`${styles["container"]} ${styles["position-relative"]}`}>
        <div
          className={`${styles["mw-md"]} ${styles["mx-auto"]} ${styles["mx-lg-0"]} ${styles["pt-10"]} ${styles["pb-20"]} ${styles["pb-lg-32"]}`}
        >
          <a
            className={`${styles["a"]} ${styles["btn"]} ${styles["mb-32"]} ${styles["p-0"]}`}
            href="https://static.shuffle.dev/components/preview/9021aece-69cd-400d-ab4c-cc5509f8f5ac/assets/public/#"
          >
            {websiteLogo.status === 200 && websiteLogo.data && (
              <img
                className={`${styles["img-fluid"]} ${styles["img"]}`}
                src={websiteLogo.data}
                alt=""
              />
            )}
          </a>
          <div className={`${styles["text-center"]}`}>
            <h4
              className={`${styles["mb-4"]} ${styles["h4"]}`}
              style={{ letterSpacing: "-.1rem" }}
            >
              Log in to your account
            </h4>
            <span
              className={`${styles["d-block"]} ${styles["text-secondary-light"]} ${styles["mb-10"]}`}
            >
              Good to have you back!
            </span>
            <form action="https://static.shuffle.dev/components/preview/9021aece-69cd-400d-ab4c-cc5509f8f5ac/assets/public/">
              <a
                className={`${styles["btn"]} ${styles["mb-2"]} ${styles["w-100"]} ${styles["bg-dark"]} ${styles["bg-opacity-50"]} ${styles["a"]} `}
                href="https://static.shuffle.dev/components/preview/9021aece-69cd-400d-ab4c-cc5509f8f5ac/assets/public/#"
              >
                {googleLogo.status === 200 && googleLogo.data && (
                  <img
                    className={`${styles["img-fluid"]} ${styles["img"]}`}
                    src={googleLogo.data}
                    alt="Google Logo"
                  />
                )}  
                <span
                  className={`${styles["ms-4"]} ${styles["fw-medium"]}`}
                >
                  Sign in with Google
                </span>
              </a>
              <a
                className={`${styles["a"]} ${styles["btn"]} ${styles["w-100"]} ${styles["bg-dark"]} ${styles["bg-opacity-50"]}`}
                href="https://static.shuffle.dev/components/preview/9021aece-69cd-400d-ab4c-cc5509f8f5ac/assets/public/#"
              >
                {appleLogo.status === 200 && appleLogo.data && (
                  <img
                    className={`${styles["img-fluid"]} ${styles["img"]}`}
                    src={appleLogo.data}
                    alt=""
                  />
                )}
                <span
                  className={`${styles["ms-4"]} ${styles["fw-medium"]}`}
                >
                  Sign in with Apple
                </span>
              </a>
              <div
                className={`${styles["d-flex"]} ${styles["mt-8"]} ${styles["mb-10"]} ${styles["align-items-center"]}`}
              >
                <div className={`${styles["w-100"]} ${styles["border-top"]}`} />
                <span
                  className={`${styles["d-inline-block"]} ${styles["flex-shrink-0"]} ${styles["mx-5"]} ${styles["fs-10"]} ${styles["fw-medium"]} ${styles["text-secondary-light"]}`}
                >
                  or sign in with email
                </span>
                <div className={`${styles["w-100"]} ${styles["border-top"]}`} />
              </div>
              <input
                className={`${styles["form-control"]} ${styles["bg-transparent"]} ${styles["mb-6"]}  ${styles["input"]}`}
                type="email"
                placeholder="Enter your email"
              />
              <button
                className={`${styles["btn"]} ${styles["btn-primary"]} ${styles["mb-6"]} ${styles["w-100"]} ${styles["fw-medium"]} ${styles["button"]}`}
                type="submit"
              >
                Log in
              </button>
              <p
                className={`${styles["p"]} ${styles["d-flex"]} ${styles["align-items-center"]} ${styles["justify-content-center"]}`}
              >
                <span
                  className={`${styles["text-secondary-light"]}`}
                >
                  Dont have an account?
                </span>
                <a
                  className={`${styles["a"]} ${styles["btn"]} ${styles["ms-1"]} ${styles["p-0"]} ${styles["text-decoration-underline"]}`}
                  href="https://static.shuffle.dev/components/preview/9021aece-69cd-400d-ab4c-cc5509f8f5ac/assets/public/#"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div
        className={`${styles["d-lg-none"]} ${styles["bg-dark"]} ${styles["bg-opacity-10"]} ${styles["text-center"]} ${styles["pt-24"]} ${styles["pb-12"]}`}
        style={{
          background:
            "radial-gradient(72.2% 78.49% at 49.87% 50.1%,rgba(71,80,98,.26) 0,rgba(137,137,137,0) 100%)",
        }}
      >
        <img
          className={`${styles["d-block"]} ${styles["mx-auto"]} ${styles["mb-40"]} ${styles["img-fluid"]} ${styles["img"]}`}
          src="./Shuffle Editor_files/stats.png"
          alt=""
        />
        <span
          className={`${styles["d-block"]} ${styles["fs-9"]} ${styles["text-secondary-light"]} ${styles["mb-8"]}`}
        >
          Trusted by
        </span>
        <div
          className={`${styles["d-flex"]} ${styles["align-items-center"]} ${styles["justify-content-center"]} ${styles["gap-8"]}`}
        >
          {netflixLogo.status === 200 && netflixLogo.data && (
            <img
              className={`${styles["img-fluid"]} ${styles["img"]}`}
              src={netflixLogo.data}
              alt=""
            />
          )}
          {allianzLogo.status === 200 && allianzLogo.data && (
            <img
              className={`${styles["img-fluid"]} ${styles["img"]}`}
              src={allianzLogo.data}
              alt=""
            />
          )}
          {spotifyLogo.status === 200 && spotifyLogo.data && (
            <img
              className={`${styles["img-fluid"]} ${styles["img"]}`}
              src={spotifyLogo.data}
              alt=""
            />
          )}
          {uberLogo.status === 200 && uberLogo.data && (
            <img
              className={`${styles["img-fluid"]} ${styles["img"]}`}
              src={uberLogo.data}
              alt=""
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Auth;
