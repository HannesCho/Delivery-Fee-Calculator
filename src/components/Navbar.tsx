import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full min-w-[375px] z-30 top-10 py-1 bg-white shadow-lg border-b border-blue-400">
      <div className="w-full min-w-min flex items-center justify-between mt-0 px-6 py-2">
        <div className="flex items-center w-auto w-full text-blue-700">
          <Link to="/">
            <button className="text-xs md:text-base bg-green-400 text-white  p-2 rounded  hover:bg-green-300 hover:text-gray-100">
              Home
            </button>
          </Link>
        </div>
        <Link to="/calculator">
          <button className="text-xs md:text-base bg-green-400 text-white  p-2 rounded  hover:bg-green-300 hover:text-gray-100">
            Calculator
          </button>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
