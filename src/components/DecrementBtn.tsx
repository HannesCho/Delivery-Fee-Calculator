import { BtnProps } from "../types/BtnProps";

const DecrementBtn = ({ value, setState, max }: BtnProps) => {
  const decrement = () => {
    // if value is 0 no more decrease
    if (value === "0") {
      setState("0");
    } else {
      setState((Number(value) - 1).toString());
    }
  };
  return (
    <div className="w-6 h-6">
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default DecrementBtn;
