import {
  additionalDistanceRate,
  additionalDistanceStandard,
  basicDistanceFeeStandard,
} from "../../data/constants";
import { FeeDTO } from "../../types/FeeDTO";

// calculate additional distace fee every 500m, if the distance is over 1000m(1km)
const additionalDistanceFee = (deliveryDistance: number): FeeDTO => {
  if (deliveryDistance > basicDistanceFeeStandard) {
    // return additional fee
    return {
      value: Math.ceil(
        ((deliveryDistance - basicDistanceFeeStandard) /
          additionalDistanceStandard) *
          additionalDistanceRate
      ),
    };
  }
  return { value: 0 };
};

export default additionalDistanceFee;
