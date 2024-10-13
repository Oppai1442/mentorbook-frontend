import React, { useState, useEffect } from 'react';
import styles from './Toast.module.css';

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
      className={`${styles['toast']} ${styles['toastCustom']} ${visible ? styles['show'] : styles['hide']} bg-${mode}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-body">{message}</div>
    </div>
  );
};

export default Toast;
