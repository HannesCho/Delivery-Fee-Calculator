import { additionalItemRate, additionalItemStandard } from "../config/config";
import { FeeDTO } from "../types/FeeDTO";

// calculate additional surcharge for more items
const additionalItems = (amountOfItem: number): FeeDTO => {
  if (amountOfItem >= additionalItemStandard) {
    // return additional fee
    return {
      value: (amountOfItem - additionalItemStandard + 1) * additionalItemRate,
    };
  }
  return { value: 0 };
};

export default additionalItems;
