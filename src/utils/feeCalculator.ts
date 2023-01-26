// calculate total delivery fee
import additionalDistanceFee from "./additionalDistanceFee";
import additionalItems from "./additionalItems";
import basicDistanceFee from "./basicDistanceFee";
import basicSurcharge from "./basicSurcharge";

const feeCalculator = (
  cartValue: number,
  deliveryDistance: number,
  amountOfItem: number,
  now: Date,
  fridayRush: number
) => {
  let result = 0;

  const basicSurchargeValue = basicSurcharge(cartValue).value;
  const additionalDistanceFeeValue =
    additionalDistanceFee(deliveryDistance).value;
  const basicDistanceFeeValue = basicDistanceFee(deliveryDistance).value;
  const additionalItemsValue = additionalItems(amountOfItem).value;
  if (
    basicSurchargeValue &&
    additionalDistanceFeeValue &&
    basicDistanceFeeValue &&
    additionalItemsValue
  ) {
    result +=
      basicSurchargeValue +
      additionalDistanceFeeValue +
      basicDistanceFeeValue +
      additionalItemsValue;
  }
  // Cart Value over 100 euro
  if (cartValue >= 100) {
    result = 0;
  }
  //Friday 3-7PM
  if (
    now.getUTCDay() === 5 &&
    now.getUTCHours() >= 15 &&
    now.getUTCHours() <= 19
  ) {
    result = Math.round(result * fridayRush * 100) / 100; //round at 2 decimal
  }

  //Delivery fee is not more than 15 euro
  if (result > 15) {
    result = 15;
  }
  return Number(result.toFixed(2));
};

export default feeCalculator;
