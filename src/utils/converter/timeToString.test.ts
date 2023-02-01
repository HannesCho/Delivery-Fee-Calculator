import timeToString from "./timeToString";

test("timeToString shold be defined.", () => {
  const mockTime = new Date();
  expect(timeToString(mockTime)).toBeDefined();
});

test("0 shold be added to hour, if their value is less than 9.", () => {
  const mockTimeHour = new Date("Sunday, 26 March 2023, 02:10:00 UTC");
  expect(timeToString(mockTimeHour)).toEqual("02:10");
});

test("0 shold be added to minute, if their value is less than 9.", () => {
  const mockTimeMin = new Date("Sunday, 26 March 2023, 10:01:00 UTC");
  expect(timeToString(mockTimeMin)).toEqual("10:01");
});

test("0 shold not be added to hour and minute, if their value is more than 9.", () => {
  const mockTime = new Date("Sunday, 26 March 2023, 16:30:00 UTC");
  expect(timeToString(mockTime)).toEqual("16:30");
});

test("timeToString shold return UTC time as hh:mm.", () => {
  const mockTime = new Date("Sunday, 26 March 2023, 02:00:00 UTC");
  expect(timeToString(mockTime)).toEqual("02:00");
});
