import feeCalculator from "./feeCalculator";

test("Delivery Fee is not more than 15 euro", () => {
  expect(0).toStrictEqual(0);
  expect(
    feeCalculator({
      cartValue: "10",
      deliveryDistance: "10000",
      amountOfItem: "30",
      dateAndTime: "2023-01-26 16:00",
    })
  ).toStrictEqual({ value: 15 });
});

test("if Cart Value is more than 100 Delivery Fee is 0 euro.", () => {
  expect(
    feeCalculator({
      cartValue: "100",
      deliveryDistance: "10000",
      amountOfItem: "30",
      dateAndTime: "2023-01-26 16:00",
    })
  ).toStrictEqual({ value: 0 });
});

test("Only Surcharge", () => {
  // Surcharge is apply, the rest are 0.
  expect(
    feeCalculator({
      cartValue: "5",
      deliveryDistance: "0",
      amountOfItem: "0",
      dateAndTime: "2023-01-26 16:00",
    })
  ).toStrictEqual({ value: 5 });
});

test("Only Basic Distance Fee.", () => {
  expect(
    // Basic Distance Fee is apply, the rest are 0.
    feeCalculator({
      cartValue: "0",
      deliveryDistance: "1000",
      amountOfItem: "0",
      dateAndTime: "2023-01-26 16:00",
    })
  ).toStrictEqual({ value: 2 });
});

test("Additional Distance Fee.", () => {
  expect(
    // Basic Distance Fee and additional Distance Fee are apply, the rest are 0.
    feeCalculator({
      cartValue: "0",
      deliveryDistance: "1500",
      amountOfItem: "0",
      dateAndTime: "2023-01-26 16:00",
    })
  ).toStrictEqual({ value: 3 });
});

test("Only additional items Fee.", () => {
  expect(
    // additional items Fee is apply, the rest are 0.
    feeCalculator({
      cartValue: "0",
      deliveryDistance: "0",
      amountOfItem: "6",
      dateAndTime: "2023-01-26 16:00",
    })
  ).toStrictEqual({ value: 1 });
});

test("Extra Bulk items Fee.", () => {
  expect(
    // additional items Fee and Extra Bulk are apply, the rest are 0.
    feeCalculator({
      cartValue: "0",
      deliveryDistance: "0",
      amountOfItem: "12",
      dateAndTime: "2023-01-26 16:00",
    })
  ).toStrictEqual({ value: 5.2 });
});

test("if date is friday and time is between 3 and 7 PM, friday rush will apply.", () => {
  // 3(original fee) * 1.2(friday rush rate) euro
  expect(
    feeCalculator({
      cartValue: "9",
      deliveryDistance: "1000",
      amountOfItem: "6",
      dateAndTime: "2023-01-27 16:00",
    })
  ).toStrictEqual({ value: 4.8 });
});
