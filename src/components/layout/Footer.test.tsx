import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("Footer should be rendered.", () => {
  render(<Footer />);
  const nameEl = screen.getByText(/Hannes/);
  expect(nameEl).toBeInTheDocument();
});

test("Footer contains copyright.", () => {
  render(<Footer />);
  const copyrightEl = screen.getByText(/rights/i);
  expect(copyrightEl).toBeInTheDocument();
});
