import React from 'react';
import datasetImg from '../../../assets/Assignment1/image/dataset.png';

const classNames = ['Buildings', 'Forest', 'Glacier', 'Mountain', 'Sea', 'Street'];

const A1Dataset = () => {
    return (
        <div className="bg-white rounded-[2rem] p-8 sm:p-6 shadow-sm border border-slate-100 mt-2 animate-fade-in">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                    Tổng quan Dữ liệu <span className="text-slate-400 font-medium text-xl hidden sm:inline-block ml-2">| Dataset</span>
                </h3>
            </div>
            
            {/* PHẦN TRÊN: Text & Tags (Trải dài toàn màn hình) */}
            <div className="mb-10 space-y-6">
                <p className="text-slate-700 leading-relaxed text-lg max-w-4xl">
                    Bộ dữ liệu được sử dụng bao gồm hàng ngàn hình ảnh cảnh quan tự nhiên và đô thị, được chia đều vào <strong className="font-bold text-indigo-600">6 lớp (classes)</strong> chính:
                </p>

                {/* Danh sách các class */}
                <div className="flex flex-wrap gap-3">
                    {classNames.map((cls, index) => (
                        <span 
                            key={cls} 
                            className="px-4 py-2.5 bg-white text-slate-700 rounded-xl text-sm font-bold border border-slate-200 shadow-sm hover:border-indigo-300 hover:text-indigo-600 hover:-translate-y-0.5 transition-all cursor-default flex items-center gap-2"
                        >
                            <span className="text-indigo-400 font-mono text-xs bg-indigo-50 px-1.5 py-0.5 rounded-md">0{index + 1}</span>
                            {cls}
                        </span>
                    ))}
                </div>
            </div>
            
            {/* PHẦN DƯỚI: Khung chứa ảnh tràn viền (Full width) */}
            <div className="flex flex-col items-center w-full">
                {/* Ảnh được thiết lập w-full để phóng to tối đa */}
                <img 
                    src={datasetImg} 
                    alt="Biểu đồ phân bố dữ liệu" 
                    className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                />
            </div>
            <div className="mt-6 text-slate-700 text-base sm:text-lg leading-relaxed">
                <span className="font-bold text-indigo-700 mr-2">Nhận xét:</span>
                <strong className="font-semibold text-slate-800">Dữ liệu khá cân bằng.</strong> Số lượng ảnh giữa 6 lớp phân bố khá đồng đều trên cả tập huấn luyện và tập kiểm thử.
            </div>
            
        </div>
    );
};

export default A1Dataset;