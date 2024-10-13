import React, { useState, useEffect } from 'react';
import styles from './Toast.module.css'; // CSS Module file
import 'bootstrap/dist/css/bootstrap.min.css';

type ToastProps = {
  mode: 'success' | 'danger' | 'warning' | 'info';
  message: string;
  timeout: number;
};

const Toast: React.FC<ToastProps> = ({ mode, message, timeout }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout]);

  if (!visible) return null;

  return (
    <div
      className={`toast ${styles.toastCustom} ${visible ? 'show' : 'hide'} bg-${mode}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-body">{message}</div>
    </div>
  );
};

export default Toast;
