import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-sm">Let’s Work Together - <a href="mailto:Georgy@gmail.com" className="underline">Georgy@gmail.com</a></div>
        <div className="text-sm text-slate-500">© 2023 All rights reserved.</div>
      </div>
    </footer>
  );
}