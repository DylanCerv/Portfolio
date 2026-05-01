/* eslint-disable react/prop-types */
import { V2_PROJECTS } from "../../../share/data/portfolioV2Content";

const ACCENT = {
  violet: {
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    dot: "bg-violet-400",
    shadow: "hover:shadow-violet-500/10",
  },
  blue: {
    badge: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    dot: "bg-blue-400",
    shadow: "hover:shadow-blue-500/10",
  },
  emerald: {
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    dot: "bg-emerald-400",
    shadow: "hover:shadow-emerald-500/10",
  },
};

function ProjectCard({ name, type, description, architecture, stack, metrics, features, accentColor }) {
  const a = ACCENT[accentColor] ?? ACCENT.violet;

  return (
    <article className={`group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.1] hover:shadow-xl ${a.shadow}`}>
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <span className={`mb-2 inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${a.badge}`}>
            {type}
          </span>
          <h3 className="text-lg font-semibold text-slate-100">{name}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-slate-400">{description}</p>

      {/* Architecture summary */}
      <div className="mb-4 rounded-xl border border-white/[0.04] bg-white/[0.02] p-3">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          Arquitectura
        </p>
        <p className="text-xs leading-relaxed text-slate-500">{architecture}</p>
      </div>

      {/* Stack */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded border border-white/[0.06] px-2 py-0.5 font-mono text-xs text-slate-500"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Metrics */}
      <div className="mb-4 grid grid-cols-3 gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] p-3 text-center">
        {metrics.map((m) => (
          <div key={m.label}>
            <p className="font-mono text-lg font-bold text-slate-100">{m.value}</p>
            <p className="text-[10px] text-slate-500">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Features */}
      <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
            {f}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            Proyectos
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-blue-500/50 to-transparent" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">
          Sistemas en Producción
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Sistemas reales construidos en empresas — arquitectura, escala e impacto medible.
        </p>
      </header>

      <div className="grid gap-5 lg:grid-cols-3">
        {V2_PROJECTS.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
