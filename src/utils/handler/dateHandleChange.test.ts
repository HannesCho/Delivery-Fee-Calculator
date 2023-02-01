import dateToString from "../converter/dateToString";
import dateHandleChange from "./dateHandleChange";

// test void function
test("dateHandleChange shold be able to call setState with value.", () => {
  const mockSetState = jest.fn();
  const mockEvent = {
    target: { value: "2023-01-28", min: "2023-01-28", max: "2023-03-31" },
  } as React.ChangeEvent<HTMLInputElement>;
  dateHandleChange({ event: mockEvent, setState: mockSetState });
  expect(mockSetState).toHaveBeenCalledWith(mockEvent.target.value);
});

test("dateHandleChange shold be able to call setState with today when value is bigger than range.", () => {
  const mockSetState = jest.fn();
  const mockEvent = {
    target: { value: "2023-04-30", min: "2023-01-28", max: "2023-03-31" },
  } as React.ChangeEvent<HTMLInputElement>;
  dateHandleChange({ event: mockEvent, setState: mockSetState });
  expect(mockSetState).toHaveBeenCalledWith(dateToString(new Date()));
});

test("dateHandleChange shold be able to call setState with today when value is smaller than range.", () => {
  const mockSetState = jest.fn();
  const mockEvent = {
    target: { value: "2023-01-26", min: "2023-01-28", max: "2023-03-31" },
  } as React.ChangeEvent<HTMLInputElement>;
  dateHandleChange({ event: mockEvent, setState: mockSetState });
  expect(mockSetState).toHaveBeenCalledWith(dateToString(new Date()));
});
