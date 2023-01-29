import { InputProps } from "../../types/InputProps.type";

const NumberInput = ({
  name,
  value,
  onChange,
  min,
  max,
  innerRef,
  error,
  onBlur,
}: InputProps) => {
  function style(error: boolean) {
    if (error) {
      return "bg-rose-200  border border-rose-600";
    }
  }

  return (
    <input
      id={name}
      className={`input-field ${style(error)}`}
      type="text"
      placeholder="0"
      onFocus={(e) => (e.target.placeholder = "")}
      inputMode="decimal"
      pattern="[0-9]*[.,]?[0-9]+"
      onBlur={onBlur}
      ref={innerRef}
      name={name}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
    />
  );
};

export default NumberInput;
