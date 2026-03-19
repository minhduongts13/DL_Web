import React from 'react';
import hcmutLogo from '../../assets/hcmut.png';

export default function Hero() {
    return (
        <section id="home" className="py-12">
        <div className="max-w-4xl mx-auto text-center">
            <img src={hcmutLogo} alt="HCMUT Logo" className="mx-auto mb-6 w-64 h-64" />
            <h1 className="text-4xl sm:text-4xl uppercase font-bold bg-gradient-to-r from-[#4FC3F7] to-[#484E53] bg-clip-text text-transparent mb-2">ASSIGNMENT</h1>
            <h1 className="text-4xl sm:text-4xl font-bold leading-tight mb-4 text-[#484E53] capitalize">
            Classification
            </h1>
            <p className="text-lg text-slate-600 mb-1">Course Instructor: Dr. Lê Thành Sách</p>

            <p className="text-lg text-slate-600 mb-6">Project Team: <strong>ABC1</strong></p>
            <div className="mt-6">

            {/* Decorative container that matches mockup's card style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Member card */}
                <article className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-sky-50 to-white border border-slate-100 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center text-sky-700 font-bold text-lg">
                    QA
                </div>
                <div>
                    <div className="text-sky-700 font-semibold">Trần Dương Quốc Anh</div>
                    <div className="text-sm text-slate-500">StudentID: 2210134</div>
                    <div className="mt-2">
                    <span className="inline-block text-xs px-2 py-1 bg-sky-50 text-sky-600 rounded-full">Front-end</span>
                    </div>
                </div>
                </article>

                <article className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-rose-50 to-white border border-slate-100 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center text-rose-700 font-bold text-lg">
                    DM
                </div>
                <div>
                    <div className="text-rose-700 font-semibold">Dương Quang Minh</div>
                    <div className="text-sm text-slate-500">StudentID: 2212021</div>
                    <div className="mt-2">
                    <span className="inline-block text-xs px-2 py-1 bg-rose-50 text-rose-600 rounded-full">ML Research</span>
                    </div>
                </div>
                </article>
            </div>

            {/* Small decorative divider to match mockup */}
            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            </div>
        </div>
        </section>
    );
}