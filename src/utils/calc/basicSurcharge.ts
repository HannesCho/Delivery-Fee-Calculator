import { FeeDTO } from "../../types/FeeDTO.type";

// calculate basic surcharge if Cart Value is under 10 euro.
const basicSurcharge = (cartValue: number): FeeDTO => {
  if (cartValue < 10 && cartValue > 0) {
    // return basic surchage
    return { value: Math.round((10 - cartValue) * 100) / 100 };
  }
  return { value: 0 };
};

export default basicSurcharge;
