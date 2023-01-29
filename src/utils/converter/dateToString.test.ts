import dateToString from "./dateToString";

test("dateToString shold be defined.", () => {
  const mockDate = new Date();
  expect(dateToString(mockDate)).toBeDefined();
});

test("dateToString shold return date as yyyy-mm-dd", () => {
  const mockDate = new Date("Sunday, 26 March 2023, 02:00:00");
  expect(dateToString(mockDate)).toEqual("2023-03-26");
});
