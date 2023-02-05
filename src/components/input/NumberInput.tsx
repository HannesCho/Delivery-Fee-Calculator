import { InputProps } from "../../types/InputProps.type";

//regex pattern
//https://stackoverflow.com/questions/2811031/decimal-or-numeric-values-in-regular-expression-validation

const NumberInput = ({
  name,
  value,
  onChange,
  min,
  max,
  innerRef,
  error,
  onBlur,
  float,
}: InputProps) => {
  const style = (error: boolean) => {
    if (error) {
      return "bg-rose-200  border border-rose-600";
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = "";
  };

  return (
    <>
      {float ? (
        <input
          id={name}
          className={`input-field ${style(error)}`}
          type="text"
          placeholder="0"
          onFocus={handleFocus}
          inputMode="decimal"
          pattern="^(0|[1-9]\d*)(\.)?(\d{0,2})?$"
          onBlur={onBlur}
          ref={innerRef}
          name={name}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
        />
      ) : (
        <input
          id={name}
          className={`input-field ${style(error)}`}
          type="text"
          placeholder="0"
          onFocus={handleFocus}
          inputMode="decimal"
          pattern="^(0|[1-9]\d*)$"
          onBlur={onBlur}
          ref={innerRef}
          name={name}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
        />
      )}
    </>
  );
};

export default NumberInput;
