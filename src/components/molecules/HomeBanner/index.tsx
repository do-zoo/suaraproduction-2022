import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { hero, heroBg } from "../../../assets";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";

function HomeBanner() {
  const style = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    Aos.init();
    // const w = window.scrollY;
    // const h = window.innerHeight;
    // console.log(w , h);
  }, []);

  return (
    <div
      className="relative batas-suci h-screen w-full overflow-hidden"
      style={style}
    >
      <div className="hero flex justify-center items-center w-full h-full">
        <img src={hero} alt="hero" className="sm:px-32" />
      </div>
      <button className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <a
          href="/"
          className="text-text-color text-xl flex justify-center items-center flex-col py-4 animate-bounce"
        >
          <p>See More</p>
          <ChevronDoubleDownIcon className="w-6 h-6" />
        </a>
      </button>
    </div>
  );
}

export default HomeBanner;
