import { fireEvent, render, screen } from "@testing-library/react";
import NumberInput from "./NumberInput";

//name, value, onChange,min,max,innerRef,error,onBlur,

const mockOnChange = jest.fn();
const mockOnBlur = jest.fn();
const mockRef: { current: HTMLInputElement | null } = { current: null };

test("NumberInput should be rendered.", () => {
  render(
    <NumberInput
      name="test"
      value="1"
      onChange={mockOnChange}
      min={0}
      max={50}
      innerRef={mockRef}
      error={false}
      onBlur={mockOnBlur}
    />
  );
  const inputEl = screen.getByRole("textbox");
  expect(inputEl).toBeInTheDocument();
});

test("NumberInput contains attribute accoding to properties which are passed.", () => {
  render(
    <NumberInput
      name="test"
      value="1"
      onChange={mockOnChange}
      min={0}
      max={50}
      innerRef={mockRef}
      error={false}
      onBlur={mockOnBlur}
    />
  );
  const inputEl = screen.getByRole("textbox");
  expect(inputEl).toHaveAttribute("id", "test");
  expect(inputEl).toHaveAttribute("name", "test");
  expect(inputEl).toHaveAttribute("min", "0");
  expect(inputEl).toHaveAttribute("max", "50");
});

test("Placeholder should be no string when input field is focused.", () => {
  render(
    <NumberInput
      name="test"
      value="1"
      onChange={mockOnChange}
      min={0}
      max={50}
      innerRef={mockRef}
      error={false}
      onBlur={mockOnBlur}
    />
  );
  const inputEl = screen.getByRole("textbox");
  inputEl.focus();
  const focusEl = screen.getByPlaceholderText("");
  expect(focusEl).toBeInTheDocument();
});

test("onChnge handler should be called when value is changed.", () => {
  render(
    <NumberInput
      name="test"
      value="1"
      onChange={mockOnChange}
      min={0}
      max={50}
      innerRef={mockRef}
      error={false}
      onBlur={mockOnBlur}
    />
  );
  const inputEl = screen.getByRole("textbox");
  fireEvent.input(inputEl, { target: { value: "2" } });
  expect(mockOnChange).toBeCalledTimes(1);
});

test("onBlur handler should be called when input field is blured.", () => {
  render(
    <NumberInput
      name="test"
      value="1"
      onChange={mockOnChange}
      min={0}
      max={50}
      innerRef={mockRef}
      error={false}
      onBlur={mockOnBlur}
    />
  );
  const inputEl = screen.getByRole("textbox");
  inputEl.focus();
  inputEl.blur();
  expect(mockOnBlur).toBeCalledTimes(1);
});
