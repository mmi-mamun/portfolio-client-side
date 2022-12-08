import React from 'react';
import bannerPhoto from '../../src/assets/personal photos/mmi-1.png'
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="flex flex-col lg:flex-row-reverse">
                <div className="lg:w-1/2">
                    <img className='mx-auto w-full' src={bannerPhoto} alt="bannerPhoto" />
                </div>
                <div className='lg:w-1/2 mx-auto p-5'>
                    <h1 className="text-5xl font-bold">Hi, I'm Mamun</h1>
                    <h3 className="text-3xl text-orange-600 font-semibold my-3">I build web apps!</h3>
                    <p className="py-2 mb-5 text-xl">I'm a developer based in Dhaka, Bangladesh</p>



                    <Link to="/Resume_of_Mamun.pdf" download={true} target="_blank">
                        <button className="btn btn-primary h-14 bg-gradient-to-r from-purple-500 to-orange-600"> RESUME <FaDownload className='mx-3'></FaDownload></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;