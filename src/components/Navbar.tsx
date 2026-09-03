import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, Menu, X } from 'lucide-react';
import { ProfileData } from '../types';

interface NavbarProps {
  profile: ProfileData;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  theme,
  onToggleTheme,
  onOpenResume
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  // Fallback initials if avatar is not provided
  const initials = profile.name
    .split(' ')
    .filter(Boolean)
    .map(n => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase() || 'RM';

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/85 dark:bg-[#080808]/85 backdrop-blur-md border-b border-black/10 dark:border-white/10 py-2.5 sm:py-3 shadow-sm'
          : 'bg-white/50 dark:bg-[#080808]/50 backdrop-blur-xs py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Brand with Profile Photo & Student Badge */}
        <a
          id="nav-brand-link"
          href="#about"
          className="group flex items-center gap-2.5 min-w-0 focus:outline-hidden"
        >
          <div className="relative flex-shrink-0">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-black/20 dark:border-white/20 group-hover:border-[#ff2e2e] transition-colors"
              />
            ) : (
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-200 dark:bg-[#1a1a1a] border border-black/20 dark:border-white/20 flex items-center justify-center text-[10px] sm:text-xs font-dot font-bold text-black dark:text-white">
                (R)
              </div>
            )}
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#ff2e2e]" />
          </div>

          <div className="flex items-center gap-2 truncate">
            <span className="font-dot text-xs sm:text-sm tracking-wide text-black dark:text-white group-hover:text-[#ff2e2e] transition-colors truncate">
              RADZ.OS
            </span>
            <span className="hidden sm:inline-block text-[9px] font-mono-code px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/15">
              VER 2.6
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-mono-code text-zinc-600 dark:text-zinc-400 bg-black/5 dark:bg-white/5 p-1 rounded-full border border-black/10 dark:border-white/10">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 px-3 py-1 rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          {/* Resume CTA Nothing Phone Button */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-code bg-[#ff2e2e] text-white hover:bg-[#e02424] transition-colors cursor-pointer shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="hidden xs:inline font-medium">CV .PDF</span>
          </button>

          {/* Theme Toggle: Segmented switch on sm+ */}
          <div className="hidden sm:flex items-center p-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15">
            <button
              id="theme-btn-light"
              type="button"
              onClick={() => theme !== 'light' && onToggleTheme()}
              title="Light mode"
              className={`px-2.5 py-1 rounded-full text-xs font-mono-code flex items-center gap-1 transition-all cursor-pointer ${
                theme === 'light'
                  ? 'bg-white text-black shadow-xs font-semibold'
                  : 'text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              <Sun className={`w-3.5 h-3.5 ${theme === 'light' ? 'text-amber-500' : 'text-zinc-500 dark:text-zinc-400'}`} />
              <span className="text-[10px]">LIGHT</span>
            </button>

            <button
              id="theme-btn-dark"
              type="button"
              onClick={() => theme !== 'dark' && onToggleTheme()}
              title="Dark mode"
              className={`px-2.5 py-1 rounded-full text-xs font-mono-code flex items-center gap-1 transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'bg-[#181818] text-white shadow-xs font-semibold'
                  : 'text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              <Moon className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-indigo-400' : 'text-zinc-500 dark:text-zinc-400'}`} />
              <span className="text-[10px]">DARK</span>
            </button>
          </div>

          {/* Compact Mobile Theme Button */}
          <button
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
            className="sm:hidden p-1.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-500" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )}
          </button>

          {/* Mobile menu hamburger */}
          <button
            id="nav-mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-black/10 dark:border-white/10 bg-white dark:bg-[#080808] px-5 py-4 space-y-3 shadow-lg">
          {/* Student quick info in mobile menu */}
          <div className="flex items-center gap-3 pb-3 border-b border-black/10 dark:border-white/10">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-full object-cover border border-black/20 dark:border-white/20"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-zinc-200 dark:bg-[#181818] border border-black/20 dark:border-white/20 flex items-center justify-center font-dot font-bold text-xs">
                (R)
              </div>
            )}
            <div>
              <div className="text-sm font-semibold text-black dark:text-white font-nothing">
                {profile.name}
              </div>
              <div className="text-xs font-mono-code text-zinc-500 dark:text-zinc-400">
                {profile.title}
              </div>
            </div>
          </div>

          <div className="space-y-1">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-xs font-mono-code text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white"
              >
                // {link.label.toUpperCase()}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono-code">THEME SWITCH</span>
            <div className="flex items-center p-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
              <button
                onClick={() => theme !== 'light' && onToggleTheme()}
                className={`px-3 py-1 rounded-full text-xs font-mono-code flex items-center gap-1.5 transition-all ${
                  theme === 'light' ? 'bg-white text-black font-medium shadow-xs' : 'text-zinc-500'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>Light</span>
              </button>
              <button
                onClick={() => theme !== 'dark' && onToggleTheme()}
                className={`px-3 py-1 rounded-full text-xs font-mono-code flex items-center gap-1.5 transition-all ${
                  theme === 'dark' ? 'bg-zinc-900 text-white font-medium shadow-xs' : 'text-zinc-400'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-indigo-300" />
                <span>Dark</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
