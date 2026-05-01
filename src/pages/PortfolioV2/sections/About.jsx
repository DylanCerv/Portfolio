import { HiOutlineCheckCircle } from "react-icons/hi2";
import { V2_ABOUT } from "../../../share/data/portfolioV2Content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Sobre mí
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">{V2_ABOUT.title}</h2>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1fr]">
        {/* Description */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 lg:col-span-1">
          <p className="text-[15px] leading-relaxed text-slate-400">
            {V2_ABOUT.description}
          </p>
        </div>

        {/* Focus */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-600">
            Lo que me define
          </p>
          <ul className="space-y-2.5">
            {V2_ABOUT.focus.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-slate-400">
                <HiOutlineCheckCircle className="h-4 w-4 shrink-0 text-cyan-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Interests */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-600">
            Intereses
          </p>
          <ul className="space-y-2.5">
            {V2_ABOUT.interests.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-slate-400">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
