import React from "react";
import { ArrowRight, Brain, Image as ImageIcon, Sparkles, Target, Wrench } from "lucide-react";

const steps = [
    {
        title: "Image Input",
        subtitle: "150x150 RGB images",
        icon: ImageIcon,
        bg: "bg-emerald-400",
        border: "border-emerald-500",
        text: "text-slate-900",
    },
    {
        title: "Preprocessing",
        subtitle: "Normalize, Resize",
        badge: "Fixed",
        icon: Wrench,
        bg: "bg-emerald-400",
        border: "border-emerald-500",
        text: "text-slate-900",
    },
    {
        title: "Backbone",
        subtitle: "ResNet50, ViT-B/16", // Rút gọn nhẹ text để vừa thẻ
        icon: Brain,
        bg: "bg-amber-400",
        border: "border-amber-500",
        text: "text-slate-900",
    },
    {
        title: "Classifier Head",
        subtitle: "1000 → 6 class",
        badge: "Adapted",
        icon: Target,
        bg: "bg-emerald-400",
        border: "border-emerald-500",
        text: "text-slate-900",
    },
    {
        title: "Classification Results",
        subtitle: "6 class predictions",
        icon: Sparkles,
        bg: "bg-indigo-400",
        border: "border-indigo-500",
        text: "text-slate-900",
    },
];

function StepCard({ step }) {
    const Icon = step.icon;

    return (
        <div
            className={
                // Bỏ width cứng, dùng w-full và flex-1 trên màn lớn để tự chia đều khoảng cách
                `relative flex min-h-[155px] w-full max-w-[260px] lg:flex-1 flex-col items-center justify-center rounded-2xl border-2 ` +
                `${step.border} ${step.bg} px-3 py-4 shadow-[0_6px_0_rgba(0,0,0,0.08)] ` +
                // Hiệu ứng Hover nổi lên
                `transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_0_rgba(0,0,0,0.15)] cursor-pointer group`
            }
        >
            {/* Hiệu ứng Icon nảy nhẹ khi hover thẻ */}
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5 text-white" />
            </div>

            <h3 className={`text-center text-[15px] xl:text-[17px] font-extrabold ${step.text} leading-tight`}>{step.title}</h3>

            {step.badge ? (
                <div className="mt-2 rounded-md bg-indigo-500 px-3 py-1 text-[11px] xl:text-[13px] font-semibold text-white shadow-sm">
                    {step.badge}
                </div>
            ) : null}

            <p className={`mt-2 text-center text-xs xl:text-sm ${step.text} opacity-80 leading-snug`}>{step.subtitle}</p>
        </div>
    );
}

export default function Pipeline() {
    return (
        // Xóa overflow-x-auto, bo tròn cho mượt
        <div className="w-full px-2  py-8 rounded-2xl">
            {/* Đổi thành flex-col trên điện thoại, và flex-row trên màn hình lớn (lg) */}
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 lg:flex-row lg:gap-2 xl:gap-4">
                {steps.map((step, index) => (
                    <React.Fragment key={step.title}>
                        <StepCard step={step} />

                        {index < steps.length - 1 && (
                            // Mũi tên: xoay 90 độ (chỉ xuống) trên mobile, xoay ngang (0 độ) trên màn hình lớn
                            <div className="flex shrink-0 items-center justify-center py-1 lg:rotate-0 rotate-90 lg:py-0">
                                <ArrowRight className="h-6 w-6 text-indigo-400 opacity-70 xl:h-8 xl:w-8" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}