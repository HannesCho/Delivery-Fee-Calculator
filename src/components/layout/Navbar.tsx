import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white h-14">
      <div className="flex justify-end w-auto w-full p-4">
        <Link to="/" className="flex">
          <FontAwesomeIcon icon={["fas", "house"]} className="nav-icon" />
          <div className="custom-sm-font nav-text">Home</div>
        </Link>
        <Link to="/calculator" className="flex">
          <FontAwesomeIcon icon={["fas", "calculator"]} className="nav-icon" />
          <div className="custom-sm-font nav-text">Calculator</div>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
