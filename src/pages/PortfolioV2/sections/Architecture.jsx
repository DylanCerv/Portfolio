/* eslint-disable react/prop-types */
import { V2_ARCHITECTURE } from "../../../share/data/portfolioV2Content";
import { HiOutlineCheckCircle } from "react-icons/hi2";

const NODE_COLOR = {
  blue: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  violet: "border-violet-500/30 bg-violet-500/10 text-violet-300",
  indigo: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  orange: "border-orange-500/30 bg-orange-500/10 text-orange-300",
  cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
};

function DiagramLayer({ layer, nodes }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
        {layer}
      </span>
      <div className="flex flex-wrap justify-center gap-2">
        {nodes.map((node) => (
          <div
            key={node.label}
            className={`rounded-lg border px-4 py-2 text-xs font-medium ${NODE_COLOR[node.color] ?? NODE_COLOR.indigo}`}
          >
            {node.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Architecture() {
  return (
    <section id="architecture" className="scroll-mt-16">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Arquitectura
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-indigo-500/50 to-transparent" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">
          {V2_ARCHITECTURE.title}
        </h2>
        <p className="mt-2 text-sm text-slate-500">{V2_ARCHITECTURE.subtitle}</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        {/* System diagram */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
          <p className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-600">
            Diagrama del sistema
          </p>

          <div className="flex flex-col items-center gap-3">
            {V2_ARCHITECTURE.diagram.map((row, idx) => (
              <div key={row.layer} className="flex flex-col items-center gap-2 w-full">
                <DiagramLayer {...row} />
                {idx < V2_ARCHITECTURE.diagram.length - 1 && (
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="h-4 w-px bg-slate-700" />
                    <div className="text-slate-600 text-xs">↓</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tech stack row */}
          <div className="mt-8 border-t border-white/[0.04] pt-5">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-600">
              Tecnologías principales
            </p>
            <div className="flex flex-wrap gap-2">
              {V2_ARCHITECTURE.techPrimary.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1 font-mono text-xs text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Decisions */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-600">
            Decisiones clave
          </p>
          <ul className="space-y-3">
            {V2_ARCHITECTURE.decisions.map((decision) => (
              <li key={decision} className="flex items-start gap-2.5">
                <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span className="text-sm leading-snug text-slate-400">{decision}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
