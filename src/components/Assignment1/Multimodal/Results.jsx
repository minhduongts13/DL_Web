import React from 'react';
import validationChart from './report/5.png';
import validationTable from './report/5_2.png';
import testChart from './report/6.png';
import testTable from './report/6_2.png';

const validationRows = [
    ['F4 Fusion enriched caption (k=16)', '0.6629', '0.5936'],
    ['F2 Few-shot Image Probe ViT-L/14 (k=16)', '0.6105', '0.5598'],
    ['F1 Few-shot Image Probe ViT-B/32 (k=16)', '0.5394', '0.4933'],
    ['E2 Zero-shot ViT-L/14', '0.5074', '0.4404'],
    ['E3 Prompt Engineering (ensemble)', '0.4676', '0.4084'],
    ['F3 Few-shot Text Probe (real captions, k=16)', '0.3927', '0.3355'],
    ['E1 Zero-shot ViT-B/32', '0.3918', '0.3172'],
    ['E4 Multimodal zero-shot (class + caption)', '0.3024', '0.2609'],
];

const testRows = [
    ['F4 Fusion enriched caption (k=16)', '0.6612', '0.5886'],
    ['F2 Few-shot Image Probe ViT-L/14 (k=16)', '0.6069', '0.5549'],
    ['F1 Few-shot Image Probe ViT-B/32 (k=16)', '0.5370', '0.4903'],
    ['E2 Zero-shot ViT-L/14', '0.4994', '0.4340'],
    ['E3 Prompt Engineering (ensemble)', '0.4594', '0.3893'],
    ['F3 Few-shot Text Probe (real captions, k=16)', '0.3841', '0.3289'],
    ['E1 Zero-shot ViT-B/32', '0.3857', '0.2974'],
    ['E4 Multimodal zero-shot (class + caption)', '0.3146', '0.2721'],
];

const summaryCards = [
    {
        label: 'Best validation model',
        value: 'F4 Fusion enriched caption',
        detail: 'k = 16, Accuracy 0.6629, F1-macro 0.5936',
        tone: 'border-emerald-100 bg-emerald-50/60 text-emerald-700',
    },
    {
        label: 'Best test model',
        value: 'F4 Fusion enriched caption',
        detail: 'k = 16, Accuracy 0.6612, F1-macro 0.5886',
        tone: 'border-sky-100 bg-sky-50/60 text-sky-700',
    },
    {
        label: 'Selection rule',
        value: 'F1-macro',
        detail: 'Validation được dùng để chọn mô hình, test chỉ để báo cáo cuối cùng.',
        tone: 'border-amber-100 bg-amber-50/70 text-amber-700',
    },
];

const keyFindings = [
    'Fusion enriched caption đứng đầu cả validation lẫn test, cho thấy ảnh và caption bổ sung thông tin cho nhau tốt hơn các thiết lập đơn lẻ.',
    'Ranking giữa các experiment rất ổn định từ validation sang test, đặc biệt ở nhóm few-shot image probe.',
    'Multimodal zero-shot kiểu class + caption chưa hiệu quả bằng few-shot vì caption gốc còn nhiễu và không phải lúc nào cũng khớp trực tiếp với nhãn lớp.',
    'K = 16 là điểm cân bằng tốt nhất trong notebook cho cả image, text và fusion probes.',
];

const Results = () => {
    return (
        <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-slate-100 mt-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="m17 5-5-3-5 3"></path><path d="m17 19-5 3-5-3"></path></svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                    Huấn luyện & Đánh giá <span className="text-slate-400 font-medium text-xl hidden sm:inline-block ml-2">| Training & Evaluation</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {summaryCards.map((card) => (
                    <div key={card.label} className={`rounded-2xl border p-5 shadow-sm ${card.tone}`}>
                        <div className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2">{card.label}</div>
                        <div className="text-2xl font-extrabold leading-tight text-slate-800">{card.value}</div>
                        <p className="text-sm text-slate-600 leading-relaxed mt-3">{card.detail}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-3 mb-4">
                        <h4 className="text-lg font-bold text-slate-800">Validation set</h4>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Selection metric: F1-macro</span>
                    </div>
                    <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm mb-4">
                        <figcaption className="mb-3 text-center text-base font-bold text-slate-800">Section 5 - F1-macro Comparison</figcaption>
                        <img src={validationChart} alt="Validation F1-macro comparison chart" className="w-full rounded-xl" />
                    </figure>
                    <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <figcaption className="mb-3 text-center text-base font-bold text-slate-800">Validation summary table</figcaption>
                        <img src={validationTable} alt="Validation summary table" className="w-full rounded-xl" />
                    </figure>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-3 mb-4">
                        <h4 className="text-lg font-bold text-slate-800">Test set</h4>
                        <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Final report only</span>
                    </div>
                    <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm mb-4">
                        <figcaption className="mb-3 text-center text-base font-bold text-slate-800">Section 6 - F1-macro Comparison</figcaption>
                        <img src={testChart} alt="Test F1-macro comparison chart" className="w-full rounded-xl" />
                    </figure>
                    <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <figcaption className="mb-3 text-center text-base font-bold text-slate-800">Test summary table</figcaption>
                        <img src={testTable} alt="Test summary table" className="w-full rounded-xl" />
                    </figure>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-5 shadow-sm">
                    <h4 className="text-lg font-bold text-slate-800 mb-4">What the notebook shows</h4>
                    <div className="space-y-3">
                        {keyFindings.map((item) => (
                            <div key={item} className="rounded-xl border border-amber-100 bg-white p-4">
                                <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h4 className="text-lg font-bold text-slate-800 mb-4">Tóm tắt định lượng</h4>
                    <div className="overflow-hidden rounded-xl border border-slate-200">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 text-slate-600 font-semibold">
                                <tr>
                                    <th className="px-4 py-3">Thiết lập</th>
                                    <th className="px-4 py-3">Accuracy</th>
                                    <th className="px-4 py-3">F1-macro</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {validationRows.slice(0, 4).map((row) => (
                                    <tr key={row[0]} className="bg-white">
                                        <td className="px-4 py-3 font-medium text-slate-800">{row[0]}</td>
                                        <td className="px-4 py-3 text-slate-600">{row[1]}</td>
                                        <td className="px-4 py-3 text-slate-600">{row[2]}</td>
                                    </tr>
                                ))}
                                {testRows.slice(0, 4).map((row) => (
                                    <tr key={row[0]} className="bg-slate-50/50">
                                        <td className="px-4 py-3 font-medium text-slate-800">{row[0]}</td>
                                        <td className="px-4 py-3 text-slate-600">{row[1]}</td>
                                        <td className="px-4 py-3 text-slate-600">{row[2]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mt-4">
                        Bảng đầy đủ trong notebook cho thấy F4 luôn đứng đầu, còn E4 multimodal zero-shot thấp nhất. Thứ hạng giữa validation và test gần như không đổi, nên lựa chọn mô hình khá ổn định.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Results;