import React from 'react';

const NavSkelator = () => {
    return (
        <div>
            <div className="w-full lg:w-[900px] xl:w-[1300px] mx-auto lg:py-p_8px flex justify-between items-center">
      {/* Logo Skeleton */}
      <div className="w-[140px] lg:w-[120px] lg:h-[70px]  bg-gray-200 animate-pulse"></div>

      {/* Menu Items Skeleton */}
      <div className="space-x-6 invisible lg:visible flex">
        <div className="w-20 h-8 bg-gray-200 animate-pulse"></div>
        <div className="w-20 h-8 bg-gray-200 animate-pulse"></div>
        <div className="w-20 h-8 bg-gray-200 animate-pulse"></div>
        <div className="w-20 h-8 bg-gray-200 animate-pulse"></div>
        <div className="w-20 h-8 bg-gray-200 animate-pulse"></div>
        <div className="w-20 h-8 bg-gray-200 animate-pulse"></div>
        <div className="w-20 h-8 bg-gray-200 animate-pulse"></div>
        <div className="w-20 h-8 bg-gray-200 animate-pulse"></div>
      </div>

      {/* Mobile Menu Icon Skeleton */}
      <div className="lg:hidden flex items-center z-50">
        <div className="w-8 h-8 bg-gray-300 animate-pulse"></div>
      </div>
    </div>
        </div>
    );
};

export default NavSkelator;