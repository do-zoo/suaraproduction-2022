// import { ChevronDoubleDownIcon } from '@heroicons/react/solid'
import React from "react";
import { ButtonLink } from "../../atoms";

function ServicesBanner() {
  return (
    <header>
      <div
        className="relative batas-suci h-screen w-full text-text-color overflow-visible"
        // style={style}
      >
        <div className="relative batas-suci content flex md:flex-row flex-col justify-center items-center w-full h-full gap-16 lg:gap-24 ">
          <div className="left relative md:w-[640px]">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6">
              Grow your Bussines with us
            </h1>
            <p className="lg:text-xl mb-8">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quidem.
            </p>
            <ButtonLink />
          </div>
          <div className="right relative">
            <div className=" blur-gradient w-[360px] h-[360px] absolute right-0 top-1/2 -translate-y-1/2 rounded-full" />
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="hero"
              className=" rounded-lg max-h-[400px] relative"
            />
          </div>
        </div>
        {/* <button 
                className='absolute bottom-0 left-1/2 -translate-x-1/2' 
            >
                <a href='#' className='text-text-color text-xl flex justify-center items-center flex-col py-4 animate-bounce' >
                    <p>See More</p>
                    <ChevronDoubleDownIcon className='w-6 h-6'/>
                </a>
            </button> */}
      </div>
    </header>
  );
}

export default ServicesBanner;
