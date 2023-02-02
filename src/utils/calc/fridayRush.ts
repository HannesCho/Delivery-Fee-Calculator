import { fridayRushRate } from "../../data/constants";
import { DateDTO, FeeDTO } from "../../types/FeeDTO.type";

// decide applying of friday rush rate.
const fridayRush = ({ dateAndTime }: DateDTO): FeeDTO => {
  const dateAndTimeUTC = new Date(dateAndTime);
  if (
    (dateAndTimeUTC.getUTCDay() === 5 &&
      dateAndTimeUTC.getUTCHours() >= 15 &&
      dateAndTimeUTC.getUTCHours() <= 18) ||
    (dateAndTimeUTC.getUTCHours() === 19 &&
      dateAndTimeUTC.getUTCMinutes() === 0)
  ) {
    // return basic surchage
    return { value: fridayRushRate };
  }
  // if there is no friday rush rate will be 1.
  return { value: 1 };
};

export default fridayRush;
