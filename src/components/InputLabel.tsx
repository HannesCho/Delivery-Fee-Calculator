import { LabelProps } from "../types/LabelProps.type";

const InputLabel = ({ name }: LabelProps) => {
  return (
    <label className="text-base font-medium text-[#07074D]" htmlFor={name}>
      {name}
    </label>
  );
};

export default InputLabel;
