import React from 'react';

const Interpretation = () => {
    return (
        <div className="mt-8 animate-fade-in w-full"> {/* <-- Đã sửa ở đây */}
            <div className="bg-slate-800 text-white p-8 rounded-[2rem] shadow-lg"> {/* Đổi bo góc thành 2rem cho đồng bộ với Dataset */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-xl font-bold mb-4 text-sky-300">Kết quả tốt nhất (LLRD Strategy)</h4>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>ViT-Base (RandAugment)</span>
                                    <span className="font-bold text-green-400">Acc: Cao nhất</span>
                                </div>
                                <div className="w-full bg-slate-700 rounded-full h-2"><div className="bg-sky-400 h-2 rounded-full w-[95%]"></div></div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>ResNet-50 (RandAugment)</span>
                                    <span className="font-bold text-green-400">Acc: Ổn định</span>
                                </div>
                                <div className="w-full bg-slate-700 rounded-full h-2"><div className="bg-red-400 h-2 rounded-full w-[92%]"></div></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-4 text-fuchsia-300">Phân tích Mở rộng (Advanced)</h4>
                        <ul className="list-disc list-inside text-sm space-y-2 text-slate-300">
                            <li><strong>Grad-CAM:</strong> ViT chú ý vùng ngữ nghĩa tổng thể, ResNet tập trung vào rìa/đỉnh chi tiết.</li>
                            <li><strong>Robustness:</strong> Thử nghiệm Gaussian Blur cho thấy ViT chống chịu nhiễu tốt hơn ResNet.</li>
                            <li><strong>Ablation:</strong> RandAugment giúp giảm Overfitting rõ rệt trên cả 2 mô hình.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interpretation;