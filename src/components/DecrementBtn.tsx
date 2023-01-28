import { BtnProps } from "../types/BtnProps";

const DecrementBtn = ({ value, setState }: BtnProps) => {
  const decrement = () => {
    const numValue = Number(value);

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
    <div className="w-6 h-6">
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default DecrementBtn;
