import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Assignment1 from './pages/Assignment1';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter basename="/DL_Web">
      <div className="min-h-screen bg-[#E0E8F6] font-sans text-slate-800 flex flex-col overflow-x-hidden">
        <Header />

        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assignment1" element={<Assignment1 />} />
          </Routes>
        </main>

        <Footer />
        
      </div>
    </BrowserRouter>
  );
};

export default App;