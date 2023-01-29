import { extraBulkRate, extraBulkStandard } from "../../data/constants";
import { FeeDTO } from "../../types/FeeDTO";

// calculate Extra bulk fee, if the number of item is more than 12.
const extraBulkFee = (amountOfItem: number): FeeDTO => {
  if (amountOfItem >= extraBulkStandard) {
    // return additional fee
    return { value: extraBulkRate };
  }
  return { value: 0 };
};

export default extraBulkFee;
