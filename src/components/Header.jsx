import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  // Lưu ý: Đảm bảo component Hero/Home của bạn có gắn id="home"
  { id: 'home', label: 'Home' }, 
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, id) => {
    e.preventDefault(); 

    if (location.pathname !== '/') {
      navigate('/');
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="py-6">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="text-2xl font-semibold text-slate-800">
          <a
            href={'#home'}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            ABC1
          </a>
        </div>
        <nav>
          <ul className="flex space-x-6 text-sm font-medium">
            {navItems.map((n) => (
              <li key={n.id}>
                <a 
                  href={`#${n.id}`} 
                  onClick={(e) => handleNavClick(e, n.id)}
                  className="text-slate-500 hover:text-sky-600 transition-colors cursor-pointer"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}