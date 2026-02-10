import React, { useState, useEffect } from 'react';
import Logo from '../Logo.png';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-[#013b33] py-4'}`}>
      <div className="container mx-auto px-4 flex justify-center items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-3 md:gap-4">
           <div className={`flex items-center justify-center transition-all duration-300 ${scrolled ? 'w-8 h-8' : 'w-10 h-10'} shrink-0`}>
             <img src={Logo} alt="Students for Ponir Sir" className="w-full h-full object-contain drop-shadow-lg" />
           </div>
           <span className={`text-lg md:text-xl font-bold whitespace-nowrap transition-colors duration-300 ${scrolled ? 'text-[#013b33]' : 'text-white'}`}>
             Students for Ponir Sir
           </span>
        </div>
      </div>
    </nav>
  );
};