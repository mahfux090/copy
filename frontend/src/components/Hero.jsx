import React from "react";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-[90vh] flex flex-col items-start justify-center px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"
      id="hero"
    >
      <div className=" text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2">
          Welcome to <br /> Our CPI <br /> Timeline
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Stay connected, stay informed your journey at CPI, captured!
        </p>

        <div className="flex items-center w-full max-w-md bg-white rounded-full overflow-hidden shadow-lg mb-6">
          <input
            type="text"
            placeholder="Search Anything"
            className="flex-grow px-4 py-2 outline-none text-gray-700"
          />
          <button className="bg-red-700 text-white px-6 py-2">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
