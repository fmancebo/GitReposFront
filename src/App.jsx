import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { AuthProvider } from "./contexts/auth";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { Theme } from "./styles/Theme";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Theme>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </Theme>
      </AuthProvider>
    </BrowserRouter>
  );
}
