import React from "react";
import Plot from "react-plotly.js";

// ===== HEATMAP DATA =====
const classes = ["buildings", "forest", "glacier", "mountain", "sea", "street"];

const similarityMatrix = [
  [1.0, 0.19, 0.63, 0.98, 0.89, 0.69],
  [0.19, 1.0, -0.52, 0.14, -0.08, 0.54],
  [0.63, -0.52, 1.0, 0.68, 0.83, 0.26],
  [0.98, 0.14, 0.68, 1.0, 0.94, 0.67],
  [0.89, -0.08, 0.83, 0.94, 1.0, 0.53],
  [0.69, 0.54, 0.26, 0.67, 0.53, 1.0],
];

export default function AdvancedCharts() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 animate-fade-in">
        {/* Tiêu đề */}
        <p className="mt-2 mb-4 text-xl text-black text-center font-bold">
          Ma trận tương đồng (Similarity Matrix)
        </p>

        {/* Plotly Heatmap */}
        <div className="w-full flex justify-center overflow-hidden">
          <Plot
            data={[
              {
                z: similarityMatrix,
                x: classes,
                y: classes,
                type: "heatmap",
                // Tùy chỉnh màu sắc: -1 (Đỏ), 0 (Trắng), 1 (Xanh)
                colorscale: [
                  [0, "#f59e0b"],   // Vàng cam ấm (Amber-500) cho giá trị âm
                  [0.5, "#ffffff"], // Trắng tinh cho mức 0
                  [1, "#6366f1"],   // Tím xanh (Indigo-500) cho giá trị dương
                ],
                zmin: -1, // Cố định thang đo từ -1 
                zmax: 1,  // đến 1 để mốc 0 luôn nằm chính giữa
                texttemplate: "%{z:.2f}", // Tự động hiển thị giá trị trong ô lưới, làm tròn 2 chữ số
                textfont: {
                  family: "'Inter', sans-serif",
                  size: 14,
                  weight: "bold"
                },
                showscale: true, // Hiển thị thang màu bên phải
                hoverongaps: false,
                hovertemplate: "<b>Y:</b> %{y}<br><b>X:</b> %{x}<br><b>Similarity:</b> %{z:.2f}<extra></extra>"
              },
            ]}
            layout={{
              autosize: true,
              margin: { t: 20, b: 60, l: 80, r: 20 },
              xaxis: {
                tickfont: { size: 14, family: "'Inter', sans-serif", color: "#475569" },
                tickangle: 0, // Xoay text ngang cho dễ đọc
              },
              yaxis: {
                autorange: "reversed", // Đảo chiều trục Y để "buildings" nằm trên cùng (chuẩn UI ma trận)
                tickfont: { size: 14, family: "'Inter', sans-serif", color: "#475569" },
              },
              font: { family: "'Inter', sans-serif" },
            }}
            useResizeHandler={true}
            style={{ width: "100%", height: "600px" }}
            config={{ 
              responsive: true, 
              displayModeBar: true, 
              displaylogo: false, // Ẩn logo plotly cho gọn
              modeBarButtonsToRemove: ['lasso2d', 'select2d'] // Ẩn bớt các nút không cần thiết
            }}
          />
        </div>

      </div>
  );
}