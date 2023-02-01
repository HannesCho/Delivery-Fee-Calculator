import { DateHandleChangeProps } from "../../types/HandleChangeProps.type";
import dateToString from "../converter/dateToString";

// handle the change of input values.
const dateHandleChange = ({ event, setState }: DateHandleChangeProps) => {
  let { value, min, max } = event.target;
  let date = value;
  const today = dateToString(new Date());
  // prevent date input goes out of range.
  switch (true) {
    case min && date < min:
      setState(today);
      break;
    case max && date > max:
      setState(today);
      break;
    default:
      setState(date);
  }
};

export default dateHandleChange;
