import React from 'react';
import confusionMatrix from './report/6.2.png';
import misclassifiedSamples from './report/6.3.png';

const insights = [
    'Best few-shot model là FashionCLIP 2.0 image+text MLP với k = 64; còn 161 lỗi trên 3,000 mẫu test.',
    'Cặp nhầm nhiều nhất là dresses -> tops với 51 mẫu, sau đó skirts -> dresses với 24 mẫu và tops -> dresses với 19 mẫu.',
    'Các hard cases thường có caption mô tả chất liệu/kiểu dáng nhập nhằng, ví dụ vest bị dự đoán thành tops hoặc skirt có mô tả giống dress.',
];

const confusionInsights = [
    'Các giá trị trên đường chéo chiếm đa số ở cả 5 lớp, cho thấy mô hình phân loại ổn định sau khi kết hợp image embedding và text embedding.',
    'Lớp pants dễ nhận diện nhất với 465/471 mẫu đúng, chỉ có rất ít nhầm lẫn sang các lớp còn lại.',
    'Nhầm lẫn lớn nhất là dresses -> tops với 51 mẫu; đây cũng là nguyên nhân chính làm recall của dresses thấp hơn các lớp khác.',
    'Nhóm skirts bị nhầm sang dresses 24 mẫu, phản ánh sự tương đồng hình dáng giữa váy liền và chân váy trong một số ảnh/caption.',
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

            <div className="space-y-6 mb-8">
                <div className="space-y-6">
                    <figure className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                        <figcaption className="mb-3 text-center text-lg font-bold text-slate-800">6.2 Best Model Confusion Matrix</figcaption>
                        <img src={confusionMatrix} alt="Best few-shot FashionCLIP confusion matrix" className="w-full rounded-xl" />
                    </figure>

                    <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-5 shadow-sm">
                        <h4 className="text-lg font-bold text-slate-800 mb-4">Nhận xét confusion matrix</h4>
                        <div className="space-y-3">
                            {confusionInsights.map((item) => (
                                <div key={item} className="rounded-xl border border-sky-100 bg-white p-4">
                                    <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <figure className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                        <figcaption className="mb-3 text-center text-lg font-bold text-slate-800">6.3 Misclassified Samples</figcaption>
                        <img src={misclassifiedSamples} alt="Misclassified samples from the best few-shot model" className="w-full rounded-xl" />
                    </figure>
                </div>

                <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5 shadow-sm">
                    <div className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-3">Nhận xét:</div>
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
                            Bảng lỗi cho thấy nhầm lẫn chủ yếu xảy ra giữa các nhóm có tín hiệu thị giác hoặc ngôn ngữ gần nhau. Notebook dùng các hard cases này để giải thích vì sao thêm feature ảnh + text giúp tăng mạnh macro-F1 so với zero-shot prompt đơn thuần.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorAnalysis;
