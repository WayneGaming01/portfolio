import { useState, useEffect } from "react";
import { preloader } from "../components/anims";
import gsap from "gsap";

const Preloader = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(0);

    const count = setInterval(() => {
      setCounter((prevCounter) => {
        const increment = Math.min(2, 100 - prevCounter);
        const newCounter = prevCounter + increment;

        if (newCounter >= 100) {
          clearInterval(count);
          preloader();
        }

        return newCounter;
      });
    }, 25);

    return () => clearInterval(count);
  }, []);

  useEffect(() => {
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
      gsap.to(progressBar, {
        width: `${counter}%`,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [counter]);

  return (
    <div
      id="loading-page"
      className="loading h-[100vh] w-full bg-[#fff] flex justify-center items-center absolute top-[0] z-[105]"
    >
      <div className="follow absolute bg-[#83a091] h-[4px] w-[0] left-[0] z-[2]"></div>
      <div
        className="hide absolute left-[0] bg-[#121212] h-[4px] w-[0] transition ease-in"
        id="progress-bar"
      ></div>
    </div>
  );
};

export default Preloader;
