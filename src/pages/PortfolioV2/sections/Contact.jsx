/* eslint-disable react/prop-types */
import { useState, useCallback } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { IoCopyOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { V2_CONTACT } from "../../../share/data/portfolioV2Content";

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
      className="rounded-xl border border-white/[0.08] px-3 py-2.5 text-sm text-slate-500 transition-colors hover:border-white/[0.16] hover:text-slate-200"
      aria-label="Copy email"
    >
      {copied ? <FaCheck className="h-4 w-4 text-emerald-400" /> : <IoCopyOutline className="h-4 w-4" />}
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-gradient-to-r from-violet-500/50 to-transparent" />
          <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
            Contacto
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-violet-500/50 to-transparent" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">{V2_CONTACT.heading}</h2>
        <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-slate-400">
          {V2_CONTACT.subheading}
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Email block */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-600">
            Email directo
          </p>
          <div className="flex items-center gap-2">
            <div className="min-w-0 flex-1 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2.5">
              <span className="block truncate font-mono text-sm text-slate-300">
                {V2_CONTACT.email}
              </span>
            </div>
            <a
              href={`mailto:${V2_CONTACT.email}?subject=Engineering%20Role%20%E2%80%94%20Let's%20Talk`}
              className="shrink-0 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20"
            >
              Enviar
            </a>
            <CopyButton text={V2_CONTACT.email} />
          </div>

          <p className="mt-4 text-xs text-slate-600">{V2_CONTACT.location}</p>
        </div>

        {/* Links block */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-600">
            Redes y perfiles
          </p>
          <div className="flex flex-col gap-3">
            {V2_CONTACT.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3 text-sm text-slate-400 transition-all hover:border-white/[0.1] hover:bg-white/[0.05] hover:text-slate-100"
              >
                <span>{link.label}</span>
                <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
