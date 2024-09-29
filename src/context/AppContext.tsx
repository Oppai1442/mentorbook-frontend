import React, { createContext, useContext, useState, ReactNode } from 'react';

// Định nghĩa interface cho context
interface AppContextProps {
  user: string | null;
  setUser: (user: string | null) => void;
  isLoggedIn: boolean;
  toggleLogin: () => void;
}

// Giá trị mặc định cho context
const defaultValue: AppContextProps = {
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  toggleLogin: () => {},
};

// Tạo context
const AppContext = createContext<AppContextProps>(defaultValue);

// Hook để sử dụng context
export const useAppContext = () => {
  return useContext(AppContext);
};

// Provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ user, setUser, isLoggedIn, toggleLogin }}>
      {children}
    </AppContext.Provider>
  );
};
