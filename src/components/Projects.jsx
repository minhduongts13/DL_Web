import React from 'react';
import ass1 from '../assets/classification.jpg';
const projects = [
  { 
    title: 'Assignment 1', 
    subtitle: 'Classification', 
    imgSrc: ass1,
    bgColor: 'bg-[#FCF4FF]', 
    hoverBorder: 'hover:border-[#DD2476]',
    hoverText: 'group-hover:text-[#DD2476]'
  },
  { 
    title: 'Assignment 2', 
    subtitle: 'Web Design / Usability Testing', 
    imgSrc: '/assets/image2.jpg', 
    bgColor: 'bg-[#FEFAF0]', 
    hoverBorder: 'hover:border-[#f3a953]',
    hoverText: 'group-hover:text-[#f3a953]'
  },
  { 
    title: 'Assignment 3', 
    subtitle: 'Web Design / Usability Testing', 
    imgSrc: '/assets/image3.jpg', 
    bgColor: 'bg-[#EEF5FA]', 
    hoverBorder: 'hover:border-[#528af0]',
    hoverText: 'group-hover:text-[#528af0]'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold mb-6 text-[#484E53] text-center">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article 
              key={p.title} 
              // Thêm class 'group' để bắt sự kiện hover cho các phần tử con bên trong
              className={`p-5 rounded-[20px] ${p.bgColor} border border-transparent ${p.hoverBorder} hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col`}
            >
              {/* Khung chứa ảnh: Bo góc, cắt bỏ phần thừa, hiệu ứng zoom */}
              <div className="w-full h-40 rounded-xl overflow-hidden mb-4 bg-white/50 shadow-inner relative">
                <img 
                  src={p.imgSrc} 
                  alt={p.title} 
                  // object-cover giúp ảnh không bị méo, group-hover:scale-110 tạo hiệu ứng phóng to chậm rãi
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              {/* Phần Text */}
              <div className="flex-1 mt-1">
                <p className="text-sm text-slate-500 font-medium mb-1">{p.title}</p>
                <h4 className={`text-[17px] font-bold text-slate-800 leading-snug ${p.hoverText} transition-colors`}>
                  {p.subtitle}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}