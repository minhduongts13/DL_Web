import React, { useState } from 'react';
import Hero from '../components/Assignment1/Hero';
import Deliverables from '../components/Assignment1/Deliverables';
import A1ProjectOverview from '../components/Assignment1/Introduction';

const Assignment1 = () => {
    return (
        <div className="animate-fade-in mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pb-16">
            <Hero />
            <Deliverables />
            <A1ProjectOverview />
        </div>
    );
};

export default Assignment1;