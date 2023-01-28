import { BtnProps } from "../types/BtnProps";

const IncrementBtn = ({ value, setState, max }: BtnProps) => {
  const increment = () => {
    const numValue = Number(value);
    const numMax = Number(max);

    //set a limit if it is needed.
    if (max) {
      if (numValue >= numMax) {
        setState(max);
      }
    } else {
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
    }
  };
  return (
    <div className="w-6 h-6">
      <button onClick={increment}>+</button>
    </div>
  );
};

export default IncrementBtn;
