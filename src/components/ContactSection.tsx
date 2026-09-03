import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { ProfileData } from '../types';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="font-dot text-xs text-[#ff2e2e] tracking-widest uppercase mb-1">
              // TRANSMISSION TERMINAL
            </div>
            <h2 className="font-nothing text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white uppercase">
              Get in Touch
            </h2>
          </div>
          <span className="font-dot text-xs px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 text-zinc-700 dark:text-zinc-300">
            [STATUS // OPEN]
          </span>
        </div>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl font-light leading-relaxed mb-8">
          Seeking to contribute to full-stack and backend development initiatives through application architecture, system design, and database engineering. Available for developer roles, internships, and technical collaborations.
        </p>

        {/* Contact Bento Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Email Transmission Card */}
          <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border border-black/10 dark:border-white/15 flex flex-col justify-between hover:border-black/30 dark:hover:border-white/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2e2e]" />
                <span className="font-dot text-black dark:text-white">EMAIL DISPATCH</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 text-black dark:text-white hover:bg-[#ff2e2e] hover:text-white hover:border-[#ff2e2e] transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            <div>
              <a
                href={`mailto:${profile.email}`}
                className="text-base font-mono-code text-black dark:text-white font-medium hover:text-[#ff2e2e] transition-colors inline-flex items-center gap-1.5"
              >
                <span>{profile.email}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
              <span className="text-[11px] font-mono-code text-zinc-500 block mt-1.5">
                // Direct response within 24 hours
              </span>
            </div>
          </div>

          {/* LinkedIn Transmission Card */}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-3xl bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white/30 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="font-dot text-black dark:text-white">LINKEDIN NETWORK</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#ff2e2e] transition-colors" />
              </div>

              <div>
                <span className="text-base font-nothing font-bold text-black dark:text-white group-hover:text-[#ff2e2e] transition-colors block">
                  Radz Ponce Moreno
                </span>
                <span className="text-[11px] font-mono-code text-zinc-500 block mt-1.5 truncate">
                  linkedin.com/in/radz-ponce-moreno-927a6a3a9
                </span>
              </div>
            </a>
          )}

          {/* GitHub Source Card */}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-3xl bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white/30 transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2e2e]" />
                <span className="font-dot text-black dark:text-white">GITHUB REPOSITORIES</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#ff2e2e] transition-colors" />
            </div>

            <div>
              <span className="text-base font-nothing font-bold text-black dark:text-white group-hover:text-[#ff2e2e] transition-colors block">
                @donot4tmee
              </span>
              <span className="text-[11px] font-mono-code text-zinc-500 block mt-1.5">
                github.com/donot4tmee
              </span>
            </div>
          </a>

          {/* Location & Availability Card */}
          <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border border-black/10 dark:border-white/15 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-500 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-dot text-black dark:text-white">STATUS & TIMING</span>
            </div>

            <div>
              <span className="text-base font-nothing font-bold text-black dark:text-white block">
                {profile.location}
              </span>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-xs font-mono-code text-emerald-600 dark:text-emerald-400 font-medium">
                  // Available for full-stack & backend internships
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
