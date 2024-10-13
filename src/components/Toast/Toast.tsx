import React, { useState, useEffect } from 'react';
import styles from './Toast.module.css';

type ToastProps = {
  mode: 'success' | 'danger' | 'warning' | 'info';
  message: string;
  timeout?: number;
};

const Toast: React.FC<ToastProps> = ({ mode, message, timeout = 3000}) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    // Progress bar countdown
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progressPercentage = Math.max(100 - (elapsedTime / timeout) * 100, 0);
      setProgress(progressPercentage);

      if (progressPercentage === 0) {
        setVisible(false);
        clearInterval(interval);
      }
    }, 100);

    const timer = setTimeout(() => {
      setVisible(false);
    }, timeout);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [timeout]);

  if (!visible) return null;

  return (
    <div
      className={`${styles['toast']} ${styles['toastCustom']} bg-${mode} ${visible ? styles['show'] : styles['hide']}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      onClick={() => setVisible(false)}
    >
      <div className="toast-body">{message}</div>

      <div className="progress" style={{ height: '4px' }}>
        <div
          className={`${styles["progress-bar"]} ${progress === 100 ? styles["progress-bar-end"] : progress < 100 && progress > 0 ? styles["progress-bar-start"] : ''}`}
          role="progressbar"
          style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

export default Toast;
