import React from "react";
import precison_models from '../../../assets/Assignment1/text/precision_across_models.png'
import recall_models from '../../../assets/Assignment1/text/recall_across_models.png'
import f1_models from '../../../assets/Assignment1/text/f1_across_models.png'

import lstm_precison_balance from '../../../assets/Assignment1/text/precision_lstm_balanced.png'
import lstm_recall_balance from '../../../assets/Assignment1/text/recall_lstm_balanced.png'
import bert_precison_balance from '../../../assets/Assignment1/text/precision_bert_balanced.png'
import bert_recall_balance from '../../../assets/Assignment1/text/recall_bert_balanced.png'
import bert_precison_quantized from '../../../assets/Assignment1/text/precision_bert_quantized.png'
import bert_recall_quantized from '../../../assets/Assignment1/text/recall_bert_quantized.png'



const comments = [
    {
        title: "Nhận xét tổng quan",
        content: "Các mô hình đều cho kết quả tốt, song sự mất cân bằng dữ liệu vẫn thể hiện thể hiện rõ tác động kể cả khi đã bổ sung thêm phương pháp nhằm hạn chế vấn đề này.",
    },
    {
        title: "Tác dụng phụ của Random Weight Sampling",
        content: "Việc sử dụng Random Weight Sampling hoặc chỉ giúp cải thiện kết quả lên không đáng kể, hoặc gây ra hiện tượng mô hình thường đưa ra các dự đoán thiên về lớp thiểu số.",
    },
    {
        title: "Quantization",
        content: "Quá trình quantization có hiệu quả cao, vừa giúp giảm kích thước mô hình đáng kể (đặc biệt là các mô hình phức tạp), nhưng vẫn giữ được performance tương đối ổn",
    },
    {
        title: "Đánh giá chi tiết",
        content: "Mô hình LSTM cho kết quả tương đối tốt, song bị ảnh hưởng nhiều bởi mất cân bằng dữ liệu. Trong khi đó, xét ở họ BERT, mạng BERT tuy tốt, song không hiệu quả; mạng TinyBERT có độ chính xác nhỏ, song huấn luyện nhanh; còn mạng DistilBERT nằm giữa hai mạng này.",
    },

];


function Models() {
  const data = [
    { name: "LSTM", training_time: 974, epochs: 17, average_epoch_time: 57.3, inference_time: 0.722, accuarcy: 0.911, FLOPs: 6144, size: 39.4 },
    { name: "BERT", training_time: 4501.3, epochs: 13, average_epoch_time: 346.3, inference_time: 8.630, accuarcy: 0.923, FLOPs: 5612617728, size: 417 },
    { name: "DistilBERT", training_time: 1291.3, epochs: 6, average_epoch_time: 215.2, inference_time: 1.971, accuarcy: 0.927, FLOPs: 2806732800, size: 255 },
    { name: "TinyBERT", training_time: 435.3, epochs: 32, average_epoch_time: 13.6, inference_time: 2.141, accuarcy: 0.899, FLOPs: 26180608, size: 16 },
];

  return (
    <div className="p-1">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-center px-4 py-2 border-b">Mô hình</th>
            <th className="text-center px-4 py-2 border-b">Thời gian huấn luyện (s)</th>
            <th className="text-center px-4 py-2 border-b">Số epochs</th>
            <th className="text-center px-4 py-2 border-b">Thời gian trung bình một epoch (s)</th>
            <th className="text-center px-4 py-2 border-b">Thời gian trung bình xử lý một request (ms)</th>
            <th className="text-center px-4 py-2 border-b">Độ chính xác</th>
            <th className="text-center px-4 py-2 border-b">FLOPs</th>
            <th className="text-center px-4 py-2 border-b">Kích thước mô hình (MB)</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{item.name}</td>
              <td className="px-4 py-2 border-b">{item.training_time.toFixed(1)}</td>
              <td className="px-4 py-2 border-b">{item.epochs}</td>
              <td className="px-4 py-2 border-b">{item.average_epoch_time.toFixed(2)}</td>
              <td className="px-4 py-2 border-b">{item.inference_time.toFixed(3)}</td>
              <td className="px-4 py-2 border-b">{item.accuarcy.toFixed(3)}</td>
              <td className="px-4 py-2 border-b">{item.FLOPs.toLocaleString()}</td>
              <td className="px-4 py-2 border-b">{item.size.toFixed(0)}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


function Quantization() {
  const data = [
    { name: "BERT", original: 417, quantized: 173, original_time: 65.1, quantized_time: 62.3 },
    { name: "DistilBERT", original: 255, quantized: 132, original_time: 37.0, quantized_time: 31.0 },
    { name: "TinyBERT", original: 16, quantized: 15.5, original_time: 2.1, quantized_time: 2.3 },
];

  return (
    <div className="p-1">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-center px-4 py-2 border-b">Mô hình</th>
            <th className="text-center px-4 py-2 border-b">Kích thước ban đầu (MB)</th>
            <th className="text-center px-4 py-2 border-b">Kích thước sau quantized (MB)</th>
            <th className="text-center px-4 py-2 border-b">Thời gian xử lý trung bình ban đầu (ms)</th>
            <th className="text-center px-4 py-2 border-b">Thời gian xử lý trung bình sau quantized (ms)</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{item.name}</td>
              <td className="px-4 py-2 border-b">{item.original}</td>
              <td className="px-4 py-2 border-b">{item.quantized.toFixed(1)}</td>
              <td className="px-4 py-2 border-b">{item.original_time.toFixed(1)}</td>
              <td className="px-4 py-2 border-b">{item.quantized_time.toFixed(1)}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


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
                
                <div>{Models()}</div>

                <div>Các kết quả về thời gian huấn luyện, xử lý và kích thước mô hình</div>

                {/* PHẦN 1: KẾT QUẢ THỰC NGHIỆM */}
                <div className="grid grid-cols-2 gap-4">

                    <div className="flex flex-col items-center w-full">

                        {/* Ảnh được thiết lập w-full để phóng to tối đa */}

                        <img 
                            src={precison_models} 
                            alt="Precision của các mô hình" 
                            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                        />
                        <div className="m-4">Precision của các mô hình</div>

                    </div>

                    <div className="flex flex-col items-center w-full">
                        {/* Ảnh được thiết lập w-full để phóng to tối đa */}
                        <img 
                            src={recall_models} 
                            alt="Recall của các mô hình" 
                            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                        />
                        <div className="m-4">Recall của các mô hình</div>

                    </div>
                    
                </div>

                <div>
                    <img 
                        src={f1_models} 
                        alt="Recall của các mô hình" 
                        className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                    />
                    <div className="m-4">F1 của các mô hình</div>
                </div>

                <div className="grid grid-cols-2 gap-4">

                    <div className="flex flex-col items-center w-full">

                        {/* Ảnh được thiết lập w-full để phóng to tối đa */}

                        <img 
                            src={lstm_precison_balance} 
                            alt="So sánh Precision của mạng LSTM giữa dùng và không dùng Weighted Random Sampler" 
                            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                        />
                        <div className="m-4">So sánh Precision của mạng LSTM giữa dùng và không dùng Weighted Random Sampler</div>

                    </div>

                    <div className="flex flex-col items-center w-full">
                        {/* Ảnh được thiết lập w-full để phóng to tối đa */}
                        <img 
                            src={lstm_recall_balance} 
                            alt="So sánh Recall của mạng LSTM giữa dùng và không dùng Weighted Random Sampler" 
                            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                        />
                        <div className="m-4">So sánh Recall của mạng LSTM giữa dùng và không dùng Weighted Random Sampler</div>

                    </div>
                    
                </div>

                <div className="grid grid-cols-2 gap-4">

                    <div className="flex flex-col items-center w-full">

                        {/* Ảnh được thiết lập w-full để phóng to tối đa */}

                        <img 
                            src={bert_precison_balance} 
                            alt="So sánh Precision của mạng BERT giữa dùng và không dùng Weighted Random Sampler" 
                            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                        />
                        <div className="m-4">So sánh Precision của mạng BERT giữa dùng và không dùng Weighted Random Sampler</div>

                    </div>

                    <div className="flex flex-col items-center w-full">
                        {/* Ảnh được thiết lập w-full để phóng to tối đa */}
                        <img 
                            src={bert_recall_balance} 
                            alt="So sánh Recall của mạng BERT giữa dùng và không dùng Weighted Random Sampler" 
                            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                        />
                        <div className="m-4">So sánh Recall của mạng BERT giữa dùng và không dùng Weighted Random Sampler</div>

                    </div>
                    
                </div>

                <div>{Quantization()}</div>

                <div className="grid grid-cols-2 gap-4">

                    <div className="flex flex-col items-center w-full">

                        {/* Ảnh được thiết lập w-full để phóng to tối đa */}

                        <img 
                            src={bert_precison_quantized} 
                            alt="So sánh Precision của mạng BERT thường và mạng BERT được quantized" 
                            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                        />
                        <div className="m-4">So sánh Precision của mạng BERT thường và mạng BERT được quantized</div>

                    </div>

                    <div className="flex flex-col items-center w-full">
                        {/* Ảnh được thiết lập w-full để phóng to tối đa */}
                        <img 
                            src={bert_recall_quantized} 
                            alt="So sánh Recall của mạng BERT thường và mạng BERT được quantized" 
                            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-xl"
                        />
                        <div className="m-4">So sánh Recall của mạng BERT thường và mạng BERT được quantized</div>

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