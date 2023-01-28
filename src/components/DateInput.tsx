import { DateInputProps } from "../types/InputProps.type";

const DateInput = ({ name, value, onChange, min, max }: DateInputProps) => {
  return (
    <input
      id={name}
      className="input-field"
      type="date"
      name={name}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
    />
  );
};

export default DateInput;
