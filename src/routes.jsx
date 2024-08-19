import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/auth";
import MainPage from "./pages/MainPage";
import CreatePage from "./pages/createUser";
import LoginPage from "./pages/loginPage";
import { Loading, Spinner } from "./pages/MainPage/styles";

function PrivateRoute({ children }) {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <Loading>
        <Spinner />
      </Loading>
    );
  }

  if (!authenticated) {
    return <Navigate to='/login' />;
  }

  return children;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<CreatePage />} />
      <Route
        path='/'
        element={
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

// Validação de Props para o PrivateRoute
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
