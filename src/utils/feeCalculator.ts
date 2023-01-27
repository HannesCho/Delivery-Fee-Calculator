// calculate total delivery fee
import additionalDistanceFee from "./additionalDistanceFee";
import additionalItems from "./additionalItems";
import basicDistanceFee from "./basicDistanceFee";
import basicSurcharge from "./basicSurcharge";
import extraBulkFee from "./extraBulkFee";
import fridayRush from "./fridayRush";

const feeCalculator = (
  cartValue: string,
  deliveryDistance: string,
  amountOfItem: string,
  now: Date
) => {
  let result = 0;

  // calculate the delivery fee
  const basicSurchargeValue = basicSurcharge(Number(cartValue)).value;
  const additionalDistanceFeeValue = additionalDistanceFee(
    Number(deliveryDistance)
  ).value;
  const basicDistanceFeeValue = basicDistanceFee(
    Number(deliveryDistance)
  ).value;
  const additionalItemsValue = additionalItems(Number(amountOfItem)).value;
  const extraBulkFeeValue = extraBulkFee(Number(amountOfItem)).value;
  result =
    basicSurchargeValue +
    additionalDistanceFeeValue +
    basicDistanceFeeValue +
    additionalItemsValue +
    extraBulkFeeValue;

  // apply friday rush
  const fridayRushValue = fridayRush(now).value;
  result = Math.round(result * fridayRushValue * 100) / 100; //round at 2 decimal

  // if Cart Value over 100 euro, fee will be 0 euro.
  if (Number(cartValue) >= 100) {
    result = 0;
  }

  //Delivery fee is not more than 15 euro.
  if (result > 15) {
    result = 15;
  }
  return Number(result.toFixed(2));
};

export default feeCalculator;
