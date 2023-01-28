import { LabelProps } from "../types/LabelProps.type";

const InputLabel = ({ name }: LabelProps) => {
  return (
    <label
      className="text-sm sm:text-lg font-medium text-[#07074D] mr-4 w-[155px]"
      htmlFor={name}
    >
      {name}
    </label>
  );
};

export default InputLabel;
