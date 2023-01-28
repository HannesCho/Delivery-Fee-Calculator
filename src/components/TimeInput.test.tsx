import { fireEvent, render, screen } from "@testing-library/react";
import TimeInput from "./TimeInput";

// mock function for onChange
const mockOnChange = jest.fn();

test("TimeInput should be rendered.", () => {
  render(<TimeInput name="input" value="20:30" onChange={mockOnChange} />);
  const inputEl = screen.getByDisplayValue("20:30");
  expect(inputEl).toBeInTheDocument();
});

test("TimeInput contains attribute accoding to properties which are passed.", () => {
  render(
    <TimeInput
      name="input"
      value="20:30"
      onChange={mockOnChange}
      min="00:00"
      max="24:00"
    />
  );
  const inputEl = screen.getByDisplayValue("20:30");
  expect(inputEl).toHaveAttribute("id", "input");
  expect(inputEl).toHaveAttribute("name", "input");
  expect(inputEl).toHaveAttribute("min", "00:00");
  expect(inputEl).toHaveAttribute("max", "24:00");
});

test("onChnge handler should be called when value is changed.", () => {
  render(
    <TimeInput
      name="input"
      value="20:30"
      onChange={mockOnChange}
      min="00:00"
      max="24:00"
    />
  );
  const inputEl = screen.getByDisplayValue("20:30");
  fireEvent.input(inputEl, { target: { value: "23:30" } });
  expect(mockOnChange).toBeCalledTimes(1);
});
