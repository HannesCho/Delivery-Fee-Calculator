import basicSurcharge from "./basicSurcharge";

test("basicSurcharge should be defined.", () => {
  expect(basicSurcharge(8)).toBeDefined();
});

test("basic surcharge is difference between Cart Value and 10 euro.", () => {
  expect(basicSurcharge(8)).toStrictEqual({ value: 2 });
});

test("basic surcharge is 0 euro, if Cart Value is higher than 10 euro.", () => {
  expect(basicSurcharge(12)).toStrictEqual({ value: 0 });
});

test("basic surcharge is 0 euro, if Cart Value is 0 euro.", () => {
  expect(basicSurcharge(0)).toStrictEqual({ value: 0 });
});
