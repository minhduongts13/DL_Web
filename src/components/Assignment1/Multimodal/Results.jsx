import React from 'react';

const results = [
    { label: 'Zero-shot baseline', accuracy: '~34.5%', f1: '~33.0%' },
    { label: 'Image few-shot', accuracy: 'tăng mạnh theo k', f1: 'cao nhất ở k = 16' },
    { label: 'Text few-shot', accuracy: 'thấp hơn image', f1: 'cải thiện chậm hơn' },
    { label: 'Fusion few-shot', accuracy: 'ổn định hơn text', f1: 'tiệm cận image ở k lớn' },
];

const findings = [
    'Image embedding là tín hiệu mạnh nhất trong toàn bộ thiết lập few-shot.',
    'Text-only yếu hơn rõ rệt, phản ánh việc caption mô tả thuộc tính chi tiết hơn là tên lớp.',
    'Fusion cải thiện tính ổn định, đặc biệt khi số mẫu mỗi lớp tăng lên.',
];

const Results = () => {
    return (
        <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-slate-100 mt-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="m17 5-5-3-5 3"></path><path d="m17 19-5 3-5-3"></path></svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                    Kết quả & Nhận định <span className="text-slate-400 font-medium text-xl hidden sm:inline-block ml-2">| Results</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                <div className="xl:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-inner">
                    <h4 className="text-lg font-bold text-slate-800 mb-4">Xu hướng từ các đường cong few-shot</h4>
                    <ul className="space-y-3 text-slate-700 leading-relaxed">
                        <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-amber-400"></span><span>Accuracy tăng theo số shot, nhưng tốc độ tăng không đều giữa image, text và fusion.</span></li>
                        <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-amber-400"></span><span>CLIP zero-shot đóng vai trò baseline khá mạnh, đặc biệt so với text-only few-shot ở shot nhỏ.</span></li>
                        <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-amber-400"></span><span>Fusion cho thấy lợi thế rõ hơn khi k-shot tăng, vì có thêm tín hiệu ngữ nghĩa từ caption.</span></li>
                    </ul>
                </div>

                <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-5 flex flex-col justify-center">
                    <div className="text-center space-y-2">
                        <div className="text-5xl font-extrabold text-amber-600 leading-none">k</div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-600">Shots per class</div>
                    </div>
                    <p className="text-sm text-slate-600 text-center leading-relaxed mt-4">
                        Notebook đánh giá tại các mức k = 1, 4, 8, 16 để xem mô hình cải thiện như thế nào khi số lượng mẫu gắn nhãn tăng dần.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h4 className="text-lg font-bold text-slate-800 mb-4">Tóm tắt định lượng</h4>
                    <div className="overflow-hidden rounded-xl border border-slate-200">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 text-slate-600 font-semibold">
                                <tr>
                                    <th className="px-4 py-3">Thiết lập</th>
                                    <th className="px-4 py-3">Accuracy</th>
                                    <th className="px-4 py-3">F1-macro</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {results.map((row) => (
                                    <tr key={row.label} className="bg-white">
                                        <td className="px-4 py-3 font-medium text-slate-800">{row.label}</td>
                                        <td className="px-4 py-3 text-slate-600">{row.accuracy}</td>
                                        <td className="px-4 py-3 text-slate-600">{row.f1}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <h4 className="text-lg font-bold text-slate-800 mb-4">Điểm rút ra</h4>
                    <div className="space-y-3">
                        {findings.map((item) => (
                            <div key={item} className="rounded-xl border border-slate-200 bg-white p-4">
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