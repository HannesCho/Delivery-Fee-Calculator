import extraBulkFee from "./extraBulkFee";

test("Extra bulk fee is 1.2 euro, if there are more than 12 items", () => {
  expect(extraBulkFee(12)).toStrictEqual({ value: 1.2 });
});
