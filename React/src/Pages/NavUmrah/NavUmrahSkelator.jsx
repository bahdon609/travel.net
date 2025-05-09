import React from 'react';

const NavUmrahSkelator = () => {
    return (
        <div>
            <div className="mx-auto w-full xl:w-[1300px]">
  {/* Skeleton Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-p_60px">
    {[...Array(6)].map((_, index) => (
      <div
        key={index}
        className="bg-gray-200 rounded-lg shadow-lg animate-pulse"
      >
        {/* Image Skeleton */}
        <div className="w-full h-[280px] bg-gray-300 rounded-t-lg"></div>

        {/* Text Skeleton */}
        <div className="p-p_16px">
          <div className="h-6 bg-gray-300 rounded mb-4 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
          <div className="h-8 bg-gray-300 rounded mb-4 w-1/3"></div>
          <div className="h-10 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    ))}
  </div>

  {/* Skeleton for Content Section */}
  <div className="mb-m_80px">
    {/* Section Header Skeleton */}
    <div className="bg-gray-300 p-4 rounded-t-lg animate-pulse">
      <div className="h-10 bg-gray-400 rounded w-2/3"></div>
    </div>

    {/* Content Skeleton */}
    <div className="bg-gray-200 p-6 rounded-b-lg shadow-lg animate-pulse">
      {/* Heading Skeleton */}
      <div className="h-8 bg-gray-400 rounded mb-4 w-3/4"></div>

      {/* Paragraph Skeleton */}
      {[...Array(3)].map((_, index) => (
        <div key={index} className="h-4 bg-gray-300 rounded mb-4 w-full"></div>
      ))}

      {/* List Skeleton */}
      <div className="mt-8">
        <div className="h-6 bg-gray-400 rounded mb-4 w-2/3"></div>
        <ul className="space-y-2">
          {[...Array(6)].map((_, index) => (
            <li key={index} className="h-4 bg-gray-300 rounded w-5/6"></li>
          ))}
        </ul>
      </div>

      {/* Key Features Skeleton */}
      <div className="mt-8">
        <div className="h-6 bg-gray-400 rounded mb-4 w-2/3"></div>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="h-4 bg-gray-300 rounded mb-4 w-full"></div>
        ))}
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default NavUmrahSkelator;