import React from "react";
import confusion_matrix_lstm from '../../../assets/Assignment1/text/confusion_matrix_lstm.png'
import confusion_matrix_distillbert from '../../../assets/Assignment1/text/confusion_matrix_distillbert.png'
import classification_report_lstm from '../../../assets/Assignment1/text/classification_report_lstm.png'
import classification_report_distillbert from '../../../assets/Assignment1/text/classification_report_distillbert.png'

const modelResults = [
    {
        name: "ResNet50 S3 (RandAug, LLRD)",
        accuracy: 94.63,
        f1: 94.64,
        noisyAccuracy: 86.6,
        drop: 8.03,
        accent: "bg-sky-500",
        badge: "Tốt nhất",
        badgeClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
    },
    {
        name: "ViT-Base S2 (RandAug)",
        accuracy: 94.47,
        f1: 94.45,
        noisyAccuracy: 84.73,
        drop: 9.73,
        accent: "bg-fuchsia-500",
        badge: "Bám sát",
        badgeClass: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
    },
];

const comments = [
    {
        title: "Nhận xét tổng quan",
        content: "Cả hai mô hình đều có độ chính xác rất tốt (> 90%), giá trị F1 ứng với hầu hết các lớp ở cả hai mô hình đều cho kết quả tốt.",
    },
    {
        title: "So sánh giữa hai mô hình",
        content: "Xét trung bình, mô hình DistillBERT đạt kết quả có phần nhỉnh hơn so với mô hình LSTM, song không đáng kể. Điều này có thể vì tập dữ liệu kiểm thử còn hạn chế",
    },
    {
        title: "Tác động của sự mất cân bằng dữ liệu",
        content: "Các đoạn văn bản có tính 'ngạc nhiên' chiếm thành phần ít nhất trong tập huấn luyện và tập kiểm thử, và kết quả phân loại cũng đồng thời cho thấy cả hai mô hình đều đạt kết quả kém hơn đối với cảm xúc này",
    },
    {
        title: "Hướng cải thiện",
        content: "Giải quyết tình trạng mất cân bằng dữ liệu, bổ sung augmentation, quantization, kết hợp mô hình, ...",
    },
];

export default function Interpretation() {
    return (
        <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-slate-100 mt-8 animate-fade-in">
            
            {/* Header đồng bộ với component Models */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                    Kết quả & Phân tích <span className="text-slate-400 font-medium text-xl hidden sm:inline-block ml-2">| Interpretation</span>
                </h3>
            </div>

            <div className="space-y-10">
                
                <div>Chú giải: 0 - Buồn bã, 1 - Hạnh phúc, 2 - Yêu quý, 3 - Tức giận, 4 - Sợ hãi, 5 - Ngạc nhiên</div>

                {/* PHẦN 1: KẾT QUẢ THỰC NGHIỆM */}
                <div className="grid grid-cols-2 gap-4">

                    <div className="flex flex-col items-center w-full">
                        <div className="mb-10 space-y-6">
                            <p className="text-slate-700 leading-relaxed text-lg max-w-4xl">
                                <strong>LSTM</strong>
                            </p>

                        </div>

                        {/* Ảnh được thiết lập w-full để phóng to tối đa */}
                        <img 
                            src={confusion_matrix_lstm} 
                            alt="Confusion Matrix của mạng LSTM" 
                            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                        />
                        <div className="m-4">Confusion Matrix</div>

                        <img 
                            src={classification_report_lstm} 
                            alt="Kết quả phân loại của mạng LSTM" 
                            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                        />
                        <div className="m-4">Các chỉ số phân loại của LSTM</div>

                    </div>

                    <div className="flex flex-col items-center w-full">
                        <div className="mb-10 space-y-6">
                            <p className="text-slate-700 leading-relaxed text-lg max-w-4xl">
                                <strong>DistilBERT</strong>
                            </p>

                        </div>

                        {/* Ảnh được thiết lập w-full để phóng to tối đa */}
                        <img 
                            src={confusion_matrix_distillbert} 
                            alt="Confusion Matrix của mạng DistillBERT" 
                            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                        />
                        <div className="m-4">Confusion Matrix</div>

                        <img 
                            src={classification_report_distillbert} 
                            alt="Kết quả phân loại của mạng DistillBERT" 
                            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                        />
                        <div className="m-4">Các chỉ số phân loại của DistillBERT</div>

                    </div>
                    
                </div>

                {/* PHẦN 2: NHẬN XÉT CHI TIẾT */}
                <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-amber-400 rounded-full"></span>
                        Nhận xét
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {comments.map((item) => (
                            <div key={item.title} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-amber-200 transition-colors">
                                <h5 className="font-bold text-slate-800 mb-2">{item.title}</h5>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}