import feeCalculator from "./feeCalculator";

test("Delivery Fee is not more than 15 euro", () => {
  expect(
    feeCalculator(10, 100000, 30, new Date("Thu Jan 26 2023 11:37:36 UTC"))
  ).toBe(15);
});

test("if Cart Value is more than 100 Delivery Fee is 0 euro", () => {
  expect(
    feeCalculator(100, 100000, 30, new Date("Thu Jan 26 2023 11:37:36 UTC"))
  ).toBe(0);
});

test("Only Surcharge", () => {
  // Surcharge is apply, the rest are 0.
  expect(feeCalculator(6, 0, 0, new Date("Thu Jan 26 2023 11:37:36 UTC"))).toBe(
    4
  );
});

test("Only Basic Distance Fee", () => {
  expect(
    // Basic Distance Fee is apply, the rest are 0.
    feeCalculator(10, 500, 1, new Date("Thu Jan 26 2023 11:37:36 UTC"))
  ).toBe(2);
});

test("Additional Distance Fee", () => {
  expect(
    // Basic Distance Fee and additional Distance Fee are apply, the rest are 0.
    feeCalculator(10, 1500, 1, new Date("Thu Jan 26 2023 11:37:36 UTC"))
  ).toBe(3);
});

test("Only additional items Fee", () => {
  expect(
    // additional items Fee is apply, the rest are 0.
    feeCalculator(10, 0, 5, new Date("Thu Jan 26 2023 11:37:36 UTC"))
  ).toBe(0.5);
});

test("Extra Bulk items Fee", () => {
  expect(
    // additional items Fee and Extra Bulk are apply, the rest are 0.
    feeCalculator(10, 0, 13, new Date("Thu Jan 26 2023 11:37:36 UTC"))
  ).toBe(5.7);
});

test("if date is friday and time is between 3 and 7 PM, friday rush will apply", () => {
  // 3(original fee) * 1.2(friday rush rate) euro
  expect(
    feeCalculator(10, 1500, 1, new Date("Fri Jan 27 2023 15:37:36 UTC"))
  ).toBe(3.6);
});
