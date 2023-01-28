import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Calculator from "./Calculator";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

it("Home should be rendered", () => {
  render(<Calculator />, { wrapper: BrowserRouter });
  const calEl = screen.getByText(/calculator/i);
  expect(calEl).toBeInTheDocument();
});

// test the input and label here.
