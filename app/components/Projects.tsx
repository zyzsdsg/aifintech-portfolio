"use client";

import { useState } from "react";
import FadeInSection from "./FadeInSection";
import RiskDashboard from "./RiskDashboard";
import { translations, type Lang } from "./translations";

interface ProjectsProps {
  lang: Lang;
}

export default function Projects({ lang }: ProjectsProps) {
  const t = translations[lang].projects;
  const projects = [t.p2, t.p3];
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-[1024px] mx-auto">
        <FadeInSection>
          <h2 className="text-[40px] font-semibold tracking-tight mb-16">
            {t.title}
          </h2>

          {/* 项目 1 卡片 */}
          <div className="mb-8 bg-white border border-black/5 p-8 rounded-[24px] hover:border-black/10 transition-all">
            <div className="text-[12px] font-semibold tracking-widest text-[#6e6e73] mb-4">
              {t.p1.category}
            </div>
            <h3 className="text-[21px] font-semibold mb-2">{t.p1.title}</h3>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed mb-4 max-w-[600px]">
              {t.p1.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {t.p1.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="text-[12px] text-black/60 bg-black/5 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mb-4">
              {/* 修复 1: 补全了 <a> 标签的开口括号 */}
              <a
                href="#"
                className="text-[#0071e3] text-[14px] font-medium hover:underline"
              >
                {t.view}
              </a>
              <button
                onClick={() => setShowDashboard(!showDashboard)}
                className="text-[14px] font-medium text-[#1d1d1f] border border-black/10 px-4 py-1 rounded-full hover:bg-black/5 transition-all"
              >
                {showDashboard ? "Hide Live Data" : "View Live Data →"}
              </button>
            </div>

            {/* 修复 2: 确保 RiskDashboard 在卡片容器内，且逻辑严密 */}
            {showDashboard && (
              <div className="mt-6 pt-6 border-t border-black/5">
                <RiskDashboard />
              </div>
            )}
          </div>

          {/* 项目列表网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-white border border-black/5 p-8 rounded-[24px] hover:border-black/10 transition-all"
              >
                <div className="text-[12px] font-semibold tracking-widest text-[#6e6e73] mb-4">
                  {p.category}
                </div>
                <h3 className="text-[21px] font-semibold mb-4">{p.title}</h3>
                <p className="text-[17px] text-[#6e6e73] leading-relaxed mb-6 h-24">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-[12px] text-black/60 bg-black/5 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* 修复 3: 补全了网格卡片中 <a> 标签的开口括号 */}
                <a
                  href="#"
                  className="text-[#0071e3] text-[17px] font-medium hover:underline"
                >
                  {t.view}
                </a>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}