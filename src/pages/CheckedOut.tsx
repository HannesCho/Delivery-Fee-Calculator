import { Link, useLocation } from "react-router-dom";

const CheckedOut = () => {
  const location = useLocation();
  return (
    <div className="flex items-center justify-center p-12 pb-14">
      <div className="mx-auto w-full max-w-[550px]">
        <h1 className="checkedout-font">
          You Checked Out {location.state ? location.state.value : 0}
        </h1>
        <Link to="/calculator">
          <button className="text-xs md:text-base bg-green-400 text-white  p-2 rounded  hover:bg-green-300 hover:text-gray-100">
            To Calculator
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckedOut;
