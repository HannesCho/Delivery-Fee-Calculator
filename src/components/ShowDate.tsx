import { ShowDateProps } from "../types/date.type";

const ShowDate = ({ now }: ShowDateProps) => {
  return (
    <div className="mb-3 block text-base font-medium text-[#07074D]">{now}</div>
  );
};

export default ShowDate;
