import React from 'react';

export default function Description() {
  return (
    <section id="about" className="py-2 md:py-6">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Tiêu đề có điểm nhấn gạch chân gradient */}
        <div className="text-center mb-2">
          <h3 className="text-3xl md:text-4xl font-bold text-[#484E53] tracking-tight mb-4">
            Giới thiệu
          </h3>
          <div className="w-20 h-1.5 mx-auto rounded-full"></div>
        </div>

        {/* Khối nội dung được bọc trong một Card mềm mại */}
        <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100">
          <p className="text-[17px] md:text-lg text-slate-700 mb-6 leading-relaxed">
            Đây là landing page tổng hợp các Bài tập lớn của môn học <strong className="text-sky-600 font-semibold">Học sâu và Ứng dụng (CO3133)</strong>, học kì 252.
          </p>
          
          <p className="text-[17px] md:text-lg text-slate-700 mb-8 leading-relaxed">
            Trang web này được định hình như một portfolio học thuật, lưu trữ 3 Bài tập lớn dưới sự hướng dẫn của giảng viên Lê Thành Sách. Thay vì chỉ là những dòng code khô khan, mỗi bài tập được tiếp cận như một dự án trí tuệ nhân tạo thu nhỏ — đi từ bước phân tích dữ liệu (EDA), xây dựng kiến trúc mạng, cho đến tinh chỉnh và đánh giá thực nghiệm trên các mô hình.
          </p>
          
          {/* Thông báo cập nhật được làm nổi bật tinh tế */}
          <div className="flex items-start md:items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm md:text-base text-slate-600 italic">
              Nhật ký dự án này sẽ liên tục được cập nhật tiến độ, mã nguồn và báo cáo kết quả xuyên suốt học kỳ.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}