import React from 'react';
import Overview from './Overview';
import Preprocessing from './Preprocessing';
import Setup from './Setup';
import Results from './Results';
import ErrorAnalysis from './ErrorAnalysis';

const Part3Multimodal = () => {
    return (
        <section id="part3" className="scroll-mt-8">
            <div className="border-b-2 border-slate-200 pb-4 mb-8">
                <h2 className="text-3xl font-extrabold text-slate-800">Phần 3: Dữ liệu Đa phương thức (Multimodal)</h2>
                <p className="text-slate-500 mt-2">Đánh giá mô hình kết hợp Ảnh & Văn bản với CLIP: Zero-shot và Few-shot learning</p>
            </div>

            <Overview />
            <Preprocessing />
            <Setup />
            <Results />
            <ErrorAnalysis />
        </section>
    );
};

export default Part3Multimodal;