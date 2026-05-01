/** Content for /new-portfolio — senior-level positioning, results-driven, English */

export const HERO = {
  name: "Dylan España Cervantes",
  roleTag: "Software Engineer · Backend & Systems",
  headline: "I design and ship backend systems that scale in production.",
  proof: "~30s → <500ms API latency · 4M+ records migrated · Migration verification system built · Auth architecture from scratch",
  lead: "Backend engineer with 3+ years building production APIs, owning database architecture decisions, and hardening security for B2B, SaaS, and fintech platforms. I operate at the intersection of system design, data engineering, and applied security.",
  location: "Ecuador · Remote · UTC-5 · Open globally",
  cvPath: "/file/cvs/Dylan_Espana_Cervantes_Software_Engineer.pdf",
  badges: [
    { value: "3+", label: "years in production" },
    { value: "Backend", label: "primary role" },
    { value: "JS / TS", label: "main stack" },
    { value: "Remote", label: "UTC-5 · Open globally" },
  ],
};

export const EXPERIENCE = [
  {
    company: "HireSprint",
    role: "Software Engineer",
    period: "Jan 2025 – Present",
    location: "US, New Jersey (Remote)",
    context:
      "B2B platform for supermarket digital circulars — high-volume product catalogs (4M+ records across circulars and product tables) served across web and mobile applications.",
    highlights: [
      "Led progressive migration from MongoDB to Supabase (PostgreSQL) across 4M+ records distributed in multiple tables — no downtime, no data loss",
      "Built a migration verification system: automated comparison between MongoDB and PostgreSQL to detect missing records, stale data, and unexpected changes during the progressive transition",
      "Architected the platform's full authentication and authorization layer: JWT validation at the API level plus database-level RLS policies to enforce tenant data isolation and protect private resources",
      "Reduced critical API response times from ~30s to <500ms through targeted indexing, query restructuring, and schema normalization",
      "Owned platform security end-to-end: API hardening, input validation, and implementation of remediation measures identified in vendor security audits",
      "Built real-time data visualization for high-volume product catalogs with efficient React rendering — coordinating directly with the frontend to define the data contract",
    ],
    stack: ["Node.js", "MongoDB", "Supabase", "PostgreSQL", "React", "JWT", "RLS"],
  },
  {
    company: "Sethor",
    role: "Software Engineer & Co-founder",
    period: "Jul 2023 – Apr 2025",
    location: "Chile (Remote)",
    context:
      "Fintech startup for biometric-authenticated payments — fingerprint and facial recognition — via mobile apps backed by a distributed backend handling real financial transactions.",
    highlights: [
      "Designed the full system architecture from zero: defined how services, auth flows, and payment processing would be structured before writing a single line of code",
      "Led payment gateway research and technical decision: evaluated direct Visa/Mastercard/Amex integration, identified PCI DSS Level 1 requirements (on-site audits, isolated certified servers, HSM-level encryption), and selected Rapyd as a PCI DSS-certified aggregator — enabling card payments without managing raw cardholder data",
      "Integrated Rapyd payment gateway: transaction validation, error handling, webhook processing, and secure tokenized storage — never touching raw card data",
      "Implemented biometric authentication (fingerprint + facial recognition) using React Native native modules, migrating from Expo to bare workflow to support platform-specific capabilities",
      "Managed cross-functional coordination across backend, frontend, and mobile — ensuring integration stability before each release",
      "Presented technical architecture and system viability to investors, explaining critical flows and the compliance strategy",
    ],
    stack: ["Node.js", "React Native", "MySQL", "Rapyd", "REST APIs", "JWT"],
  },
  {
    company: "VauOk",
    role: "Team Lead & Full Stack Engineer",
    period: "Apr – Dec 2023",
    location: "Ecuador",
    context:
      "Digital marketing SaaS for sales funnels and video funnels — conversion tracking, payment processing, and analytics.",
    highlights: [
      "Led the backend team and implemented Stripe integration for payment processing with validation, webhooks, and error handling",
      "Designed and built the role and permission management system — enabling fine-grained, multi-user access control across the platform",
      "Managed AWS infrastructure: provisioning, scaling, and content distribution configuration for production workloads",
    ],
    stack: ["Node.js", "AWS", "Stripe", "React", "MySQL"],
  },
  {
    company: "Gesprender",
    role: "Full Stack Developer",
    period: "Apr 2022 – Jul 2023",
    location: "Argentina (Remote)",
    context:
      "SaaS platform for SMBs covering inventory management, finance tracking, and internal operations.",
    highlights: [
      "Participated in codebase migration to Symfony + React, modernizing architecture and improving long-term maintainability",
      "Built automation scripts that eliminated repetitive manual processes, reducing execution time by 70%",
      "Managed and optimized MySQL database performance — improving query efficiency and ensuring data integrity for critical business operations",
    ],
    stack: ["PHP", "Symfony", "React", "MySQL"],
  },
];

export const IMPACT_METRICS = [
  {
    value: "~30s → <500ms",
    label: "API latency reduced",
    detail: "Achieved through targeted indexing, query restructuring, and schema normalization on a high-volume PostgreSQL database",
  },
  {
    value: "4M+",
    label: "Records migrated",
    detail: "Progressive MongoDB → PostgreSQL migration over 4M+ records across multiple tables — with automated verification system to detect missing data and unexpected changes",
  },
  {
    value: "JWT + RLS",
    label: "Auth architecture",
    detail: "Dual-layer security: API-level token validation plus database-level Row Level Security policies for tenant data isolation",
  },
  {
    value: "-70%",
    label: "Task execution time",
    detail: "Automation scripts that eliminated repetitive manual work from internal operations at a SaaS platform",
  },
  {
    value: "4",
    label: "Production systems shipped",
    detail: "B2B catalog platform, fintech payment system, marketing SaaS, and enterprise management platform",
  },
  {
    value: "3+",
    label: "Years in production",
    detail: "Shipping and maintaining backend systems across LATAM and US-based remote teams",
  },
];

export const SECURITY_CARDS = [
  {
    title: "Authentication Architecture",
    description:
      "Designed and owned auth systems for production platforms handling sensitive data, private resources, and financial transactions.",
    points: [
      "JWT-based authentication with proper token lifecycle: generation, validation, and revocation",
      "Role-aware backend behavior: permissions enforced at the API layer before any business logic executes",
      "Biometric auth integration (fingerprint + facial recognition) for a fintech mobile platform using React Native native modules",
    ],
  },
  {
    title: "Access Control & Data Isolation",
    description:
      "Built database-level access control to enforce strict data isolation — protecting tenant-specific resources at the infrastructure level, not just the application layer.",
    points: [
      "Row Level Security (RLS) in Supabase/PostgreSQL: every query is scoped to the authenticated user automatically",
      "Database-level policies for private resources: images, documents, and tenant-specific records are unreachable without proper context",
      "Defense-in-depth design: application-layer checks plus database-layer enforcement as a second barrier",
    ],
  },
  {
    title: "Security Hardening",
    description:
      "Applied security improvements in production systems — based on real audit findings and proactive analysis, not checkbox compliance.",
    points: [
      "Implemented remediation measures from vendor security audit reports in a live production environment",
      "API hardening: input validation, controlled error responses, and prevention of information leakage",
      "Proactive vulnerability identification and patching — acting as the primary security owner for the platform",
    ],
  },
];

export const STACK_GROUPS = [
  {
    title: "Backend",
    items: [
      "Node.js — API design, business logic, async workers",
      "TypeScript — strict typing for production-critical systems",
      "Express — middleware, routing, request lifecycle",
      "REST APIs — contract design, versioning, documentation",
      "PHP / Symfony — legacy systems and codebase migrations",
    ],
  },
  {
    title: "Databases",
    items: [
      "PostgreSQL — relational modeling, indexing, RLS, complex queries",
      "Supabase — auth, storage, access policies, real-time",
      "MongoDB — document storage, schema migration to relational",
      "MySQL — transactional workloads, query optimization",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React — component architecture, real-time data rendering",
      "React Native — mobile with native module integration",
      "Next.js — server-side rendering, API routes",
      "Tailwind CSS — utility-first styling",
    ],
  },
  {
    title: "Infrastructure & Tools",
    items: [
      "AWS — S3, EC2, infrastructure management",
      "Firebase — auth, hosting, real-time",
      "Git — version control, branching workflows",
      "Stripe / Rapyd — payment gateway integration",
      "Cursor / Claude Code — AI-assisted development",
    ],
  },
];

export const CONTACT_COPY = {
  heading: "Let's talk.",
  lead: "Open to full-time remote backend engineering roles globally. Available from UTC-5 — effective overlap with teams across the Americas, Europe, and beyond.",
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
