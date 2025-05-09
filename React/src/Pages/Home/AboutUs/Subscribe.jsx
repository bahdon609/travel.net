import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import boat from '../../../assets/banner/hpli.jpg';

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleClick = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format regex

        if (!email) {
            toast.error("Please enter your email first", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.success("Successfully subscribed!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div>
            <Parallax
                blur={0}
                bgImage={boat}
                bgImageAlt="Europe Tour Package"
                strength={500}
                bgImageStyle={{
                    backgroundAttachment: 'fixed',
                }}
            >
                <div style={{ height: '50vh' }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 mx-auto lg:w-[1300px]">
                        <div className="text-center text-white mb-8 pt-20">
                            <h1 className="text-4xl font-bold mb-4">Subscribe to our new package</h1>
                            <h2 className="font-semibold text-xl">SUBSCRIBE TO RECEIVE OUR INTERESTING UPDATES</h2>

                            <div className="mt-4">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email Here"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="p-2 mb-4 bg-white text-black font-semibold rounded w-[60%] mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="text-center mt-8">
                                <button
                                    className="btn_primary font-bold px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                                    onClick={handleClick}
                                >
                                    Submit
                                </button>

                                {/* Toast Container */}
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Subscribe;
