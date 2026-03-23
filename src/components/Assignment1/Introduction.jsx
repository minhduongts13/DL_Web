import React, { useState } from 'react';
import Part1Image from './Image/Part1Image';
import Part2Text from './Text/Part2Text';
import Part3Multimodal from './Multimodal/Part3Multimodal';

// Dữ liệu cô đọng cho 3 phần, tích hợp sẵn các class màu sắc cho trạng thái Active/Inactive
const projectParts = [
    {
        id: 'part1',
        title: 'Phần 1: Dữ liệu Ảnh',
        icon: (
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        ),
        comparison: 'CNN vs Vision Transformer (ViT)',
        color: 'text-sky-600',
        bgColor: 'bg-sky-100',
        activeCard: 'border-sky-400 bg-sky-50 shadow-md scale-105 ring-1 ring-sky-400',
        inactiveCard: 'border-slate-200 bg-slate-50 hover:border-sky-300 hover:bg-white',
    },
    {
        id: 'part2',
        title: 'Phần 2: Dữ liệu Văn bản',
        icon: (
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        ),
        comparison: 'RNN vs Transformer',
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-100',
        activeCard: 'border-indigo-400 bg-indigo-50 shadow-md scale-105 ring-1 ring-indigo-400',
        inactiveCard: 'border-slate-200 bg-slate-50 hover:border-indigo-300 hover:bg-white',
    },
    {
        id: 'part3',
        title: 'Phần 3: Đa phương thức',
        icon: (
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"></path></svg>
        ),
        comparison: 'Zero-shot vs Few-shot Classification',
        color: 'text-fuchsia-600',
        bgColor: 'bg-fuchsia-100',
        activeCard: 'border-fuchsia-400 bg-fuchsia-50 shadow-md scale-105 ring-1 ring-fuchsia-400',
        inactiveCard: 'border-slate-200 bg-slate-50 hover:border-fuchsia-300 hover:bg-white',
    }
];

export default function ContentNavigation() {
    const [activeTab, setActiveTab] = useState('part1');

    return (
        <div className="mt-10 animate-fade-in">
            {/* 1. KHU VỰC TỔNG QUAN KIÊM THANH ĐIỀU HƯỚNG */}
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 mb-8">
                
                {/* Tiêu đề */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                    <div className="p-3 rounded-xl bg-slate-100 text-slate-600">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"></path><path d="M12 12.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z"></path></svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">Tổng quan Dự án</h3>
                </div>
                
                {/* Đoạn mô tả chính */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                    Bài tập lớn 1 đi sâu vào bài toán cốt lõi của Học sâu: <strong className="font-semibold text-slate-800">Phân loại (Classification)</strong>. 
                    Dự án tiến hành tinh chỉnh (fine-tune) các kiến trúc <em className="text-slate-700">State-of-the-Art</em> và đặt chúng lên "bàn cân" đánh giá toàn diện qua ba kịch bản dữ liệu thực tế. Qua đó, báo cáo làm rõ ưu nhược điểm, hiệu năng và khả năng giải thích (interpretability) của từng họ mô hình tiên tiến.
                    
                    <span className="inline-flex items-center gap-2 mt-4 px-4 py-2.5 bg-sky-50 text-sky-700 text-sm font-medium rounded-xl border border-sky-100">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                        Click vào từng thẻ bên dưới để xem chi tiết báo cáo thực nghiệm
                    </span>
                </p>
                
                {/* Lưới 3 phần ĐÓNG VAI TRÒ LÀ CÁC TAB */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {projectParts.map(part => {
                        const isActive = activeTab === part.id;
                        return (
                            <button 
                                key={part.id}
                                onClick={() => setActiveTab(part.id)}
                                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 outline-none ${isActive ? part.activeCard : part.inactiveCard}`}
                            >
                                <div className={`w-14 h-14 ${part.bgColor} ${part.color} rounded-xl flex items-center justify-center mb-4 transition-transform ${isActive ? 'scale-110' : ''}`}>
                                    {part.icon}
                                </div>
                                <h4 className="text-lg font-bold text-slate-800 mb-1">{part.title}</h4>
                                <p className="text-sm font-semibold text-slate-500">{part.comparison}</p>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* 2. KHU VỰC HIỂN THỊ NỘI DUNG CHI TIẾT */}
            <div className="bg-white p-2 sm:p-6 rounded-[2rem] min-h-[500px]">
                {activeTab === 'part1' && (
                    <div className="animate-fade-in">
                        <Part1Image />
                    </div>
                )}

                {activeTab === 'part2' && (
                    <div className="animate-fade-in">
                        <Part2Text />
                    </div>
                )}

                {activeTab === 'part3' && (
                    <div className="animate-fade-in">
                        <Part3Multimodal />
                    </div>
                )}
            </div>
        </div>
    );
}