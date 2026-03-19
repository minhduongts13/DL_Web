import React from 'react';
import hcmutLogo from '../../assets/hcmut.png';

export default function Hero() {
  return (
    <section id="home" className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <img src={hcmutLogo} alt="HCMUT Logo" className="mx-auto mb-6 w-64 h-64" />
        <h1 className="text-4xl sm:text-4xl font-bold leading-tight mb-4 text-[#484E53]">
          Deep Learning and Its Applications&nbsp;(CO3133)
        </h1>
        <h1 className="text-4xl sm:text-4xl uppercase font-bold bg-gradient-to-r from-[#4FC3F7] to-[#484E53] bg-clip-text text-transparent mb-2">ASSIGNMENT</h1>
        <p className="text-lg text-slate-600 mb-1">Course Instructor: Dr. Lê Thành Sách</p>

        <p className="text-lg text-slate-600 mb-6">Project Team: <strong>ABC1</strong></p>
      </div>
    </section>
  );
}