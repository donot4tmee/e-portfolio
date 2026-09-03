import React from 'react';
import { ProfileData } from '../types';

interface EducationSectionProps {
  profile: ProfileData;
}

export const EducationSection: React.FC<EducationSectionProps> = () => {
  const honors = [
    'College Honor, Academic Years 2024–2026 — Visayas State University',
    '1st Place Winner — IDEA + Reverse Pitching Competition RSCENE (June 2025)',
    'Merit Awardee — Philippine International Mathematical Olympiad (PhIMO, May 2023)'
  ];

  return (
    <section id="education" className="py-16 sm:py-24 border-t border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="font-dot text-xs text-[#ff2e2e] tracking-widest uppercase mb-1">
              // ACADEMIC SPECIFICATIONS
            </div>
            <h2 className="font-nothing text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white uppercase">
              Education
            </h2>
          </div>
          <span className="font-dot text-xs px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 text-zinc-700 dark:text-zinc-300">
            [BSCS // 2028]
          </span>
        </div>

        {/* Bento Box Academic Profile */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Main Institution Card */}
          <div className="md:col-span-7 p-6 rounded-3xl bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border border-black/10 dark:border-white/15 relative">
            <div className="flex items-center justify-between text-xs font-mono-code mb-4">
              <span className="font-dot text-xs text-[#ff2e2e]">
                // UNDERGRADUATE CANDIDATE
              </span>
              <span className="text-zinc-500">
                2024 — 2028 (EXPECTED)
              </span>
            </div>

            <h3 className="font-nothing text-xl font-bold text-black dark:text-white">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-sm font-mono-code text-zinc-600 dark:text-zinc-400 mt-1">
              Visayas State University // Baybay City, Leyte, PH
            </p>

            <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 text-xs font-mono-code text-black dark:text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2e2e]" />
                <span>COLLEGE HONOR (A.Y. 2024–2026)</span>
              </span>
            </div>
          </div>

          {/* Honors & Accolades Card */}
          <div className="md:col-span-5 p-6 rounded-3xl bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border border-black/10 dark:border-white/15 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono-code text-[#ff2e2e] mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2e2e]" />
                <span className="font-dot">HONORS & AWARDS</span>
              </div>

              <ul className="space-y-3 text-xs font-mono-code text-zinc-700 dark:text-zinc-300">
                {honors.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#ff2e2e] shrink-0 font-bold">›</span>
                    <span className="leading-relaxed font-sans text-xs">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 text-[10px] font-mono-code text-zinc-500">
              VERIFIED INSTITUTIONAL RECORDS // VSU CS DEPT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
