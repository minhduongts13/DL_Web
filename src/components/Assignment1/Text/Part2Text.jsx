import React from 'react';
import Dataset from './Dataset';
import Model from './Models';
import Interpretation from './Interpretation';
import TextDemo from './TextDemo';

const Part2Text = () => {
    return (
        <section id="part2" className="scroll-mt-8">
            <div className="border-b-2 border-slate-200 pb-4 mb-6">
                <h2 className="text-3xl font-extrabold text-slate-800">Phần 2: Phân loại Văn bản (Text Classification)</h2>
                <p className="text-slate-500 mt-2">So sánh kiến trúc RNN (LSTM/GRU) và Transformer</p>
            </div>

            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-slate-100 border-dashed text-center">
                <Dataset />
                <Model />
                <Interpretation />
                <TextDemo />
            </div>
        </section>
    );
};

export default Part2Text;