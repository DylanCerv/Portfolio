import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { V2_HERO } from "../../../share/data/portfolioV2Content";

const SOCIAL_ICONS = { GitHub: FaGithub, LinkedIn: FaLinkedin, Email: FaEnvelope };

const ACCENT_MAP = {
  "purple-blue": "bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent",
  "blue-cyan": "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",
};

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-16 pt-8 pb-16 lg:pt-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
        {/* ── Left: Copy ── */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
            {V2_HERO.badge}
          </span>

          {/* Headline */}
          <h1 className="text-4xl font-bold leading-[1.15] text-slate-100 sm:text-5xl lg:text-[3.2rem]">
            {V2_HERO.headlineParts.map((part, i) =>
              part.gradient ? (
                <span key={i} className={ACCENT_MAP[part.gradient]}>
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </h1>

          {/* Subtitle */}
          <p className="font-mono text-sm font-medium text-blue-400/80">
            {V2_HERO.subtitle}
          </p>

          {/* Description */}
          <p className="max-w-lg text-[15px] leading-relaxed text-slate-400">
            {V2_HERO.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={V2_HERO.ctaPrimary.href}
              className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20"
            >
              {V2_HERO.ctaPrimary.label}
            </a>
            <a
              href={V2_HERO.ctaSecondary.href}
              className="rounded-xl border border-white/[0.1] px-5 py-2.5 text-sm font-semibold text-slate-300 transition-all hover:border-white/[0.2] hover:text-slate-100"
            >
              {V2_HERO.ctaSecondary.label}
            </a>
            <a
              href={V2_HERO.cvPath}
              download
              className="rounded-xl border border-white/[0.1] px-5 py-2.5 text-sm font-semibold text-slate-300 transition-all hover:border-white/[0.2] hover:text-slate-100"
            >
              Descargar CV
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-4 pt-1">
            {V2_HERO.socials.map((s) => {
              const Icon = SOCIAL_ICONS[s.label];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 transition-colors hover:text-slate-200"
                  aria-label={s.label}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </a>
              );
            })}
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {V2_HERO.techBadges.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1 font-mono text-xs text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: Stats Card ── */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6">
            {/* Availability indicator */}
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-emerald-400">
                {V2_HERO.availability}
              </span>
            </div>

            {/* Avatar — replace avatarSrc in content file with real photo when available */}
            <div className="mb-6 flex items-center gap-4">
              <div className="relative shrink-0">
                {V2_HERO.avatarSrc ? (
                  <img
                    src={V2_HERO.avatarSrc}
                    alt={V2_HERO.displayName}
                    className="h-24  w-24   rounded-full object-cover ring-2 ring-violet-500/40 shadow-lg shadow-violet-500/20"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 text-xl font-bold text-white ring-2 ring-violet-500/30 ring-offset-2 ring-offset-[#080c18] shadow-lg shadow-violet-500/20">
                    {V2_HERO.initials}
                  </div>
                )}
                <span className="absolute bottom-1.5 right-1.5 h-3.5 w-3.5 rounded-full bg-emerald-400 ring-2 ring-[#080c18]" />
              </div>
              <div>
                <p className="font-semibold text-slate-100">{V2_HERO.displayName}</p>
                <p className="text-sm text-slate-400">{V2_HERO.roleShort}</p>
                <p className="mt-1 text-xs text-slate-500">{V2_HERO.location}</p>
                <p className="mt-0.5 text-xs text-violet-400/80">{V2_HERO.locationDetail}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-0 divide-y divide-white/[0.04]">
              {V2_HERO.stats.map((stat) => (
                <div key={stat.label} className="flex justify-between py-3">
                  <span className="text-sm text-slate-400">{stat.label}</span>
                  <span className="text-sm font-semibold text-slate-100">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mini highlight card */}
          <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-4">
            <p className="font-mono text-xs font-medium text-violet-300">
              ~30s → &lt;500ms
            </p>
            <p className="mt-1 text-xs text-slate-500">
              API latency reduced in production via query optimization & indexing
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
            <p className="font-mono text-xs font-medium text-emerald-300">
              4M+ records migrated
            </p>
            <p className="mt-1 text-xs text-slate-500">
              MongoDB → PostgreSQL with zero downtime and full RLS implementation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
