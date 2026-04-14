'use client';

import FadeInSection from './FadeInSection';
import { translations, type Lang } from './translations';

interface ContactProps {
  lang: Lang;
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;

  return (
    <section id="contact" className="py-24 px-6 md:px-12 text-center">
      <div className="max-w-[1024px] mx-auto">
        <FadeInSection>
          <h2 className="text-[40px] font-semibold tracking-tight mb-8">{t.title}</h2>
          <p className="text-[19px] text-[#6e6e73] mb-12 max-w-2xl mx-auto">
            {t.tagline}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <a href="mailto:contact@example.com" className="group">
              <div className="text-[14px] text-[#6e6e73] mb-1 uppercase tracking-widest">{t.email}</div>
              <div className="text-[21px] font-medium group-hover:text-[#0071e3] transition-colors">theo.zhang@example.com</div>
            </a>
            <a href="https://github.com/zyzsdsg" target="_blank" rel="noopener noreferrer" className="group">
              <div className="text-[14px] text-[#6e6e73] mb-1 uppercase tracking-widest">{t.github}</div>
              <div className="text-[21px] font-medium group-hover:text-[#0071e3] transition-colors">github.com/zyzsdsg</div>
            </a>
            <div>
              <div className="text-[14px] text-[#6e6e73] mb-1 uppercase tracking-widest">Location</div>
              <div className="text-[21px] font-medium">{t.location}</div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}