import { HandleBlurProps } from "../../types/HandleBlurProps.type";

// handle Blur event -> input validation and error message.
const handleBlur = ({
  event,
  error,
  setError,
  setShowErrorText,
}: HandleBlurProps) => {
  if (!error) {
    if (event.target.validity.patternMismatch) {
      setError(true);
      setShowErrorText(true);
    } else {
      setShowErrorText(false);
    }
  }
  if (error) {
    setShowErrorText(true);
  }
};

export default handleBlur;
