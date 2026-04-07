import React from 'react';
import misclassifiedOne from './report/8_1.png';
import misclassifiedTwo from './report/8_2.png';

const insights = [
    'Các lỗi sai thường xảy ra khi ảnh chứa nhiều lớp trang phục chồng lấn, khiến mô hình bám vào chi tiết phụ thay vì đối tượng chính.',
    'Caption token importance cho thấy các từ như fabric, pattern, wears, sleeves xuất hiện dày đặc nhưng không phải lúc nào cũng đủ để phân biệt đúng lớp.',
    'Các cặp nhầm lẫn nổi bật thường xoay quanh nhóm upper-body và lower-body tương tự nhau, ví dụ Top_Shirts, Tees, Short_Bottom, Outerwear.',
];

const ErrorAnalysis = () => {
    return (
        <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-slate-100 mt-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-rose-50 text-rose-600">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                    Phân tích lỗi sai <span className="text-slate-400 font-medium text-xl hidden sm:inline-block ml-2">| Error Analysis</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                <div className="xl:col-span-2 space-y-6">
                    <figure className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                        <figcaption className="mb-3 text-center text-lg font-bold text-slate-800">Misclassified samples with attention overlay</figcaption>
                        <img src={misclassifiedOne} alt="Misclassified samples with attention overlay" className="w-full rounded-xl" />
                    </figure>

                    <figure className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                        <figcaption className="mb-3 text-center text-lg font-bold text-slate-800">Additional misclassified samples</figcaption>
                        <img src={misclassifiedTwo} alt="Additional misclassified samples with attention overlay" className="w-full rounded-xl" />
                    </figure>
                </div>

                <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5 shadow-sm">
                    <div className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-3">Notebook takeaways</div>
                    <div className="space-y-3">
                        {insights.map((item) => (
                            <div key={item} className="rounded-xl border border-rose-100 bg-white p-4">
                                <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Reading the figure</div>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            Phần attention map giúp giải thích vì sao model chọn sai: vùng nổi bật đôi khi nằm ở chi tiết trang phục phụ, trong khi token caption lại thiên về mô tả ngữ cảnh. Đây là lý do các mẫu khó vẫn cần few-shot fusion để cải thiện.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorAnalysis;