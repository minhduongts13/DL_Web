import React, { useState } from "react";
import { BarChart3, Cpu, Image as ImageIcon, LineChart, TrendingUp } from "lucide-react";
import ModelVisualizations from "./ModelVisualizations";

// ==========================================
// 1. DỮ LIỆU TỔNG HỢP (DATA)
// ==========================================
// Gộp 2 bảng của bạn thành 1 mảng object duy nhất.
// 'id' dùng để map với tên file ảnh tương ứng.
const modelMetrics = [
    { id: "resnet_s1_noaug", name: "ResNet50 S1 (No Aug)", 
        precision: 0.9125, recall: 0.9123, f1: 0.9119, accuracy: 0.9123, top3: 0.9980, 
        trainTime: 7.14, infTime: 5.56, flops: 4.11, params: 23.52, size: 89.93, 
        plot: 'https://api.wandb.ai/links/quangminh4141-ts13/7k9p8uxp'
    },
    { id: "resnet_s1_randaug", name: "ResNet50 S1 (RandAug)", 
        precision: 0.9187, recall: 0.9190, f1: 0.9187, accuracy: 0.9190, top3: 0.9983, 
        trainTime: 19.47, infTime: 5.39, flops: 4.11, params: 23.52, size: 89.93, 
        plot: 'https://api.wandb.ai/links/quangminh4141-ts13/svr5hegi'
    },
    { id: "resnet_s2_noaug", name: "ResNet50 S2 (No Aug)", 
        precision: 0.9268, recall: 0.9263, f1: 0.9261, accuracy: 0.9263, top3: 0.9970, 
        trainTime: 11.80, infTime: 5.42, flops: 4.11, params: 23.52, size: 89.93, 
        plot: 'https://api.wandb.ai/links/quangminh4141-ts13/9041gf09'
    },
    { id: "resnet_s2_randaug", name: "ResNet50 S2 (RandAug)", 
        precision: 0.9308, recall: 0.9307, f1: 0.9305, accuracy: 0.9307, top3: 0.9973, 
        trainTime: 11.54, infTime: 5.41, flops: 4.11, params: 23.52, size: 89.93, 
        plot: 'https://api.wandb.ai/links/quangminh4141-ts13/qxq0jdec'
    },
    { id: "resnet_s3_noaug", name: "ResNet50 S3 (No Aug, LLRD)", 
        precision: 0.9317, recall: 0.9317, f1: 0.9314, accuracy: 0.9317, top3: 0.9983, 
        trainTime: 10.73, infTime: 5.81, flops: 4.11, params: 23.52, size: 89.93, 
        plot: 'https://api.wandb.ai/links/quangminh4141-ts13/0fgnmaic'
    },
    { id: "resnet_s3_randaug", name: "ResNet50 S3 (RandAug, LLRD)", 
        precision: 0.9371, recall: 0.9370, f1: 0.9367, accuracy: 0.9370, top3: 0.9980, 
        trainTime: 13.76, infTime: 5.48, flops: 4.11, params: 23.52, size: 89.93, 
        plot: 'https://api.wandb.ai/links/quangminh4141-ts13/wlk7um1c'
    },
    { id: "vit_s1_noaug", name: "ViT-Base S1 (No Aug)", 
        precision: 0.9321, recall: 0.9323, f1: 0.9321, accuracy: 0.9323, top3: 0.9977, 
        trainTime: 37.58, infTime: 17.08, flops: 11.29, params: 85.80, size: 327.31, 
        plot: 'https://api.wandb.ai/links/quangminh4141-ts13/e18y7oio'
    },
    { id: "vit_s1_randaug", name: "ViT-Base S1 (RandAug)", 
        precision: 0.9275, recall: 0.9277, f1: 0.9274, accuracy: 0.9277, top3: 0.9980, 
        trainTime: 43.06, infTime: 16.71, flops: 11.29, params: 85.80, size: 327.31, 
        plot: 'https://api.wandb.ai/links/quangminh4141-ts13/zf5zrvga'
    },
    { id: "vit_s2_noaug", name: "ViT-Base S2 (No Aug)", 
        precision: 0.9352, recall: 0.9350, f1: 0.9349, accuracy: 0.9350, top3: 0.9990, 
        trainTime: 26.83, infTime: 16.86, flops: 16.87, params: 85.80, size: 327.31, 
        plot: 'https://api.wandb.ai/links/quangminh4141-ts13/4zr8erhi'
    },
    { id: "vit_s2_randaug", name: "ViT-Base S2 (RandAug)", 
        precision: 0.9380, recall: 0.9380, f1: 0.9376, accuracy: 0.9380, top3: 0.9993, 
        trainTime: 47.84, infTime: 16.80, flops: 16.87, params: 85.80, size: 327.31,
        plot: 'https://api.wandb.ai/links/quangminh4141-ts13/yrhe39k1'
    },
    { id: "vit_s3_noaug", name: "ViT-Base S3 (No Aug, LLRD)", 
        precision: 0.9300, recall: 0.9270, f1: 0.9269, accuracy: 0.9270, top3: 0.9973, 
        trainTime: 24.73, infTime: 16.63, flops: 16.87, params: 85.80, size: 327.31, 
        plot: 'https://api.wandb.ai/links/quangminh4141-ts13/fw408o93'
    },
    { id: "vit_s3_randaug", name: "ViT-Base S3 (RandAug, LLRD)", 
        precision: 0.9309, recall: 0.9297, f1: 0.9296, accuracy: 0.9297, top3: 0.9973, 
        trainTime: 38.95, infTime: 16.87, flops: 16.87, params: 85.80, size: 327.31, 
        plot: 'https://api.wandb.ai/links/quangminh4141-ts13/ny4hvewt'
    },
];
const comments = [
    { 
        title: "Nhận xét tổng quan & Đánh đổi (Trade-off)", 
        content: "ViT-Base S2 (RandAug) đạt độ chính xác cao nhất (93.80%), bám sát ngay sau là ResNet50 S3 kết hợp LLRD (93.70%). Dù ViT nhỉnh hơn về số liệu tuyệt đối, ResNet50 lại là lựa chọn tối ưu toàn diện khi có tốc độ suy luận nhanh gấp 3 lần (~5.4ms vs ~16.8ms) và dung lượng mô hình chỉ bằng khoảng 1/4 (89.9MB vs 327.3MB)." 
    },
    { 
        title: "Tác động của Augmentation & LLRD", 
        content: "RandAugment mang lại sự cải thiện đồng đều và ổn định cho kiến trúc CNN (ResNet50) ở cả 3 thiết lập (+0.4% đến 0.7%). Trong khi đó, ViT tỏ ra nhạy cảm hơn ở thiết lập S1 (bị giảm hiệu năng khi dùng RandAug), nhưng lại phát huy tối đa sức mạnh khi kết hợp RandAugment ở thiết lập S2." 
    },
];


// ==========================================
// 2. COMPONENTS PHỤ TỢ 
// ==========================================

// Bảng dữ liệu linh hoạt (Render cột dựa theo Tab)
// Bảng dữ liệu linh hoạt (Render cột dựa theo Tab)
const MetricsTable = ({ tab, data, selectedId, onRowSelect }) => {
    const isPerf = tab === "performance";

    // Khai báo cấu trúc cột cho 2 tab
    const columns = isPerf
        ? [
              { key: "name", label: "Model", align: "left" },
              { key: "precision", label: "Precision ↑" },
              { key: "recall", label: "Recall ↑" },
              { key: "f1", label: "F1-Score ↑" },
              { key: "accuracy", label: "Accuracy ↑" },
              { key: "top3", label: "Top-3 Acc ↑" },
          ]
        : [
              { key: "name", label: "Model", align: "left" },
              { key: "trainTime", label: "Train Time ↓ (min)" },
              { key: "infTime", label: "Inference ↓ (ms)" },
              { key: "flops", label: "FLOPs ↓ (B)" },
              { key: "params", label: "Params ↓ (M)" },
              { key: "size", label: "Size ↓ (MB)" },
          ];

    // TÍNH TOÁN GIÁ TRỊ TỐT NHẤT CHO TỪNG CỘT
    const bestValues = {};
    columns.forEach((col) => {
        if (col.key !== "name") {
            // Lấy tất cả giá trị của cột hiện tại
            const values = data.map((item) => Number(item[col.key]));
            // Performance thì lấy Max, Resource thì lấy Min
            bestValues[col.key] = isPerf ? Math.max(...values) : Math.min(...values);
        }
    });

    return (
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key} className={`px-4 py-3 ${col.align === "left" ? "text-left" : "text-center"}`}>
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {data.map((row) => {
                        const isSelected = row.id === selectedId;
                        return (
                            <tr
                                key={row.id}
                                onClick={() => onRowSelect(row)}
                                className={`cursor-pointer transition-colors duration-150 
                                    ${isSelected ? "bg-emerald-50 hover:bg-emerald-100" : "hover:bg-slate-50 bg-white"}
                                `}
                            >
                                {columns.map((col) => {
                                    // Kiểm tra xem ô hiện tại có phải là giá trị tốt nhất không
                                    const isBest = col.key !== "name" && Number(row[col.key]) === bestValues[col.key];
                                    
                                    // Màu nhấn mạnh: Xanh lá cho Performance, Tím/Indigo cho Resource (hợp với màu nút tab)
                                    const highlightClass = isPerf ? "text-amber-700 bg-amber-100/60" : "text-indigo-700 bg-indigo-100/50";

                                    return (
                                        <td 
                                            key={col.key} 
                                            className={`px-4 py-3 transition-colors duration-200
                                                ${col.align === "left" ? "font-medium text-slate-800" : "text-center text-slate-600"}
                                                ${isBest ? `font-extrabold ${highlightClass}` : ""}
                                            `}
                                        >
                                            {/* Highlight model đang chọn bằng chấm xanh */}
                                            {col.key === "name" && isSelected && (
                                                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                                            )}
                                            
                                            {/* Hiển thị giá trị */}
                                            {row[col.key]}

                                            {/* Thêm icon lấp lánh hoặc huy chương nhỏ cho ô tốt nhất */}
                                            {isBest && <span className="ml-1 inline-block text-[10px] transform -translate-y-1">✨</span>}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

// Khu vực hiển thị đồ thị tương ứng với Model



// ==========================================
// 3. COMPONENT CHÍNH (MAIN EXPORT)
// ==========================================
export default function Interpretation() {
    // State quản lý tab (Mặc định: 'performance')
    const [activeTab, setActiveTab] = useState("performance");
    // State quản lý model đang được click (Mặc định: Lấy dòng đầu tiên)
    const [selectedModel, setSelectedModel] = useState(modelMetrics[0]);

    return (
        <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-slate-100 mt-8 animate-fade-in">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
                    <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                    Kết quả & Phân tích <span className="text-slate-400 font-medium text-xl hidden sm:inline-block ml-2">| Interpretation</span>
                </h3>
            </div>

            {/* TAB NAVIGATION */}
            <div className="flex bg-slate-100 p-1 rounded-lg w-max mb-6">
                <button
                    onClick={() => setActiveTab("performance")}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                        activeTab === "performance" ? "bg-white text-emerald-700 shadow-sm" : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                    }`}
                >
                    <TrendingUp className="w-4 h-4" /> Performance Metrics
                </button>
                <button
                    onClick={() => setActiveTab("resource")}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                        activeTab === "resource" ? "bg-white text-indigo-700 shadow-sm" : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                    }`}
                >
                    <Cpu className="w-4 h-4" /> System & Resource
                </button>
            </div>

            {/* DATA TABLE */}
            <MetricsTable 
                tab={activeTab} 
                data={modelMetrics} 
                selectedId={selectedModel?.id} 
                onRowSelect={setSelectedModel} 
            />

            {/* VISUALIZATIONS (CF Matrix & Plots) */}
            <ModelVisualizations selectedModel={selectedModel} />
            {/* COMMENTS / ANALYSIS */}
            <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                {comments.map((comment, index) => (
                    <div key={index} className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
                        <h4 className="text-slate-800 font-bold mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            {comment.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{comment.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}