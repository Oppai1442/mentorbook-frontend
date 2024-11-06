import React, { createContext, useState, ReactNode, useContext, useEffect, useCallback } from "react";
import { Auth } from "../components/Auth";
import { fetchUserFromToken, updateProfileService } from "../services";
import { User } from "../types/Model";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  setUser: (user: User | null) => void;
  logOut: () => void;
  renderAuth: () => JSX.Element | null;
  showAuthModal: (mode: "signIn" | "signUp") => void;
  updateProfile: (user: User) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<"signIn" | "signUp" | null>(null);
  const navigate = useNavigate();

  const isLoggedIn = !!user;

  const fetchUser = useCallback(async () => {
    const accountToken = localStorage.getItem("accountToken");
    if (accountToken) {
      try {
        const user = await fetchUserFromToken(accountToken);
        setUser(user);
      } catch (error: any) {
        if (error?.response?.status === 401) {
          localStorage.removeItem("accountToken");
        }
        console.error("Error fetching user:", error);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const logOut = useCallback(() => {
    localStorage.removeItem("accountToken");
    setUser(null);
  }, []);

  const showAuthModal = (mode: "signIn" | "signUp") => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  const renderAuth = () => showAuth ? <Auth mode={authMode} onClose={() => setShowAuth(false)} /> : null;

  const updateProfile = useCallback(async (updatedUser: User) => {
    try {
      const response = await updateProfileService(updatedUser);
      localStorage.setItem("accountToken", response.token);
      setUser(response.user);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, loading, setUser, logOut, renderAuth, showAuthModal, updateProfile }}>
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
