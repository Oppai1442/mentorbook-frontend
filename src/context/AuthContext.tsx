import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { postData } from "../services/apiService";
import { LoginResponse, User } from "../types";
import { Auth } from "../components/Auth";

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User | null) => void;
  logOut: () => void;
  renderAuth: () => JSX.Element | null;
  showAuthModal: (mode: "signIn" | "signUp") => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<"signIn" | "signUp" | null>(null);

  const isLoggedIn = !!user;

  useEffect(() => {
    const fetchUser = async () => {
      const accountToken = localStorage.getItem('accountToken');
      if (accountToken) {
        const response = await postData<LoginResponse>("/user/login-token", { token: accountToken });

        if (response.isSuccess && response.data) {
          const { token, user } = response.data;
          setUser(user);
          localStorage.setItem('accountToken', token);
        }
      }
    };

    fetchUser();
  }, []);

  const logOut = () => {
    localStorage.removeItem('accountToken');
    setUser(null);
  };

  const showAuthModal = (mode: "signIn" | "signUp") => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  const renderAuth = () => {
    if (!showAuth) return null;

    return <Auth mode={authMode} onClose={() => setShowAuth(false)} />;
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, setUser, logOut, renderAuth, showAuthModal }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { useAuth };
