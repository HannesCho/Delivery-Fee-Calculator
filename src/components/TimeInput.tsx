import { DateInputProps } from "../types/InputProps.type";

const TimeInput = ({ name, value, onChange, min, max }: DateInputProps) => {
  return (
    <input
      id={name}
      className="m-2 w-36 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-500 focus:shadow-md"
      type="time"
      name={name}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
    />
  );
};

export default TimeInput;
