// calculate total delivery fee
import { FeeDTO, TotalFeeDTO } from "../../types/FeeDTO.type";
import additionalDistanceFee from "./additionalDistanceFee";
import additionalItems from "./additionalItems";
import basicDistanceFee from "./basicDistanceFee";
import basicSurcharge from "./basicSurcharge";
import extraBulkFee from "./extraBulkFee";
import fridayRush from "./fridayRush";

const feeCalculator = ({
  cartValue,
  deliveryDistance,
  amountOfItem,
  dateAndTime,
}: TotalFeeDTO): FeeDTO => {
  let result = 0;

  // if Cart Value over 100 euro, fee will be 0 euro.
  if (Number(cartValue) >= 100) {
    result = 0;
    return { value: Number(result.toFixed(2)) };
  }

  // calculate the delivery fee
  const basicSurchargeValue = basicSurcharge(
    parseFloat(Number(cartValue).toFixed(2))
  ).value;
  const additionalDistanceFeeValue = additionalDistanceFee(
    parseInt(deliveryDistance)
  ).value;
  const basicDistanceFeeValue = basicDistanceFee(
    parseInt(deliveryDistance)
  ).value;
  const additionalItemsValue = additionalItems(parseInt(amountOfItem)).value;
  const extraBulkFeeValue = extraBulkFee(parseInt(amountOfItem)).value;
  result =
    basicSurchargeValue +
    additionalDistanceFeeValue +
    basicDistanceFeeValue +
    additionalItemsValue +
    extraBulkFeeValue;

  // apply friday rush
  const fridayRushValue = fridayRush({ dateAndTime }).value;
  result = Math.round(result * fridayRushValue * 100) / 100; //round at 2 decimal

  //Delivery fee is not more than 15 euro.
  if (result > 15) {
    result = 15;
  }
  return { value: Number(result.toFixed(2)) };
};

export default feeCalculator;
