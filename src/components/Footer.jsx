import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-sm">Liên hệ - <a href="mailto:minh.duongts13@hcmut.edu.vn" className="underline">minh.duongts13@hcmut.edu.vn</a></div>
        <div className="text-sm text-slate-500">© 2026 All rights reserved.</div>
      </div>
    </footer>
  );
}