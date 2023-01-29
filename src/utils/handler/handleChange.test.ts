import handleChange from "./handleChange";

// test void function
test("handleChange shold be able to call setState once.", () => {
  const mockSetError = jest.fn();
  const mockSetState = jest.fn();
  const mockEvent = {
    target: {
      value: "2",
      min: "0",
      max: "50",
      validity: { patternMismatch: false },
    },
  } as React.ChangeEvent<HTMLInputElement>;
  handleChange({
    event: mockEvent,
    setState: mockSetState,
    error: true,
    setError: mockSetError,
  });
  expect(mockSetState).toHaveBeenCalledTimes(1);
});

test("handleChange shold be able to call setState twice when value is out of range.", () => {
  const mockSetError = jest.fn();
  const mockSetState = jest.fn();
  const mockEvent = {
    target: {
      value: "51",
      min: "0",
      max: "50",
      validity: { patternMismatch: false },
    },
  } as React.ChangeEvent<HTMLInputElement>;
  handleChange({
    event: mockEvent,
    setState: mockSetState,
    error: true,
    setError: mockSetError,
  });
  expect(mockSetState).toHaveBeenCalledTimes(2);
});

test("handleChange shold be able to call serError once when error is true and pattern is matched.", () => {
  const mockSetError = jest.fn();
  const mockSetState = jest.fn();
  const mockEvent = {
    target: {
      value: "2",
      min: "0",
      max: "50",
      validity: { patternMismatch: false },
    },
  } as React.ChangeEvent<HTMLInputElement>;
  handleChange({
    event: mockEvent,
    setState: mockSetState,
    error: true,
    setError: mockSetError,
  });
  expect(mockSetState).toHaveBeenCalledTimes(1);
  expect(mockSetError).toHaveBeenCalledTimes(1);
});
