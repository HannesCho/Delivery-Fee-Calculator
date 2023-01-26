import { LabelProps } from "../types/label.type";

const InputLabel = ({ title }: LabelProps) => {
  return (
    <label className="text-base font-medium text-[#07074D]" htmlFor={title}>
      {title}
    </label>
  );
};

export default InputLabel;
