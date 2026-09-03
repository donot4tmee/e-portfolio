import React from 'react';
import { Experience } from '../types';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between mb-10 pb-4 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="font-dot text-xs text-[#ff2e2e] tracking-widest uppercase mb-1">
              // CHRONOLOGY & INVOLVEMENTS
            </div>
            <h2 className="font-nothing text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white uppercase">
              Experience
            </h2>
          </div>
          <span className="font-dot text-xs px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 text-zinc-700 dark:text-zinc-300">
            [{String(experiences.length).padStart(2, '0')}]
          </span>
        </div>

        {/* Nothing OS Minimalist Industrial Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              id={`exp-item-${exp.id}`}
              className="p-6 rounded-3xl bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border border-black/10 dark:border-white/15 relative overflow-hidden group hover:border-black/30 dark:hover:border-white/30 transition-all"
            >
              <div className="grid sm:grid-cols-12 gap-4 sm:gap-6">
                {/* Date / Period Column */}
                <div className="sm:col-span-4 text-xs font-mono-code text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff2e2e]" />
                    <span className="font-dot text-xs text-black dark:text-white">
                      (EXP_0{idx + 1})
                    </span>
                  </div>
                  <div className="font-semibold text-black dark:text-white mt-1">
                    {exp.period}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5 uppercase tracking-wide">
                    {exp.type}
                  </div>
                </div>

                {/* Role Details Column */}
                <div className="sm:col-span-8">
                  <div className="font-nothing text-lg font-bold text-black dark:text-white group-hover:text-[#ff2e2e] transition-colors">
                    {exp.role}
                  </div>
                  <div className="text-xs font-mono-code text-[#ff2e2e] mb-3">
                    // {exp.company.toUpperCase()}
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#ff2e2e] font-mono-code text-xs mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech / Competency Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-black/5 dark:border-white/5">
                    {exp.skills.map(s => (
                      <span
                        key={s}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
