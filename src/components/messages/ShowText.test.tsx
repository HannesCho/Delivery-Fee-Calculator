import { render, screen } from "@testing-library/react";
import ShowText from "./ShowText";

test("ShowText should be rendered with corresponding text when cartValue is more than 100.", () => {
  render(<ShowText cartValue="120" />);
  const textEl = screen.getByText(/Cart Value/);
  expect(textEl).toBeInTheDocument();
});

test("ShowText should not be rendered with corresponding text when cartValue is less than 100.", () => {
  render(<ShowText cartValue="90" />);
  const textEl = screen.queryByText(/Cart Value/);
  expect(textEl).toBeNull();
});

test("ShowText should be rendered with corresponding text when totalFee is more than 15.", () => {
  render(<ShowText totalFee={30} />);
  const textEl = screen.getByText(/Total/);
  expect(textEl).toBeInTheDocument();
});

test("ShowText should not be rendered with corresponding text when totalFee is less than 15.", () => {
  render(<ShowText totalFee={10} />);
  const textEl = screen.queryByText(/Total/);
  expect(textEl).toBeNull();
});
