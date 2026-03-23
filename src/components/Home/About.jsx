import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-2">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold leading-tight text-[#484E53] mb-4">Nhóm ABC1</h3>

        <div className="mt-6">

          {/* Decorative container that matches mockup's card style */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Member card */}
            <article className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-sky-50 to-white border border-slate-100 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center text-sky-700 font-bold text-lg">
                QA
              </div>
              <div>
                <div className="text-sky-700 font-semibold">Trần Dương Quốc Anh</div>
                <div className="text-sm text-slate-500">MSSV: 2210134</div>
              </div>
            </article>

            <article className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-rose-50 to-white border border-slate-100 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center text-rose-700 font-bold text-lg">
                QM
              </div>
              <div>
                <div className="text-rose-700 font-semibold">Dương Quang Minh</div>
                <div className="text-sm text-slate-500">MSSV: 2212021</div>
              </div>
            </article>

            <article className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-white border border-slate-100 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center text-yellow-700 font-bold text-lg">
                NP
              </div>
              <div>
                <div className="text-yellow-700 font-semibold">Bùi Ngọc Phúc</div>
                <div className="text-sm text-slate-500">MSSV: 2312665</div>
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