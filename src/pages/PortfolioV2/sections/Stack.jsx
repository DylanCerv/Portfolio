import { V2_STACK } from "../../../share/data/portfolioV2Content";

const CATEGORY_ACCENT = {
  Lenguajes: "text-blue-400",
  Backend: "text-violet-400",
  "Frontend & Mobile": "text-pink-400",
  "Bases de datos": "text-emerald-400",
  "Cloud & Herramientas": "text-orange-400",
};

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-16">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent" />
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
            Tecnologías
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-orange-500/50 to-transparent" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">Stack & Herramientas</h2>
        <p className="mt-2 text-sm text-slate-500">
          Tecnologías con las que trabajo a diario. Adaptable al stack del equipo.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {V2_STACK.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
          >
            <h3
              className={`mb-4 text-xs font-bold uppercase tracking-wider ${CATEGORY_ACCENT[group.category] ?? "text-slate-400"}`}
            >
              {group.category}
            </h3>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
