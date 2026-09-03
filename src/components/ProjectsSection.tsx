import React, { useState } from 'react';
import { ArrowUpRight, Github, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Nothing Style */}
        <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="font-dot text-xs text-[#ff2e2e] tracking-widest uppercase mb-1">
              // REPOSITORY ARCHIVE
            </div>
            <h2 className="font-nothing text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white uppercase">
              Selected Projects
            </h2>
          </div>
          <span className="font-dot text-xs px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 text-zinc-700 dark:text-zinc-300">
            [{String(projects.length).padStart(2, '0')}]
          </span>
        </div>

        {/* Nothing Phone Bento Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, idx) => {
            const isExpanded = expandedId === project.id;
            const projectNumber = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={project.id}
                id={`project-item-${project.id}`}
                className="p-6 rounded-3xl bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white/30 transition-all flex flex-col justify-between relative group"
              >
                {/* Top Row: Index + Year + Red Accent */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono-code mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-dot text-[#ff2e2e]">
                        (PRJ_{projectNumber})
                      </span>
                      <span className="text-zinc-400 dark:text-zinc-500">
                        // {project.year}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff2e2e] opacity-80" />
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-dot">ACTIVE</span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-nothing text-xl font-bold text-black dark:text-white group-hover:text-[#ff2e2e] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2.5 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Tech Tags Pill Matrix */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Case Study Details */}
                  {isExpanded && (
                    <div className="mt-5 pt-4 border-t border-black/10 dark:border-white/10 space-y-3.5 text-xs text-zinc-700 dark:text-zinc-300 font-mono-code">
                      <div>
                        <span className="text-[10px] text-[#ff2e2e] font-dot block mb-1">
                          [01. OBJECTIVE & CHALLENGE]
                        </span>
                        <p className="text-xs leading-relaxed font-sans text-zinc-600 dark:text-zinc-400">
                          {project.caseStudy.challenge}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] text-[#ff2e2e] font-dot block mb-1">
                          [02. ARCHITECTURE & SOLUTION]
                        </span>
                        <p className="text-xs leading-relaxed font-sans text-zinc-600 dark:text-zinc-400 mb-2">
                          {project.caseStudy.solution}
                        </p>

                        {project.caseStudy.architectureHighlights && (
                          <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 mt-1">
                            {project.caseStudy.architectureHighlights.map((item, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-[#ff2e2e]">›</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div>
                        <span className="text-[10px] text-[#ff2e2e] font-dot block mb-1">
                          [03. IMPACT & RESULTS]
                        </span>
                        <ul className="space-y-1 text-zinc-600 dark:text-zinc-400">
                          {project.caseStudy.results.map((res, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-emerald-500 font-bold">✓</span>
                              <span>{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action Row Nothing Tactile Pills */}
                <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono-code">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition-opacity"
                      >
                        <span>DEMO</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors"
                      >
                        <span>SRC</span>
                        <Github className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'LESS' : 'SPEC'}</span>
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
