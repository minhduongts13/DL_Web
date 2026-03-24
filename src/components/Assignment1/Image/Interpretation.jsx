import React from "react";

const modelResults = [
    {
        name: "ResNet50 S3 (RandAug, LLRD)",
        accuracy: 94.63,
        f1: 94.64,
        noisyAccuracy: 86.6,
        drop: 8.03,
        accent: "bg-sky-500",
        badge: "Tốt nhất",
        badgeClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
    },
    {
        name: "ViT-Base S2 (RandAug)",
        accuracy: 94.47,
        f1: 94.45,
        noisyAccuracy: 84.73,
        drop: 9.73,
        accent: "bg-fuchsia-500",
        badge: "Bám sát",
        badgeClass: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
    },
];

const comments = [
    {
        title: "Nhận xét tổng quan",
        content: "Cả ResNet50 và ViT-Base đều đạt hiệu năng xuất sắc (>94%). Tuy nhiên, cấu hình ResNet50 S3 (kết hợp RandAugment và LLRD) là phiên bản cân bằng nhất giữa độ chính xác và tính ổn định.",
    },
    {
        title: "Tác động của Augmentation",
        content: "Kỹ thuật RandAugment giúp cải thiện rõ rệt so với baseline, chứng minh vai trò then chốt của việc tăng cường dữ liệu trong việc giảm thiểu Overfitting.",
    },
    {
        title: "Độ bền với nhiễu (Robustness)",
        content: "Khi kiểm thử trên tập ảnh bị làm mờ (Gaussian Blur), hiệu năng của ResNet giảm ít hơn ViT (-8.03% vs -9.73%), cho thấy CNN tổng quát hóa tốt hơn khi ảnh suy giảm chất lượng.",
    },
    {
        title: "Hướng cải thiện",
        content: "Hai lớp Glacier và Mountain vẫn là nguyên nhân gây nhầm lẫn chính. Có thể tối ưu thêm bằng cách dùng Focal Loss, Fine-tuning sâu hơn hoặc áp dụng Ensemble Learning.",
    },
];

export default function Interpretation() {
    return (
        <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-slate-100 mt-8 animate-fade-in">
            
            {/* Header đồng bộ với component Models */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                    Kết quả & Phân tích <span className="text-slate-400 font-medium text-xl hidden sm:inline-block ml-2">| Interpretation</span>
                </h3>
            </div>

            <div className="space-y-10">
                
                {/* PHẦN 1: KẾT QUẢ THỰC NGHIỆM */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* 2 Cột cho 2 Card kết quả */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {modelResults.map((item) => (
                            <div key={item.name} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <h5 className="font-bold text-slate-800">{item.name}</h5>
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md border ${item.badgeClass}`}>
                                        {item.badge}
                                    </span>
                                </div>
                                
                                {/* Progress Bars */}
                                <div className="space-y-3 mb-4">
                                    <div>
                                        <div className="flex justify-between text-xs mb-1 font-medium text-slate-600"><span>Accuracy</span><span className="text-slate-800">{item.accuracy}%</span></div>
                                        <div className="w-full bg-slate-100 rounded-full h-1.5"><div className={`h-1.5 rounded-full ${item.accent}`} style={{ width: `${item.accuracy}%` }}></div></div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs mb-1 font-medium text-slate-600"><span>F1-Score</span><span className="text-slate-800">{item.f1}%</span></div>
                                        <div className="w-full bg-slate-100 rounded-full h-1.5"><div className={`h-1.5 rounded-full ${item.accent}`} style={{ width: `${item.f1}%` }}></div></div>
                                    </div>
                                </div>

                                {/* Blur Stats */}
                                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                                        <p className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Acc khi Blur</p>
                                        <p className="text-lg font-extrabold text-slate-700">{item.noisyAccuracy}%</p>
                                    </div>
                                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                                        <p className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Mức giảm</p>
                                        <p className="text-lg font-extrabold text-red-500">-{item.drop}%</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 1 Cột cho Tóm tắt so sánh */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center">
                        <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-4 bg-emerald-400 rounded-full"></span>
                            So sánh nhanh
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm">
                                <span className="text-sm font-medium text-slate-500">Tốt nhất</span>
                                <span className="text-sm font-bold text-emerald-600">ResNet50 S3</span>
                            </div>
                            <div className="flex items-center justify-between bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm">
                                <span className="text-sm font-medium text-slate-500">Bám sát nhất</span>
                                <span className="text-sm font-bold text-fuchsia-600">ViT-Base S2</span>
                            </div>
                            <div className="flex items-center justify-between bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm">
                                <span className="text-sm font-medium text-slate-500">Kháng nhiễu tốt</span>
                                <span className="text-sm font-bold text-sky-600">ResNet50 S3</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PHẦN 2: NHẬN XÉT CHI TIẾT */}
                <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-amber-400 rounded-full"></span>
                        Nhận xét
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {comments.map((item) => (
                            <div key={item.title} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-amber-200 transition-colors">
                                <h5 className="font-bold text-slate-800 mb-2">{item.title}</h5>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}