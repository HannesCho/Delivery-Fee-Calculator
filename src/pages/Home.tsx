import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="custom-h">
      <div className="flex h-full items-center justify-center p-4 pb-14">
        <div className="round-bg">
          <h1 className="custom-font lg-text mb-4">Let's Calculate!</h1>
          <Link to="/calculator">
            <button className="custom-font yellow-btn">To Calculator</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
