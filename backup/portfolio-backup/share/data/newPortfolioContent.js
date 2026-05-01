/** Content for /new-portfolio — aggressive positioning, results-driven, English */

export const HERO = {
  name: "Dylan España Cervantes",
  // headline: "I build backend systems that scale.",
  headline: "I build high-performance backend systems for production systems",
  // proof: "~30s → <500ms API latency · 4M+ records migrated · Auth architecture from scratch",
  proof: "Reduced API latency from ~30s to <500ms · Migrated 4M+ records · Designed auth architecture from scratch",
  lead: "3+ years shipping production APIs, leading database migrations, and hardening security for B2B, SaaS, and fintech platforms. I own architecture decisions and deliver measurable performance improvements.",
  location: "Ecuador · Remote · UTC-5",
  cvPath: "/file/cvs/Dylan_Espana_Cervantes_Software_Engineer.pdf",
};

export const EXPERIENCE = [
  {
    company: "HireSprint",
    role: "Software Engineer",
    period: "Jan 2025 – Present",
    location: "US, New Jersey (Remote)",
    context:
      "B2B platform for supermarket digital circulars managing catalogs with 1M+ products across web and mobile applications.",
    highlights: [
      "Led progressive migration from MongoDB to Supabase (PostgreSQL) — schema design, data movement, auth, and row-level access control across 1M+ records",
      "Designed the full authentication and authorization architecture: JWT, Row Level Security, and database-level access policies for protected resources",
      "Reduced critical API response times from ~30s to <500ms through query optimization, indexing, and schema improvements",
      "Owned platform security: API hardening, vulnerability prevention, and implementation of remediation measures from vendor audit reports",
      "Built real-time data visualization for high-volume product catalogs rendered efficiently in the frontend with React",
    ],
    stack: ["Node.js", "MongoDB", "Supabase", "PostgreSQL", "React", "JWT", "RLS"],
  },
  {
    company: "Sethor",
    role: "Software Engineer & Co-founder",
    period: "Jul 2023 – Apr 2025",
    location: "Chile (Remote)",
    context:
      "Fintech platform for biometric-authenticated payments — fingerprint and facial recognition — via mobile apps and distributed backend.",
    highlights: [
      "Designed and built the entire backend architecture from scratch: business logic, REST APIs, and secure transaction flows for real financial operations",
      "Integrated Rapyd payment gateway with validation, error handling, and secure data management for real transactions",
      "Implemented biometric authentication (fingerprint + facial recognition) using React Native with native modules",
      "Presented technical architecture and system viability to investors",
      "Coordinated cross-functional development across backend, frontend, and mobile teams",
    ],
    stack: ["Node.js", "React Native", "MySQL", "Rapyd", "REST APIs"],
  },
  {
    company: "VauOk",
    role: "Team Lead & Full Stack Engineer",
    period: "Apr – Dec 2023",
    location: "Ecuador",
    context:
      "Marketing SaaS for sales funnels and video funnels with conversion tracking, payments, and analytics.",
    highlights: [
      "Led backend team and implemented Stripe integration for payment processing",
      "Built role and permission management system for multi-tenant access control",
      "Managed AWS infrastructure for scalability and content distribution",
    ],
    stack: ["Node.js", "AWS", "Stripe", "React"],
  },
  {
    company: "Gesprender",
    role: "Full Stack Developer",
    period: "Apr 2022 – Jul 2023",
    location: "Argentina (Remote)",
    context:
      "SaaS platform for SMBs — inventory management, finances, and internal operations.",
    highlights: [
      "Participated in codebase migration to Symfony + React, modernizing architecture",
      "Built automation scripts that reduced repetitive task execution time by 70%",
      "Managed and optimized database performance and data integrity",
    ],
    stack: ["PHP", "Symfony", "React", "MySQL"],
  },
];

export const IMPACT_METRICS = [
  {
    value: "~30s → <500ms",
    label: "API response time",
    detail: "Critical API latency reduced through query optimization and schema improvements",
  },
  {
    value: "1M+",
    label: "Records in production",
    detail: "Large-scale catalog and data flows handled across production systems",
  },
  {
    value: "MongoDB → PostgreSQL",
    label: "Database migration",
    detail: "Progressive migration with schema redesign, data movement, and access control",
  },
  {
    value: "JWT + RLS",
    label: "Auth architecture",
    detail: "Authentication and authorization designed for protected production resources",
  },
  {
    value: "4",
    label: "Production systems",
    detail: "B2B, SaaS, fintech, and marketing platforms shipped and maintained",
  },
  {
    value: "3+",
    label: "Years shipping remotely",
    detail: "Working across LATAM and US teams in production environments",
  },
];

export const SECURITY_CARDS = [
  {
    title: "Authentication Architecture",
    description:
      "Designed and implemented auth systems for production platforms handling sensitive data and protected resources.",
    points: [
      "JWT-based authentication and authorization flows",
      "Secure access rules for protected resources and private data",
      "Role-aware backend behavior and session handling",
    ],
  },
  {
    title: "Access Control & Data Security",
    description:
      "Built database-level access control to enforce data isolation and protect tenant-specific resources.",
    points: [
      "Row Level Security (RLS) with database-level policies in Supabase/PostgreSQL",
      "Protection of private resources: images, records, and tenant-specific data",
      "Stricter permission design to reduce exposure and risk",
    ],
  },
  {
    title: "Security Hardening",
    description:
      "Practical security improvements based on real audit findings in production systems.",
    points: [
      "Implementation of remediation measures from vendor audit reports",
      "API hardening: input validation, error handling, rate considerations",
      "Session management and security posture improvements in production",
    ],
  },
];

export const STACK_GROUPS = [
  {
    title: "Backend",
    items: ["Node.js", "Express", "TypeScript", "JavaScript", "REST APIs", "PHP (Laravel / Symfony)"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Supabase (RLS, policies)", "MongoDB", "MySQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    title: "Infrastructure & Tools",
    items: ["AWS", "Git / CI-CD", "Firebase", "Postman", "Cursor / Claude Code"],
  },
];

export const CONTACT_COPY = {
  heading: "Let's talk.",
  lead: "Open to full-time remote engineering roles. Available from UTC-5 and aligned with teams across the Americas and Europe.",
  email: "dylanecervantes@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dylan-espana/" },
    { label: "GitHub", href: "https://github.com/DylanCerv" },
    {
      label: "WhatsApp",
      href: "https://api.whatsapp.com/send?phone=593997237902&text=Hi%20Dylan%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20chat.",
    },
  ],
};
