import additionalItems from "./additionalItems";

test("additionalItems should be defined.", () => {
  expect(additionalItems(4)).toBeDefined();
});

test("if there are less than 4 itmes additional fee is 0 euro.", () => {
  for (let i = 0; i < 5; i++) {
    expect(additionalItems(i)).toStrictEqual({ value: 0 });
  }
});

test("if there are 5 itmes additional fee is 0.5 euro.", () => {
  expect(additionalItems(5)).toStrictEqual({ value: 0.5 });
});
