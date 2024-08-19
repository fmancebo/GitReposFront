import React, { useState, useEffect, createContext, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../services/api";

// Criação do contexto
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false);
  }, []);

  const login = useCallback(
    async (email, password) => {
      const response = await createSession(email, password); // Envie a senha

      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      setUser(response.data.user);
      navigate("/");
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

  // Usando useMemo para memoizar o valor do contexto
  const value = useMemo(
    () => ({
      authenticated: !!user, //  !! converte para boolean
      user,
      loading,
      login,
      logout,
    }),
    [user, loading, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Validação de props com PropTypes
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
