import React from 'react';

const BlogDetails_skelator = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row mx-auto w-[1300px] py-p_40px gap-6">
                {/* Left Column Skeleton */}
                <div className="w-full lg:w-[70%]">
                    <div className="bg-gray-200 animate-pulse h-[450px]"></div>

                    <div className="w-full mt-m_24px">
                        <div>
                            <div className="h-8 bg-gray-200 animate-pulse rounded w-3/4"></div>
                            <div className="h-5 bg-gray-200 animate-pulse rounded w-1/4 mt-4"></div>
                            <div className="h-60 bg-gray-200 animate-pulse rounded w-full mt-4"></div>
                            <div className="h-60 bg-gray-200 animate-pulse rounded w-full mt-4"></div>
                        </div>
                    </div>
                </div>

                {/* Right Column Skeleton */}
                <div className="w-full lg:w-[30%] bg-white space-y-6">
                    {[...Array(6)].map((_, sectionIndex) => (
                        <div key={sectionIndex} className="space-y-4">
                            <div className="h-6 bg-gray-200  w-1/2"></div>
                            <div className="space-y-2">
                                {[...Array(4)].map((_, linkIndex) => (
                                    <div
                                        key={linkIndex}
                                        className="flex gap-4 items-center animate-pulse"
                                    >
                                        <div className="w-[110px] h-[55px] bg-gray-200 "></div>
                                        <div className="w-full">
                                            <div className="h-4 bg-gray-200  w-3/4"></div>
                                            <div className="h-4 bg-gray-200  w-1/2 mt-2"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default BlogDetails_skelator;