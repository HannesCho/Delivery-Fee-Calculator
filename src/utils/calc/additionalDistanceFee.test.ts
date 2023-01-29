import additionalDistanceFee from "./additionalDistanceFee";

test("additional fee of 1499m is 1 euro.", () => {
  expect(additionalDistanceFee(1499)).toStrictEqual({ value: 1 });
});

test("additional fee of 1500m is 1 euro.", () => {
  expect(additionalDistanceFee(1500)).toStrictEqual({ value: 1 });
});

test("additional fee of 1501m is 2 euro.", () => {
  expect(additionalDistanceFee(1501)).toStrictEqual({ value: 2 });
});
