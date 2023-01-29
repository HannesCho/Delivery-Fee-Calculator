import basicDistanceFee from "./basicDistanceFee";

test("basic distance fee is 0 euro, if there is no distance.", () => {
  expect(basicDistanceFee(0)).toStrictEqual({ value: 0 });
});

test("basic distance fee is 2 euro, no matter of the distance.", () => {
  expect(basicDistanceFee(500)).toStrictEqual({ value: 2 });
  expect(basicDistanceFee(1000)).toStrictEqual({ value: 2 });
  expect(basicDistanceFee(1500)).toStrictEqual({ value: 2 });
});
