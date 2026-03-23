import React from 'react';
import ImageDemo from './ImageDemo';
import Dataset from './Dataset';
import Model from './Models';
import Interpretation from './Interpretation';

const Part1Image = () => {
    return (
        <section id="part1" className="scroll-mt-8">
            <div className="border-b-2 border-slate-200 pb-4 mb-8">
                <h2 className="text-3xl font-extrabold text-slate-800">Phần 1: Phân loại Ảnh (Image Classification)</h2>
                <p className="text-slate-500 mt-2">So sánh kiến trúc Convolutional Neural Networks (CNNs) và Vision Transformers (ViTs)</p>
            </div>
            <Dataset />
            <Model />
            <Interpretation />
            <ImageDemo />
        </section>
    );
};

export default Part1Image;