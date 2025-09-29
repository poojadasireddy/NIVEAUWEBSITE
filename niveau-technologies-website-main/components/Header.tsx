
import React from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center gap-2">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="#4F46E5"/>
      <path d="M16 6L26 16L16 26L6 16L16 6Z" fill="white"/>
    </svg>
    <span className="font-bold text-xl text-zinc-900">Niveau</span>
  </div>
);

const Header: React.FC = () => {
  const navItems = ['Services', 'Our Work', 'Achievements', 'FAQs', 'Contact'];

  return (
    <header className="sticky top-0 z-50 py-4 px-4 sm:px-8 lg:px-16 bg-zinc-50/80 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav className="hidden lg:flex items-center bg-white/70 shadow-sm rounded-full p-1">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors rounded-full"
            >
              {item}
            </a>
          ))}
        </nav>
        <a href="#" className="flex items-center gap-2 bg-zinc-900 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors">
          Join Us
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
