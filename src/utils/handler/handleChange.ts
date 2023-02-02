import { HandleChangeProps } from "../../types/HandleChangeProps.type";

// handle the change of input values.
const handleChange = ({
  event,
  setState,
  error,
  setError,
}: HandleChangeProps) => {
  const { value, min, max } = event.target;
  const numValue = Number(value);
  const numMin = Number(min);
  const numMax = Number(max);
  // validation of input
  const newValueIsValid = !event.target.validity.patternMismatch;
  if (error) {
    if (newValueIsValid) {
      setError(false);
    }
  }
  // prevent number input goes below min or over max.
  switch (true) {
    case numMin && numValue < numMin:
      setState(min);
      break;
    case numMax && numValue > numMax:
      setState(max);
      break;
    default:
      setState(value);
  }
};

export default handleChange;
