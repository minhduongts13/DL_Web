import React from 'react';

// Dữ liệu kết quả thực nghiệm từ notebook
const resultsData = {
    metrics: [
        { name: 'Accuracy', resnet: 93.1, vit: 95.5 },
        { name: 'F1-Score', resnet: 92.8, vit: 95.4 },
        { name: 'Precision', resnet: 93.0, vit: 95.6 },
        { name: 'Recall', resnet: 92.7, vit: 95.3 },
    ]
};

const A1Results = () => {
    return (
        <div className="max-w-4xl mx-auto  p-6 sm:p-8 mt-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" className="text-green-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Kết quả & Đánh giá (Results)
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Cột 1 & 2: Biểu đồ so sánh Metrics */}
                <div className="lg:col-span-2 space-y-6">
                    <p className="text-slate-700 leading-relaxed">
                        Qua thực nghiệm, cả hai mô hình đều cho kết quả cực kỳ ấn tượng trên tập kiểm thử (Test). 
                        Tuy nhiên, <strong className="font-semibold text-sky-600">Vision Transformer (ViT)</strong> thể hiện sự vượt trội rõ rệt trên mọi chỉ số cốt lõi:
                    </p>
                    
                    <div className="space-y-5 bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-inner">
                        {resultsData.metrics.map(metric => (
                            <div key={metric.name}>
                                <div className="flex justify-between items-center text-sm mb-1.5">
                                    <span className="font-semibold text-slate-700">{metric.name}</span>
                                    <span className="text-xs text-slate-400">ResNet: {metric.resnet}% vs ViT: {metric.vit}%</span>
                                </div>
                                <div className="space-y-1.5">
                                    {/* Thanh ResNet */}
                                    <div className="w-full bg-slate-200 rounded-full h-2">
                                        <div style={{ width: `${metric.resnet}%` }} className="bg-red-400 h-2 rounded-full transition-all duration-1000"></div>
                                    </div>
                                    {/* Thanh ViT */}
                                    <div className="w-full bg-slate-200 rounded-full h-2.5">
                                        <div style={{ width: `${metric.vit}%` }} className="bg-sky-500 h-2.5 rounded-full transition-all duration-1000 shadow"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Cột 3: Tóm tắt Đánh giá */}
                <div className="bg-[#FEFAF0] p-6 rounded-2xl border border-[#F3A953]/20 shadow-sm flex flex-col justify-center">
                    <div className="text-center space-y-2 mb-4">
                        <div className="text-5xl font-extrabold text-green-600 leading-none">95.5%</div>
                        <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Top-1 Accuracy (ViT)</div>
                    </div>
                    <p className="text-sm text-slate-600 text-center leading-relaxed">
                        Điều này cho thấy ViT có khả năng học được các đặc trưng ngữ nghĩa (semantic features) của cảnh quan tự nhiên tốt hơn khi được thừa hưởng kiến thức từ pretrained model khổng lồ.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default A1Results;