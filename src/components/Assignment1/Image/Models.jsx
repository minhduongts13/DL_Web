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
                            <p><strong>ResNet-50:</strong> Mô hình CNN kinh điển, sử dụng <em className="text-slate-600">Residual Blocks</em> giải quyết triệt để vấn đề Vanishing Gradient. Khởi tạo với trọng số pretrained <code className="text-sm bg-slate-100 px-1 rounded text-red-600">IMAGENET1K_V2</code>.</p>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-sky-500 mt-1">●</span>
                            <p><strong>ViT-Base (ViT-B/16):</strong> Áp dụng cơ chế <em className="text-slate-600">Self-Attention</em> của Transformer. Ảnh đầu vào được băm nhỏ thành các patch 16x16, giúp mô hình học được ngữ cảnh toàn cục (global context). Khởi tạo với <code className="text-sm bg-slate-100 px-1 rounded text-sky-600">IMAGENET1K_V1</code>.</p>
                        </li>
                    </ul>
                </div>

                {/* Mục 2: Chiến lược Tinh chỉnh (Thay thế cho phần Deep Tabular Models của PDF) */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-indigo-400 rounded-full"></span>
                        Thiết lập Kịch bản Tinh chỉnh (Fine-tuning Strategies)
                    </h4>
                    <p className="text-sm text-slate-600 mb-4">Để so sánh toàn diện, dự án tiến hành 3 kịch bản huấn luyện song song cho cả hai mô hình:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                            <div className="font-bold text-slate-800 mb-1">Scenario 1 (S1)</div>
                            <div className="text-sm text-slate-600"><strong>Frozen Backbone:</strong> Đóng băng toàn bộ mạng cơ sở, chỉ huấn luyện lại lớp Classifier (Linear Head) cuối cùng.</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                            <div className="font-bold text-slate-800 mb-1">Scenario 2 (S2)</div>
                            <div className="text-sm text-slate-600"><strong>Full Fine-tuning:</strong> Mở khóa và cập nhật trọng số cho toàn bộ kiến trúc mạng với Learning Rate nhỏ.</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-200 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded-bl-lg">TỐI ƯU NHẤT</div>
                            <div className="font-bold text-slate-800 mb-1">Scenario 3 (S3)</div>
                            <div className="text-sm text-slate-600"><strong>Layer-wise Learning Rate Decay (LLRD):</strong> Giảm dần tốc độ học từ lớp phân loại ngược về các lớp trích xuất đặc trưng cơ sở.</div>
                        </div>
                    </div>
                </div>

                {/* Mục 3: Đánh giá & Tối ưu (Tương tự phần Thiết lập đánh giá & Config Robust của PDF) */}
                <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-green-400 rounded-full"></span>
                        Thiết lập Đánh giá & Tối ưu
                    </h4>
                    <ul className="space-y-3 text-slate-700 ml-3">
                        <li className="flex items-start gap-2">
                            <span className="text-slate-400 mt-0.5">✔</span>
                            <p><strong>Thiết lập đánh giá:</strong> Theo dõi đồng thời 4 chỉ số cốt lõi: <em className="text-slate-600">Accuracy, F1-Score (Weighted), Precision</em> và <em className="text-slate-600">Recall</em>.</p>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-slate-400 mt-0.5">✔</span>
                            <p><strong>Cơ chế tối ưu Training:</strong> Nhóm xây dựng hàm huấn luyện tự động tích hợp <strong>Early Stopping</strong> (tránh Overfitting với patience=5) và <strong>Automatic Mixed Precision (AMP - GradScaler)</strong> giúp tăng tốc độ huấn luyện trên GPU mà không giảm độ chính xác.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Models;