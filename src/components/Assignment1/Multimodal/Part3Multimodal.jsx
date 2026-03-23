import React from 'react';

const Part3Multimodal = () => {
    return (
        <section id="part3" className="scroll-mt-8">
            <div className="border-b-2 border-slate-200 pb-4 mb-6">
                <h2 className="text-3xl font-extrabold text-slate-800">Phần 3: Dữ liệu Đa phương thức (Multimodal)</h2>
                <p className="text-slate-500 mt-2">Đánh giá mô hình kết hợp Ảnh & Văn bản (Zero-shot vs Few-shot)</p>
            </div>

            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-slate-100 border-dashed text-center">
                <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">Đang thực hiện...</h3>
                <p className="text-slate-500 max-w-lg mx-auto">
                    Các thử nghiệm với mô hình đa phương thức (ví dụ: CLIP) để đánh giá khả năng Zero-shot và Few-shot learning sẽ sớm được bổ sung.
                </p>
            </div>
        </section>
    );
};

export default Part3Multimodal;