'use client';

import { useState } from 'react';
import { translations, type Lang } from './translations';

interface NavbarProps {
  lang: Lang;
  onToggleLang: () => void;
}

export default function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang].nav;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[48px] bg-white/85 backdrop-blur-[20px] border-b border-black/[0.08]">
      <div className="max-w-[1024px] mx-auto px-6 h-full flex items-center justify-between">
        <a href="#about" className="font-medium text-[17px]">Theo Zhang</a>

        <div className="hidden md:flex items-center space-x-8 text-[12px] font-normal tracking-wide uppercase">
          <a href="#about" className="hover:text-black/60 transition-colors">{t.about}</a>
          <a href="#skills" className="hover:text-black/60 transition-colors">{t.skills}</a>
          <a href="#projects" className="hover:text-black/60 transition-colors">{t.projects}</a>
          <a href="#contact" className="hover:text-black/60 transition-colors">{t.contact}</a>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleLang}
            className="text-[12px] font-medium border border-black/10 rounded-full px-3 py-1 hover:bg-black/5 transition-colors"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor">
              <path d="M2 5h14M2 9h14M2 13h14" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-[48px] left-0 right-0 bg-white border-b border-black/10 px-6 py-4 flex flex-col space-y-4 text-[17px]">
          <a href="#about" onClick={() => setIsMenuOpen(false)}>{t.about}</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>{t.skills}</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>{t.projects}</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t.contact}</a>
        </div>
      )}
    </nav>
  );
}