import { DateHandleChangeProps } from "../types/HandleChangeProps.type";
import dateToString from "./dateToString";

// handle the change of input values.
const dateHandleChange = ({ event, setState }: DateHandleChangeProps) => {
  let { value, min, max } = event.target;
  let date = value;
  // prevent selecting of out-bound date.
  if (date < min || date > max) {
    setState(dateToString(new Date()));
  }
  setState(date);
};

export default dateHandleChange;
