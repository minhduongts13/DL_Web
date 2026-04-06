import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Loader2, ScatterChart } from 'lucide-react';

const Plot = lazy(() => import('react-plotly.js'));

export default function UmapVisualization() {
    const [umapTraces, setUmapTraces] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const loadUmapData = async () => {
            setIsLoading(true);
            try {
                // Đảm bảo file JSON UMAP được đặt trong thư mục public
                // Ví dụ: public/DL_Web/assignment1/image/umap/umap_vit_s2_randaug.json
                const response = await fetch(`/DL_Web/assignment1/image/umap/umap_resnet.json`);
                
                if (!response.ok) throw new Error("Không tìm thấy file UMAP JSON");
                const data = await response.json();

                // 1. Tìm tất cả các nhãn (classes) độc nhất
                const classes = [...new Set(data.map(item => item.label))];

                // 2. Định nghĩa bảng màu cho 6 class (để đồng bộ màu giữa các model)
                const colorPalette = {
                    'buildings': '#ef4444', // Đỏ
                    'forest': '#22c55e',    // Xanh lá
                    'glacier': '#0ea5e9',   // Xanh dương nhạt
                    'mountain': '#8b5cf6',  // Tím
                    'sea': '#3b82f6',       // Xanh dương đậm
                    'street': '#f59e0b'     // Vàng cam
                };

                // 3. Tách dữ liệu thành từng 'trace' (từng nhóm) cho Plotly
                const traces = classes.map(className => {
                    // Lọc ra các điểm thuộc về class hiện tại
                    const classPoints = data.filter(item => item.label === className);
                    
                    return {
                        x: classPoints.map(p => p.x),
                        y: classPoints.map(p => p.y),
                        mode: 'markers',
                        type: 'scatter',
                        name: className, // Tên hiển thị trên Legend
                        marker: {
                            size: 6,
                            color: colorPalette[className] || '#cbd5e1', // Màu dự phòng
                            opacity: 0.7, // Làm hơi trong suốt để thấy các điểm chồng lên nhau
                            line: {
                                // Viền đen mỏng cho các điểm bị phân loại sai (giúp dễ nhận diện)
                                color: classPoints.map(p => p.label === p.label ? 'transparent' : '#000000'),
                                width: classPoints.map(p => p.label === p.label ? 0 : 1.5)
                            }
                        },
                        // Nội dung hiển thị khi di chuột (Hover)
                        text: classPoints.map(p => 
                            `<b>Label:</b> ${p.label}<br>` +
                            `<b>X:</b> ${p.x.toFixed(3)}<br>` + // toFixed(3) để làm tròn 3 chữ số thập phân
                            `<b>Y:</b> ${p.y.toFixed(3)}`
                        ),
                        // Đảm bảo thuộc tính hoverinfo bên dưới là 'text'
                        hoverinfo: 'text'
                    };
                });

                setUmapTraces(traces);
            } catch (error) {
                console.error("Lỗi khi tải UMAP:", error);
                setUmapTraces(null);
            } finally {
                setIsLoading(false);
            }
        };

        loadUmapData();
    }, []);


    return (
        <div className="bg-white rounded-xl mb-6">
            <div className="mt-2 mb-6 text-xl text-black text-center font-bold">
                UMAP 2D Feature Projection
            </div>
            
            <div className="w-full h-[500px] sm:h-[600px] bg-slate-50 rounded-lg relative flex items-center justify-center overflow-hidden border border-slate-300">
                {isLoading ? (
                    <div className="flex flex-col items-center text-slate-400">
                        <Loader2 className="w-8 h-8 animate-spin mb-2" />
                        <p className="text-sm">Đang tải không gian đặc trưng...</p>
                    </div>
                ) : umapTraces ? (
                    <Suspense fallback={<div className="flex flex-col items-center text-slate-400"><Loader2 className="w-8 h-8 animate-spin mb-2" /><p className="text-sm">Đang tải biểu đồ...</p></div>}>
                    <Plot
                        data={umapTraces}
                        layout={{
                            autosize: true,
                            margin: { t: 40, l: 60, r: 40, b: 60 },
                            hovermode: 'closest', // Cảm ứng hover điểm gần nhất
                            plot_bgcolor: 'rgba(248, 250, 252, 1)', // Nền xám nhạt (slate-50)
                            paper_bgcolor: 'rgba(0,0,0,0)',
                            xaxis: { 
                                title: {
                                    text: 'UMAP Dimension 1',
                                    standoff: 20 // THÊM DÒNG NÀY: Ép khoảng cách giữa số trên trục và chữ tiêu đề
                                }, 
                                zeroline: false, 
                                showgrid: true, 
                                gridcolor: '#e2e8f0' 
                            },
                            yaxis: { 
                                title: {
                                    text: 'UMAP Dimension 2',
                                    standoff: 10 // THÊM DÒNG NÀY
                                }, 
                                zeroline: false, 
                                showgrid: true, 
                                gridcolor: '#e2e8f0' 
                            },
                            legend: {
                                // Đặt legend ở góc trên bên phải, có background trong suốt
                                orientation: "v",
                                y: 1,
                                x: 1,
                                xanchor: "right",
                                yanchor: "top",
                                bgcolor: 'rgba(255, 255, 255, 0.8)',
                                bordercolor: '#e2e8f0',
                                borderwidth: 1
                            }
                        }}
                        useResizeHandler={true}
                        style={{ width: "100%", height: "100%" }}
                        config={{ displayModeBar: true, scrollZoom: true }} // Bật zoom bằng chuột
                    />
                    </Suspense>
                ) : (
                    <p className="text-slate-400 text-sm">Không tìm thấy dữ liệu UMAP cho model này.</p>
                )}
            </div>
        </div>
    );
}