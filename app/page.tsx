'use client';

import { useState } from 'react';
import { type Lang } from './components/translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] antialiased">
      <Navbar lang={lang} onToggleLang={() => setLang(lang === 'en' ? 'zh' : 'en')} />

      <main className="pt-[48px]">
        <Hero lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>

      <footer className="py-12 border-t border-black/5 text-center text-[#6e6e73] text-[14px]">
        <div className="max-w-[1024px] mx-auto px-6">
          <p>© {new Date().getFullYear()} Theo Zhang. Designed with precision.</p>
        </div>
      </footer>
    </div>
  );
}