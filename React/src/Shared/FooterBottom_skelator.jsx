import React, { useEffect, useState } from 'react';

const FooterBottom_skelator = () => {

    return (
        <div>
            <div className="bg-gray-300 animate-pulse">
                <div className="w-full lg:w-[1300px] mx-auto p-p_16px">
                    <footer className="footer text-neutral-content items-center p-4">
                        <aside className="grid-flow-col items-center">
                            <div className="h-6 bg-gray-400 rounded w-[350px]"></div>
                        </aside>
                        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                            <div className="h-6 bg-gray-400 rounded w-[250px]"></div>
                        </nav>
                    </footer>
                </div>
            </div>

        </div>
    );
};

export default FooterBottom_skelator;