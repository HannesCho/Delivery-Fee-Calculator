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

  // prevent number input goes below min.
  if (min) {
    if (Number(value) < Number(min)) {
      setState(min);
    }
  }
  // prevent number input goes over max.
  if (max) {
    if (Number(value) > Number(max)) {
      setState(max);
    }
  }
  setState(value);
};

export default handleChange;
