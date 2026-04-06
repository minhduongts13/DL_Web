import React from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ChartDataLabels
);

const COLORS = {
    train: "#4F6BED",       // xanh dương hiện đại
    validation: "#F59E0B",  // vàng cam
    test: "#10B981",        // xanh ngọc
    grid: "rgba(148, 163, 184, 0.18)",
    text: "#0F172A",
    muted: "#64748B",
    cardBorder: "rgba(148, 163, 184, 0.15)",
};
ChartJS.defaults.font.family = "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif";
export default function Overview() {
    const pieData = {
        labels: ["Train", "Validation", "Test"],
        datasets: [
        {
            data: [65.9, 16.5, 17.6],
            backgroundColor: [COLORS.train, COLORS.validation, COLORS.test],
            borderColor: "#FFFFFF",
            borderWidth: 4,
            hoverOffset: 10,
        },
        ],
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "0%",
        plugins: {
        legend: {
            position: "bottom",
            labels: {
            usePointStyle: true,
            pointStyle: "circle",
            padding: 18,
            color: COLORS.text,
            font: {
                size: 13,
                weight: "600",
            },
            },
        },
        title: {
            display: true,
            text: "Overall Split Ratio",
            color: COLORS.text,
            font: {
            size: 20,
            weight: "700",
            },
            padding: {
            top: 8,
            bottom: 18,
            },
        },
        tooltip: {
            backgroundColor: "rgba(15, 23, 42, 0.92)",
            padding: 12,
            titleColor: "#fff",
            bodyColor: "#fff",
            displayColors: true,
            callbacks: {
            label: (ctx) => `${ctx.label}: ${ctx.raw}%`,
            },
        },
        datalabels: {
            color: "#0F172A",
            font: {
            weight: "700",
            size: 14,
            },
            formatter: (value) => `${value.toFixed(1)}%`,
        },
        },
    };

    const labels = ["buildings", "forest", "glacier", "mountain", "sea", "street"];

    const barData = {
        labels,
        datasets: [
        {
            label: "Train",
            data: [1753, 1817, 1923, 2009, 1819, 1906],
            backgroundColor: COLORS.train,
            borderRadius: 10,
            borderSkipped: false,
            maxBarThickness: 32,
        },
        {
            label: "Validation",
            data: [438, 454, 481, 503, 455, 476],
            backgroundColor: COLORS.validation,
            borderRadius: 10,
            borderSkipped: false,
            maxBarThickness: 32,
        },
        {
            label: "Test",
            data: [437, 474, 553, 525, 510, 501],
            backgroundColor: COLORS.test,
            borderRadius: 10,
            borderSkipped: false,
            maxBarThickness: 32,
        },
        ],
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
        title: {
            display: true,
            text: "Phân phối số lượng mẫu mỗi lớp",
            color: COLORS.text,
            font: {
            size: 20,
            weight: "700",
            },
            padding: {
            top: 8,
            bottom: 18,
            },
        },
        legend: {
            position: "right",
            labels: {
            usePointStyle: true,
            pointStyle: "rectRounded",
            padding: 16,
            color: COLORS.text,
            font: {
                size: 13,
                weight: "600",
            },
            },
        },
        tooltip: {
            backgroundColor: "rgba(15, 23, 42, 0.92)",
            padding: 12,
            titleColor: "#fff",
            bodyColor: "#fff",
            displayColors: true,
            mode: "index",
            intersect: false,
        },
        datalabels: {
            anchor: "end",
            align: "end",
            offset: 2,
            color: COLORS.text,
            font: {
            weight: "700",
            size: 11,
            },
            formatter: (value) => value,
        },
        },
        interaction: {
        mode: "index",
        intersect: false,
        },
        scales: {
        x: {
            grid: {
            display: false,
            },
            ticks: {
            color: COLORS.muted,
            font: {
                size: 12,
                weight: "600",
            },
            },
            title: {
            display: true,
            text: "Lớp (Class)",
            color: COLORS.text,
            font: {
                size: 13,
                weight: "700",
            },
            padding: {
                top: 12,
            },
            },
        },
        y: {
            beginAtZero: true,
            grid: {
            color: COLORS.grid,
            },
            ticks: {
            color: COLORS.muted,
            font: {
                size: 12,
                weight: "500",
            },
            },
            title: {
            display: true,
            text: "Số lượng ảnh",
            color: COLORS.text,
            font: {
                size: 13,
                weight: "700",
            },
            },
        },
        },
    };

    return (
        <section className="w-full mb-6">
        <div className="mx-auto max-w-7xl">
            <div className="">
            <p className="mt-2 mb-4 text-xl text-black text-center font-bold">
                Tổng quan tỷ lệ chia dữ liệu và phân bố số lượng mẫu theo lớp.
            </p>
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">
            <div className="lg:col-span-1 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                <div className="h-[420px]">
                <Pie data={pieData} options={pieOptions} />
                </div>
            </div>

            <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                <div className="h-[420px]">
                <Bar data={barData} options={barOptions} />
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}