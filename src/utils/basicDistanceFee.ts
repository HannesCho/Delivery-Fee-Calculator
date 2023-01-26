import { basicDistanceRate } from "../config/config";
import { FeeDTO } from "../types/FeeDTO";

// calculate basic distance fee, if the distance is under 1000m(1km)
const basicDistanceFee = (deliveryDistance: number): FeeDTO => {
  if (deliveryDistance) {
    // return basic fee
    return { value: basicDistanceRate };
  }
  return { value: 0 };
};

export default basicDistanceFee;
