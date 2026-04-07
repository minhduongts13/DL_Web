import React from 'react';

const chips = [
    'CLIP backbone',
    'Zero-shot baseline',
    'Few-shot linear probe',
    'Image / Text / Fusion features',
    'k = 1, 4, 8, 16 shots',
    '5 independent runs',
    'Selection by F1-macro',
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
                        Notebook sử dụng <strong className="font-bold text-emerald-600">CLIP</strong> như một backbone đa phương thức để so sánh khả năng <strong>zero-shot</strong> và <strong>few-shot</strong>. Từ cùng một tập dữ liệu, pipeline lần lượt tách đặc trưng ảnh, đặc trưng text và đặc trưng fusion để kiểm tra độ lợi từ từng modality.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Các thí nghiệm được chọn theo <strong className="font-semibold text-emerald-600">F1-macro</strong> trên validation, sau đó retest trên test set để giữ cùng một tiêu chí đánh giá giữa zero-shot và few-shot.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {chips.map((chip) => (
                            <span key={chip} className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-700 shadow-sm">
                                {chip}
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <h4 className="font-bold text-slate-800 mb-2">Zero-shot</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">Dùng chính embedding CLIP và prompt captions để thiết lập mốc tham chiếu ban đầu.</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <h4 className="font-bold text-slate-800 mb-2">Few-shot image</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">Huấn luyện tuyến tính trên đặc trưng ảnh khi chỉ có vài mẫu mỗi lớp.</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <h4 className="font-bold text-slate-800 mb-2">Few-shot fusion</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">Kết hợp ảnh và text để kiểm tra xem modality nào bổ sung thông tin tốt hơn.</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl bg-emerald-50/50 border border-emerald-100 p-5 flex flex-col justify-center">
                    <div className="text-center">
                        <div className="text-5xl font-extrabold text-emerald-600 leading-none">CLIP</div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-2">Vision-Language Backbone</div>
                    </div>
                    <p className="text-sm text-slate-600 text-center leading-relaxed mt-4">
                        Cấu hình trong notebook tập trung vào hai model CLIP phổ biến, cache feature trên RAM và huấn luyện few-shot nhiều lần để giảm nhiễu của split ngẫu nhiên.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Setup;