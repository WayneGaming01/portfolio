import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Preloader from "./components/Preloader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const location = useLocation();

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        limit={5}
        closeOnClick={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
      <Preloader />
      <Tooltip
        id="hover-tooltip"
        place="top"
        style={{ zIndex: "20000", fontFamily: "Rubik", fontWeight: "500" }}
      />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
