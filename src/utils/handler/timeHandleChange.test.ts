import timeHandleChange from "./timeHandleChange";

// test void function
test("timeHandleChange shold be able to call setState with value.", () => {
  const mockSetState = jest.fn();
  const mockEvent = {
    target: { value: "16:00", min: "10:00", max: "24:00" },
  } as React.ChangeEvent<HTMLInputElement>;
  timeHandleChange({ event: mockEvent, setState: mockSetState });
  expect(mockSetState).toHaveBeenCalledWith(mockEvent.target.value);
});

test("timeHandleChange shold be able to call setState with max when value bigger than range.", () => {
  const mockSetState = jest.fn();
  const mockEvent = {
    target: { value: "24:00", min: "10:00", max: "23:00" },
  } as React.ChangeEvent<HTMLInputElement>;
  timeHandleChange({ event: mockEvent, setState: mockSetState });
  expect(mockSetState).toHaveBeenCalledWith(mockEvent.target.max);
});

test("timeHandleChange shold be able to call setState with min when value smaller than range.", () => {
  const mockSetState = jest.fn();
  const mockEvent = {
    target: { value: "09:00", min: "10:00", max: "23:00" },
  } as React.ChangeEvent<HTMLInputElement>;
  timeHandleChange({ event: mockEvent, setState: mockSetState });
  expect(mockSetState).toHaveBeenCalledWith(mockEvent.target.min);
});
