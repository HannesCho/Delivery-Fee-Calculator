import { TimeHandleChangeProps } from "../../types/HandleChangeProps.type";
import timeToString from "../converter/timeToString";

// handle the change of input values.
const timeHandleChange = ({ event, setState }: TimeHandleChangeProps) => {
  let { value, min, max } = event.target;
  let time = value;
  // prevent selecting of non-service hour.
  if (time < min || time > max) {
    setState(timeToString(new Date()));
  }
  setState(time);
};

export default timeHandleChange;
