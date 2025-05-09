import React from 'react';

const Footer_skelator = () => {
    return (
        <div>
            <footer className="bg-gray-200 text-white py-12 animate-pulse">
                <div></div>
                <div className="w-full lg:w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {/* Quick Menu Section */}
                    <div>
                        <div className="h-8 bg-gray-300 rounded w-1/2 mb-4"></div>
                        <ul className="space-y-2">
                            {Array(5)
                                .fill(0)
                                .map((_, index) => (
                                    <div key={index} className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
                                ))}
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div>
                        <div className="h-8 bg-gray-300 rounded w-1/2 mb-4"></div>
                        {Array(5)
                            .fill(0)
                            .map((_, index) => (
                                <div key={index} className="h-6 bg-gray-300 rounded w-full mb-2"></div>
                            ))}

                    </div>

                    {/* About Us Section */}
                    <div>
                        <div className="h-8 bg-gray-300 rounded w-1/2 mb-4"></div>

                        <div

                            className="h-60 bg-gray-300 rounded w-full"
                        ></div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer_skelator;