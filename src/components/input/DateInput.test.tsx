import { fireEvent, render, screen } from "@testing-library/react";
import DateInput from "./DateInput";

// mock function for onChange
const mockOnChange = jest.fn();

test("DateInput should be rendered.", () => {
  render(<DateInput name="input" value="2023-01-27" onChange={mockOnChange} />);
  const inputEl = screen.getByDisplayValue("2023-01-27");
  expect(inputEl).toBeInTheDocument();
});

test("DateInput contains attribute accoding to properties which are passed.", () => {
  render(
    <DateInput
      name="input"
      value="2023-01-27"
      onChange={mockOnChange}
      min="2023-01-27"
      max="2023-03-31"
    />
  );
  const inputEl = screen.getByDisplayValue("2023-01-27");
  expect(inputEl).toHaveAttribute("id", "input");
  expect(inputEl).toHaveAttribute("name", "input");
  expect(inputEl).toHaveAttribute("min", "2023-01-27");
  expect(inputEl).toHaveAttribute("max", "2023-03-31");
});

test("onChnge handler should be called when value is changed.", () => {
  render(
    <DateInput
      name="input"
      value="2023-01-27"
      onChange={mockOnChange}
      min="2023-01-27"
      max="2023-03-31"
    />
  );
  const inputEl = screen.getByDisplayValue("2023-01-27");
  fireEvent.input(inputEl, { target: { value: "2023-01-29" } });
  expect(mockOnChange).toBeCalledTimes(1);
});
