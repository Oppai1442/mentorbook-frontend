import React, { useState, useEffect } from 'react';
import styles from './Auth.module.css'; // Import CSS module
import { useLocation } from 'react-router-dom';

const Auth: React.FC = () => {
  const location = useLocation()

  const [isRightPanelActive, setRightPanelActive] = useState(false);

  const isLogin = location.state?.isLogin
  
  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  useEffect(() => {
    if (isLogin) {
      setRightPanelActive(false);
    } else {
      setRightPanelActive(true);
    }
  }, [isLogin]);


  return (
    <div className={styles.body}>
        <div className={styles.container + ' ' + (isRightPanelActive ? styles.rightPanelActive : '')} id="container">
        <div className={styles.formContainer + ' ' + styles.signUpContainer}>
            <form className={`${styles.form}`} action="#">
            <h1 className={`${styles.h1}`}>Create Account </h1>
            <div className={styles.socialContainer}>
                <a href="#" className={`${styles.social} ${styles.a}`}><i className="fab fa-facebook-f"></i></a>
                <a href="#" className={`${styles.social} ${styles.a}`}><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className={`${styles.social} ${styles.a}`}><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span className={`${styles.span}`}>or use your email for registration</span>
            <input className={`${styles.input}`} type="text" placeholder="Name" />
            <input className={`${styles.input}`} type="email" placeholder="Email" />
            <input className={`${styles.input}`} type="password" placeholder="Password" />
            <button className={styles.button} type="button">Sign Up</button>
            </form>
        </div>

        <div className={styles.formContainer + ' ' + styles.signInContainer}>
            <form className={`${styles.form}`} action="#">
            <h1 className={`${styles.h1}`}>Sign in</h1>
            <div className={styles.socialContainer}>
                <a href="#" className={`${styles.social} ${styles.a}`}><i className="fab fa-facebook-f"></i></a>
                <a href="#" className={`${styles.social} ${styles.a}`}><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className={`${styles.social} ${styles.a}`}><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span className={`${styles.span}`}>or use your account</span>
            <input className={`${styles.input}`} type="email" placeholder="Email" />
            <input className={`${styles.input}`} type="password" placeholder="Password" />
            <div className={`${styles.rememberContainer}`}>
              <label className={`${styles.rememberLabel}`}>
                <input type="checkbox" className={`${styles.rememberCheckBox}`} />
                Remember Me
              </label>
            </div>

            <button className={styles.button} type="button">Sign In</button>
            <a href="#" className={`${styles.a}`}>Forgot your password?</a>
            </form>
        </div>

        <div className={styles.overlayContainer}>
            <div className={styles.overlay}>
            <div className={styles.overlayPanel + ' ' + styles.overlayLeft}>
                <h1 className={`${styles.h1}`}>Welcome Back!</h1>
                <p className={`${styles.p}`}>To keep connected with us please login with your personal info</p>
                <button className={`${styles.ghost} ${styles.button}`} id="signIn" onClick={handleSignInClick}>
                Sign In
                </button>
            </div>
            <div className={styles.overlayPanel + ' ' + styles.overlayRight}>
                <h1 className={`${styles.h1}`}>Hello, Friend!</h1>
                <p className={`${styles.p}`}>Enter your personal details and start your journey with us</p>
                <button className={`${styles.ghost} ${styles.button}`} id="signUp" onClick={handleSignUpClick}>
                Sign Up
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Auth;
