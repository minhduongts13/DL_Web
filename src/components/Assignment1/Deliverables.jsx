import React from 'react';

const deliverablesData = [
    {
        id: 'demo',
        title: 'Video Demo',
        desc: 'Xem trực tiếp ứng dụng phân loại hoạt động thực tế.',
        icon: (
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
        ),
        link: '#', // Thay link thật vào đây
        bgColor: 'bg-[#EEF5FA]',
        textColor: 'text-[#528af0]',
        hoverBorder: 'hover:border-[#528af0]',
    },
    {
        id: 'presentation',
        title: 'Báo cáo (YouTube)',
        desc: 'Video trình bày chi tiết về model và kết quả thực nghiệm.',
        icon: (
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
        ),
        link: '#', // Thay link YouTube vào đây
        bgColor: 'bg-[#FCF4FF]',
        textColor: 'text-[#DD2476]',
        hoverBorder: 'hover:border-[#DD2476]',
    },
    {
        id: 'source-code',
        title: 'Source Code',
        desc: 'Mã nguồn đầy đủ trên GitHub (Jupyter, PyTorch, C#).',
        icon: (
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        ),
        link: '#', // Thay link GitHub vào đây
        bgColor: 'bg-[#F3F6F6]', // Màu xám nhạt trung tính
        textColor: 'text-slate-700',
        hoverBorder: 'hover:border-slate-500',
    },
    {
        id: 'document',
        title: 'Nội dung trình bày',
        desc: 'File slide thuyết trình hoặc tài liệu báo cáo (PDF).',
        icon: (
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        ),
        link: '#', // Thay link Drive/PDF vào đây
        bgColor: 'bg-[#FEFAF0]',
        textColor: 'text-[#f3a953]',
        hoverBorder: 'hover:border-[#f3a953]',
    }
];

const Deliverables = () => {
    return (
        <div className="mt-12 mb-8 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold leading-tight text-[#484E53] text-center mb-4">Project Deliverables</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {deliverablesData.map((item) => (
                    <a 
                        key={item.id}
                        href={item.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`group flex items-start gap-4 p-5 rounded-2xl ${item.bgColor} border border-transparent ${item.hoverBorder} hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
                    >
                        {/* Cột Icon */}
                        <div className={`mt-1 ${item.textColor} transition-transform duration-300 group-hover:scale-110`}>
                            {item.icon}
                        </div>
                        
                        {/* Cột Text */}
                        <div>
                            <h4 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-slate-900">
                                {item.title}
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                {item.desc}
                            </p>
                            
                            {/* Nút "Xem ngay" nhỏ gọn hiện ra khi hover (Tùy chọn) */}
                            <span className={`inline-block mt-3 text-sm font-semibold ${item.textColor} opacity-80 group-hover:opacity-100 flex items-center gap-1`}>
                                Xem chi tiết 
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Deliverables;