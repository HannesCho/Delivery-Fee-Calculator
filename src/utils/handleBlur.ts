import { HandleBlurProps } from "../types/HandleBlurProps.type";

// handle Blur event -> input validation and error message.
const handleBlur = ({
  event,
  ref,
  error,
  setError,
  setShowErrorText,
}: HandleBlurProps) => {
  if (!error) {
    if (event.target.validity.patternMismatch) {
      if (ref.current) {
        ref.current.focus();
        setError(true);
        setShowErrorText(true);
      }
    } else {
      setShowErrorText(false);
    }
  }
  if (error) {
    setShowErrorText(false);
  }
};

export default handleBlur;
