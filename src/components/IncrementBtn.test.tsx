import { fireEvent, render, screen } from "@testing-library/react";
import IncrementBtn from "./IncrementBtn";

// mock function for setState
const mockUseState = jest.fn();

test("IncrementBtn should be rendered.", () => {
  render(<IncrementBtn value="0" setState={mockUseState} />);
  const btnEl = screen.getByRole("button");
  expect(btnEl).toBeInTheDocument();
});

test("setState should be called when btn is clicked.", () => {
  render(<IncrementBtn value="0" setState={mockUseState} />);
  const btnEl = screen.getByRole("button");
  expect(btnEl).toBeInTheDocument();
  fireEvent.click(btnEl);
  expect(mockUseState).toBeCalledTimes(1);
});
