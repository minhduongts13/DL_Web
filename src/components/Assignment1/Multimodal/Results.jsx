import React from 'react';
import zeroShotChart from './report/4.3.png';
import fewShotChart from './report/5.3.png';
import overallChart from './report/6.1.png';

const validationRows = [
    ['FashionCLIP 2.0, clothing-specific prompt', '0.8403', '0.8298'],
    ['FashionCLIP 2.0, class prompt', '0.8169', '0.7993'],
    ['OpenAI CLIP ViT-B/32, clothing-specific prompt', '0.7770', '0.7633'],
    ['OpenAI CLIP ViT-B/32, class prompt', '0.7535', '0.7380'],
];

const testRows = [
    ['FashionCLIP 2.0 image+text MLP, k=64', '0.9504', '0.9464'],
    ['FashionCLIP 2.0 image+text MLP, k=32', '0.9449', '0.9381'],
    ['OpenAI CLIP ViT-B/32 image+text MLP, k=64', '0.9444', '0.9392'],
    ['OpenAI CLIP ViT-B/32 image+text MLP, k=32', '0.9392', '0.9325'],
    ['FashionCLIP 2.0 image+text MLP, k=16', '0.9295', '0.9201'],
    ['OpenAI CLIP ViT-B/32 image+text MLP, k=16', '0.9171', '0.9060'],
    ['FashionCLIP 2.0 image+text MLP, k=8', '0.8824', '0.8761'],
    ['OpenAI CLIP ViT-B/32 image+text MLP, k=8', '0.8823', '0.8693'],
];

const summaryCards = [
    {
        label: 'Best zero-shot',
        value: 'FashionCLIP 2.0',
        detail: 'Clothing-specific prompt, macro-F1 0.8403, weighted-F1 0.8298',
        tone: 'border-emerald-100 bg-emerald-50/60 text-emerald-700',
    },
    {
        label: 'Best few-shot',
        value: 'FashionCLIP 2.0',
        detail: 'Image+text MLP, k = 64, macro-F1 0.9504',
        tone: 'border-sky-100 bg-sky-50/60 text-sky-700',
    },
    {
        label: 'Evaluation split',
        value: '3,000 mẫu',
        detail: 'Tất cả zero-shot và few-shot results được báo cáo trên test split.',
        tone: 'border-amber-100 bg-amber-50/70 text-amber-700',
    },
];

const keyFindings = [
    'FashionCLIP 2.0 vượt OpenAI CLIP ViT-B/32 ở zero-shot, cho thấy backbone chuyên miền thời trang hữu ích cho category1.',
    'Clothing-specific prompt cải thiện macro-F1 cho cả hai backbone so với class prompt đơn giản.',
    'Few-shot image+text MLP tăng mạnh khi k tăng từ 8 lên 64, đạt macro-F1 tốt nhất 0.9504.',
    'Kết quả best model còn 161 lỗi trên 3,000 mẫu, tương ứng error rate 5.37%.',
];

const Results = () => {
    return (
        <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-slate-100 mt-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="m17 5-5-3-5 3"></path><path d="m17 19-5 3-5-3"></path></svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                    Huấn luyện & Đánh giá <span className="text-slate-400 font-medium text-xl hidden sm:inline-block ml-2">| Training & Evaluation</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {summaryCards.map((card) => (
                    <div key={card.label} className={`rounded-2xl border p-5 shadow-sm ${card.tone}`}>
                        <div className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2">{card.label}</div>
                        <div className="text-2xl font-extrabold leading-tight text-slate-800">{card.value}</div>
                        <p className="text-sm text-slate-600 leading-relaxed mt-3">{card.detail}</p>
                    </div>
                ))}
            </div>

            <div className="space-y-6 mb-8">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-3 mb-4">
                        <h4 className="text-lg font-bold text-slate-800">Zero-shot</h4>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Prompt comparison</span>
                    </div>
                    <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <figcaption className="mb-3 text-center text-base font-bold text-slate-800">4.3 Zero-shot Macro-F1 by Model and Prompt Set</figcaption>
                        <img src={zeroShotChart} alt="Zero-shot macro-F1 by model and prompt set" className="w-full rounded-xl" />
                    </figure>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-3 mb-4">
                        <h4 className="text-lg font-bold text-slate-800">Few-shot</h4>
                        <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Image + text MLP</span>
                    </div>
                    <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <figcaption className="mb-3 text-center text-base font-bold text-slate-800">5.3 Few-shot Macro-F1 by Model and k</figcaption>
                        <img src={fewShotChart} alt="Few-shot macro-F1 by model and k" className="w-full rounded-xl" />
                    </figure>
                </div>
            </div>

            <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm mb-8">
                <figcaption className="mb-3 text-center text-base font-bold text-slate-800">6.1 Overall Macro-F1 Comparison</figcaption>
                <img src={overallChart} alt="Overall macro-F1 comparison across zero-shot and few-shot experiments" className="w-full rounded-xl" />
            </figure>

            <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h4 className="text-lg font-bold text-slate-800 mb-4">Tổng hợp kết quả</h4>
                    <div className="overflow-hidden rounded-xl border border-slate-200">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 text-slate-600 font-semibold">
                                <tr>
                                    <th className="px-4 py-3">STT</th>
                                    <th className="px-4 py-3">Thiết lập</th>
                                    <th className="px-4 py-3">Macro-F1</th>
                                    <th className="px-4 py-3">Weighted-F1</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {validationRows.slice(0, 4).map((row, index) => (
                                    <tr key={row[0]} className="bg-white">
                                        <td className="px-4 py-3 text-slate-600">{index + 1}</td>
                                        <td className="px-4 py-3 font-medium text-slate-800">{row[0]}</td>
                                        <td className="px-4 py-3 text-slate-600">{row[1]}</td>
                                        <td className="px-4 py-3 text-slate-600">{row[2]}</td>
                                    </tr>
                                ))}
                                {testRows.slice(0, 4).map((row, index) => {
                                    const isBest = row[0] === 'FashionCLIP 2.0 image+text MLP, k=64';
                                    return (
                                    <tr key={row[0]} className={isBest ? 'bg-emerald-50 font-bold' : 'bg-slate-50/50'}>
                                        <td className="px-4 py-3 text-slate-600">{validationRows.slice(0, 4).length + index + 1}</td>
                                        <td className="px-4 py-3 font-medium text-slate-800">{row[0]}</td>
                                        <td className="px-4 py-3 text-slate-600">{row[1]}</td>
                                        <td className="px-4 py-3 text-slate-600">{row[2]}</td>
                                    </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mt-4">
                        Bảng kết quả cho thấy few-shot image+text MLP tốt hơn zero-shot rõ rệt. Best model là FashionCLIP 2.0 với k = 64, đạt macro-F1 0.9504 và weighted-F1 0.9464 trên test split.
                    </p>
                </div>

                <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-5 shadow-sm">
                    <h4 className="text-lg font-bold text-slate-800 mb-4">Nhận xét:</h4>
                    <div className="space-y-3">
                        {keyFindings.map((item) => (
                            <div key={item} className="rounded-xl border border-amber-100 bg-white p-4">
                                <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;
