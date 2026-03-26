import React from 'react';
import text_frequency_label from '../../../assets/Assignment1/text/text_frequency_label.png';
import text_sentences_length from '../../../assets/Assignment1/text/text_sentences_length.png'

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
                    Bộ dữ liệu gồm các bài Tweet tiếng Anh với sáu loại cảm xúc khác nhau. Bộ dữ liệu được thu thập dựa trên các hashtag của 
                    Twitter và đã được tiền xử lý bởi tác giả.
                </p>

            </div>
            
            {/* PHẦN DƯỚI: Khung chứa ảnh tràn viền (Full width) */}
            <div className="flex flex-col items-center w-full">
                {/* Ảnh được thiết lập w-full để phóng to tối đa */}
                <img 
                    src={text_frequency_label} 
                    alt="Biểu đồ phân bố dữ liệu" 
                    className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                />
            </div>
            <div className="mt-6 text-slate-700 text-base sm:text-lg leading-relaxed">
                <span className="font-bold text-indigo-700 mr-2">Nhận xét:</span>
                <p>Có sự bất cân bằng giữa các lớp trong tập dữ liệu</p>
            </div>

            <div className="flex flex-col items-center w-full">
                {/* Ảnh được thiết lập w-full để phóng to tối đa */}
                <img 
                    src={text_sentences_length} 
                    alt="Phân phối độ dài các câu văn" 
                    className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                />
            </div>
            <div className="mt-6 text-slate-700 text-base sm:text-lg leading-relaxed">
                <span className="font-bold text-indigo-700 mr-2">Nhận xét:</span>
                <p>Các câu văn có độ dài không quá 300 từ, hầu hết tập trung ở mức ngắn hoặc trung bình (dưới 200 chữ)</p>
            </div>


        </div>
    );
};

export default A1Dataset;