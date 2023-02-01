import { fireEvent, render, screen } from "@testing-library/react";
import DecrementBtn from "./DecrementBtn";

// mock function for setState
const mockUseState = jest.fn();

test("DecrementBtn should be rendered.", () => {
  render(<DecrementBtn value="0" setState={mockUseState} />);
  const btnEl = screen.getByRole("button");
  expect(btnEl).toBeInTheDocument();
});

test("If the value is 0, called setState to 0.", () => {
  render(<DecrementBtn value="0" setState={mockUseState} />);
  const btnEl = screen.getByRole("button");
  expect(btnEl).toBeInTheDocument();
  fireEvent.click(btnEl);
  expect(mockUseState).toBeCalledWith("0");
});

test("If the value is 10, called setState to 9.", () => {
  render(<DecrementBtn value="10" setState={mockUseState} />);
  const btnEl = screen.getByRole("button");
  expect(btnEl).toBeInTheDocument();
  fireEvent.click(btnEl);
  expect(mockUseState).toBeCalledWith("9");
});

test("If the value is NaN, called setState to 0.", () => {
  render(<DecrementBtn value="NaN" setState={mockUseState} />);
  const btnEl = screen.getByRole("button");
  expect(btnEl).toBeInTheDocument();
  fireEvent.click(btnEl);
  expect(mockUseState).toBeCalledWith("0");
});
