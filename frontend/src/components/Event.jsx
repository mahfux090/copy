import React from "react";

const Event = () => {
  return (
    <div id="match">
      <div className="flex justify-center items-center flex-col text-white my-20 py-20">
        <h1 className="text-4xl font-semibold">Upcoming Events</h1>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
          <div className="p-10 font-bold backdrop-blur-lg border text-center">
            Better CPI Initiative <br /> 1 Nov, 2024
          </div>
          <p className="font-semibold">&</p>
          <div className="p-10 font-bold backdrop-blur-lg border text-center">
            CPI's Talents <br /> 3 Nov, 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
