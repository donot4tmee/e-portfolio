import React, { useState } from 'react';
import { X, Printer, Copy, Check, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { ProfileData, Experience, Project } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  experiences: Experience[];
  projects: Project[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  experiences,
  projects
}) => {
  const [copiedMd, setCopiedMd] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `# ${profile.name}
${profile.email} | ${profile.location} | linkedin.com/in/radz-ponce-moreno-927a6a3a9 | github.com/donot4tmee

## Professional Objective
Full-Stack Developer and Computer Science student at Visayas State University. Seeking to leverage application development, system logic, UI/UX design, and database architecture skills to build reliable, high-performance web applications and intuitive software solutions.

## Education
**Bachelor of Science in Computer Science** – Visayas State University (Leyte, PH)
Aug 2024 – 2028 (expected)
- Honors: College Honor, A.Y. 2024-2026

## Experience
### VERIS | Front-End Developer (2026 – Present)
- VERIS unifies membership tracking, event clearance, and student engagement tools into a single system — built for student organizations tired of running everything through spreadsheets and group chats.
- Engineered responsive front-end interfaces to eliminate manual administrative friction across membership lists and event clearances.
- Built reusable web components ensuring intuitive workflows and consistent UI/UX standards.

## Projects
### Student Management System | Full Stack Developer (Oct 2025 – Nov 2025)
- Engineered a structured digital repository capable of handling 500+ student profiles, organizing data points including IDs, birthdates, and addresses into a structured system.
- Implemented full CRUD functionality that reduced manual data entry time by an estimated 40% compared to traditional paper-based methods.
- Optimized data retrieval by developing sorting algorithms that allow users to query and display specific records in under 2 seconds.

### EcoBayan | UI/UX Designer (June 2025)
- Incentive-based, community-led waste management program for coastal barangays.
- Aims to reduce up to 50–70% of coastal and household waste through incentivized collection and segregation.
- Engages 60%+ youth participation via SK-led verification and community monitoring.

## Technical Skills
- **Programming:** C/C++, Python, Java, JavaScript, HTML/CSS
- **Database & Storage:** Supabase, Relational Databases & SQL (PostgreSQL, MySQL)
- **Tools & Technologies:** Visual Studio Code, Git, GitHub, Figma, Canva
- **Interests:** Computer Hardware Architecture, Game Development, Algorithm Design

## Achievements
### IDEA + Reverse Pitching Competition RSCENE – 1st Place (June 2025)
- A region-wide pitching competition to propose a solution to real world problems through a strategic framework that utilized data analytics to address the environmental crisis.
- Bested regional competitors by proposing a scalable solution to real-world problems.
- Demonstrated strong strategic thinking and technical feasibility during a high-stakes presentation to a panel of industry experts.

### Philippine International Mathematical Olympiad – Merit Award (May 2023)
- Secured a Merit Award in a high-level international competition involving thousands of participants, demonstrating advanced proficiency in logical reasoning and complex problem-solving.
- Ranked among top-performing students by applying mathematical theories to solve multi-stage competitive challenges under strict time constraints.
- Strengthened the analytical foundation necessary for algorithm design and backend architecture through rigorous training in mathematical logic.
`;
    navigator.clipboard.writeText(md);
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 2000);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl bg-white dark:bg-[#0e0e0e] text-zinc-900 dark:text-zinc-100 rounded-3xl border border-black/20 dark:border-white/20 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Control Bar (Hidden on print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff2e2e]" />
            <span className="font-dot text-xs sm:text-sm text-black dark:text-white uppercase tracking-wider">
              (CV) RADZ.OS // CURRICULUM VITAE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-code bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-black dark:text-white transition-colors cursor-pointer"
            >
              {copiedMd ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedMd ? 'COPIED' : 'MARKDOWN'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono-code bg-[#ff2e2e] text-white hover:bg-[#e02424] transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-zinc-500 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-xs sm:text-sm font-light leading-relaxed">
          {/* Header */}
          <div className="border-b border-black/10 dark:border-white/10 pb-5">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-dot text-xs text-[#ff2e2e]">// APPLICANT PROFILE</span>
            </div>
            <h1 className="font-nothing text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white">
              {profile.name}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono-code text-zinc-500 dark:text-zinc-400 mt-2">
              <span className="inline-flex items-center gap-1">
                <Mail className="w-3 h-3 text-zinc-400" />
                {profile.email}
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-zinc-400" />
                {profile.location}
              </span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-3 h-3 text-zinc-400" />
                linkedin.com/in/radz-ponce-moreno-927a6a3a9
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"
              >
                <Github className="w-3 h-3 text-zinc-400" />
                github.com/donot4tmee
              </a>
            </div>
          </div>

          {/* Professional Objective */}
          <div>
            <h2 className="text-xs font-dot uppercase tracking-wider text-[#ff2e2e] mb-1.5">
              // 01. OBJECTIVE
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
              Full-Stack Developer and Computer Science student at Visayas State University. Seeking to leverage application development, system logic, UI/UX design, and database architecture skills to build reliable, high-performance web applications and intuitive software solutions.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-dot uppercase tracking-wider text-[#ff2e2e] mb-2">
              // 02. EDUCATION
            </h2>
            <div className="flex justify-between items-baseline">
              <div className="font-semibold text-black dark:text-white font-nothing">
                Bachelor of Science in Computer Science
              </div>
              <div className="text-xs font-mono-code text-zinc-500">Aug 2024 – 2028 (expected)</div>
            </div>
            <div className="text-xs font-mono-code text-zinc-600 dark:text-zinc-400 mt-1">
              Visayas State University (Leyte, PH) • <span className="font-medium text-emerald-600 dark:text-emerald-400">College Honor, A.Y. 2024-2026</span>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-dot uppercase tracking-wider text-[#ff2e2e] mb-2.5">
              // 03. EXPERIENCE
            </h2>
            <div className="space-y-3.5">
              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-black dark:text-white font-nothing">
                    VERIS <span className="text-zinc-500 font-normal font-mono-code text-xs">| Front-End Developer</span>
                  </div>
                  <div className="text-xs font-mono-code text-zinc-500">2026 – Present</div>
                </div>
                <ul className="list-disc list-inside mt-1.5 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                  <li>Front-End Developer for VERIS — unifying membership tracking, event clearance, and student engagement tools into a single system built for student organizations tired of running everything through spreadsheets and group chats.</li>
                  <li>Architecting responsive and intuitive user interfaces to eliminate manual administrative friction across membership lists and event clearances.</li>
                  <li>Building reusable web components ensuring intuitive workflows and consistent UI/UX standards.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-dot uppercase tracking-wider text-[#ff2e2e] mb-2.5">
              // 04. SELECTED PROJECTS
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-black dark:text-white font-nothing">
                    Student Management System <span className="text-zinc-500 font-normal font-mono-code text-xs">| Full Stack Developer</span>
                  </div>
                  <div className="text-xs font-mono-code text-zinc-500">Oct 2025 – Nov 2025</div>
                </div>
                <ul className="list-disc list-inside mt-1.5 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                  <li>Engineered a structured digital repository capable of handling 500+ student profiles, organizing data points including IDs, birthdates, and addresses into a structured digital system.</li>
                  <li>Implemented full CRUD functionality that reduced manual data entry time by an estimated 40% compared to traditional paper-based methods.</li>
                  <li>Optimized data retrieval by developing sorting algorithms that allow users to query and display specific records in under 2 seconds.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-black dark:text-white font-nothing">
                    EcoBayan <span className="text-zinc-500 font-normal font-mono-code text-xs">| UI/UX Designer</span>
                  </div>
                  <div className="text-xs font-mono-code text-zinc-500">June 2025</div>
                </div>
                <ul className="list-disc list-inside mt-1.5 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                  <li>Incentive-based, community-led waste management program for coastal barangays.</li>
                  <li>Aims to reduce up to 50–70% of coastal and household waste through incentivized collection and segregation.</li>
                  <li>Engages 60%+ youth participation via SK-led verification and community monitoring.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-dot uppercase tracking-wider text-[#ff2e2e] mb-2">
              // 05. TECHNICAL CAPABILITIES
            </h2>
            <div className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300 font-mono-code">
              <div>
                <span className="font-medium text-black dark:text-white">PROGRAMMING:</span> C/C++, Python, Java, JavaScript, HTML/CSS
              </div>
              <div>
                <span className="font-medium text-black dark:text-white">DATABASE & STORAGE:</span> Supabase, Relational Databases & SQL (PostgreSQL, MySQL)
              </div>
              <div>
                <span className="font-medium text-black dark:text-white">TOOLS & TECHNOLOGIES:</span> Visual Studio Code, Git, GitHub, Figma, Canva
              </div>
              <div>
                <span className="font-medium text-black dark:text-white">INTERESTS:</span> Computer Hardware Architecture, Game Development, Algorithm Design
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-dot uppercase tracking-wider text-[#ff2e2e] mb-2.5">
              // 06. ACHIEVEMENTS
            </h2>
            <div className="space-y-3.5">
              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-black dark:text-white font-nothing">
                    IDEA + Reverse Pitching Competition RSCENE <span className="text-emerald-600 dark:text-emerald-400 font-medium font-mono-code text-xs">– 1ST PLACE</span>
                  </div>
                  <div className="text-xs font-mono-code text-zinc-500">June 2025</div>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                  <li>A region wide pitching competition to propose a solution to real world problems through a strategic framework that utilized data analytics to address the environmental crisis.</li>
                  <li>Bested regional competitors by proposing a scalable solution to real-world problems.</li>
                  <li>Demonstrated strong strategic thinking and technical feasibility during a high-stakes presentation to a panel of industry experts.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-black dark:text-white font-nothing">
                    Philippine International Mathematical Olympiad <span className="text-zinc-500 font-medium font-mono-code text-xs">– MERIT AWARDEE</span>
                  </div>
                  <div className="text-xs font-mono-code text-zinc-500">May 2023</div>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                  <li>Secured a Merit Award in a high-level international competition involving thousands of participants, demonstrating advanced proficiency in logical reasoning and complex problem-solving.</li>
                  <li>Ranked among top-performing students by applying mathematical theories to solve multi-stage competitive challenges under strict time constraints.</li>
                  <li>Strengthened the analytical foundation necessary for algorithm design and backend architecture through rigorous training in mathematical logic.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
