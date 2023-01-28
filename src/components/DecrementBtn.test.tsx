import { fireEvent, render, screen } from "@testing-library/react";
import DecrementBtn from "./DecrementBtn";

// mock function for setState
const mockUseState = jest.fn();

test("DecrementBtn should be rendered.", () => {
  render(<DecrementBtn value="0" setState={mockUseState} />);
  const btnEl = screen.getByRole("button");
  expect(btnEl).toBeInTheDocument();
});

test("setState should be called when btn is clicked.", () => {
  render(<DecrementBtn value="0" setState={mockUseState} />);
  const btnEl = screen.getByRole("button");
  expect(btnEl).toBeInTheDocument();
  fireEvent.click(btnEl);
  expect(mockUseState).toBeCalledTimes(1);
});
