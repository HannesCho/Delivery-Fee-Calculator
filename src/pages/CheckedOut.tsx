import { Link, useLocation } from "react-router-dom";

const CheckedOut = () => {
  const location = useLocation();
  return (
    <div className="custom-h flex items-center justify-center p-4 pb-14">
      <div className="round-bg">
        <p className="custom-font text-4xl text-white mb-4">
          You Checked Out :
        </p>
        <p className="custom-font text-4xl text-white mb-8">
          € {location.state ? location.state.value : 0}
        </p>
        <Link to="/calculator">
          <button className="custom-font cyan-btn text-white">
            To Calculator
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckedOut;
