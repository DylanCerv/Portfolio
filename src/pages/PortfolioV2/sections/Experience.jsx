/* eslint-disable react/prop-types */
import { V2_EXPERIENCE } from "../../../share/data/portfolioV2Content";

const METRIC_COLOR = {
  green: "text-emerald-400",
  blue: "text-blue-400",
  purple: "text-violet-400",
  red: "text-red-400",
  orange: "text-orange-400",
};

function ExperienceCard({ company, role, period, context, description, technologies, metrics }) {
  return (
    <article className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.1] hover:bg-white/[0.04]">
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600/30 to-blue-600/30 flex items-center justify-center text-xs font-bold text-slate-300 border border-white/[0.06]">
              {company[0]}
            </div>
            <div>
              <h3 className="font-semibold text-slate-100">{company}</h3>
              <p className="text-xs text-slate-500">{role}</p>
            </div>
          </div>
        </div>
        <span className="rounded-full border border-white/[0.06] px-3 py-1 font-mono text-xs text-slate-500">
          {period}
        </span>
      </div>

      {/* Context */}
      <p className="mb-3 text-xs font-medium text-slate-500 italic">{context}</p>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-slate-400">{description}</p>

      {/* Technologies */}
      <div className="mb-5 flex flex-wrap gap-1.5">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-white/[0.06] px-2 py-0.5 font-mono text-xs text-slate-500"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Impact metrics */}
      <div className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-4">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          Impacto logrado
        </p>
        <div className="grid grid-cols-3 gap-4 text-center">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className={`text-2xl font-bold font-mono ${METRIC_COLOR[m.color] ?? "text-slate-300"}`}>
                {m.value}
              </p>
              <p className="mt-1 text-xs leading-tight text-slate-500">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-gradient-to-r from-violet-500/50 to-transparent" />
          <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
            Trayectoria
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-violet-500/50 to-transparent" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">
          Experiencia profesional
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Sistemas que diseñé, construí y puse en producción.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {V2_EXPERIENCE.map((exp) => (
          <ExperienceCard key={exp.company} {...exp} />
        ))}
      </div>
    </section>
  );
}
