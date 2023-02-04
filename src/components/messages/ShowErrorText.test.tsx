import { render, screen } from "@testing-library/react";
import ShowErrorText from "./ShowErrorText";

test("ShowErrorText should be rendered when showErrorText is true.", () => {
  render(<ShowErrorText showErrorText={true} />);
  const textEl = screen.getByText(/number/);
  expect(textEl).toBeInTheDocument();
});

test("ShowErrorText should not be rendered when showErrorText is false.", () => {
  render(<ShowErrorText showErrorText={false} />);
  const textEl = screen.queryByText(/number/); // can be null, don't use getBy
  expect(textEl).toBeNull();
});

test("ShowErrorText for float number should be rendered when showErrorText is true and float is true.", () => {
  render(<ShowErrorText showErrorText={true} float={true} />);
  const textEl = screen.getByText(/2 decimal points/);
  expect(textEl).toBeInTheDocument();
});

test("ShowErrorText for integer number should be rendered when showErrorText is true and float is flase.", () => {
  render(<ShowErrorText showErrorText={true} />);
  const textEl = screen.getByText(/without decimal points/);
  expect(textEl).toBeInTheDocument();
});
