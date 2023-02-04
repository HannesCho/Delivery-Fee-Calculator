import { fireEvent, render, screen } from "@testing-library/react";
import DecrementBtn from "./DecrementBtn";

// -> for Font Awesome element.
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
// <-

// mock function for setState
const mockUseState = jest.fn();
const mockSetError = jest.fn();
const mockSetErrorText = jest.fn();

test("DecrementBtn should be rendered.", () => {
  render(
    <DecrementBtn
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

test("If the value is 0, called setState to 0.", () => {
  render(
    <DecrementBtn
      value="0"
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

test("If the value is 10, called setState to 9.", () => {
  render(
    <DecrementBtn
      value="10"
      setState={mockUseState}
      error={false}
      setError={mockSetError}
      setShowErrorText={mockSetErrorText}
    />
  );
  const btnEl = screen.getByRole("button");
  fireEvent.click(btnEl);
  expect(mockUseState).toBeCalledWith("9");
});

test("If the value is NaN, called setState to 0.", () => {
  render(
    <DecrementBtn
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
    <DecrementBtn
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
