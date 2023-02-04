import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BtnProps } from "../../types/BtnProps.type";

const DecrementBtn = ({
  value,
  setState,
  error,
  setError,
  setShowErrorText,
}: BtnProps) => {
  const decrement = () => {
    const numValue = Number(value);
    // reset the error message.
    if (error) {
      setError(false);
      setShowErrorText(false);
    }

    // if value is 0 no more decrease
    if (numValue === 0) {
      setState("0");
    } else {
      // handle NaN
      if (numValue) {
        setState((numValue - 1).toString());
      } else {
        setState("0");
      }
    }
  };
  return (
    <button onClick={decrement}>
      {
        <FontAwesomeIcon
          title="down-btn"
          icon={["fas", "minus"]}
          className="btns-icon"
        />
      }
    </button>
  );
};

export default DecrementBtn;
