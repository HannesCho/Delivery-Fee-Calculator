import { LabelProps } from "../../types/LabelProps.type";

const InputLabel = ({ name }: LabelProps) => {
  return (
    <>
      {name === "Date" ? (
        <label className="input-lable" htmlFor={name}>
          {name} (UTC time)
        </label>
      ) : (
        <label className="input-lable" htmlFor={name}>
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
