import { InputProps } from "../types/input.type";

const Input = ({ title, value, onChange }: InputProps) => {
  return (
    <>
      <label
        className="mb-3 block text-base font-medium text-[#07074D]"
        htmlFor={title}
      >
        {title}
      </label>
      <input
        className="w-full mb-5 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-500 focus:shadow-md"
        type="number"
        name={title}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
