import React, { useState } from 'react';

const TextDemo = () => {

    const [text, setText] = useState("");
    const [model, setModel] = useState("lstm");
    const [prediction, setPrediction] = useState(null);
    const [isClassifying, setIsClassifying] = useState(false);
    
    const handleSubmit = async (e) => {
        if (!text) return;

        setIsClassifying(true);
        setPrediction(null);

        try {
            const response = await fetch(
                "https://QAnh-320-Text-Classification.hf.space/predict",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "text": text,
                        "model_name": model,
                    }),
                }
            );

            const data = await response.json();
            setPrediction(data)
        } catch (error) {
            console.error("Error: ", error);
            setPrediction({ error: "Failed to fetch prediction"});
        }

        console.log(prediction);
        console.log(typeof prediction);        
        setIsClassifying(false);
    };


    return (
        <div className="bg-white rounded-[20px] p-6 sm:p-8 shadow-sm border border-slate-100 mt-8">
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" className="text-[#DD2476]"><path d="M2 12h4l3-9 5 18 3-9h5"></path></svg>
                    Live Model Demonstration
                </h3>
                <p className="text-slate-500 mt-2">Gõ nội dung văn bản.</p>
            </div>

            <div className="gap-8 lg:gap-12 space-y-4">
                
                {/* === CỘT TRÁI: INPUT KHU VỰC === */}
                <div className="space-y-6">
                    {/* Khu vực Upload Ảnh */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">1. Gõ văn bản</label>
                        <div className="relative w-full h-64 sm:h-72 rounded-2xl border-2 border-dashed border-slate-300 bg-[#F3F6F6] hover:bg-slate-50 transition-colors flex flex-col items-center justify-center overflow-hidden group">
                            <textarea 
                                value = {text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Nhập nội dung..."
                                row= {5}
                                style = {{ width: "100%", marginBottom: "10px"}}
                            />                            
                        </div>
                    </div>

                    {/* Khu vực Chọn Model */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">2. Chọn mô hình</label>
                        <div className="grid grid-cols-2 gap-4">
                            <button 
                                onClick={() => setModel('lstm')}
                                disabled={isClassifying}
                                className={`py-3 px-4 rounded-xl border-2 font-medium transition-all ${model === 'lstm' ? 'border-[#FA5252] bg-[#FCF4FF] text-[#FA5252]' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
                            >
                                LSTM
                            </button>
                            <button 
                                onClick={() => setModel('transformer')}
                                disabled={isClassifying}
                                className={`py-3 px-4 rounded-xl border-2 font-medium transition-all ${model === 'transformer' ? 'border-[#528af0] bg-[#EEF5FA] text-[#528af0]' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
                            >
                                DistillBERT
                            </button>
                        </div>
                    </div>

                    {/* Nút Phân loại */}
                    <button 
                        onClick={handleSubmit}
                        disabled={!text || isClassifying}
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

                <div>
                    <p><strong>Kết quả dự báo</strong></p>
                    {prediction?.prediction}
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

export default TextDemo;