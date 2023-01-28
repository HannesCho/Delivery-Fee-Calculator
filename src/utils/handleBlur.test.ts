import handleBlur from "./handleBlur";

// test void function
test("handleBlur shold be able to call setShowErrorText once when error is true.", () => {
  const mockSetError = jest.fn();
  const mockSetShowErrorText = jest.fn();
  const mockEvent = {
    target: { validity: { patternMismatch: false } },
  } as React.ChangeEvent<HTMLInputElement>;
  handleBlur({
    event: mockEvent,
    error: true,
    setError: mockSetError,
    setShowErrorText: mockSetShowErrorText,
  });
  expect(mockSetShowErrorText).toHaveBeenCalledTimes(1);
});

test("handleBlur shold be able to call setShowErrorText and setError once when input is numbers", () => {
  const mockSetError = jest.fn();
  const mockSetShowErrorText = jest.fn();
  const mockEvent = {
    target: { validity: { patternMismatch: true } },
  } as React.ChangeEvent<HTMLInputElement>;
  handleBlur({
    event: mockEvent,
    error: false,
    setError: mockSetError,
    setShowErrorText: mockSetShowErrorText,
  });
  expect(mockSetShowErrorText).toHaveBeenCalledTimes(1);
  expect(mockSetError).toHaveBeenCalledTimes(1);
});
