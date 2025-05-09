import React from 'react';

const HomeSkelator = () => {
    return (
        <div>
            <div className="mx-auto w-full xl:w-[1300px]">
                {/* Header Section Skeleton */}
                <div className="text-center mb-8">
                    <div className="h-10 bg-gray-300 rounded w-2/3 mx-auto animate-pulse my-m_40px"></div>
                    <div className="space-y-4">

                        <div className="h-32 bg-gray-300 rounded w-full animate-pulse"></div>

                    </div>
                    <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto animate-pulse mt-6"></div>
                </div>

                {/* Cards Section Skeleton */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg duration-500 ease-in-out"
                        >
                            {/* Image Placeholder */}
                            <div className="w-full h-[280px] bg-gray-300 rounded-t-lg animate-pulse"></div>
                            {/* Text Content Placeholder */}
                            <div className="p-p_16px space-y-3">
                                <div className="h-5 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
                                <div className="h-8 bg-gray-300 rounded w-1/3 animate-pulse my-m_16px"></div>
                                <div className="h-10 bg-gray-300 rounded w-1/2 animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button Skeleton */}
                <div className="flex items-center justify-center">
                    <div className="h-10 bg-gray-300 rounded w-40 animate-pulse text-center my-m_40px"></div>
                </div>
            </div>

            {/* holiday start */}

            <div className="bg-gray-200 relative">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-200 opacity-50 z-0"></div>

                {/* Content */}
                <div className="relative z-10 mx-auto lg:w-[1300px] holidayContent">
                    {/* Header Section Skeleton */}
                    <div className="text-center text-white mb-8 pt-20 inset-0">
                        <div className="h-10 bg-gray-300 rounded w-2/3 mx-auto animate-pulse mb-4"></div>
                        <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto animate-pulse mb-6"></div>
                        <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto animate-pulse"></div>
                    </div>

                    {/* Cards Section Skeleton */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-16">
                        {[...Array(6)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg duration-500 hover:shadow-2xl hover:scale-105 ease-in-out"
                            >
                                {/* Image Placeholder */}
                                <div className="w-full h-[280px] bg-gray-300 rounded-t-lg animate-pulse"></div>
                                {/* Text Content Placeholder */}
                                <div className="p-4 space-y-4">
                                    <div className="h-5 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                                    <div className="h-5 bg-gray-300 rounded w-1/2 animate-pulse"></div>
                                    <div className="h-8 bg-gray-300 rounded w-1/3 animate-pulse my-m_16px"></div>
                                    <div className="h-10 bg-gray-300 rounded w-1/2 animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All Button Skeleton */}
                    <div className="flex items-center justify-center">
                        <div className="h-10 bg-gray-300 rounded w-40 animate-pulse text-center my-m_40px"></div>
                    </div>
                </div>
            </div>

            {/* visa processing start */}

            <div className="mx-auto lg:w-[1300px] w-full">
                {/* Header Section Skeleton */}
                <div className="text-center text-black mb-8 pt-20">
                    <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto animate-pulse mb-4"></div>
                    <div className="h-32 w-full bg-gray-300 rounded   animate-pulse mb-2"></div>
                </div>

                {/* Cards Section Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-6">
                    {[...Array(12)].map((_, index) => (
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

                {/* View All Button Skeleton */}
                <div className="flex items-center justify-center">
                    <div className="h-10 bg-gray-300 rounded w-40 animate-pulse text-center my-m_40px"></div>
                </div>
            </div>

            {/*haj start */}
            <div className="bg-gray-200 relative">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-200 opacity-50 z-0"></div>

                {/* Content */}
                <div className="relative z-10 mx-auto lg:w-[1300px] holidayContent">
                    {/* Header Section Skeleton */}
                    <div className="text-center text-white mb-8 pt-20 inset-0">
                        <div className="h-10 bg-gray-300 rounded w-2/3 mx-auto animate-pulse mb-4"></div>
                        <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto animate-pulse mb-6"></div>
                        <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto animate-pulse"></div>
                    </div>

                    {/* Cards Section Skeleton */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-16">
                        {[...Array(6)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg duration-500 hover:shadow-2xl hover:scale-105 ease-in-out"
                            >
                                {/* Image Placeholder */}
                                <div className="w-full h-[280px] bg-gray-300 rounded-t-lg animate-pulse"></div>
                                {/* Text Content Placeholder */}
                                <div className="p-4 space-y-4">
                                    <div className="h-5 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                                    <div className="h-5 bg-gray-300 rounded w-1/2 animate-pulse"></div>
                                    <div className="h-8 bg-gray-300 rounded w-1/3 animate-pulse my-m_16px"></div>
                                    <div className="h-10 bg-gray-300 rounded w-1/2 animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All Button Skeleton */}
                    <div className="flex items-center justify-center">
                        <div className="h-10 bg-gray-300 rounded w-40 animate-pulse text-center my-m_40px"></div>
                    </div>
                </div>
            </div>
            {/*haj end */}
            {/* about start */}
            <div className="flex flex-col lg:flex-row items-center justify-center mx-auto w-full lg:w-[1300px] gap-6  my-m_40px">
                {/* Text Section Skeleton */}
                <div className=" flex-1 animate-pulse">
                    <div className="h-8 bg-gray-300 w-full mb-4"></div>
                    <div className="h-60 bg-gray-300  w-full mb-6"></div>
                    <div className="h-52 bg-gray-300  w-full mb-6"></div>

                </div>

                {/* Video Section Skeleton */}
                <div className="flex-1 animate-pulse">
                    <div className="w-full h-[500px] bg-gray-300"></div>
                </div>
            </div>
            {/* about end */}
            {/*why_choose start */}
            <div className="bg-gray-200 pb-p_20px">
                <div className="mx-auto lg:w-[1300px] pt-p_40px">
                    <div className="flex items-center gap-20 pt-p_40px animate-pulse">
                        {/* Image Skeleton */}
                        <div>
                            <div className="bg-gray-300 h-[200px] w-[270px] rounded-sm"></div>
                        </div>

                        {/* Title Skeleton */}
                        <div className="flex items-center justify-center">
                            <div className="bg-gray-300 h-8 w-[200px]"></div>
                        </div>
                    </div>
                    {/* Text Skeleton */}
                    <div className="mt-m_16px">
                        <div className="bg-gray-300 h-52 w-full mb-4 "></div>

                    </div>

                    {/* Button Skeleton */}
                    <div className="flex items-center justify-center mt-8">
                        <div className="bg-gray-300 h-10 w-[200px] rounded-full"></div>
                    </div>
                </div>
            </div>
            {/*why_choose end */}

            {/*subscribe start */}

            <div className="bg-gray-300 py-16">
                <div className="animate-pulse w-[60%] mx-auto">
                    {/* Loader for Heading */}
                    <div className="bg-gray-400 h-8 mb-4 rounded w-[60%] mx-auto"></div>

                    {/* Loader for Subheading */}
                    <div className="bg-gray-400 h-6 mb-6 rounded w-[60%] mx-auto"></div>

                    {/* Loader for Input Field */}
                    <div className="bg-gray-400 h-10 mb-6 rounded w-[80%] mx-auto"></div>

                    {/* Loader for Button */}
                    <div className="bg-gray-400 h-10 mb-6 rounded w-[20%] mx-auto"></div>
                </div>
            </div>
            {/*subscribe end */}
        </div>
    );
};

export default HomeSkelator;