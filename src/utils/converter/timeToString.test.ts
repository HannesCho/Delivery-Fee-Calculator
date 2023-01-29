import timeToString from "./timeToString";

test("timeToString shold be defined.", () => {
  const mockTime = new Date();
  expect(timeToString(mockTime)).toBeDefined();
});

test("timeToString shold return UTC time as hh:mm", () => {
  const mockTime = new Date("Sunday, 26 March 2023, 02:00:00 UTC");
  expect(timeToString(mockTime)).toEqual("02:00");
});
