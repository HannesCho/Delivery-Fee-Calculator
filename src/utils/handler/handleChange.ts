import { HandleChangeProps } from "../../types/HandleChangeProps.type";

// handle the change of input values.
const handleChange = ({
  event,
  setState,
  error,
  setError,
}: HandleChangeProps) => {
  let { value, min, max } = event.target;
  // validation of input
  const newValueIsValid = !event.target.validity.patternMismatch;
  if (error) {
    if (newValueIsValid) {
      setError(false);
    }
  }
  // prevent number input goes below min or over max.
  switch (true) {
    case min && value < min:
      setState(min);
      break;
    case max && value > max:
      setState(max);
      break;
    default:
      setState(value);
  }
};

export default handleChange;
