import React from 'react';

const chips = [
    'OpenAI CLIP ViT-B/32',
    'FashionCLIP 2.0',
    'Zero-shot baseline',
    'Few-shot MLP classifier',
    'Image + text features',
    'k = 8, 16, 32, 64 shots',
    'MLP',
    'Metric: macro-F1',
];

const experimentRows = [
    ['Backbone', 'OpenAI CLIP ViT-B/32; FashionCLIP 2.0'],
    ['Zero-shot prompts', 'So sánh class prompt và clothing-specific prompt'],
    ['Class prompt', '"a photo of a {label}"'],
    ['Clothing-specific prompt', '"a photo of a clothing item: {label}"'],
    ['Classifier', 'MLP classifier trên feature image + text'],
    ['k-shot setting', '8, 16, 32, 64 mẫu mỗi lớp'],
    ['Test', '3,000 mẫu'],
    ['Metrics', 'Macro-F1 và weighted-F1'],
];

const Setup = () => {
    return (
        <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-slate-100 mt-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"></path></svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                    Thiết lập Mô hình <span className="text-slate-400 font-medium text-xl hidden sm:inline-block ml-2">| Setup</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2 space-y-5">
                    <p className="text-slate-700 leading-relaxed text-lg">
                        Notebook so sánh hai backbone <strong className="font-bold text-emerald-600">OpenAI CLIP ViT-B/32</strong> và <strong className="font-bold text-emerald-600">FashionCLIP 2.0</strong>. Zero-shot dùng prompt theo tên lớp, còn few-shot trích xuất đặc trưng ảnh + text rồi huấn luyện MLP classifier.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Few-shot support set lấy k mẫu mỗi lớp với k = 8, 16, 32 và 64. Tất cả kết quả được báo cáo trên test split 3,000 mẫu bằng <strong className="font-semibold text-emerald-600">macro-F1</strong> và weighted-F1.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {chips.map((chip) => (
                            <span key={chip} className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-700 shadow-sm">
                                {chip}
                            </span>
                        ))}
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-emerald-50 text-slate-700">
                                <tr>
                                    <th className="px-4 py-3 font-bold">Hạng mục</th>
                                    <th className="px-4 py-3 font-bold">Thiết lập trong notebook</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {experimentRows.map(([label, value]) => (
                                    <tr key={label} className="bg-white even:bg-slate-50/70">
                                        <td className="px-4 py-3 font-semibold text-slate-800 align-top whitespace-nowrap">{label}</td>
                                        <td className="px-4 py-3 text-slate-600 leading-relaxed">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="rounded-2xl bg-emerald-50/50 border border-emerald-100 p-5 flex flex-col justify-center">
                    <div className="text-center">
                        <div className="text-5xl font-extrabold text-emerald-600 leading-none">CLIP</div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-2">Vision-Language Backbone</div>
                    </div>
                    <p className="text-sm text-slate-600 text-center leading-relaxed mt-4">
                        FashionCLIP 2.0 phù hợp miền thời trang hơn OpenAI CLIP trong cả zero-shot lẫn few-shot, đặc biệt khi tăng k-shot.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Setup;
