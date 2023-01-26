import { ShowDateProps } from "../types/date.type";

const ShowDate = ({ now }: ShowDateProps) => {
  return (
    <>
      <span className="mb-3 block text-base font-medium text-[#07074D]">
        {now}
      </span>
    </>
  );
};

export default ShowDate;
