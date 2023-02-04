import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BtnProps } from "../../types/BtnProps.type";

const IncrementBtn = ({
  value,
  setState,
  max,
  error,
  setError,
  setShowErrorText,
}: BtnProps) => {
  const increment = () => {
    const numValue = Number(value);
    const numMax = Number(max);

    // reset the error message.
    if (error) {
      setError(false);
      setShowErrorText(false);
    }
    //set a limit if it is needed.
    if (max && numValue >= numMax) {
      setState(max);
    }

    // handle initial value.
    if (value === "") {
      setState("0");
    } else {
      // handle NaN.
      if (numValue || numValue === 0) {
        setState((numValue + 1).toString());
      } else {
        setState("0");
      }
    }
  };
  return (
    <button onClick={increment}>
      {
        <FontAwesomeIcon
          title="up-btn"
          icon={["fas", "plus"]}
          className="btns-icon"
        />
      }
    </button>
  );
};

export default IncrementBtn;
