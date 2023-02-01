import handleChange from "./handleChange";

// test void function
test("handleChange shold be able to call setState with value when value is in range.", () => {
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
  expect(mockSetState).toHaveBeenCalledWith(mockEvent.target.value);
});

test("handleChange shold be able to call setState with max when value bigger than range.", () => {
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
  expect(mockSetState).toHaveBeenCalledWith("50");
});

test("handleChange shold be able to call setState with min when value smaller than range.", () => {
  const mockSetError = jest.fn();
  const mockSetState = jest.fn();
  const mockEvent = {
    target: {
      value: "4",
      min: "5",
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
  expect(mockSetState).toHaveBeenCalledWith("5");
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
