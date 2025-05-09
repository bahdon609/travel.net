import React, { useEffect, useState } from "react";
import FlightSkelator from "./FlightSkelator";

const Flight = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Simulating a loading delay
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mx-auto  gap-6">
      {loading ? (
        <FlightSkelator />
      ) : (
        <div
          className="mb-10 flex-1 text-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?semt=ais_hybrid')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "20px",
            color: "white", // Optional: Adjust text color for better contrast
          }}
        >
          <div className="bg-opacity-25 bg-black py-10 px-2 lg:my-28 w-full lg:w-[1300px] mx-auto">
            <h1 className="lg:text-text_30px font-bold uppercase ">
              For Flight Booking Call: +88 01511 004 002, +880 1711 004 002
            </h1>
            <h1 className="mt-4 font-bold text-2xl">All country air ticket available</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flight;
