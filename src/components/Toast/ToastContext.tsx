import React, { createContext, useContext, useRef, useEffect, useState } from 'react';
import ToastManager, { ToastManagerHandle } from './ToastManager';

type Props = React.PropsWithChildren<{}>;

const ToastContext = createContext<ToastManagerHandle | null>(null);

export const ToastProvider: React.FC<Props> = ({ children }) => {
  const toastRef = useRef<ToastManagerHandle>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (toastRef.current) {
      setInitialized(true); // Chỉ khi ToastManager đã khởi tạo
    }
  }, []);

  return (
    <ToastContext.Provider value={toastRef.current}>
      {children}
      <ToastManager ref={toastRef} />
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export {useToast}