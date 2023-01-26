import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Calculator from "./Calculator";

it("Home should be rendered", () => {
  render(<Calculator />, { wrapper: BrowserRouter });
  const calEl = screen.getByText(/title/i);
  expect(calEl).toBeInTheDocument();
});
