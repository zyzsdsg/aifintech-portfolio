'use client';

import FadeInSection from './FadeInSection';
import { translations, type Lang } from './translations';

interface SkillsProps {
  lang: Lang;
}

export default function Skills({ lang }: SkillsProps) {
  const t = translations[lang].skills;

  const groups = [
    { title: t.ds, items: t.dsList },
    { title: t.ai, items: t.aiList },
    { title: t.fin, items: t.finList },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-[#f5f5f7]">
      <div className="max-w-[1024px] mx-auto">
        <FadeInSection>
          <h2 className="text-[40px] font-semibold tracking-tight mb-16">{t.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-[19px] font-semibold mb-6">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s: string) => (
                    <span key={s} className="bg-white text-[#1d1d1f] text-[14px] px-4 py-1.5 rounded-full border border-black/5 shadow-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}