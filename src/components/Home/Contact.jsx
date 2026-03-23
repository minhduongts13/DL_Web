import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    
    // Đặt trạng thái loading để vô hiệu hóa nút bấm tạm thời
    setStatus("loading"); 

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "63ceb0a8-0c3c-4d33-9e85-a16a57d52c52");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        event.target.reset(); // Xóa form khi thành công
      } else {
        setStatus("error");
      }
    } catch (error) {
      // Nhờ có khối catch này, web sẽ không bị màn hình đỏ khi rớt mạng/bị chặn nữa
      console.error("Lỗi kết nối:", error);
      setStatus("error"); 
    }
  };

  return (
    <section id="contact" className="py-12">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold leading-tight text-[#484E53] text-center mb-4">Liên hệ</h3>

        <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="block text-sm mb-1">Tên</label>
            <input 
              name="name" // BẮT BUỘC PHẢI CÓ
              required 
              className="w-full border rounded px-3 py-2 outline-none focus:border-sky-500" 
              placeholder="Your name" 
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm mb-1">Email</label>
            <input 
              type="email"
              name="email" // BẮT BUỘC PHẢI CÓ
              required 
              className="w-full border rounded px-3 py-2 outline-none focus:border-sky-500" 
              placeholder="example@email.com" 
            />
          </div>

          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm mb-1">Lời nhắn</label>
            <textarea 
              name="message" // BẮT BUỘC PHẢI CÓ
              required
              className="w-full border rounded px-3 py-2 h-24 outline-none focus:border-sky-500" 
              placeholder="Your message"
            ></textarea>
          </div>

          <div className="col-span-1 sm:col-span-2 flex items-center gap-4 mt-2">
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white rounded px-6 py-2 transition-colors"
            >
              {status === 'loading' ? 'Đang gửi...' : 'Gửi'}
            </button>
            
            {status === 'success' && (
              <span className="text-green-600 font-medium">Gửi thành công!</span>
            )}
            
            {status === 'error' && (
              <span className="text-red-600 font-medium">Lỗi mạng hoặc bị chặn. Vui lòng thử lại.</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}