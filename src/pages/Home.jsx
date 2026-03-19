import React from 'react';
import About from '../components/Home/About';
import Projects from '../components/Home/Projects';
import Contact from '../components/Home/Contact';
import Hero from '../components/Home/Hero';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;