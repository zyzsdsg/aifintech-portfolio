'use client';

import FadeInSection from './FadeInSection';
import { translations, type Lang } from './translations';

interface HeroProps {
  lang: Lang;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-[1024px] mx-auto">
      <FadeInSection>
        <h1 className="text-[48px] md:text-[80px] font-semibold tracking-tight leading-[1.1] mb-6">
          {t.title}
        </h1>
        <h2 className="text-[21px] md:text-[24px] font-medium text-[#1d1d1f] mb-4 max-w-3xl">
          {t.subtitle}
        </h2>
        <p className="text-[19px] md:text-[21px] text-[#6e6e73] max-w-2xl mb-12 leading-relaxed">
          {t.bio}
        </p>
        <div className="flex items-center space-x-6">
          <a href="#projects" className="bg-[#1d1d1f] text-white rounded-full px-8 py-3 text-[17px] font-medium hover:bg-black/80 transition-colors">
            {t.cta1}
          </a>
          <a href="#contact" className="text-[#0071e3] hover:underline text-[17px] font-medium">
            {t.cta2} <span className="ml-1">→</span>
          </a>
        </div>
      </FadeInSection>
    </section>
  );
}