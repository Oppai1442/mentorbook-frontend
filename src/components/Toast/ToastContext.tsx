import React, { createContext, useContext, useRef } from 'react';
import ToastManager, { ToastManagerHandle } from './ToastManager';

type Props = React.PropsWithChildren<{}>; // Định nghĩa kiểu cho props, bao gồm children

const ToastContext = createContext<ToastManagerHandle | null>(null);

export const ToastProvider: React.FC<Props> = ({ children }) => {
  const toastRef = useRef<ToastManagerHandle>(null);

  return (
    <ToastContext.Provider value={toastRef.current}>
      {children}
      <ToastManager ref={toastRef} />
    </ToastContext.Provider>
  );
};

// Hook tiện ích để sử dụng ToastContext
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
