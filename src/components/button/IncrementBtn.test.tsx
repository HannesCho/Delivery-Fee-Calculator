import { fireEvent, render, screen } from "@testing-library/react";
import IncrementBtn from "./IncrementBtn";

// mock function for setState
const mockUseState = jest.fn();
const mockSetError = jest.fn();
const mockSetErrorText = jest.fn();

test("IncrementBtn should be rendered.", () => {
  render(
    <IncrementBtn
      value="0"
      setState={mockUseState}
      error={false}
      setError={mockSetError}
      setShowErrorText={mockSetErrorText}
    />
  );
  const btnEl = screen.getByRole("button");
  expect(btnEl).toBeInTheDocument();
});

test("If the value is 0, called setState to 1.", () => {
  render(
    <IncrementBtn
      value="0"
      setState={mockUseState}
      error={false}
      setError={mockSetError}
      setShowErrorText={mockSetErrorText}
    />
  );
  const btnEl = screen.getByRole("button");
  fireEvent.click(btnEl);
  expect(mockUseState).toBeCalledWith("1");
});

test("If the value is bigger than max, setState to max.", () => {
  render(
    <IncrementBtn
      value="100"
      setState={mockUseState}
      max="90"
      error={false}
      setError={mockSetError}
      setShowErrorText={mockSetErrorText}
    />
  );
  const btnEl = screen.getByRole("button");
  fireEvent.click(btnEl);
  expect(mockUseState).toBeCalledWith("90");
});

test("If the value is smaller than max, setState to value + 1.", () => {
  render(
    <IncrementBtn
      value="100"
      setState={mockUseState}
      max="120"
      error={false}
      setError={mockSetError}
      setShowErrorText={mockSetErrorText}
    />
  );
  const btnEl = screen.getByRole("button");
  fireEvent.click(btnEl);
  expect(mockUseState).toBeCalledWith("101");
});

test("If the value is empty, called setState to 0.", () => {
  render(
    <IncrementBtn
      value=""
      setState={mockUseState}
      error={false}
      setError={mockSetError}
      setShowErrorText={mockSetErrorText}
    />
  );
  const btnEl = screen.getByRole("button");
  fireEvent.click(btnEl);
  expect(mockUseState).toBeCalledWith("0");
});

test("If the value is 10, called setState to 11.", () => {
  render(
    <IncrementBtn
      value="10"
      setState={mockUseState}
      error={false}
      setError={mockSetError}
      setShowErrorText={mockSetErrorText}
    />
  );
  const btnEl = screen.getByRole("button");
  fireEvent.click(btnEl);
  expect(mockUseState).toBeCalledWith("11");
});

test("If the value is NaN, called setState to 0.", () => {
  render(
    <IncrementBtn
      value="NaN"
      setState={mockUseState}
      error={false}
      setError={mockSetError}
      setShowErrorText={mockSetErrorText}
    />
  );
  const btnEl = screen.getByRole("button");
  fireEvent.click(btnEl);
  expect(mockUseState).toBeCalledWith("0");
});

test("Should reset the error msg, when the btn is clicked.", () => {
  render(
    <IncrementBtn
      value="NaN"
      setState={mockUseState}
      error={true}
      setError={mockSetError}
      setShowErrorText={mockSetErrorText}
    />
  );
  const btnEl = screen.getByRole("button");
  expect(btnEl).toBeInTheDocument();
  fireEvent.click(btnEl);
  expect(mockSetError).toBeCalledWith(false);
  expect(mockSetErrorText).toBeCalledWith(false);
});
