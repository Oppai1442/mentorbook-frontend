import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { postData } from "../services/apiService";
import { LoginResponse, User } from "../types";

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const isLoggedIn = !!user;

  useEffect(() => {
    const fetchUser = async () => {
      const accountToken = localStorage.getItem('accountToken');
      
      if (accountToken) {
        const response = await postData<LoginResponse>("/user/login-token", {token: accountToken});
        const { token, user } = response.data;

        localStorage.setItem('accountToken', token);
        console.log(response);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, setUser }}>
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

export {useAuth}