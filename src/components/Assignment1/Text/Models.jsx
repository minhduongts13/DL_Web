import React from 'react';

const Models = () => {
    return (
        <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-slate-100 mt-8 animate-fade-in">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-red-50 text-red-500">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1 2.83 0l1.23 1.23a2 2 0 0 1 0 2.83L19.2 13.7a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1 2.83 0l1.23 1.23a2 2 0 0 1 0 2.83L25.5 20a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1 2.83 0l1.23 1.23a2 2 0 0 1 0 2.83L31.8 26.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1 2.83 0l1.23 1.23a2 2 0 0 1 0 2.83L38.1 32.6a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1 2.83 0l1.23 1.23a2 2 0 0 1 0 2.83L44.4 38.9a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a2 2 0 0 1 2.83 0l1.23 1.23a2 2 0 0 1 0 2.83"></path><path d="M14 12v.01M10 16v.01M6 20v.01"></path><circle cx="14" cy="12" r="2"></circle><circle cx="10" cy="16" r="2"></circle><circle cx="6" cy="20" r="2"></circle><path d="M22 18h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z"></path><path d="M18 14h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z"></path>
                    </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                    Mô hình & Thiết lập <span className="text-slate-400 font-medium text-xl hidden sm:inline-block ml-2">| Models & Setup</span>
                </h3>
            </div>

            <div className="space-y-8">
                {/* Mục 1: Các Mô hình */}
                <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-red-400 rounded-full"></span>
                        Các kiến trúc Mô hình
                    </h4>
                    <ul className="space-y-3 text-slate-700 ml-3">
                        <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">●</span>
                            <p><strong>LSTM (Long-Short Term Memory):</strong> Mô hình cải tiến từ RNN (Recurrent Neural Network), có khả năng học được các mối quan hệ giữa các từ cách xa nhau và giải quyết vấn đề về vanishing hay exploding gradient có ở RNN. Đồng thời, mô hình được thiết để lấy dữ liệu từ hai chiều để thu được toàn bộ bối cảnh văn bản.</p>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-sky-500 mt-1">●</span>
                            <p><strong>DistilBERT (base-uncased):</strong> Một mô hình sử dụng kiến trúc transformer, được chắt lọc (distill) từ mô hình BERT gốc giúp nó trở nên nhỏ hơn, và nhanh hơn so với mô hình gốc. Mô hình này không phân biệt chữ hoa và chữ thường</p>
                        </li>
                    </ul>
                </div>


                {/* Mục 2: Đánh giá & Tối ưu (Tương tự phần Thiết lập đánh giá & Config Robust của PDF) */}
                <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-green-400 rounded-full"></span>
                        Thiết lập Đánh giá & Tối ưu
                    </h4>
                    <ul className="space-y-3 text-slate-700 ml-3">
                        <li className="flex items-start gap-2">
                            <span className="text-slate-400 mt-0.5">✔</span>
                            <p><strong>Thiết lập đánh giá:</strong> Xây dựng confusion matrix để đánh giá mô hình, theo dõi các chỉ số như accuracy hay F1 để đánh giá chất lượng một cách đầy đủ nhất.</p>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-slate-400 mt-0.5">✔</span>
                            <p><strong>Cơ chế tối ưu Training:</strong> Nhóm xây dựng hàm huấn luyện tự động tích hợp <strong>Early Stopping</strong> để tránh Overfitting.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Models;