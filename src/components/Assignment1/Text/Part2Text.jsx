import React from 'react';

const Part2Text = () => {
    return (
        <section id="part2" className="scroll-mt-8">
            <div className="border-b-2 border-slate-200 pb-4 mb-6">
                <h2 className="text-3xl font-extrabold text-slate-800">Phần 2: Phân loại Văn bản (Text Classification)</h2>
                <p className="text-slate-500 mt-2">So sánh kiến trúc RNN (LSTM/GRU) và Transformer</p>
            </div>

            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-slate-100 border-dashed text-center">
                <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">Đang thực hiện...</h3>
                <p className="text-slate-500 max-w-lg mx-auto">
                    Nội dung phân tích dữ liệu, đánh giá mô hình RNN và Transformer, cùng ứng dụng giải thích (Interpretability) cho văn bản sẽ được cập nhật tại đây.
                </p>
            </div>
        </section>
    );
};

export default Part2Text;