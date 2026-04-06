import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BarChart3, Image as ImageIcon, LineChart, Loader2 } from 'lucide-react';

const Plot = lazy(() => import('react-plotly.js'));

export default function ModelVisualizations({ selectedModel }) {
    const [cmData, setCmData] = useState(null);
    const [isLoadingCM, setIsLoadingCM] = useState(false);

    // Dùng useEffect để gọi dữ liệu JSON mỗi khi selectedModel thay đổi
    useEffect(() => {
        if (!selectedModel) return;

        const loadConfusionMatrix = async () => {
            setIsLoadingCM(true);
            try {
                // Sửa đường dẫn này trỏ tới thư mục chứa file json trong thư mục public của bạn
                // Ví dụ: Đặt folder output_data vào trong thư mục public
                const response = await fetch(`/DL_Web/assignment1/image/confusion_matrix/cm_${selectedModel.id}.json`);
                
                if (!response.ok) throw new Error("Không tìm thấy file JSON");
                const data = await response.json();

                // Lấy danh sách các class độc nhất (['buildings', 'forest', 'glacier', ...])
                const classes = [...new Set(data.map(item => item.trueLabel))];
                
                // Khởi tạo ma trận 2D chứa toàn số 0
                const zMatrix = Array(classes.length).fill(0).map(() => Array(classes.length).fill(0));

                // Điền dữ liệu value vào ma trận 2D
                data.forEach(item => {
                    const yIdx = classes.indexOf(item.trueLabel); // Chỉ số Hàng
                    const xIdx = classes.indexOf(item.predictedLabel); // Chỉ số Cột
                    zMatrix[yIdx][xIdx] = item.value;
                });

                setCmData({ x: classes, y: classes, z: zMatrix });
            } catch (error) {
                console.error("Lỗi khi tải Confusion Matrix:", error);
                setCmData(null);
            } finally {
                setIsLoadingCM(false);
            }
        };

        loadConfusionMatrix();
    }, [selectedModel]);

    if (!selectedModel) return null;

    return (
        <div className="mt-8 rounded-2xl animate-fade-in">
            <h4 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-500" />
                Visualizations for: <span className="text-emerald-600">{selectedModel.name}</span>
            </h4>
            <p className='mb-6'>
                Chọn một model từ bảng trên để xem các biểu đồ trực quan về hiệu suất của nó, bao gồm ma trận nhầm lẫn (confusion matrix) và đồ thị quá trình huấn luyện (training plot).
            </p>
            
            <div className="flex flex-col gap-8">
                
                {/* Khối Confusion Matrix (Đã chuyển sang Plotly) */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-slate-700">
                        <ImageIcon className="w-4 h-4 text-indigo-500" /> Interactive Confusion Matrix
                    </div>
                    
                    <div className="w-full h-[400px] sm:h-[500px] bg-slate-50 rounded-lg relative flex items-center justify-center overflow-hidden border border-slate-100">
                        {isLoadingCM ? (
                            <div className="flex flex-col items-center text-slate-400">
                                <Loader2 className="w-8 h-8 animate-spin mb-2" />
                                <p className="text-sm">Đang tải dữ liệu ma trận...</p>
                            </div>
                        ) : cmData ? (
                            <Suspense fallback={<div className="flex flex-col items-center text-slate-400"><Loader2 className="w-8 h-8 animate-spin mb-2" /><p className="text-sm">Đang tải biểu đồ...</p></div>}>
                            <Plot
                                data={[
                                    {
                                        x: cmData.x,
                                        y: cmData.y,
                                        z: cmData.z,
                                        type: 'heatmap',
                                        colorscale: 'YlGnBu', // Đổi màu tại đây: 'Viridis', 'YlGnBu', 'Reds'...
                                        showscale: true,
                                        text: cmData.z,
                                        texttemplate: "%{text}", // Hiển thị số ngay trong ô
                                        hoverinfo: "x+y+z", // Nội dung khi hover chuột
                                    }
                                ]}
                                layout={{
                                    autosize: true,
                                    margin: { t: 20, l: 80, r: 20, b: 80 }, // Căn lề
                                    xaxis: { title: 'Predicted Label' },
                                    yaxis: { 
                                        title: 'True Label', 
                                        autorange: 'reversed' // Quan trọng: Đảo ngược trục Y để đường chéo chính đi từ trên xuống trái sang phải
                                    },
                                    paper_bgcolor: 'rgba(0,0,0,0)',
                                    plot_bgcolor: 'rgba(0,0,0,0)'
                                }}
                                useResizeHandler={true} // Giúp biểu đồ tự co giãn theo container
                                style={{ width: "100%", height: "100%" }}
                            />
                            </Suspense>
                        ) : (
                            <p className="text-slate-400 text-sm">Chọn một model từ bảng trên để xem confusion matrix của nó.</p>
                        )}
                    </div>
                </div>

                {/* Khối Training Plot (W&B) */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <LineChart className="w-4 h-4 text-fuchsia-500" /> Training & Validation Loss
                        </div>
                        <span className="text-xs font-medium px-2 py-1 bg-yellow-100 text-yellow-700 rounded-md">Live from W&B</span>
                    </div>
                    
                    <div className="w-full h-[400px] sm:h-[500px] bg-slate-50 rounded-lg relative flex items-center justify-center overflow-hidden border border-slate-100">
                        {selectedModel.plot ? (
                            <iframe 
                                src={selectedModel.plot} 
                                style={{ border: 'none', height: '100%', width: '100%' }} 
                                title={`W&B Training Plot for ${selectedModel.name}`}
                                allow="autoplay; encrypted-media"
                            />
                        ) : (
                            <div className="text-center">
                                <p className="text-slate-400 text-sm mb-2">Chưa có link W&B cho model này</p>
                                <img 
                                    src={`/path-to-your-images/plot_${selectedModel.id}.png`} 
                                    alt={`Training Plot of ${selectedModel.name}`}
                                    className="object-contain max-h-[300px] opacity-50"
                                />
                            </div>
                        )}
                    </div>
                </div>
                
            </div>
        </div>
    );
}