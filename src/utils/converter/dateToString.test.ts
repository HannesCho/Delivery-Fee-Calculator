import dateToString from "./dateToString";

test("dateToString shold be defined.", () => {
  const mockDate = new Date();
  expect(dateToString(mockDate)).toBeDefined();
});

test("0 shold be added to month, if their value is less than 9.", () => {
  const mockDateMonth = new Date("Monday, 20 Jan 2023, 02:00:00 UTC");
  expect(dateToString(mockDateMonth)).toBe("2023-01-20");
});

test("0 shold be added to date, if their value is less than 9.", () => {
  const mockDateDay = new Date("Monday, 2 Oct 2023, 02:00:00 UTC");
  expect(dateToString(mockDateDay)).toBe("2023-10-02");
});

test("0 shold not be added to month and date, if their value is more than 9.", () => {
  const mockDate = new Date("Monday, 30 Oct 2023, 02:00:00 UTC");
  expect(dateToString(mockDate)).toBe("2023-10-30");
});

test("dateToString shold return date as yyyy-mm-dd.", () => {
  const mockDate = new Date("Sunday, 26 March 2023, 02:00:00 UTC");
  expect(dateToString(mockDate)).toBe("2023-03-26");
});
