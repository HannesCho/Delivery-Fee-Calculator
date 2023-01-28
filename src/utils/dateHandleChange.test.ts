import dateHandleChange from "./dateHandleChange";

// test void function
test("dateHandleChange shold be able to call setState once.", () => {
  const mockSetState = jest.fn();
  const mockEvent = {
    target: { value: "2023-01-28", min: "2023-01-28", max: "2023-03-31" },
  } as React.ChangeEvent<HTMLInputElement>;
  dateHandleChange({ event: mockEvent, setState: mockSetState });
  expect(mockSetState).toHaveBeenCalledTimes(1);
});

test("dateHandleChange shold be able to call setState twice when value is out of range.", () => {
  const mockSetState = jest.fn();
  const mockEvent = {
    target: { value: "2023-01-26", min: "2023-01-28", max: "2023-03-31" },
  } as React.ChangeEvent<HTMLInputElement>;
  dateHandleChange({ event: mockEvent, setState: mockSetState });
  expect(mockSetState).toHaveBeenCalledTimes(2);
});
