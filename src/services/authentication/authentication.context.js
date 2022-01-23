import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  loginRequest,
  registerRequest,
  signOutRequest,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const loadUser = async () => {
    try {
      const value = await AsyncStorage.getItem("@user");
      if (value !== null) {
        setUser(JSON.parse(value));
      }
    } catch (e) {
      console.log("error user", e);
    }
  };

  const saveUser = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@user", jsonValue);
    } catch (e) {
      console.log("error user", e);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onLogin = (email, password, rememberMe) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        if (rememberMe) {
          saveUser(u);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repeadedPassword) => {
    setIsLoading(true);
    if (password !== repeadedPassword) {
      setError("Error: Passwords do not match");
      setIsLoading(false);
      return;
    }
    registerRequest(email, password)
      .then((userCredential) => {
        setUser(userCredential);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  const onLogOut = () => {
    setIsLoading(true);
    signOutRequest()
      .then(() => {
        setUser(null);
        saveUser(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogOut,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
