import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
// -> for Font Awesome element
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
// <-

test("Navbar should be rendered.", () => {
  render(<Navbar />, { wrapper: BrowserRouter });
  const navEl = screen.getByText(/calculator/i);
  expect(navEl).toBeInTheDocument();
});

test("Link should be generated for home and calculator page.", () => {
  render(<Navbar />, { wrapper: BrowserRouter });
  const linkEls = screen.getAllByRole("link");
  expect(linkEls[0]).toHaveAttribute("href", "/");
  expect(linkEls[1]).toHaveAttribute("href", "/calculator");
});
