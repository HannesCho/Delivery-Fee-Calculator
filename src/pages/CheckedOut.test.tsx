import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckedOut from "./CheckedOut";

it("Checkedout page should be rendered.", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckedOut />} />
      </Routes>
    </BrowserRouter>
  );
  const checkEl = screen.getByText(/check/i);
  expect(checkEl).toBeInTheDocument();
});

test("The link should be generated for calculator page.", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckedOut />} />
      </Routes>
    </BrowserRouter>
  );
  const linkEls = screen.getByRole("link");
  expect(linkEls).toHaveAttribute("href", "/calculator");
});

// limit!! test location.value should pass to this page. => End to End test.
// e2e.test.tsx
