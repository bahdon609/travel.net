import React, { useEffect, useState } from "react";

const FlightSkelator = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center mx-auto gap-6 w-full">
    <div
      className="mb-10 flex-1 text-center animate-pulse"
      style={{
        backgroundColor: "#ccc",
        height: "300px",
        width: "100%",
        padding: "20px",
      }}
    >
      <div className="bg-gray-300 bg-opacity-25 py-10 px-2 lg:my-28 w-full  mx-auto">
        <div className="h-6 bg-gray-400 rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-400 rounded w-1/2 mx-auto"></div>
      </div>
    </div>
  </div>
);

export default FlightSkelator;