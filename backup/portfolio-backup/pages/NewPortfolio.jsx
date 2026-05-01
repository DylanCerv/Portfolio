import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaRegFilePdf, FaCheck } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi2";
import LayoutNewPortfolio from "../share/layouts/LayoutNewPortfolio/LayoutNewPortfolio";
import { NewPortfolioThemeProvider } from "../share/context/NewPortfolioThemeContext";
import {
  HERO,
  EXPERIENCE,
  IMPACT_METRICS,
  SECURITY_CARDS,
  STACK_GROUPS,
  CONTACT_COPY,
} from "../share/data/newPortfolioContent";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (_) {
      /* clipboard unavailable */
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-lg border border-zinc-200 px-3 py-2.5 text-sm text-zinc-400 transition-colors hover:text-zinc-700 dark:border-white/[0.08] dark:text-slate-500 dark:hover:text-gray-200"
    >
      {copied ? <FaCheck className="h-4 w-4" /> : <IoCopyOutline className="h-4 w-4" />}
    </button>
  );
}

function StatBadge({ value, label }) {
  return (
    <li className="rounded-md border border-zinc-200 px-3 py-1.5 text-sm dark:border-white/[0.08]">
      <span className="font-semibold text-zinc-900 dark:text-gray-200">{value}</span>
      <span className="ml-1.5 text-zinc-500 dark:text-slate-500">{label}</span>
    </li>
  );
}

function CaseStudy({ company, role, period, location, context, highlights, stack }) {
  return (
    <article className="border-t border-zinc-200 pt-8 dark:border-white/[0.08]">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-gray-200">
            {company}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-slate-400">
            {role} · {location}
          </p>
        </div>
        <span className="font-mono text-xs text-zinc-400 dark:text-slate-500">
          {period}
        </span>
      </div>

      <p className="mb-4 text-[15px] leading-relaxed text-zinc-600 dark:text-slate-400">
        {context}
      </p>

      <ul className="mb-5 space-y-2">
        {highlights.map((h, i) => (
          <li
            key={i}
            className="flex gap-3 text-sm leading-relaxed text-zinc-700 dark:text-slate-300"
          >
            <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-blue-500" />
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded border border-zinc-200 px-2 py-0.5 font-mono text-xs text-zinc-500 dark:border-white/[0.08] dark:text-slate-500"
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}

function ImpactCard({ value, label, detail }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50/50 p-5 dark:border-white/[0.08] dark:bg-white/[0.02]">
      <p className="font-mono text-2xl font-bold text-blue-500">
        {value}
      </p>
      <p className="mt-2 text-sm font-medium text-zinc-800 dark:text-gray-200">
        {label}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-slate-500">
        {detail}
      </p>
    </div>
  );
}

function SecurityCard({ title, description, points }) {
  return (
    <div className="rounded-lg border border-zinc-200 border-l-2 border-l-blue-500 p-6 dark:border-white/[0.08] dark:border-l-blue-500">
      <h3 className="text-sm font-semibold text-zinc-900 dark:text-gray-200">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-slate-400">
        {description}
      </p>
      <ul className="mt-4 space-y-2">
        {points.map((p) => (
          <li
            key={p}
            className="flex gap-2.5 text-sm leading-relaxed text-zinc-700 dark:text-slate-300"
          >
            <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-blue-500" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function NewPortfolioInner() {
  return (
    <LayoutNewPortfolio>
      {/* ── Hero ── */}
      <section id="hero" data-np-section="hero" className="flex flex-col gap-6">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-blue-500">
          Software Engineer · Backend & APIs
        </p>

        <h1 className="max-w-2xl text-3xl font-bold leading-[1.2] text-zinc-900 sm:text-4xl lg:text-[2.75rem] dark:text-gray-100">
          {HERO.headline}
        </h1>

        <p className="max-w-xl font-mono text-sm font-medium text-blue-500/80 dark:text-blue-400/80">
          {HERO.proof}
        </p>

        <p className="max-w-xl text-[15px] leading-relaxed text-zinc-600 dark:text-slate-400">
          {HERO.lead}
        </p>

        <ul className="flex flex-wrap gap-2">
          <StatBadge value="3+" label="years in production" />
          <StatBadge value="Backend" label="primary role" />
          <StatBadge value="JS / TS" label="main stack" />
          <StatBadge value="Remote" label="UTC-5" />
        </ul>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-600"
            href={HERO.cvPath}
            download
          >
            <FaRegFilePdf className="h-3.5 w-3.5" /> Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 dark:border-white/[0.12] dark:text-slate-300 dark:hover:border-white/[0.2]"
          >
            Get in touch <HiArrowRight className="h-3.5 w-3.5" />
          </a>
          <span className="text-sm text-zinc-400 dark:text-slate-500">
            {HERO.location}
          </span>
        </div>
      </section>

      {/* ── Engineering Work ── */}
      <section id="work" data-np-section="work" className="flex flex-col gap-8 scroll-mt-24">
        <header>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-gray-100">
            Engineering Work
          </h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-slate-500">
            Production systems I've built and shipped.
          </p>
        </header>

        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((exp) => (
            <CaseStudy key={exp.company} {...exp} />
          ))}
        </div>
      </section>

      {/* ── Security & Reliability ── */}
      <section id="security" data-np-section="security" className="flex flex-col gap-8 scroll-mt-24">
        <header>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-gray-100">
            Security & Reliability
          </h2>
          <p className="mt-2 max-w-xl text-sm text-zinc-500 dark:text-slate-500">
            Authentication, access control, and hardening work across production systems.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {SECURITY_CARDS.map((card) => (
            <SecurityCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      {/* ── Impact ── */}
      <section id="impact" data-np-section="impact" className="flex flex-col gap-8 scroll-mt-24">
        <header>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-gray-100">
            Impact
          </h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-slate-500">
            Measurable outcomes from production systems.
          </p>
        </header>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {IMPACT_METRICS.map((m) => (
            <ImpactCard key={m.label} {...m} />
          ))}
        </div>
      </section>

      {/* ── Stack ── */}
      <section id="stack" data-np-section="stack" className="flex flex-col gap-8 scroll-mt-24">
        <header>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-gray-100">
            Stack
          </h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-slate-500">
            Technologies I work with daily. Adaptable to the team's stack.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STACK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-blue-500">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-zinc-600 dark:text-slate-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" data-np-section="contact" className="flex flex-col gap-6 scroll-mt-24">
        <header>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-gray-100">
            {CONTACT_COPY.heading}
          </h2>
          <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-zinc-500 dark:text-slate-400">
            {CONTACT_COPY.lead}
          </p>
        </header>

        <div className="flex items-center gap-2">
          <div className="flex-1 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 font-mono text-sm text-zinc-700 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-300">
            {CONTACT_COPY.email}
          </div>
          <a
            href={`mailto:${CONTACT_COPY.email}?subject=Engineering%20Role%20%E2%80%94%20Let's%20Talk`}
            className="rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-600"
          >
            Send
          </a>
          <CopyButton text={CONTACT_COPY.email} />
        </div>

        <div className="flex flex-wrap gap-4">
          {CONTACT_COPY.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-slate-500 dark:hover:text-gray-200"
            >
              {link.label} →
            </a>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-200 pt-8 text-center text-xs text-zinc-400 dark:border-white/[0.08] dark:text-slate-600">
        <p>Dylan España Cervantes · Software Engineer</p>
        <p className="mt-1">
          <Link
            to="/classic"
            className="text-zinc-500 hover:underline dark:text-slate-500"
          >
            View classic portfolio →
          </Link>
        </p>
      </footer>

      {/* Chatbot hidden — kept for future use */}
      {/* <PortfolioAssistant /> */}
    </LayoutNewPortfolio>
  );
}

export default function NewPortfolio() {
  return (
    <NewPortfolioThemeProvider>
      <NewPortfolioInner />
    </NewPortfolioThemeProvider>
  );
}
