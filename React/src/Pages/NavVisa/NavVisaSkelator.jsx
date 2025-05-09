import React from 'react';

const NavVisaSkelator = () => {
    return (
        <div>

<div>
            <div className="bg-gray-200 flex flex-wrap justify-center lg:justify-between my-m_8px py-4 px-4  mx-auto w-full xl:w-[1300px] rounded-md">
                {/* Skeleton Tabs */}
                {[...Array(7)].map((_, tabIndex) => (
                    <div className="relative inline-block" key={tabIndex}>
                        {/* Skeleton Main Tab */}
                        <div className="py-p_24px px-p_16px bg-gray-300 rounded-md w-[150px] h-8 animate-pulse"></div>
                    </div>
                ))}
            </div>
          
            {/* 7 country details */}

            <div>
                <div>
                    {[...Array(7)].map((_, idx) => (
                        <div key={idx}>
                            {/* Skeleton Title Button */}
                            <div className="flex items-center justify-center pt-p_60px">
                                <div className="py-p_8px px-p_20px bg-gray-200 rounded-sm w-[200px] h-10 animate-pulse"></div>
                            </div>

                            <hr className="mb-m_16px border-1" />

                            {/* Skeleton Visa Packages Grid */}
                            <div className="mx-auto w-full xl:w-[1300px] pb-p_60px">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-6">
                                    {[...Array(4)].map((_, index) => (
                                        <div
                                            key={index}
                                            className="relative text-center duration-500 hover:shadow-2xl hover:scale-105 ease-in-out"
                                        >
                                            {/* Skeleton Image */}
                                            <div className="w-full h-[200px] bg-gray-200 shadow-lg border animate-pulse"></div>

                                            {/* Skeleton Text */}
                                            <div className="absolute inset-0 bg-gray-300 bg-opacity-50 flex items-end top-36">
                                                <div className="w-40 h-6 mb-3.5 bg-gray-400  animate-pulse mx-auto"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Skeleton for Content Section */}
            <div className="mb-m_80px mx-auto w-full xl:w-[1300px]">
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

export default NavVisaSkelator;