
import React from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center">
    <img src="/niveau-logo.png" alt="Niveau Technologies" className="h-10 md:h-12 w-auto object-contain" />
  </div>
);

const Header: React.FC = () => {
  const navItems: { label: string; href: string }[] = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 py-4 px-4 sm:px-8 lg:px-16 bg-zinc-50/80 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav className="hidden lg:flex items-center bg-white/70 shadow-sm rounded-full p-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-5 py-2 text-base md:text-lg font-semibold text-zinc-900 hover:text-blue-700 transition-colors rounded-full"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-zinc-800 transition-colors">
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
