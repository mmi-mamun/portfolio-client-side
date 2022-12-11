import React from 'react';
import cover from '../../src/assets/logo/logo-2.png'

const About = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${cover})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="mt-24">
                    <h1 className="text-5xl font-bold text-purple-300">Hi, I'm Mamun</h1>
                    <h3 className="px-12 lg:text-xl text-black font-bold my-3 text-justify">I'm from Dhaka, Bangladesh. I've completed my Bachelor's degree from Daffodil International University in the Department of Computer Science & Engineering.</h3>
                    <p className="px-12 py-2 mb-5 lg:text-xl text-black font-bold">I love programming, developing new products and exploring new technologies. Also, I love to play video games and hang out with friends in my free time.</p>

                    <p className="my-12 text-2xl font-semibold">*Thank you so much for visiting my profile*</p>
                </div>
            </div>
        </div>
    );
};

export default About;