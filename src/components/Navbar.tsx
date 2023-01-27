import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full min-w-[375px] z-30 top-10 py-1 bg-white shadow-sm border-b border-gray-400">
      <div className="w-full min-w-min flex items-center justify-between mt-0 px-6 py-2 text-gray-800 font-bold">
        <div className="flex items-center w-auto w-full ">
          <Link to="/">
            <FontAwesomeIcon
              icon={["fas", "calculator"]}
              className="text-yellow-400 w-6 h-10"
            />
          </Link>
        </div>
        <Link to="/calculator">
          <button className="text-xs md:text-base bg-yellow-400 text-black  p-2 rounded  hover:bg-yellow-300 hover:text-gray-500">
            Calculator
          </button>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
