import React from 'react';

const A1Introduction = () => {
    return (
        <div className="max-w-4xl mx-auto  p-6 sm:p-8 mt-8 animate-fade-in">
            <h3 className="text-4xl font-bold leading-tight text-[#484E53] text-center mb-4">Phần 1: Bài toán phân loại ảnh</h3>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" className="text-sky-600"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Giới thiệu Bài tập lớn 1
            </h3>
            
            <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                    Bài tập lớn 1 tập trung vào bài toán cơ bản nhưng quan trọng trong Thị giác máy tính: <strong className="font-semibold text-sky-600">Phân loại ảnh (Image Classification)</strong>. 
                    Mục tiêu chính là phân loại các cảnh quan tự nhiên và đô thị vào 6 lớp khác nhau.
                </p>
                <p>
                    Điểm nhấn của bài tập này là việc <strong className="font-semibold text-slate-700">so sánh chéo (cross-comparison)</strong> giữa hai kiến trúc mạng tiên tiến nhất hiện nay:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong className="text-slate-900">ResNet50 (Convolutional Neural Network - CNN):</strong> Đại diện cho dòng mạng tích chập truyền thống nhưng cực kỳ mạnh mẽ với các khối Residual Connection.</li>
                    <li><strong className="text-slate-900">Vision Transformer (ViT):</strong> Kiến trúc mới nổi dựa trên cơ chế Self-Attention, chuyển đổi ảnh thành chuỗi các patch để xử lý.</li>
                </ul>
                <p>
                    Dự án không chỉ đánh giá độ chính xác (Accuracy) mà còn đi sâu vào phân tích các chỉ số F1-Score, Precision, Recall và áp dụng kỹ thuật Grad-CAM để "giải thích" cách mô hình ra quyết định.
                </p>
            </div>
        </div>
    );
};

export default A1Introduction;