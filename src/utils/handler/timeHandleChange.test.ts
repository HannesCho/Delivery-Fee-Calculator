import timeHandleChange from "./timeHandleChange";

// test void function
test("timeHandleChange shold be able to call setState once.", () => {
  const mockSetState = jest.fn();
  const mockEvent = {
    target: { value: "16:00", min: "10:00", max: "24:00" },
  } as React.ChangeEvent<HTMLInputElement>;
  timeHandleChange({ event: mockEvent, setState: mockSetState });
  expect(mockSetState).toHaveBeenCalledTimes(1);
});

test("timeHandleChange shold be able to call setState twice when value is out of range.", () => {
  const mockSetState = jest.fn();
  const mockEvent = {
    target: { value: "09:00", min: "10:00", max: "24:00" },
  } as React.ChangeEvent<HTMLInputElement>;
  timeHandleChange({ event: mockEvent, setState: mockSetState });
  expect(mockSetState).toHaveBeenCalledTimes(2);
});
