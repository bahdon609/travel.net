import React from 'react';

const SkeletorLoaderKeep = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row w-full xl:w-[1300px] mx-auto gap-5 px-2 lg:px-0 my-m_24px">
                <div className="flex-1">
                    <div className="h-10 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="space-y-4">
                        {/* Skeleton for input fields */}
                        <div className="h-12 bg-gray-200 rounded w-full mb-4"></div>
                        <div className="h-12 bg-gray-200 rounded w-full mb-4"></div>
                        <div className="h-12 bg-gray-200 rounded w-full mb-4"></div>
                        <div className="h-12 bg-gray-200 rounded w-full mb-4"></div>
                        <div className="h-52 bg-gray-200 rounded w-full mb-4"></div>
                    </div>
                    {/* Skeleton for the button */}
                    <div className="h-12 bg-gray-200 rounded w-full mb-4 mt-5"></div>
                </div>
                <div className="flex-1 grid grid-cols items-center">
                    <div className="space-y-4">
                        <div className="h-72 bg-gray-200 rounded w-full mb-4"></div>

                        <div className="flex space-x-4 mt-m_large">
                            {/* Skeleton for social media icons */}
                            <div className="h-8 w-10 bg-gray-200 "></div>
                            <div className="h-8 w-10 bg-gray-200 "></div>
                            <div className="h-8 w-10 bg-gray-200 "></div>
                            <div className="h-8 w-10 bg-gray-200 "></div>
                            <div className="h-8 w-10 bg-gray-200 "></div>
                            <div className="h-8 w-10 bg-gray-200 "></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 w-full xl:w-[1300px] mx-auto gap-5 mb-m_24px">
                <div className="text-center shadow p-5 rounded border border-gray-200 animate-pulse">
                    <div className="h-12 w-12 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>

                <div className="text-center shadow p-5 rounded border border-gray-200 animate-pulse">
                    <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>

                <div className="text-center shadow p-5 rounded border border-gray-200 animate-pulse">
                    <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>
            </div>

            <div className="mt-mt_secondary w-full xl:w-[1300px] mx-auto mb-m_24px animate-pulse">
                <div className="w-full bg-gray-200 rounded-lg shadow-lg h-[250px]"></div>
            </div>


        </div>
    );
};

export default SkeletorLoaderKeep;
