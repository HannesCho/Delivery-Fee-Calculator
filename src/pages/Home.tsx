import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center p-12 pb-14">
      <div className="mx-auto w-full max-w-[550px]">
        <h1>Welcome Home</h1>
        <Link to="/calculator">
          <button className="text-xs md:text-base bg-green-400 text-white  p-2 rounded  hover:bg-green-300 hover:text-gray-100">
            To Calculator
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
