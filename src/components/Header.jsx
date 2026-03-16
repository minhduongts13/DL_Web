import React from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="py-6">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="text-2xl font-semibold">Georgy</div>
        <nav>
          <ul className="flex space-x-6 text-sm">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="hover:text-sky-600">
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