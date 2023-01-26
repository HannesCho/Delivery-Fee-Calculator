import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

test("Navbar should be rendered", () => {
  render(<Navbar />, { wrapper: BrowserRouter });
  const navEl = screen.getByText(/home/i);
  expect(navEl).toBeInTheDocument();
});

// test the link
