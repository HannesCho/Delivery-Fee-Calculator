import { LabelProps } from "../../types/LabelProps.type";

const InputLabel = ({ name }: LabelProps) => {
  return (
    <>
      {name === "Date" ? (
        <label
          className="text-sm sm:text-lg font-medium text-[#07074D] mr-4 w-[190px]"
          htmlFor={name}
        >
          {name}
          <br></br>
          (UTC time)
        </label>
      ) : (
        <label
          className="text-sm sm:text-lg font-medium text-[#07074D] mr-4 w-[190px]"
          htmlFor={name}
        >
          {name === "Cart Value"
            ? `${name} (€)`
            : name === "Delivery Distance"
            ? `${name} (m)`
            : name}
        </label>
      )}
    </>
  );
};

export default InputLabel;
