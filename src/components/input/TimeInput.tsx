import { DateInputProps } from "../../types/InputProps.type";

const TimeInput = ({ name, value, onChange, min, max }: DateInputProps) => {
  return (
    <input
      id={name}
      className="time-input-field"
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
