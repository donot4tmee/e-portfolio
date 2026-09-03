import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onOpenResume
}) => {
  // Live Manila Time in Dot Matrix
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTimeStr(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Initials fallback
  const initials = profile.name
    .split(' ')
    .filter(Boolean)
    .map(n => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase() || 'RM';

  return (
    <section id="about" className="pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple System Header Bar */}
        <div className="flex items-center justify-between py-2 px-4 mb-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono-code text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2e2e]" />
            <span className="font-dot text-black dark:text-white">RADZ.OS // (2.6)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px]">STATUS:</span>
            <span className="text-black dark:text-white font-medium">AVAILABLE FOR SWE ROLES</span>
          </div>
        </div>

        {/* Clean Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Main Profile & Statement Card (Col 8) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border border-black/10 dark:border-white/15 flex flex-col justify-between">
            <div>
              {/* Profile Identity Row */}
              <div className="flex items-center gap-4 mb-6">
                {/* Minimal squircle avatar */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-black/20 dark:border-white/20 bg-zinc-100 dark:bg-[#1a1a1a] flex-shrink-0 flex items-center justify-center">
                  {profile.avatar ? (
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-dot text-xl sm:text-2xl font-bold text-black dark:text-white">
                      {initials}
                    </div>
                  )}
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#ff2e2e]" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-dot text-xs text-[#ff2e2e]">(DEV.01)</span>
                    <span className="text-xs font-mono-code text-zinc-500">{profile.handle}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white font-nothing mt-0.5">
                    {profile.name}
                  </h2>
                  <p className="text-xs font-mono-code text-zinc-600 dark:text-zinc-400 mt-0.5">
                    {profile.title} • {profile.location}
                  </p>
                </div>
              </div>

              {/* Bold Statement of Intent */}
              <div className="mb-6">
                <div className="font-dot text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
                  // STATEMENT OF INTENT
                </div>
                <h1 className="font-nothing text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black dark:text-white leading-tight uppercase">
                  Full-stack developer & CS student building reliable software and intuitive web systems.
                </h1>
              </div>

              {/* Clean Narrative Description */}
              <div className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3 font-light max-w-2xl">
                <p>
                  Computer Science undergraduate at Visayas State University. I engineer end-to-end software applications, translating database schemas and algorithm logic into accessible, high-performance user interfaces.
                </p>
                <p>
                  Combining practical experience in full-stack web development with database management and UI/UX design, I am dedicated to building dependable software solutions.
                </p>
              </div>
            </div>

            {/* Tactile Action Buttons */}
            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center gap-3 text-xs font-mono-code">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all font-medium"
              >
                <span>EMAIL DIRECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 border border-black/15 dark:border-white/20 text-black dark:text-white transition-all"
                >
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 border border-black/15 dark:border-white/20 text-black dark:text-white transition-all"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ff2e2e] text-white hover:bg-[#e02424] transition-all font-medium cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>RESUME .PDF</span>
              </button>
            </div>
          </div>

          {/* Side Specifications & Clock Card (Col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Clock Widget */}
            <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border border-black/10 dark:border-white/15">
              <div className="flex items-center justify-between mb-2 text-xs font-mono-code text-zinc-500">
                <span className="font-dot text-black dark:text-white">// ASIA/MANILA</span>
                <span className="text-[#ff2e2e]">UTC+08:00</span>
              </div>
              <div className="font-dot text-3xl sm:text-4xl font-bold tracking-widest text-black dark:text-white my-1">
                {timeStr || '12:00:00'}
              </div>
              <div className="flex items-center justify-between text-xs font-mono-code text-zinc-500 mt-2 pt-2 border-t border-black/10 dark:border-white/10">
                <span>BAYBAY CITY, LEYTE</span>
                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  SYNCED
                </span>
              </div>
            </div>

            {/* Quick System Specifications Card */}
            <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border border-black/10 dark:border-white/15 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono-code mb-4">
                  <span className="font-dot text-[#ff2e2e]">// SPECIFICATIONS</span>
                  <span className="text-zinc-500">CS_2028</span>
                </div>

                <div className="space-y-3.5 text-xs font-mono-code">
                  <div>
                    <span className="text-zinc-400 dark:text-zinc-500 block text-[10px]">INSTITUTION</span>
                    <span className="font-semibold text-black dark:text-white">Visayas State University</span>
                  </div>

                  <div>
                    <span className="text-zinc-400 dark:text-zinc-500 block text-[10px]">DEGREE PROGRAM</span>
                    <span className="font-semibold text-black dark:text-white">B.S. Computer Science</span>
                  </div>

                  <div>
                    <span className="text-zinc-400 dark:text-zinc-500 block text-[10px]">ACADEMIC HONORS</span>
                    <span className="font-semibold text-black dark:text-white">College Honor (A.Y. 2024–2026)</span>
                  </div>

                  <div>
                    <span className="text-zinc-400 dark:text-zinc-500 block text-[10px]">PRIMARY FOCUS</span>
                    <span className="font-semibold text-black dark:text-white">Full-Stack & Database Systems</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono-code text-zinc-500">
                <span>AVAILABILITY</span>
                <span className="text-black dark:text-white font-medium">OPEN FOR ROLES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
