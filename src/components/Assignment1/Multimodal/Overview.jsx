import React from 'react';
import classDistribution from './report/2.3.png';
import imageSizeDistribution from './report/2.4.png';
import captionLengthDistribution from './report/2.5.png';
import sampleGrid from './report/2.6.png';

const mismatchStats = [
    { label: 'Tổng mẫu', value: '20,000', note: 'Tất cả bản ghi đều có ảnh, nhãn category1, caption và item_ID.' },
    { label: 'Valid image + text', value: '100%', note: 'Notebook không phát hiện missing, empty string hoặc unreadable image.' },
    { label: 'Imbalance ratio', value: '2.18x', note: 'Lớp nhiều nhất là dresses, lớp ít nhất là jackets.' },
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
                        Phần Multimodal sử dụng <strong className="font-bold text-fuchsia-600">Fashion20k</strong>, một subset từ Fashion200k, gồm ảnh sản phẩm thời trang và mô tả văn bản đi kèm. Bài toán chính là phân loại <strong className="font-bold text-fuchsia-600">loại trang phục</strong> bằng các mô hình CLIP.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Phần EDA trong notebook đi theo thứ tự: kiểm tra schema và missing values, xem phân bố lớp, khảo sát kích thước ảnh, phân tích độ dài caption, rồi trực quan hóa các cặp ảnh-caption đại diện.
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
                        <div className="text-5xl font-extrabold text-fuchsia-600 leading-none">5</div>
                        <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">classes trang phục</div>
                    </div>
                    <p className="text-sm text-slate-600 text-center leading-relaxed mt-4">
                        Bộ dữ liệu gồm 5 nhãn: <strong>dresses, jackets, pants, skirts</strong> và <strong>tops</strong>. Dresses chiếm nhiều nhất với 5,861 mẫu, jackets ít nhất với 2,691 mẫu.
                    </p>
                </div>
            </div>

            <figure className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <figcaption className="mb-3 text-center text-lg font-bold text-slate-800">2.3 Class Distribution</figcaption>
                <img src={classDistribution} alt="Class distribution for category1" className="w-full rounded-xl" />
            </figure>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <figcaption className="mb-3 text-center text-lg font-bold text-slate-800">2.4 Image Size Distribution</figcaption>
                    <img src={imageSizeDistribution} alt="Width and height distribution" className="w-full rounded-xl" />
                </figure>

                <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <figcaption className="mb-3 text-center text-lg font-bold text-slate-800">2.5 Caption Length Analysis</figcaption>
                    <img src={captionLengthDistribution} alt="Caption length distribution by word count" className="w-full rounded-xl" />
                </figure>
            </div>

            <figure className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <figcaption className="mb-3 text-center text-lg font-bold text-slate-800">2.6 Sample Visualization</figcaption>
                <img src={sampleGrid} alt="Sample multimodal visualization grid" className="w-full rounded-xl" />
            </figure>
        </div>
    );
};

export default Overview;
