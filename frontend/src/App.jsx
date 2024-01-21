import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    $.expr[":"].external = function (obj) {
      return (
        !obj.href.match(/^mailto\:/) &&
        obj.hostname != location.hostname &&
        !obj.href.match(/^javascript\:/) &&
        !obj.href.match(/^$/)
      );
    };

    $("a:external").attr("target", "_blank");
  }, []);

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
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
