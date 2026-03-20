import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold leading-tight text-[#484E53] mb-4">About ABC1</h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Hi there! We are a small team of developers from Ho Chi Minh City University of Technology (HCMUT).
          We are eager to learn about Machine Learning, Deep Learning, Data Mining, and interactive application
          development. With a strong passion for exploring complex architectures, we are dedicated to building
          intelligent models that solve real-world problems.
        </p>
        <p className="text-slate-700 mb-4 leading-relaxed">
          We bring a solid blend of academic research, technical expertise, and hands-on experience to every
          project we undertake. Whether it's training robust image classification models, developing smart
          agents for interactive environments, or turning raw datasets into meaningful insights, we focus on
          bridging the gap between theoretical algorithms and practical, high-performance implementations.
        </p>

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
              </div>
            </article>

            <article className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-rose-50 to-white border border-slate-100 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center text-rose-700 font-bold text-lg">
                DM
              </div>
              <div>
                <div className="text-rose-700 font-semibold">Dương Quang Minh</div>
                <div className="text-sm text-slate-500">StudentID: 2212021</div>
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