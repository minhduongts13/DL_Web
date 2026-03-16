import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
        <p className="text-slate-600 mb-6">Lets work together</p>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="block text-sm mb-1">Name</label>
            <input className="w-full border rounded px-3 py-2" placeholder="full name" />
          </div>

          <div className="col-span-1">
            <label className="block text-sm mb-1">Email</label>
            <input className="w-full border rounded px-3 py-2" placeholder="example@email.com" />
          </div>

          <div className="col-span-1">
            <label className="block text-sm mb-1">Service</label>
            <select className="w-full border rounded px-3 py-2">
              <option>Select a service</option>
              <option>Consulting</option>
              <option>Development</option>
            </select>
          </div>

          <div className="col-span-1">
            <label className="block text-sm mb-1">Message</label>
            <textarea className="w-full border rounded px-3 py-2 h-24" placeholder="Message"></textarea>
          </div>

          <div className="col-span-1 sm:col-span-2">
            <button type="button" className="mt-2 bg-sky-500 hover:bg-sky-600 text-white rounded px-4 py-2">
              Get in Touch
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}