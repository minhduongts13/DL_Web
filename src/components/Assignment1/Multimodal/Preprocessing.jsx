import React from 'react';
import splitDistribution from './report/3.3.png';
import captionBeforeAfter from './report/3.4.png';

const steps = [
    '3.1 Loại bỏ caption rỗng và giữ lại bản gốc trong cột caption_raw.',
    '3.2 Mã hóa nhãn lớp để chuẩn bị cho chia tập và huấn luyện.',
    '3.3 Chia Train / Validation / Test theo chiến lược stratified split.',
    '3.4 Làm sạch caption bằng cách loại câu nhiễu, thêm từ khóa accessory vào danh sách lọc.',
    '3.5 Chuẩn hóa ảnh để phù hợp với pipeline CLIP.',
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

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                <div className="xl:col-span-2 rounded-2xl bg-slate-50 p-6 border border-slate-100 shadow-inner">
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

                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-3">Key insight</div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                        Caption sau tiền xử lý ngắn hơn, gọn hơn và giảm các mô tả phụ trợ. Điều này giúp mô hình học mối liên kết image-text ổn định hơn khi dùng CLIP cho zero-shot và few-shot.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <figcaption className="mb-3 text-center text-lg font-bold text-slate-800">3.3 Train / Val / Test Label Distribution</figcaption>
                    <img src={splitDistribution} alt="Label distribution after stratified split" className="w-full rounded-xl" />
                </figure>

                <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <figcaption className="mb-3 text-center text-lg font-bold text-slate-800">3.4 Caption Length Before vs After</figcaption>
                    <img src={captionBeforeAfter} alt="Caption length before and after preprocessing" className="w-full rounded-xl" />
                </figure>
            </div>
        </div>
    );
};

export default Preprocessing;