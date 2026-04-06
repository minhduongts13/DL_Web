import React from 'react';
import Overview from './Overview';
import AdvancedCharts from './Similarity';
import color_chart from '../../../../assets/Assignment1/image/color_distribution.png';
import augmentation from '../../../../assets/Assignment1/image/augmentation.png';
import UmapVisualization from './Umap';

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
            <Overview />
            <p className="mt-2 mb-4 text-xl text-black text-center font-bold">
                Phân bố cường độ các kênh màu RGB theo từng nhãn dữ liệu
            </p>
            <img src={color_chart} alt="Color Distribution chart" />
            <AdvancedCharts />
            <UmapVisualization />
            <p className="mt-2 mb-4 text-xl text-black text-center font-bold">
                Trực quan hóa kết quả áp dụng kỹ thuật Data Augmentation trên tập dữ liệu ảnh
            </p>
            <img src={augmentation} alt="Augmentation visualization" />
        </div>
    );
};

export default A1Dataset;