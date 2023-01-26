import { InputProps } from "../types/input.type";

const NumberInput = ({ title, value, onChange }: InputProps) => {
  return (
    <input
      id={title}
      className="m-2 w-36 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-500 focus:shadow-md"
      type="number"
      name={title}
      value={value}
      onChange={onChange}
    />
  );
};

export default NumberInput;
