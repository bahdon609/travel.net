import React from 'react';

const TopNavSkelator = () => {
    return (
        <div>
            <div className="bg-gray-200 p-p_6px hidden lg:flex animate-pulse"> {/* Shimmer effect */}
      <div className="w-full xl:w-[1300px] mx-auto text-white flex flex-col lg:flex-row gap-1 justify-between items-center">
        {/* Email and Phone Loader */}
        <div className="flex flex-row items-start lg:items-center lg:space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-52 h-7 bg-gray-300 "></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-52 h-7 bg-gray-300 "></div>
          </div>
        </div>

        {/* Social Icons Loader */}
        <div className="flex ">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-12 h-10 bg-gray-300 "
              ></div>
            ))}
        </div>
      </div>
    </div>
        </div>
    );
};

export default TopNavSkelator;