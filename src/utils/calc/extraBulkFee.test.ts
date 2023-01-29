import extraBulkFee from "./extraBulkFee";

test("extraBulkFee should be defined.", () => {
  expect(extraBulkFee(1)).toBeDefined();
});

test("Extra bulk fee is 1.2 euro, if there are more than 12 items.", () => {
  expect(extraBulkFee(13)).toStrictEqual({ value: 1.2 });
});
