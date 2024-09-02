import React, { useState, useEffect, createContext, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const storedUser = localStorage.getItem("user");
      const token = localStorage.getItem("token");

      if (storedUser && token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;

        try {
          const userId = JSON.parse(storedUser).id; // Certifique-se de que isso é válido
          await api.get(`/user/${userId}/repositories`);
          setUser(JSON.parse(storedUser));
        } catch (error) {
          // console.error("Token Check Error:", error);
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          navigate("/login");
        }
      }

      setLoading(false);
    };

    checkToken();
  }, [navigate]);

  const login = useCallback(
    async (email, password) => {
      try {
        const response = await createSession(email, password);
        // console.log("Login Response:", response);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        setUser(response.data.user);
        navigate("/");
      } catch (error) {
        // console.error("Login Error:", error);
      }
    },
    [navigate],
  );

  const logout = useCallback(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/login");
  }, [navigate]);

  const value = useMemo(
    () => ({
      authenticated: !!user,
      user,
      loading,
      login,
      logout,
    }),
    [user, loading, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
