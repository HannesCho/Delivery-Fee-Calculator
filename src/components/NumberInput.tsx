import { InputProps } from "../types/InputProps.type";

const NumberInput = ({
  name,
  value,
  onChange,
  min,
  max,
  innerRef,
  error,
  onBlur,
  showErrorText,
}: InputProps) => {
  function style(error: boolean) {
    if (error) {
      return {
        backgroundColor: "rgba(255, 0, 0, 0.5)",
      };
    }
  }

  return (
    <div>
      <input
        id={name}
        className="m-2 w-36 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-500 focus:shadow-md"
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
        style={style(error)}
      />
      {showErrorText && (
        <p role="alert" style={{ color: "rgb(255, 0, 0)" }}>
          Please make sure you've entered a <em>number</em>
        </p>
      )}
    </div>
  );
};

export default NumberInput;
