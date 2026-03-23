import React from 'react';
import About from '../components/Home/About';
import Projects from '../components/Home/Projects';
import Contact from '../components/Home/Contact';
import Hero from '../components/Home/Hero';
import Description from '../components/Home/Description';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Description />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;