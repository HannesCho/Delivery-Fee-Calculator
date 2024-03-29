import fridayRush from "./fridayRush";

test("fridayRush should be defined.", () => {
  expect(fridayRush({ dateAndTime: "2023-01-27 16:00 UTC" })).toBeDefined();
});

test("if date is friday and time is between 3 and 7 PM(UTC), friday rush should apply.", () => {
  expect(fridayRush({ dateAndTime: "2023-01-27 16:00 UTC" })).toStrictEqual({
    value: 1.2,
  });
});

test("if date is not friday and time is not between 3 and 7 PM(UTC), friday rush should not apply.", () => {
  expect(fridayRush({ dateAndTime: "2023-01-26 16:00 UTC" })).toStrictEqual({
    value: 1,
  });
});
