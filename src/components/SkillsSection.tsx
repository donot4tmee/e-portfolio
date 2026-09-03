import React from 'react';
import { SkillCategory } from '../types';

interface SkillsSectionProps {
  categories?: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = () => {
  const skillGroups = [
    {
      code: 'LANG.01',
      category: 'Programming Languages',
      items: [
        { name: 'C / C++', note: 'Low-level logic & systems' },
        { name: 'Python', note: 'Data analytics & scripting' },
        { name: 'Java', note: 'Object-oriented programming' },
        { name: 'JavaScript', note: 'Full-stack application logic' },
        { name: 'HTML / CSS', note: 'Semantic UI layouts' }
      ]
    },
    {
      code: 'DATA.02',
      category: 'Database & Storage',
      items: [
        { name: 'Supabase', note: 'PostgreSQL, auth & real-time' },
        { name: 'SQL / MySQL', note: 'Relational schema design' },
        { name: 'CRUD Operations', note: 'Lifecycle record management' },
        { name: 'DB Architecture', note: 'Normalization & integrity' },
        { name: 'Query Optimization', note: 'Sub-2s record indexing' }
      ]
    },
    {
      code: 'TOOL.03',
      category: 'Tools & Technologies',
      items: [
        { name: 'VS Code', note: 'IDE environment' },
        { name: 'Git & GitHub', note: 'VCS & CI workflows' },
        { name: 'Figma', note: 'Wireframing & UI prototyping' },
        { name: 'Canva', note: 'Visual documentation' }
      ]
    },
    {
      code: 'CORE.04',
      category: 'Areas of Interest & Focus',
      items: [
        { name: 'Hardware Architecture', note: 'CPU, memory & system' },
        { name: 'Algorithm Design', note: 'Time complexity analysis' },
        { name: 'Game Development', note: 'Interactive game mechanics' },
        { name: 'Backend Solutions', note: 'High-reliability services' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="font-dot text-xs text-[#ff2e2e] tracking-widest uppercase mb-1">
              // TECHNICAL CAPABILITIES
            </div>
            <h2 className="font-nothing text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white uppercase">
              Skills & Toolkit
            </h2>
          </div>
          <span className="font-dot text-xs px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 text-zinc-700 dark:text-zinc-300">
            [SYS_SPECS // 04]
          </span>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map(group => (
            <div
              key={group.category}
              className="p-6 rounded-3xl bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-code mb-4">
                  <span className="font-dot text-xs text-[#ff2e2e]">
                    ({group.code})
                  </span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                    MODULE ACTIVE
                  </span>
                </div>

                <h3 className="font-nothing text-lg font-bold text-black dark:text-white mb-4">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <div
                      key={item.name}
                      className="px-3 py-1.5 rounded-full text-xs font-mono-code flex items-center gap-1.5 bg-black/5 dark:bg-white/5 text-zinc-800 dark:text-zinc-200 border border-black/10 dark:border-white/10"
                    >
                      <span>{item.name}</span>
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-sans">
                        // {item.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[10px] font-mono-code text-zinc-400 dark:text-zinc-500">
                <span>VERIFIED SKILLSET</span>
                <span>[100% OPERATIONAL]</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
