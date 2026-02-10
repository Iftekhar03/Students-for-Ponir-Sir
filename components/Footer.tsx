import React from 'react';
import { Facebook, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#002e26] text-white py-12 border-t border-[#004d44] relative">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-6">
        
        {/* Social Link */}
        <div className="flex gap-4">
          <a 
            href="https://www.facebook.com/ponir.hossain.921" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-[#004d44] rounded-full hover:bg-[#005f54] hover:scale-110 transition-all duration-300 shadow-lg" 
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
        </div>
        
        {/* Divider */}
        <div className="w-16 h-1 bg-[#005f54] rounded-full opacity-50"></div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 text-center leading-relaxed">
          © 2026 Students for Ponir Sir. All rights reserved.
        </div>

        {/* Back to Top Button */}
        <button 
          onClick={scrollToTop}
          className="absolute right-8 bottom-8 p-3 bg-[#005f54] rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-xl group"
          aria-label="Back to Top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};