import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import CheckedOut from "./pages/CheckedOut";

const App = () => {
  return (
    <div className="App relative min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/checkedout" element={<CheckedOut />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
