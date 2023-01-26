import { FeeDTO } from "../types/FeeDTO";

// calculate basic surcharge if Cart Value is under 10 euro.
const basicSurcharge = (cartValue: number): FeeDTO => {
  if (cartValue < 10 && cartValue > 0) {
    // return basic surchage
    return { value: 10 - cartValue };
  }
  return { value: 0 };
};

export default basicSurcharge;
