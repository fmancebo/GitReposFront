import React from "react";
import { render, screen } from "@testing-library/react";
import MainPage from "./pages/MainPage";

test("renders the correct text", () => {
  render(<MainPage />);
  const textElement = screen.getByText(/Template React para API./i);
  expect(textElement).toBeInTheDocument();
});
