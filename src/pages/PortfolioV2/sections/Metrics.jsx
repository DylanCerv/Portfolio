/* eslint-disable react/prop-types */
import { V2_METRICS } from "../../../share/data/portfolioV2Content";

const ACCENT = {
  blue: {
    value: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "hover:shadow-blue-500/10",
  },
  violet: {
    value: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    glow: "hover:shadow-violet-500/10",
  },
  emerald: {
    value: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "hover:shadow-emerald-500/10",
  },
  orange: {
    value: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    glow: "hover:shadow-orange-500/10",
  },
  cyan: {
    value: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    glow: "hover:shadow-cyan-500/10",
  },
};

function MetricCard({ value, label, detail, accent }) {
  const a = ACCENT[accent] ?? ACCENT.blue;
  return (
    <div
      className={`group rounded-2xl border ${a.border} ${a.bg} p-6 transition-all hover:shadow-xl ${a.glow}`}
    >
      <p className={`font-mono text-3xl font-bold ${a.value}`}>{value}</p>
      <p className="mt-2 text-sm font-semibold text-slate-200">{label}</p>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">{detail}</p>
    </div>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" className="scroll-mt-16">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent" />
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Impacto
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-emerald-500/50 to-transparent" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">Logros & Métricas</h2>
        <p className="mt-2 text-sm text-slate-500">
          Resultados medibles en sistemas de producción.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {V2_METRICS.map((m) => (
          <MetricCard key={m.label} {...m} />
        ))}
      </div>
    </section>
  );
}
