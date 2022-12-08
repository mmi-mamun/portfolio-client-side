import React from 'react';
import cover from '../../src/assets/personal photos/cover.png'

const About = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${cover})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md mt-24">
                    <h1 className="text-5xl font-bold text-purple-300">Hi, I'm Mamun</h1>
                    <h3 className="text-3xl text-orange-300 font-semibold my-3">I build web apps!</h3>
                    <p className="py-2 mb-5 text-xl text-black font-bold">I'm a developer based in Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default About;