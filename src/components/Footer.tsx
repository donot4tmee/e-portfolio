import React from 'react';
import { ArrowUp, Sun, Moon } from 'lucide-react';
import { ProfileData } from '../types';

interface FooterProps {
  profile: ProfileData;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  theme,
  onToggleTheme,
  onOpenResume
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="py-12 border-t border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2e2e]" />
          <span className="font-dot text-black dark:text-white">
            RADZ.OS // (C) {new Date().getFullYear()}
          </span>
          <span className="text-zinc-400 dark:text-zinc-600 hidden sm:inline">
            // ALL SYSTEMS OPERATIONAL
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              LINKEDIN
            </a>
          )}

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            GITHUB
          </a>

          <button
            onClick={onToggleTheme}
            className="inline-flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>LIGHT</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-400" />
                <span>DARK</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            CV .PDF
          </button>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 text-black dark:text-white hover:bg-[#ff2e2e] hover:text-white hover:border-[#ff2e2e] transition-colors cursor-pointer"
          >
            <span>TOP</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
