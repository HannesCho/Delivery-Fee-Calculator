import dateToString from "./dateToString";

test("dateToString shold be defined.", () => {
  const mockDate = new Date();
  expect(dateToString(mockDate)).toBeDefined();
});

test("0 shold be added to month and date, if their value is less than 9.", () => {
  const mockDate = new Date("Monday, 2 Jan 2023, 02:00:00 UTC");
  expect(dateToString(mockDate)).toEqual("2023-01-02");
});

test("0 shold not be added to month and date, if their value is more than 9.", () => {
  const mockDate = new Date("Monday, 30 Oct 2023, 02:00:00 UTC");
  expect(dateToString(mockDate)).toEqual("2023-10-30");
});

test("dateToString shold return date as yyyy-mm-dd.", () => {
  const mockDate = new Date("Sunday, 26 March 2023, 02:00:00 UTC");
  expect(dateToString(mockDate)).toEqual("2023-03-26");
});
