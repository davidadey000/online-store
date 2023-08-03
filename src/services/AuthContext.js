import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../utils/config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState(""); // Add email state

  const checkUserSignIn = async () => {
    const token = localStorage.getItem("x-auth-token");

    try {
      if (token) {
        const headers = { "x-auth-token": token };
        const response = await axios.get(`${apiUrl}users/me`, { headers });

        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    } catch (error) {
      setIsSignedIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("x-auth-token");
    setIsSignedIn(false);
  };

  const handleSignIn = (token) => {
    localStorage.setItem("x-auth-token", token);
    setIsSignedIn(true);
  };

  useEffect(() => {
    checkUserSignIn();
  }, []);

  const setEmailValue = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <AuthContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        email,
        setEmail: setEmailValue,
        handleLogout,
        handleSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

// Custom hook to access email state and setter
export const useEmail = () => {
  const { email, setEmail } = useContext(AuthContext);
  return { email, setEmail };
};
