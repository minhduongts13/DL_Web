import React, { useState } from 'react';

const ImageDemo = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [selectedModel, setSelectedModel] = useState('resnet');
    const [isClassifying, setIsClassifying] = useState(false);
    const [results, setResults] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageSrc(imageUrl);
            setResults(null);
            setImageFile(file); 
        }
    };

    const handleClassify = async () => {
        if (!imageFile) return;
        
        setIsClassifying(true);
        setResults(null);

        // Tạo gói dữ liệu (FormData) chứa ảnh và tên model
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('model_type', selectedModel); // Gửi 'resnet' hoặc 'vit'

        // 1. Tạo AbortController và thiết lập Timeout (ví dụ: 30000ms = 30 giây)
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000);

        try {
            const response = await fetch('https://minhduongts13-dl.hf.space/predict', {
                method: 'POST',
                body: formData,
                signal: controller.signal, // 2. Gắn tín hiệu abort vào fetch
            });

            // 3. Xóa bộ đếm thời gian nếu request thành công trước khi hết giờ
            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`Lỗi kết nối: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                setResults(data.predictions); 
            } else {
                alert("Server báo lỗi: Không thể dự đoán ảnh này.");
            }
        } catch (error) {
            // Đảm bảo xóa bộ đếm thời gian nếu có lỗi xảy ra
            clearTimeout(timeoutId);

            // 4. Xử lý riêng biệt lỗi do Timeout và các lỗi khác
            if (error.name === 'AbortError') {
                console.error("API Timeout: Máy chủ phản hồi quá lâu.");
                alert("Máy chủ phản hồi quá lâu (Timeout). Hugging Face Space có thể đang khởi động, vui lòng thử lại sau vài giây!");
            } else {
                console.error("Lỗi khi gọi API:", error);
                alert("Không thể kết nối đến Backend Server. Hãy đảm bảo Server đang chạy!");
            }
        } finally {
            setIsClassifying(false);
        }
    };

    return (
        <div className="bg-white rounded-[20px] p-6 sm:p-8 shadow-sm border border-slate-100 mt-8">
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" className="text-[#DD2476]"><path d="M2 12h4l3-9 5 18 3-9h5"></path></svg>
                    Live Model Demonstration
                </h3>
                <p className="text-slate-500 mt-2">Tải ảnh lên để xem cách các mô hình CNN và Vision Transformer của nhóm hoạt động trong thời gian thực.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* === CỘT TRÁI: INPUT KHU VỰC === */}
                <div className="space-y-6">
                    {/* Khu vực Upload Ảnh */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">1. Tải ảnh lên</label>
                        <div className="relative w-full h-64 sm:h-72 rounded-2xl border-2 border-dashed border-slate-300 bg-[#F3F6F6] hover:bg-slate-50 transition-colors flex flex-col items-center justify-center overflow-hidden group">
                            
                            {imageSrc ? (
                                <>
                                    <img src={imageSrc} alt="Preview" className="w-full h-full object-contain bg-black/5" />
                                    {/* Hiệu ứng quét ảnh khi đang loading */}
                                    {isClassifying && (
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FA5252]/30 to-transparent w-full h-1/2 animate-[scan_1.5s_ease-in-out_infinite]"></div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center px-4">
                                    <svg className="mx-auto h-12 w-12 text-slate-400 mb-3" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    <p className="text-sm text-slate-500">Drag and drop an image, or click to browse</p>
                                </div>
                            )}
                            
                            {/* Nút input ẩn đè lên toàn bộ khu vực */}
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleImageUpload}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                disabled={isClassifying}
                            />
                        </div>
                    </div>

                    {/* Khu vực Chọn Model */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">2. Chọn mô hình</label>
                        <div className="grid grid-cols-2 gap-4">
                            <button 
                                onClick={() => setSelectedModel('resnet')}
                                disabled={isClassifying}
                                className={`py-3 px-4 rounded-xl border-2 font-medium transition-all ${selectedModel === 'resnet' ? 'border-[#FA5252] bg-[#FCF4FF] text-[#FA5252]' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
                            >
                                ResNet-50
                            </button>
                            <button 
                                onClick={() => setSelectedModel('vit')}
                                disabled={isClassifying}
                                className={`py-3 px-4 rounded-xl border-2 font-medium transition-all ${selectedModel === 'vit' ? 'border-[#528af0] bg-[#EEF5FA] text-[#528af0]' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
                            >
                                ViT-Base
                            </button>
                        </div>
                    </div>

                    {/* Nút Phân loại */}
                    <button 
                        onClick={handleClassify}
                        disabled={!imageSrc || isClassifying}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white font-bold text-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex justify-center items-center gap-2"
                    >
                        {isClassifying ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                Đang dự đoán...
                            </>
                        ) : 'Dự đoán'}
                    </button>
                </div>


                {/* === CỘT PHẢI: OUTPUT KHU VỰC === */}
                <div className="bg-[#F3F6F6] rounded-2xl p-6 flex flex-col justify-center">
                    
                    {!results && !isClassifying && (
                        <div className="text-center text-slate-400">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mx-auto h-16 w-16 mb-4 opacity-50" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                            <p>Upload an image and click "Run Inference" <br/> to see model predictions.</p>
                        </div>
                    )}

                    {isClassifying && (
                        <div className="text-center text-slate-500 space-y-4">
                            <div className="flex justify-center gap-2">
                                <div className="w-3 h-3 bg-[#FA5252] rounded-full animate-bounce"></div>
                                <div className="w-3 h-3 bg-[#DD2476] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-3 h-3 bg-[#528af0] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                            <p className="font-medium animate-pulse">Extracting features with {selectedModel === 'resnet' ? 'ResNet-50' : 'ViT-Base'}...</p>
                        </div>
                    )}

                    {results && !isClassifying && (
                        <div className="animate-fade-in w-full">
                            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Prediction Results</h4>
                            
                            {/* Hiển thị Top 1 rõ ràng nhất */}
                            <div className="mb-8">
                                <p className="text-sm text-slate-500 mb-1">Top Prediction</p>
                                <div className="flex items-end gap-3">
                                    <h2 className="text-3xl font-bold text-slate-800 leading-none">{results[0].label}</h2>
                                    <span className="text-xl font-bold text-green-500 leading-none">{results[0].score}%</span>
                                </div>
                            </div>

                            {/* Biểu đồ thanh ngang cho Top Predictions */}
                            <div className="space-y-4">
                                <p className="text-sm text-slate-500 mb-2">Confidence Scores</p>
                                {results.map((result, index) => (
                                    <div key={index} className="w-full">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="font-medium text-slate-700 truncate pr-4">{result.label}</span>
                                            <span className="text-slate-500">{result.score}%</span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-2.5">
                                            <div 
                                                className={`h-2.5 rounded-full ${index === 0 ? 'bg-gradient-to-r from-[#FA5252] to-[#DD2476]' : 'bg-slate-400'}`} 
                                                style={{ width: `${result.score}%`, transition: 'width 1s ease-out' }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Badge chỉ định model đã dùng */}
                            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                                <span className="text-xs text-slate-400 font-medium">Inference latency: ~124ms</span>
                                <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-600 shadow-sm border border-slate-100">
                                    Model: {selectedModel === 'resnet' ? 'ResNet-50_Aug' : 'ViT-Base_Aug'}
                                </span>
                            </div>
                        </div>
                    )}
                </div>

            </div>

            {/* Thêm CSS cho hiệu ứng quét ảnh (Scan line) */}
            <style>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(200%); }
                }
            `}</style>
        </div>
    );
};

export default ImageDemo;