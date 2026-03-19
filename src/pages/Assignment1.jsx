import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Assignment1/Hero';
import Deliverables from '../components/Assignment1/Deliverables';
import ImageDemo from '../components/Assignment1/ImageDemo';

const Assignment1 = () => {
    const navigate = useNavigate();

    return (
        <div className="animate-fade-in mx-auto">
            <Hero />
            <Deliverables />
            <ImageDemo />
        </div>
    );
};

export default Assignment1;