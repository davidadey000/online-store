// AuthContext.js

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../utils/config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to track if the user is signed in
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Function to check if the user is signed in
  const checkUserSignIn = async () => {
    const token = localStorage.getItem("x-auth-token");

    try {
      if (token) {
        // Include the token in the request headers
        const headers = { "x-auth-token": token };
        const response = await axios.get(`${apiUrl}users/me`, { headers });

        setIsSignedIn(true); // If the request succeeds, set isSignedIn to true
      } else {
        setIsSignedIn(false); // If there is no token, user is not signed in
      }
    } catch (error) {
      setIsSignedIn(false); // If the request fails (user not signed in or invalid token), set isSignedIn to false
    }
  };

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem("x-auth-token");
    setIsSignedIn(false); // Set isSignedIn to false after logout
  };

  // Function to handle successful sign-in
  const handleSignIn = (token) => {
    localStorage.setItem("x-auth-token", token);
    setIsSignedIn(true); // Set isSignedIn to true after successful sign-in
  };

  // Use useEffect to call checkUserSignIn when the component mounts
  useEffect(() => {
    checkUserSignIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isSignedIn, setIsSignedIn, handleLogout, handleSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
