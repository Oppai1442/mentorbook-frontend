import React, { useState, useEffect } from "react";
import styles from "./Auth.module.css";
import { loadSvgs } from "../../utils";

const Auth: React.FC = () => {
  const googleLogo = loadSvgs('google-logo');
  const appleLogo = loadSvgs('apple-logo');

  return (
    <section
      data-section-id={1}
      data-share=""
      data-category="sign-in"
      data-component-id="fed93509_01_awz"
      className={`${styles['bg-black']} ${styles['position-relative']} ${styles['overflow-hidden']}`}
    >
      <div
        className={`${styles['d-none']} ${styles['d-lg-block']} ${styles['position-absolute']} ${styles['top-0']} ${styles['end-0']} ${styles['col-6']} ${styles['h-100']} ${styles['bg-dark']} ${styles['bg-opacity-10']} ${styles['text-center']} ${styles['pt-52']} ${styles['pb-12']}`}
        style={{
          background:
            "radial-gradient(72.2% 78.49% at 49.87% 50.1%,rgba(71,80,98,.26) 0,rgba(137,137,137,0) 100%)",
        }}
      >
        <img
          className={`${styles['d-block']} ${styles['mx-auto']} ${styles['mb-40']} ${styles['img-fluid']}`}
          src="./Shuffle Editor_files/stats.png"
          alt=""
          data-config-id="img-48d7c5-1"
        />
        <span
          className={`${styles['d-block']} ${styles['fs-9']} ${styles['text-secondary-light']} ${styles['mb-8']}`}
          data-config-id="txt-48d7c5-3"
        >
          Trusted by
        </span>
        <div className={`${styles['d-flex']} ${styles['align-items-center']} ${styles['justify-content-center']} ${styles['gap-8']}`}>

          <img
            className={`${styles['img-fluid']}`}
            src="./Shuffle Editor_files/netflix.svg"
            alt=""
            data-config-id="img-48d7c5-2"
          />
          <img
            className={`${styles['img-fluid']}`}
            src="./Shuffle Editor_files/allianz.svg"
            alt=""
            data-config-id="img-48d7c5-3"
          />
          <img
            className={`${styles['img-fluid']}`}
            src="./Shuffle Editor_files/spotify.svg"
            alt=""
            data-config-id="img-48d7c5-4"
          />
          <img
            className={`${styles['img-fluid']}`}
            src="./Shuffle Editor_files/uber.svg"
            alt=""
            data-config-id="img-48d7c5-5"
          />
        </div>
      </div>
      <div className={`${styles['container']} ${styles['position-relative']}`}>
        <div className={`${styles['mw-md']} ${styles['mx-auto']} ${styles['mx-lg-0']} ${styles['pt-10']} ${styles['pb-20']} ${styles['pb-lg-32']}`}>
          <a
            className={`${styles['btn']} ${styles['mb-32']} ${styles['p-0']}`}
            href="https://static.shuffle.dev/components/preview/9021aece-69cd-400d-ab4c-cc5509f8f5ac/assets/public/#"
          >
            <img
              className={`${styles['img-fluid']}`}
              src="./Shuffle Editor_files/logo.svg"
              alt=""
              data-config-id="img-48d7c5-6"
            />
          </a>
          <div className={`${styles['text-center']}`}>
            <h4
              className={`${styles['mb-4']} ${styles['h4']}`}
              style={{ letterSpacing: "-.1rem" }}
              data-config-id="txt-48d7c5-1"
            >
              Log in to your account
            </h4>
            <span
              className={`${styles['d-block']} ${styles['text-secondary-light']} ${styles['mb-10']}`}
              data-config-id="txt-48d7c5-4"
            >
              Good to have you back!
            </span>
            <form action="https://static.shuffle.dev/components/preview/9021aece-69cd-400d-ab4c-cc5509f8f5ac/assets/public/">
              <a
                className={`${styles['btn']} ${styles['mb-2']} ${styles['w-100']} ${styles['bg-dark']} ${styles['bg-opacity-50']}`}
                href="https://static.shuffle.dev/components/preview/9021aece-69cd-400d-ab4c-cc5509f8f5ac/assets/public/#"
              >
                {googleLogo.status === 200 && googleLogo.data && (
                  <img
                    className={`${styles['img-fluid']}`}
                    src={googleLogo.data}
                    alt="Google Logo"
                    data-config-id="img-48d7c5-7"
                  />
                )}
                <span className={`${styles['ms-4']} ${styles['fw-medium']}`} data-config-id="txt-48d7c5-5">
                  Sign in with Google
                </span>
              </a>
              <a
                className={`${styles['btn']} ${styles['w-100']} ${styles['bg-dark']} ${styles['bg-opacity-50']}`}
                href="https://static.shuffle.dev/components/preview/9021aece-69cd-400d-ab4c-cc5509f8f5ac/assets/public/#"
              >
                {appleLogo.status === 200 && appleLogo.data && (<img
                  className={`${styles['img-fluid']}`}
                  src={appleLogo.data}
                  alt=""
                  data-config-id="img-48d7c5-8"
                />)}
                <span className={`${styles['ms-4']} ${styles['fw-medium']}`} data-config-id="txt-48d7c5-6">
                  Sign in with Apple
                </span>
              </a>
              <div className={`${styles['d-flex']} ${styles['mt-8']} ${styles['mb-10']} ${styles['align-items-center']}`}>
                <div className={`${styles['w-100']} ${styles['border-top']}`} />
                <span
                  className={`${styles['d-inline-block']} ${styles['flex-shrink-0']} ${styles['mx-5']} ${styles['fs-10']} ${styles['fw-medium']} ${styles['text-secondary-light']}`}
                  data-config-id="txt-48d7c5-7"
                >
                  or sign in with email
                </span>
                <div className={`${styles['w-100']} ${styles['border-top']}`} />
              </div>
              <input
                className={`${styles['form-control']} ${styles['bg-transparent']} ${styles['mb-6']}`}
                type="email"
                placeholder="Enter your email"
                data-config-id="input-48d7c5-1"
              />
              <button
                className={`${styles['btn']} ${styles['btn-primary']} ${styles['mb-6']} ${styles['w-100']} ${styles['fw-medium']}`}
                type="submit"
                data-config-id="txt-48d7c5-10"
              >
                Log in
              </button>
              <p className={`${styles['d-flex']} ${styles['align-items-center']} ${styles['justify-content-center']}`}>
                <span
                  className={`${styles['text-secondary-light']}`}
                  data-config-id="txt-48d7c5-8"
                >
                  Dont have an account?
                </span>
                <a
                  className={`${styles['btn']} ${styles['ms-1']} ${styles['p-0']} ${styles['text-decoration-underline']}`}
                  href="https://static.shuffle.dev/components/preview/9021aece-69cd-400d-ab4c-cc5509f8f5ac/assets/public/#"
                  data-config-id="txt-48d7c5-2"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div
        className={`${styles['d-lg-none']} ${styles['bg-dark']} ${styles['bg-opacity-10']} ${styles['text-center']} ${styles['pt-24']} ${styles['pb-12']}`}
        style={{
          background:
            "radial-gradient(72.2% 78.49% at 49.87% 50.1%,rgba(71,80,98,.26) 0,rgba(137,137,137,0) 100%)",
        }}
      >
        <img
          className={`${styles['d-block']} ${styles['mx-auto']} ${styles['mb-40']} ${styles['img-fluid']}`}
          src="./Shuffle Editor_files/stats.png"
          alt=""
          data-config-id="img-48d7c5-9"
        />
        <span
          className={`${styles['d-block']} ${styles['fs-9']} ${styles['text-secondary-light']} ${styles['mb-8']}`}
          data-config-id="txt-48d7c5-9"
        >
          Trusted by
        </span>
        <div className={`${styles['d-flex']} ${styles['align-items-center']} ${styles['justify-content-center']} ${styles['gap-8']}`}>
          <img
            className={`${styles['img-fluid']}`}
            src="./Shuffle Editor_files/netflix.svg"
            alt=""
            data-config-id="img-48d7c5-10"
          />
          <img
            className={`${styles['img-fluid']}`}
            src="./Shuffle Editor_files/allianz.svg"
            alt=""
            data-config-id="img-48d7c5-11"
          />
          <img
            className={`${styles['img-fluid']}`}
            src="./Shuffle Editor_files/spotify.svg"
            alt=""
            data-config-id="img-48d7c5-12"
          />
          <img
            className={`${styles['img-fluid']}`}
            src="./Shuffle Editor_files/uber.svg"
            alt=""
            data-config-id="img-48d7c5-13"
          />
        </div>
      </div>
    </section>
  );
};

export default Auth;
