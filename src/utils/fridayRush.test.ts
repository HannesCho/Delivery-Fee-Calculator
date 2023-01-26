import fridayRush from "./fridayRush";

test("if date is friday and time is between 3 and 7 PM, friday rush will apply", () => {
  expect(fridayRush(new Date("Fri Jan 27 2023 15:37:36 UTC"))).toStrictEqual({
    value: 1.2,
  });
});

test("if date is not friday and time is not between 3 and 7 PM, friday rush will not apply", () => {
  expect(fridayRush(new Date("Thu Jan 26 2023 11:37:36 UTC"))).toStrictEqual({
    value: 1,
  });
});
