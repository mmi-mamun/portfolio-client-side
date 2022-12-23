import React from 'react';
import bannerPhoto from '../../src/assets/personal photos/mmi-1.png'
import { FaDownload, FaUserAstronaut } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import code from '../assets/lottieFiles/web-development.json'
import { Typewriter } from 'react-simple-typewriter';
import { FiGithub } from 'react-icons/fi';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="my-6 flex flex-col md:flex-row md:space-x-10 lg:space-x-24 xl:space-x-44 items-center justify-around hover:translate-y-2 duration-1000">
                <div className=" hover:-translate-y-2 duration-1000 w-1/2 p-5 pl-12">
                    <Lottie animationData={code} loop={true} />
                    {/* <img className='mx-auto w-full rounded-xl' src={bannerPhoto} alt="bannerPhoto" /> */}
                </div>

                <div className='flex flex-col justify-center w-1/2 pr-12'>
                    <h2 className='text-5xl font-bold text-green-500 mb-3 flex gap-3'>Hi, I am Mamun <FaUserAstronaut></FaUserAstronaut> </h2>
                    <h2 className='text-4xl font-medium text-orange-500 h-52 lg:h-24 md:h-36 sm:h-52'>I <span>
                        <Typewriter className='text-orange-500'
                            words={['am a passionate Web Developer 💻', 'build web apps 💻', 'love programming 💻', 'am developing new products 💻', 'am exploring new technologies 💻']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span></h2>

                    <div className="flex gap-5">
                        <Link to="/Resume_of_Mamun.pdf" download={true} target="_blank">
                            <button className="btn btn-primary h-14 bg-gradient-to-r from-purple-500 to-orange-600"> RESUME <FaDownload className='mx-3'></FaDownload></button>
                        </Link>
                    </div>

                </div>

                {/* <div className='mx-auto p-5 hover:-translate-y-2 duration-1000'>
                    <h1 className="text-5xl font-bold">Hi, I'm Mamun</h1>
                    <h3 className="text-3xl text-orange-600 font-semibold my-3">I build web apps!</h3>
                    <p className="py-2 mb-5 text-xl">I'm a developer based in Dhaka, Bangladesh</p>

                    <Link to="/Resume_of_Mamun.pdf" download={true} target="_blank">
                        <button className="btn btn-primary h-14 bg-gradient-to-r from-purple-500 to-orange-600"> RESUME <FaDownload className='mx-3'></FaDownload></button>
                    </Link>
                </div> */}


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