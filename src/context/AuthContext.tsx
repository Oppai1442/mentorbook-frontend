import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { Auth } from "../components/Auth";
import { fetchUserFromToken } from "../services";
import { User } from "../types/User";

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
        try {
          const user = await fetchUserFromToken(accountToken);
          if (user) {
            setUser(user);
          }
        } catch (error: any) {
          if (error.response) {
            const response = error.response;
    
            switch (response.status) {
              case 401:
                localStorage.removeItem('accountToken');
                break;
              default:
                console.error('An error occurred:', response.status);
            }
          } else {
            console.error('Network error or no response:', error);
          }
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
