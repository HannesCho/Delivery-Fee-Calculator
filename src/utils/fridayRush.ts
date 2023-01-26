import { fridayRushRate } from "../config/config";
import { FeeDTO } from "../types/FeeDTO";

// decide applying of friday rush rate.
const fridayRush = (now: Date): FeeDTO => {
  if (
    now.getUTCDay() === 5 &&
    now.getUTCHours() >= 15 &&
    now.getUTCHours() <= 19
  ) {
    // return basic surchage
    return { value: fridayRushRate };
  }
  // if there is no friday rush rate will be 1.
  return { value: 1 };
};

export default fridayRush;
