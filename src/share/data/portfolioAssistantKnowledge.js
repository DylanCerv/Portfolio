/** Knowledge base for the portfolio assistant — deep, recruiter-oriented answers */

export const ASSISTANT_SECTION_LABELS = {
  hero: "profile overview",
  work: "engineering work",
  impact: "impact & metrics",
  security: "security & reliability",
  stack: "tech stack",
  contact: "contact",
};

export const ASSISTANT_TOPIC_REPLIES = {
  backend:
    "Dylan's primary stack is **JavaScript / TypeScript** with Node.js and Express. At HireSprint, he maintains APIs serving **1M+ product records** for a B2B digital circular platform. At Sethor (fintech), he built the entire backend from scratch — REST APIs, transaction flows, and Rapyd payment integration. He works with PostgreSQL, MongoDB, MySQL, and Supabase, and focuses on **performance, data integrity, and production reliability**.",

  performance:
    "The most significant performance improvement was at **HireSprint**: reducing critical API response times from **~30 seconds to under 500ms** through query optimization, index tuning, and schema improvements on databases with 1M+ products. At Gesprender, he built automation scripts that cut repetitive task execution time by **70%**. Performance optimization is central to his engineering approach.",

  security:
    "At **HireSprint**, Dylan owned platform security for a B2B system with 1M+ products. He designed the full **authentication architecture** — JWT-based auth, Row Level Security (RLS) in Supabase/PostgreSQL, and database-level access policies. He implemented improvements based on findings from **vendor audit reports**, including API hardening, session management, and protection of private resources (images, tenant data). He approaches security as a backend engineer with real production experience.",

  migration:
    "At HireSprint, Dylan led a **progressive migration from MongoDB to Supabase (PostgreSQL)**. This involved schema redesign, data migration across **1M+ records**, authentication setup, and implementing row-level access control. The migration was done progressively to maintain system availability — no big-bang cutover.",

  fintech:
    "At **Sethor**, Dylan was co-founder and software engineer for a fintech platform handling **biometric-authenticated payments** in Chile. He built the backend architecture from scratch, integrated **Rapyd** for real financial transactions with validation and secure data handling, and implemented fingerprint + facial recognition auth with React Native. He presented the technical architecture to **investors** and coordinated cross-functional teams.",

  work:
    "**3+ years across 4 companies.** HireSprint (B2B, 1M+ products, auth architecture, security ownership), Sethor (fintech, biometric payments, backend from scratch), VauOk (marketing SaaS, Stripe, team lead), and Gesprender (SaaS, Symfony + React migration, automation). All production systems with real users and real revenue.",

  availability:
    "Dylan is based in **Ecuador (UTC-5)** and open to **full-time remote** engineering roles. He has worked remotely with teams in the US (HireSprint, New Jersey), Chile (Sethor), Argentina (Gesprender), and Ecuador (VauOk). Experienced with async communication and aligned with teams across **the Americas and Europe**. CV is available for download on the page.",

  stack:
    "**Backend:** Node.js, Express, TypeScript, JavaScript, REST APIs, PHP (Laravel / Symfony). **Databases:** PostgreSQL, Supabase (RLS, policies), MongoDB, MySQL. **Frontend:** React, Next.js, React Native, Tailwind CSS. **Infrastructure:** AWS, Firebase, Git / CI-CD, Postman, Cursor / Claude Code. He adapts to the team's stack.",

  frontend:
    "Dylan works with **React, Next.js, Tailwind CSS**, and React Native when the role requires it. His primary focus is backend, but he builds and maintains real frontend integrations — including **real-time data visualization** for high-volume product catalogs at HireSprint. Not just static pages.",

  ia:
    "Uses **Cursor** and **Claude Code** as primary development tools. Leverages AI for code review, testing, and productivity — always with human oversight and judgment. He's not an ML engineer, but he integrates AI effectively into his engineering workflow.",

  default:
    "You can ask about **backend architecture**, **performance work**, **security experience**, **work history**, **fintech projects**, **database migrations**, **tech stack**, or **remote availability**. I'm here to help you learn about Dylan's engineering background.",
};

export const ASSISTANT_GREETING =
  "Ask about Dylan's backend work, performance optimizations, security experience, fintech systems, or availability for remote roles.";

/** @param {string} raw */
export function matchAssistantTopic(raw) {
  const t = raw
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (/cv|resume|hire|employ|job|work\s*with|full\s*time|remote|recruit|talent|contrat|empleo|trabajo|remoto|available|availability|utc|timezone|time\s*zone/.test(t)) {
    return "availability";
  }
  if (/performance|speed|fast|optim|latency|query|response\s*time|slow|500ms|30s/.test(t)) {
    return "performance";
  }
  if (/migrat|mongodb.*supa|mongo.*postgres|schema\s*re|data\s*move/.test(t)) {
    return "migration";
  }
  if (/fintech|payment|biometric|rapyd|sethor|transaction|financial|investor/.test(t)) {
    return "fintech";
  }
  if (/security|auth|jwt|rls|audit|vulnerab|harden|permission|access\s*control/.test(t)) {
    return "security";
  }
  if (/experience|company|hiresprint|vauok|gesprender|work|history|background|career/.test(t)) {
    return "work";
  }
  if (/stack|tech|language|framework|tool|what.*use|typescript|javascript/.test(t)) {
    return "stack";
  }
  if (/backend|api|node|express|php|laravel|symfony|supabase|postgres|mongo|mysql|sql|rest|database|server/.test(t)) {
    return "backend";
  }
  if (/react|next|frontend|front|ui|ux|css|tailwind|html|native|mobile/.test(t)) {
    return "frontend";
  }
  if (/ai|ia|cursor|claude|copilot|gpt|llm/.test(t)) {
    return "ia";
  }
  if (/hi|hello|hey|hola|thanks|ok/.test(t) && t.length < 30) {
    return "default";
  }
  return null;
}
