import { ProfileData, Project, Experience, Testimonial, SkillCategory, DeskItem } from '../types';

/**
 * =====================================================================
 * PERSONAL PORTFOLIO CONFIGURATION - RADZ PONCE A. MORENO
 * All personal details, projects, skills, education, and achievements
 * are configured here and render throughout the entire website.
 * =====================================================================
 */

export const initialProfileData: ProfileData = {
  // Full Name
  name: 'Radz Ponce A. Moreno',

  // Social / Terminal Handle
  handle: '@donot4tmee',

  // Degree / Standing / Target Role
  title: 'Full-Stack Developer & CS Student',

  // Profile Photo
  avatar: '/assets/profile-picture.png',

  tagline: 'Computer Science student and Full-Stack Developer building reliable software systems, clean database architecture, and intuitive user experiences.',
  location: 'Baybay City, Leyte, PH',
  timezone: 'Asia/Manila',

  // Status Badge
  status: 'Full-Stack Developer | Open to Opportunities',
  availableForWork: true,

  // Direct Contact & Links
  phone: '',
  email: 'morenoradz@gmail.com',
  github: 'https://github.com/donot4tmee',
  linkedin: 'https://www.linkedin.com/in/radz-ponce-moreno-927a6a3a9/',
  twitter: '',

  // Bio Modes
  bioModes: {
    professional:
      'Motivated Full-Stack Developer and Computer Science student at Visayas State University. With experience developing end-to-end software solutions, I build reliable, high-performance web applications. Combining a foundation in UI/UX design with system logic and database architecture, I am committed to delivering seamless user experiences while expanding my technical expertise in a fast-paced professional environment.',
    creative:
      'Bridging full-stack architecture with intuitive UI/UX design. Passionate about structuring clean relational schemas, developing responsive interfaces, and designing community-led civic tools like EcoBayan using modern web technologies.',
    casual:
      'Undergraduate CS student at Visayas State University in Leyte and full-stack developer. When I am not building web applications or optimizing data sorting algorithms, you will find me exploring computer hardware architecture, designing game mechanics, or training for competitive mathematics and algorithm challenges.',
    geek:
      'const student = {\n  name: "Radz Ponce A. Moreno",\n  role: "Full-Stack Developer & CS Student",\n  institution: "Visayas State University",\n  degree: "BS Computer Science (2024-2028)",\n  honors: "College Honor A.Y. 2024-2026",\n  stack: ["C/C++", "Python", "Java", "JavaScript", "HTML/CSS", "SQL", "Supabase", "Git", "Figma"],\n  focus: ["Full-Stack Architecture", "Database Systems", "UI/UX Design", "Algorithm Optimization"]\n};\nwhile (student.isAwake) {\n  student.developSoftware();\n  student.optimizeAlgorithms();\n}'
  },

  // Key Quick Metrics
  stats: [
    { label: 'Degree & Year', value: 'B.S. CS', subtext: 'Visayas State Univ. (2028)' },
    { label: 'Academic Honors', value: 'College Honor', subtext: 'A.Y. 2024–2026' },
    { label: 'Pitching Champion', value: '1st Place', subtext: 'RSCENE Reverse Pitching' },
    { label: 'Math Olympiad', value: 'Merit Award', subtext: 'PhIMO International' }
  ]
};

export const portfolioProjects: Project[] = [
  {
    id: 'veris',
    title: 'VERIS',
    subtitle: 'Unified membership tracking, event clearance, and student engagement platform',
    description: 'VERIS unifies membership tracking, event clearance, and student engagement tools into a single system — built for student organizations tired of running everything through spreadsheets and group chats.',
    longDescription: 'VERIS unifies membership tracking, event clearance, and student engagement tools into a single system — built for student organizations tired of running everything through spreadsheets and group chats. As Front-End Developer, I engineer responsive user interfaces, accessible event clearance workflows, and centralized organization directories that eliminate manual friction and fragmented communications.',
    category: 'Full-Stack',
    featured: true,
    year: '2026 – Present',
    role: 'Front-End Developer',
    client: 'Student Organizations',
    impactMetrics: [
      { label: 'Role', value: 'Front-End Dev' },
      { label: 'Timeline', value: '2026 – Present' },
      { label: 'Platform', value: 'Unified Suite' }
    ],
    tags: ['Front-End Development', 'UI/UX Design', 'JavaScript', 'HTML/CSS', 'Student Organizations', 'Web Systems'],
    githubUrl: 'https://github.com/donot4tmee',
    caseStudy: {
      challenge: 'Student organizations face constant administrative bottlenecks relying on messy spreadsheets and scattered group chats to track members and verify event clearances.',
      solution: 'Engineered a unified front-end interface connecting member registries, clearance statuses, and student engagement tooling into one cohesive web platform.',
      architectureHighlights: [
        'Unifies membership tracking, event clearance, and student engagement tools into a single system.',
        'Built for student organizations tired of running everything through spreadsheets and group chats.',
        'Crafted modular, reusable UI components for clearance checklists, member cards, and activity dashboards.'
      ],
      results: [
        'Centralized fragmented organizational tools into a single streamlined user experience.',
        'Drastically reduced manual follow-ups for event clearance and member record verification.'
      ],
      codeSnippet: {
        filename: 'VerisPlatform.ts',
        language: 'typescript',
        code: `// VERIS Unified Architecture
export interface VerisPlatformSuite {
  membershipTracking: 'Unified member directory and status validation';
  eventClearance: 'Automated digital clearance and attendance verification';
  studentEngagement: 'Integrated communication and activity tooling';
  operationalGoal: 'Eliminate spreadsheets and fragmented group chats';
}`
      }
    },
    bannerImage: ''
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    subtitle: 'Centralized digital repository handling 500+ student profiles with fast sub-2s query sorting and full CRUD functionality',
    description: 'Engineered a structured relational repository to replace paper-based records, handling 500+ student profiles with full CRUD functionality and query sorting in under 2 seconds.',
    longDescription: 'Developed as a comprehensive full-stack database application. Replaced traditional, labor-intensive manual record systems with a normalized database schema that securely captures and organizes essential demographic and academic data points (student IDs, birthdates, addresses) with zero data redundancy.',
    category: 'Full-Stack',
    featured: true,
    year: 'Oct 2025 – Nov 2025',
    role: 'Full Stack Developer',
    client: 'Academic Record Management',
    impactMetrics: [
      { label: 'Profiles Handled', value: '500+' },
      { label: 'Time Saved', value: '40%' },
      { label: 'Query Retrieval', value: '<2s' }
    ],
    tags: ['Database Architecture', 'CRUD', 'Algorithm Optimization', 'Full-Stack', 'SQL', 'Data Modeling'],
    githubUrl: 'https://github.com/donot4tmee',
    caseStudy: {
      challenge: 'Manual, paper-based student record maintenance caused significant administrative bottlenecks, human errors, slow retrieval times, and risks of misplaced student documents.',
      solution: 'Engineered a centralized, ACID-compliant relational database schema with complete Create, Read, Update, and Delete (CRUD) operations and optimized multi-attribute sorting algorithms.',
      architectureHighlights: [
        'Engineered a structured repository capable of handling 500+ student profiles, organizing data points including IDs, birthdates, and addresses into a structured digital database.',
        'Implemented full CRUD functionality that reduced manual data entry time by an estimated 40% compared to traditional paper-based methods.',
        'Optimized data retrieval by developing sorting algorithms that allow users to query and display specific records in under 2 seconds.'
      ],
      results: [
        'Organized and safeguarded 500+ student demographic and academic profiles.',
        'Cut manual record-keeping and search time by an estimated 40%.',
        'Achieved sub-2-second record querying and dynamic sorted views across all demographic fields.'
      ],
      codeSnippet: {
        filename: 'student_schema.sql',
        language: 'sql',
        code: `-- Normalized Student Profiles Schema & Fast Indexing
CREATE TABLE students (
  student_id VARCHAR(15) PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  birthdate DATE NOT NULL,
  address VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_student_name (last_name, first_name)
);

-- Fast Sub-2s Query with Dynamic Attribute Sorting
SELECT student_id, first_name, last_name, birthdate, address
FROM students
ORDER BY last_name ASC, first_name ASC
LIMIT 50;`
      }
    },
    bannerImage: ''
  },
  {
    id: 'ecobayan',
    title: 'EcoBayan',
    subtitle: 'Incentive-based, community-led waste management program for coastal barangays',
    description: 'An incentive-based civic sustainability initiative designed to reduce 50–70% of coastal and household waste through youth-led verification and community monitoring.',
    longDescription: 'EcoBayan was created to address the pressing environmental crisis in coastal barangays through a strategic framework utilizing data analytics. By combining backend transparency with user-centered UI/UX design, EcoBayan engages 60%+ youth participation via SK-led (Sangguniang Kabataan) verification and community monitoring.',
    category: 'Mobile & Design',
    featured: true,
    year: 'June 2025',
    role: 'UI/UX Designer & Strategist',
    client: 'Coastal Barangays & SK Youth Community',
    impactMetrics: [
      { label: 'Target Waste Reduction', value: '50–70%' },
      { label: 'Youth Participation', value: '60%+' },
      { label: 'Pitch Award', value: '1st Place 🏆' }
    ],
    tags: ['UI/UX Design', 'Figma', 'Civic Tech', 'Data Analytics', 'Community', 'Sustainability'],
    githubUrl: 'https://github.com/donot4tmee',
    caseStudy: {
      challenge: 'Coastal barangays in the Philippines face severe plastic and household waste accumulation due to lack of localized incentives, inconsistent collection infrastructure, and limited youth engagement.',
      solution: 'Formulated a strategic data analytics framework and designed intuitive Figma prototypes for an incentive-based collection and segregation system verified directly by youth SK councils.',
      architectureHighlights: [
        'Aims to reduce up to 50–70% of coastal and household waste through incentivized collection and segregation.',
        'Engages 60%+ youth participation via SK-led verification and community monitoring.',
        'Presented a strategic framework utilizing data analytics to address the environmental crisis at the RSCENE competition, winning 1st Place.'
      ],
      results: [
        'Won 1st Place at the IDEA + Reverse Pitching Competition RSCENE (June 2025).',
        'Bested regional competitors by demonstrating strong strategic thinking and technical feasibility during a high-stakes presentation to industry experts.'
      ],
      codeSnippet: {
        filename: 'ecoBayanWorkflow.md',
        language: 'markdown',
        code: `### EcoBayan Civic Incentive Architecture
1. Household Segregation: Biodegradable, Recyclable, Residual Coastal Waste
2. Barangay Drop-Off Hub: SK Youth Council verification & weight logging
3. Data Analytics Layer: Real-time tonnage aggregation & incentive computation
4. Community Impact: 50-70% projected waste diversion from coastal waterways`
      }
    },
    bannerImage: ''
  }
];

export const experienceData: Experience[] = [
  {
    id: 'exp-veris-2026',
    role: 'Front-End Developer',
    company: 'VERIS',
    location: 'Student Organization Management System',
    period: '2026 – Present',
    type: 'Student Organization',
    summary: 'VERIS unifies membership tracking, event clearance, and student engagement tools into a single system — built for student organizations tired of running everything through spreadsheets and group chats.',
    achievements: [
      'Unifying membership tracking, event clearance, and student engagement tools into a single cohesive system.',
      'Architecting responsive, accessible front-end interfaces to replace fragmented spreadsheets and group chats.',
      'Building modular, user-centric web components for organizational rosters, clearance workflows, and student engagement.'
    ],
    skills: ['Front-End Development', 'JavaScript', 'HTML/CSS', 'UI/UX Design', 'Component Architecture', 'User Interface']
  },
  {
    id: 'exp-rscene-2025',
    role: '1st Place Winner & Project Lead',
    company: 'IDEA + Reverse Pitching Competition RSCENE',
    location: 'Leyte / Regional, PH',
    period: 'June 2025',
    type: 'Projects',
    summary: 'A region-wide pitching competition to propose a solution to real-world problems through a strategic framework that utilized data analytics to address the environmental crisis.',
    achievements: [
      'Bested regional competitors by proposing a scalable solution to real-world problems (EcoBayan).',
      'Demonstrated strong strategic thinking and technical feasibility during a high-stakes presentation to a panel of industry experts.',
      'Designed an incentive-based, community-led waste management model targeting a 50–70% reduction in coastal waste and 60%+ youth participation.'
    ],
    skills: ['Strategic Thinking', 'Data Analytics', 'Reverse Pitching', 'UI/UX Design', 'Figma', 'Feasibility Analysis']
  },
  {
    id: 'exp-phimo-2023',
    role: 'Merit Awardee',
    company: 'Philippine International Mathematical Olympiad (PhIMO)',
    location: 'National / International',
    period: 'May 2023',
    type: 'Projects',
    summary: 'High-level international mathematics olympiad involving thousands of participants, demonstrating advanced proficiency in logical reasoning and complex problem-solving.',
    achievements: [
      'Secured a Merit Award in a high-level international competition involving thousands of participants, demonstrating advanced proficiency in logical reasoning and complex problem-solving.',
      'Ranked among top-performing students by applying mathematical theories to solve multi-stage competitive challenges under strict time constraints.',
      'Strengthened the analytical foundation necessary for algorithm design and backend architecture through rigorous training in mathematical logic.'
    ],
    skills: ['Mathematical Logic', 'Competitive Problem Solving', 'Algorithm Design', 'Analytical Reasoning', 'Quantitative Analysis']
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Radz demonstrated exceptional strategic thinking and technical clarity during the RSCENE reverse pitching competition. His data analytics approach to coastal waste was both actionable and mathematically grounded.',
    author: 'RSCENE Industry Panel',
    title: 'Competition Review Committee',
    company: 'IDEA + Reverse Pitching Showcase',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    relation: 'Judged 1st Place Winning Presentation'
  },
  {
    id: 't-2',
    quote: 'Radz brings a rigorous mathematical approach to software engineering. His work on relational database normalization and query sorting reflects a deep commitment to high-performance, dependable architecture.',
    author: 'Faculty Member',
    title: 'Dept. of Computer Science',
    company: 'Visayas State University',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    relation: 'Academic Advisor & Course Instructor'
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code2',
    skills: [
      { name: 'C / C++', level: 90, years: 'Coursework', tag: 'Systems & Core', hot: true },
      { name: 'Python', level: 88, years: 'Academic', tag: 'Scripting & Logic', hot: true },
      { name: 'Java', level: 85, years: 'Academic', tag: 'OOP & Data Struct' },
      { name: 'JavaScript', level: 86, years: 'Web Dev', tag: 'Application Logic' },
      { name: 'HTML5 / CSS3', level: 88, years: 'Frontend', tag: 'Layout & Styling' }
    ]
  },
  {
    title: 'Database & Storage',
    iconName: 'Database',
    skills: [
      { name: 'Supabase', level: 90, years: 'Applied', tag: 'PostgreSQL & BaaS', hot: true },
      { name: 'Relational Databases (SQL)', level: 92, years: 'Primary', tag: 'Data Integrity', hot: true },
      { name: 'CRUD Operations', level: 95, years: 'Applied', tag: 'Backend Logic' },
      { name: 'Database Normalization', level: 90, years: 'Core CS', tag: 'Schema Design' },
      { name: 'Query Sorting & Optimization', level: 90, years: 'Optimization', tag: 'Sub-2s Query' }
    ]
  },
  {
    title: 'Tools & Technologies',
    iconName: 'Wrench',
    skills: [
      { name: 'Visual Studio Code', level: 95, years: 'Daily Driver', tag: 'IDE', hot: true },
      { name: 'Git & GitHub', level: 90, years: 'Version Control', tag: 'Collaboration', hot: true },
      { name: 'Figma', level: 88, years: 'Design Tool', tag: 'UI/UX Wireframes' },
      { name: 'Canva', level: 85, years: 'Visuals', tag: 'Presentations & Assets' }
    ]
  },
  {
    title: 'Areas of Interest & Core Competencies',
    iconName: 'Cpu',
    skills: [
      { name: 'Computer Hardware Architecture', level: 88, years: 'Core Interest', tag: 'Hardware', hot: true },
      { name: 'Algorithm Design & Analysis', level: 92, years: 'Olympiad & CS', tag: 'Algorithms', hot: true },
      { name: 'Game Development', level: 80, years: 'Exploration', tag: 'Logic & Physics' },
      { name: 'Strategic Problem Solving', level: 94, years: 'Pitching & Math', tag: 'Analytical' }
    ]
  }
];

export const deskItemsData: DeskItem[] = [
  {
    category: 'Development Machine',
    name: 'VS Code & Linux/Windows Workstation',
    specs: 'Configured with C/C++, Python, and Java toolchains and development extensions',
    icon: 'Laptop'
  },
  {
    category: 'Database Engine',
    name: 'Supabase & Relational Database Tools',
    specs: 'Supabase, PostgreSQL, and SQL environments for schema design and query profiling',
    icon: 'Database'
  },
  {
    category: 'Design & Prototyping',
    name: 'Figma & Canva',
    specs: 'For wireframing user flows, community dashboard mockups, and pitch decks',
    icon: 'Layout'
  },
  {
    category: 'Mathematical Rigor',
    name: 'PhIMO Problem Sets & Notebooks',
    specs: 'Graph theory, discrete mathematics, and algorithmic puzzles',
    icon: 'BookOpen'
  },
  {
    category: 'Academic Base',
    name: 'Visayas State University Campus',
    specs: 'Baybay City, Leyte — Department of Computer Science',
    icon: 'GraduationCap'
  }
];

export const philosophyPrinciples = [
  {
    number: '01',
    title: 'Solid Backend Foundations',
    description: 'High-performing web solutions rely on sound relational schemas, normalized tables, and optimized queries that deliver consistent sub-second retrieval times.'
  },
  {
    number: '02',
    title: 'Harmonizing UI/UX with Logic',
    description: 'A powerful database is only as good as the interface that exposes it. Combining human-centered design in Figma with backend logic guarantees a seamless user experience.'
  },
  {
    number: '03',
    title: 'Rigorous Mathematical Reasoning',
    description: 'My background in competitive mathematical olympiads reinforces every algorithm I write, from time-complexity bounds to error-free logic trees.'
  },
  {
    number: '04',
    title: 'Civic Impact & Practical Utility',
    description: 'Technology shines brightest when solving real community challenges — whether streamlining university records or mobilizing youth for coastal sustainability.'
  }
];
