import React from 'react';
import classDistribution from './report/2.2.png';
import captionLength from './report/2.4.png';
import sampleGrid from './report/2.5.png';

const mismatchStats = [
    { label: 'Missing text', value: '7', note: 'Các bản ghi có ảnh nhưng thiếu mô tả.' },
    { label: 'Text missing image', value: '7', note: 'Có caption nhưng không tìm thấy file ảnh tương ứng.' },
    { label: 'Image missing text', value: '1,552', note: 'Nhiều ảnh không có text annotation đi kèm.' },
];

const Overview = () => {
    return (
        <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-slate-100 mt-2 animate-fade-in">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-fuchsia-50 text-fuchsia-600">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"></path></svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                    Tổng quan Dữ liệu <span className="text-slate-400 font-medium text-xl hidden sm:inline-block ml-2">| Overview</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                <div className="xl:col-span-2 space-y-4">
                    <p className="text-slate-700 leading-relaxed text-lg">
                        Dự án Multimodal sử dụng dữ liệu thời trang có cả <strong className="font-bold text-fuchsia-600">ảnh</strong> và <strong className="font-bold text-fuchsia-600">mô tả văn bản</strong>. Mục tiêu là kiểm tra mức độ tương thích giữa hai modality và đánh giá hiệu quả khi chỉ dùng mô tả, chỉ dùng ảnh hoặc kết hợp cả hai.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Theo notebook, phần EDA tập trung vào 3 vấn đề chính: dữ liệu bị lệch giữa text và image, phân bố lớp từ caption, và độ dài caption trước khi đưa vào pipeline CLIP.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                        {mismatchStats.map((item) => (
                            <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                                <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">{item.label}</div>
                                <div className="text-3xl font-extrabold text-slate-800 mb-2">{item.value}</div>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.note}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl border border-fuchsia-100 bg-fuchsia-50/40 p-5 flex flex-col justify-center">
                    <div className="text-center space-y-3">
                        <div className="text-5xl font-extrabold text-fuchsia-600 leading-none">6</div>
                        <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">classes thời trang</div>
                    </div>
                    <p className="text-sm text-slate-600 text-center leading-relaxed mt-4">
                        Bộ dữ liệu gồm 6 nhãn: <strong>Tees, Fullbody, Outerwear, Top_Shirts, Short_Bottom</strong> và <strong>Long_Bottom</strong>. Từ đây, notebook tiếp tục kiểm tra class imbalance và chất lượng caption.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <figcaption className="mb-3 text-center text-lg font-bold text-slate-800">2.2 Class Distribution</figcaption>
                    <img src={classDistribution} alt="Class distribution from text annotations" className="w-full rounded-xl" />
                </figure>

                <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <figcaption className="mb-3 text-center text-lg font-bold text-slate-800">2.4 Caption Length Distribution</figcaption>
                    <img src={captionLength} alt="Caption length distribution" className="w-full rounded-xl" />
                </figure>
            </div>

            <figure className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <figcaption className="mb-3 text-center text-lg font-bold text-slate-800">2.5 Sample Visualization</figcaption>
                <img src={sampleGrid} alt="Sample multimodal visualization grid" className="w-full rounded-xl" />
            </figure>
        </div>
    );
};

export default Overview;