import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckedOut from "./CheckedOut";

it("Checkedout page should be rendered", () => {
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
