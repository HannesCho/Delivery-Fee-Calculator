import { BtnProps } from "../types/BtnProps";

const IncrementBtn = ({ value, setState, max }: BtnProps) => {
  const increaseQty = () => {
    const numValue = Number(value);
    const numMax = Number(max);

    //set a limit if it is needed.
    if (max) {
      if (numValue >= numMax) {
        setState(max);
      } else {
        setState((numValue + 1).toString());
      }
    }
    setState((numValue + 1).toString());
  };
  return (
    <div className="w-6 h-6">
      <button onClick={increaseQty}>+</button>
    </div>
  );
};

export default IncrementBtn;
