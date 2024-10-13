import React, { useState, forwardRef, useImperativeHandle, Ref } from 'react';
import Toast from './Toast';

type ToastItem = {
  id: number;
  mode: 'success' | 'danger' | 'warning' | 'info';
  message: string;
  timeout: number;
};

export type ToastManagerHandle = {
  addToast: (mode: ToastItem['mode'], message: string, timeout: number) => void;
};

const ToastManager = forwardRef((props, ref: Ref<ToastManagerHandle>) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useImperativeHandle(ref, () => ({
    addToast: (mode: ToastItem['mode'], message: string, timeout: number) => {
      const newToast: ToastItem = {
        id: Date.now(),
        mode,
        message,
        timeout,
      };
      setToasts((prevToasts) => [...prevToasts, newToast]);

      setTimeout(() => {
        // Xóa Toast sau khi đã ẩn dần
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== newToast.id));
      }, timeout);
    },
  }));

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
      {toasts.map((toast) => (
        <Toast key={toast.id} mode={toast.mode} message={toast.message} timeout={toast.timeout} />
      ))}
    </div>
  );
});

export default ToastManager;
