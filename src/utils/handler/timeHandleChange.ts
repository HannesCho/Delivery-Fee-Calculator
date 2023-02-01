import { TimeHandleChangeProps } from "../../types/HandleChangeProps.type";
import timeToString from "../converter/timeToString";

// handle the change of input values.
const timeHandleChange = ({ event, setState }: TimeHandleChangeProps) => {
  let { value, min, max } = event.target;
  let time = value;
  // prevent time input goes below min or over max.
  switch (true) {
    case min && time < min:
      setState(min);
      break;
    case max && time > max:
      setState(max);
      break;
    default:
      setState(time);
  }
};

export default timeHandleChange;
