import React, { useState, useEffect } from 'react';
import {
  initialProfileData,
  portfolioProjects,
  experienceData
} from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  // All profile and portfolio data is controlled directly in /src/data/portfolioData.ts
  const profile = initialProfileData;

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Clear any legacy cached profile data so code changes always take immediate effect
  useEffect(() => {
    try {
      localStorage.removeItem('portfolio_profile_data');
    } catch {
      // Ignore
    }
  }, []);

  // Sync theme to document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch {
      // Ignore
    }
  }, [theme]);

  // Keyboard shortcut listener: Esc closes modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResumeOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      id="portfolio-app-root"
      className={`${theme === 'dark' ? 'dark' : ''} min-h-screen bg-[#faf9f6] text-zinc-900 dark:bg-[#0c0d10] dark:text-zinc-100 transition-colors duration-200`}
    >
      {/* Sticky Top Navigation */}
      <Navbar
        profile={profile}
        theme={theme}
        onToggleTheme={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <ProjectsSection projects={portfolioProjects} />

        <ExperienceSection experiences={experienceData} />

        <EducationSection profile={profile} />

        <SkillsSection />

        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        theme={theme}
        onToggleTheme={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        experiences={experienceData}
        projects={portfolioProjects}
      />
    </div>
  );
}
