import React from 'react';
import Banner from '../components/Banner';
import Projects from '../individualSection/Projects';
import Skills from '../individualSection/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;