import React from 'react';
import bannerPhoto from '../../src/assets/personal photos/mmi-1.png'
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="my-6 flex flex-col md:flex-row md:space-x-10 lg:space-x-24 xl:space-x-44 items-center justify-around hover:translate-y-2 duration-1000">
                <div className='mx-auto p-5 order-last md:order-first hover:-translate-y-2 duration-1000'>
                    <h1 className="text-5xl font-bold">Hi, I'm Mamun</h1>
                    <h3 className="text-3xl text-orange-600 font-semibold my-3">I build web apps!</h3>
                    <p className="py-2 mb-5 text-xl">I'm a developer based in Dhaka, Bangladesh</p>

                    <Link to="/Resume_of_Mamun.pdf" download={true} target="_blank">
                        <button className="btn btn-primary h-14 bg-gradient-to-r from-purple-500 to-orange-600"> RESUME <FaDownload className='mx-3'></FaDownload></button>
                    </Link>
                </div>

                <div className="order-first md:order-last hover:-translate-y-2 duration-1000">
                    <img className='mx-auto w-full rounded-xl' src={bannerPhoto} alt="bannerPhoto" />
                </div>
                {/* <div className="lg:w-1/2">
                    <img className='mx-auto w-full rounded-xl' src={bannerPhoto} alt="bannerPhoto" />
                </div>


                <div className='lg:w-1/2 mx-auto p-5'>
                    <h1 className="text-5xl font-bold">Hi, I'm Mamun</h1>
                    <h3 className="text-3xl text-orange-600 font-semibold my-3">I build web apps!</h3>
                    <p className="py-2 mb-5 text-xl">I'm a developer based in Dhaka, Bangladesh</p>

                    <Link to="/Resume_of_Mamun.pdf" download={true} target="_blank">
                        <button className="btn btn-primary h-14 bg-gradient-to-r from-purple-500 to-orange-600"> RESUME <FaDownload className='mx-3'></FaDownload></button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default Banner;