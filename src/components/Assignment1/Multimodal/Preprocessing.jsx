import React from 'react';
import splitDistribution from './report/3.2.png';

const steps = [
    '3.1 Mã hóa label_id cho 5 lớp: dresses, jackets, pants, skirts và tops.',
    '3.2 Chia dữ liệu stratified theo tỷ lệ 70% train, 15% validation và 15% test.',
    '3.3 Tạo clean_text từ caption gốc để dùng ổn định cho text encoder.',
    '3.4 Giữ ảnh ở dạng PIL image; CLIPProcessor xử lý resize, center crop, normalize và tokenization theo batch.',
    '3.5 Tạo DatasetDict gồm train 14,000 mẫu, validation 3,000 mẫu và test 3,000 mẫu.',
];

const Preprocessing = () => {
    return (
        <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-slate-100 mt-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                    Tiền xử lý <span className="text-slate-400 font-medium text-xl hidden sm:inline-block ml-2">| Preprocessing</span>
                </h3>
            </div>

            <div className="mb-8">
                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100 shadow-inner">
                    <h4 className="text-lg font-bold text-slate-800 mb-4">Pipeline chính của notebook</h4>
                    <ul className="space-y-3 text-slate-700 leading-relaxed">
                        {steps.map((step) => (
                            <li key={step} className="flex items-start gap-3">
                                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-indigo-400"></span>
                                <span>{step}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <figcaption className="mb-3 text-center text-lg font-bold text-slate-800">3.2 Train / Val / Test Label Distribution</figcaption>
                    <img src={splitDistribution} alt="Label distribution after stratified split" className="w-full rounded-xl" />
                </figure>
            </div>
        </div>
    );
};

export default Preprocessing;
