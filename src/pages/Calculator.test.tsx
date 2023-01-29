import { fireEvent, render, screen, within } from "@testing-library/react";
import { BrowserRouter, Router, RouterProps } from "react-router-dom";
import Calculator from "./Calculator";
// -> for Font Awesome element
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import dateToString from "../utils/converter/dateToString";
import timeToString from "../utils/converter/timeToString";
import basicSurcharge from "../utils/calc/basicSurcharge";
import basicDistanceFee from "../utils/calc/basicDistanceFee";
import additionalDistanceFee from "../utils/calc/additionalDistanceFee";
import additionalItems from "../utils/calc/additionalItems";
import extraBulkFee from "../utils/calc/extraBulkFee";
import fridayRush from "../utils/calc/fridayRush";
import feeCalculator from "../utils/calc/feeCalculator";

library.add(fas);
// <-

// -> All components render test.
it("Calculator should be rendered.", () => {
  render(<Calculator />, { wrapper: BrowserRouter });
  const calEl = screen.getByText("Delivery Fee Calculator");
  expect(calEl).toBeInTheDocument();
});

//Cart Value Delivery Distance Amount of Item Date Time
it("All NumberInputs should be rendered.", () => {
  const listEl = ["Cart Value", "Delivery Distance", "Amount of Item"];
  render(<Calculator />, { wrapper: BrowserRouter });
  for (const el of listEl) {
    // test labels are rendered.
    const labelEl = screen.getByLabelText(el);
    expect(labelEl).toBeInTheDocument();
    // test inputs are rendered.
    const inputEl = screen.getByRole("textbox", { name: el });
    expect(inputEl).toBeInTheDocument();
  }
});

it("DateInput and TimeInput should be rendered.", () => {
  const dateValue = dateToString(new Date());
  const timeValue = timeToString(new Date());

  render(<Calculator />, { wrapper: BrowserRouter });
  // Date label is rendered.
  const labelEl = screen.getByLabelText("Date");
  expect(labelEl).toBeInTheDocument();
  // Date input is rendered.
  const dateEl = screen.getByDisplayValue(dateValue);
  expect(dateEl).toBeInTheDocument();
  // Time input is rendered.
  const timeEl = screen.getByDisplayValue(timeValue);
  expect(timeEl).toBeInTheDocument();
});

it("Texts should be rendered.", () => {
  const textList = [
    "Delivery Fee Calculator",
    "Fee Details",
    "Basic Surcharge",
    "Basic Distance Fee",
    "Additional Distance Fee",
    "Additional Items",
    "Extra Bulk Fee",
    "Friday Rush",
    "Total",
  ];
  render(<Calculator />, { wrapper: BrowserRouter });
  for (const el of textList) {
    const textEl = screen.getByText(el);
    expect(textEl).toBeInTheDocument();
  }
});

it("increment and decrement btns should be rendered 3 times.", () => {
  render(<Calculator />, { wrapper: BrowserRouter });
  const increBtnEl = screen.getAllByRole("button", { name: "+" });
  expect(increBtnEl.length).toEqual(3);
  const decreBtnEl = screen.getAllByRole("button", { name: "-" });
  expect(decreBtnEl.length).toEqual(3);
});

it("Check out form and btn should be rendered.", () => {
  render(<Calculator />, { wrapper: BrowserRouter });
  const checkBtnEl = screen.getByRole("button", { name: "Check Out →" });
  expect(checkBtnEl).toBeInTheDocument();
});

it("Patial and Toatal fee values should be rendered 7 times.", () => {
  render(<Calculator />, { wrapper: BrowserRouter });
  const valueEl = screen.getAllByText(/€/);
  expect(valueEl.length).toEqual(7);
});
// <-

// -> input value onChange test
test("Input value should be chagned when user input different value.", () => {
  const listEl = ["Cart Value", "Delivery Distance", "Amount of Item"];
  render(<Calculator />, { wrapper: BrowserRouter });
  for (const el of listEl) {
    const inputEl = screen.getByRole("textbox", { name: el });
    fireEvent.input(inputEl, { target: { value: "2" } });
    expect((inputEl as HTMLInputElement).value).toBe("2");
  }
});

test("Date and Time should be chagned when user input different value.", () => {
  const dateValue = dateToString(new Date());
  const timeValue = timeToString(new Date());

  render(<Calculator />, { wrapper: BrowserRouter });
  // Date should be changed.
  const dateEl = screen.getByDisplayValue(dateValue);
  fireEvent.input(dateEl, { target: { value: "2023-01-31" } });
  expect((dateEl as HTMLInputElement).value).toBe("2023-01-31");
  // Time should be changed.
  const timeEl = screen.getByDisplayValue(timeValue);
  fireEvent.input(timeEl, { target: { value: "16:30" } });
  expect((timeEl as HTMLInputElement).value).toBe("16:30");
});
// <-

// -> input value validation test
test("Error message should be displayed when a user enters text to number inputs.", async () => {
  const listEl = ["Cart Value", "Delivery Distance", "Amount of Item"];
  render(<Calculator />, { wrapper: BrowserRouter });
  for (const el of listEl) {
    const inputEl = screen.getByRole("textbox", { name: el });
    fireEvent.input(inputEl, { target: { value: "some text" } });
    fireEvent.blur(inputEl);
  }
  const errorMsg = await screen.findAllByText(/please/i);
  expect(errorMsg.length).toEqual(3);
});

test("Error message should be removed after the correction.", async () => {
  const listEl = ["Cart Value", "Delivery Distance", "Amount of Item"];
  render(<Calculator />, { wrapper: BrowserRouter });
  for (const el of listEl) {
    const inputEl = screen.getByRole("textbox", { name: el });
    fireEvent.input(inputEl, { target: { value: "some text" } });
    fireEvent.blur(inputEl);
    const errorMsg = await screen.findByText(/please/i);
    expect(errorMsg).toBeInTheDocument();
    fireEvent.input(inputEl, { target: { value: "10" } });
    fireEvent.blur(inputEl);
    const noErrorMsg = screen.queryByText(/please/i);
    expect(noErrorMsg).not.toBeInTheDocument();
  }
});
// <-

// -> right clac result test.
test("All the partial fees should be displayed, if it is applied.", () => {
  const listObjEl = [
    {
      name: "Cart Value",
      value: "5",
      calc: basicSurcharge,
      testName: "basicSurcharge",
    },
    {
      name: "Delivery Distance",
      value: "1000",
      calc: basicDistanceFee,
      testName: "basicDistanceFee",
    },
    {
      name: "Delivery Distance",
      value: "1500",
      calc: additionalDistanceFee,
      testName: "additionalDistanceFee",
    },
    {
      name: "Amount of Item",
      value: "6",
      calc: additionalItems,
      testName: "additionalItems",
    },
    {
      name: "Amount of Item",
      value: "12",
      calc: extraBulkFee,
      testName: "extraBulkFee",
    },
  ];
  render(<Calculator />, { wrapper: BrowserRouter });
  for (const el of listObjEl) {
    const inputEl = screen.getByRole("textbox", { name: el.name });
    fireEvent.input(inputEl, { target: { value: el.value } });
    const testVal = el.calc(Number(el.value)).value;
    // get the element by data-testid
    const testIdEl = screen.getByTestId(el.testName);
    const testEl = within(testIdEl).getByText(`€ ${testVal}`);
    expect(testEl).toBeInTheDocument();
    //reset the value for the next test.
    fireEvent.input(inputEl, { target: { value: "0" } });
  }
});

test("Friday Rush rate should be displayed, if it is applied.", () => {
  const dateValue = dateToString(new Date());
  const timeValue = timeToString(new Date());

  render(<Calculator />, { wrapper: BrowserRouter });
  const dateEl = screen.getByDisplayValue(dateValue);
  const timeEl = screen.getByDisplayValue(timeValue);
  // not applied date and time
  fireEvent.input(dateEl, { target: { value: "2023-03-02" } });
  fireEvent.input(timeEl, { target: { value: "16:30" } });
  // get the element by data-testid
  const fridayRushId = screen.getByTestId("fridayRushRate");
  const notFridayRushEL = within(fridayRushId).getByText("€ Not applied");
  expect(notFridayRushEL).toBeInTheDocument();
  // applied date and time
  fireEvent.input(dateEl, { target: { value: "2023-03-03" } });
  fireEvent.input(timeEl, { target: { value: "16:30" } });
  const fridayRushVal = fridayRush({
    dateAndTime: "2023-03-03 16:30 UTC",
  }).value;
  const fridayRushEL = within(fridayRushId).getByText(
    `€ *${fridayRushVal} Applied`
  );
  expect(fridayRushEL).toBeInTheDocument();
});
// <-
// -> total fee test.
test("Total fee should be displayed correctly.", () => {
  const dateValue = dateToString(new Date());
  const timeValue = timeToString(new Date());

  render(<Calculator />, { wrapper: BrowserRouter });
  const cartInputEl = screen.getByRole("textbox", { name: "Cart Value" });
  fireEvent.input(cartInputEl, { target: { value: "8" } });
  const disInputEl = screen.getByRole("textbox", { name: "Delivery Distance" });
  fireEvent.input(disInputEl, { target: { value: "1500" } });
  const amoutInputEl = screen.getByRole("textbox", { name: "Amount of Item" });
  fireEvent.input(amoutInputEl, { target: { value: "13" } });
  const dateEl = screen.getByDisplayValue(dateValue);
  const timeEl = screen.getByDisplayValue(timeValue);
  fireEvent.input(dateEl, { target: { value: "2023-03-03" } });
  fireEvent.input(timeEl, { target: { value: "16:30" } });
  const feeCalculatorVal = feeCalculator({
    cartValue: "8",
    deliveryDistance: "1500",
    amountOfItem: "13",
    dateAndTime: "2023-03-03 16:30 UTC",
  }).value;
  const totalId = screen.getByTestId("totalFee");
  const totalEl = within(totalId).getByText(`€ ${feeCalculatorVal}`);
  expect(totalEl).toBeInTheDocument();
});

test("Total fee should be 0, if the Cart Value is over 100 euro.", () => {
  const dateValue = dateToString(new Date());
  const timeValue = timeToString(new Date());

  render(<Calculator />, { wrapper: BrowserRouter });
  const cartInputEl = screen.getByRole("textbox", { name: "Cart Value" });
  fireEvent.input(cartInputEl, { target: { value: "110" } });
  const dateEl = screen.getByDisplayValue(dateValue);
  const timeEl = screen.getByDisplayValue(timeValue);
  fireEvent.input(dateEl, { target: { value: "2023-03-02" } });
  fireEvent.input(timeEl, { target: { value: "16:30" } });
  const totalId = screen.getByTestId("totalFee");
  const totalEl = within(totalId).getByText(`€ 0`);
  expect(totalEl).toBeInTheDocument();
});

test("Total fee should not over 15 euro.", () => {
  render(<Calculator />, { wrapper: BrowserRouter });
  const cartInputEl = screen.getByRole("textbox", { name: "Cart Value" });
  fireEvent.input(cartInputEl, { target: { value: "1" } });
  const disInputEl = screen.getByRole("textbox", { name: "Delivery Distance" });
  fireEvent.input(disInputEl, { target: { value: "99999" } });
  const amoutInputEl = screen.getByRole("textbox", { name: "Amount of Item" });
  fireEvent.input(amoutInputEl, { target: { value: "99999" } });
  const totalId = screen.getByTestId("totalFee");
  const totalEl = within(totalId).getByText(`€ 15`);
  expect(totalEl).toBeInTheDocument();
});
// <-

// submit form test
test("Btn should be linked to Cheked Out page.", () => {});
