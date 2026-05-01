/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { V2_BLOG } from "../../../share/data/portfolioV2Content";

const ACCENT = {
  blue: {
    tag: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    arrow: "group-hover:text-blue-400",
    border: "hover:border-blue-500/20",
  },
  emerald: {
    tag: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    arrow: "group-hover:text-emerald-400",
    border: "hover:border-emerald-500/20",
  },
  violet: {
    tag: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    arrow: "group-hover:text-violet-400",
    border: "hover:border-violet-500/20",
  },
};

function BlogCard({ slug, title, excerpt, date, tag, accent, readTime }) {
  const a = ACCENT[accent] ?? ACCENT.blue;
  return (
    <Link
      to={`/blog/${slug}`}
      className={`group flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all ${a.border} hover:bg-white/[0.04]`}
    >
      <div>
        <div className="mb-3 flex items-center justify-between">
          <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${a.tag}`}>
            {tag}
          </span>
          <span className="text-xs text-slate-600">{date}</span>
        </div>
        <h3 className="mb-2 text-sm font-semibold leading-snug text-slate-200">
          {title}
        </h3>
        <p className="text-xs leading-relaxed text-slate-500">{excerpt}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className={`flex items-center gap-1 text-xs text-slate-600 transition-colors ${a.arrow}`}>
          <span>Leer artículo</span>
          <HiArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </div>
        {readTime && (
          <span className="text-xs text-slate-700">{readTime}</span>
        )}
      </div>
    </Link>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="scroll-mt-16">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 bg-gradient-to-r from-slate-500/50 to-transparent" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Artículos
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-slate-500/50 to-transparent" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">Blog / Artículos recientes</h2>
        <p className="mt-2 text-sm text-slate-500">
          Notas técnicas sobre arquitectura, performance y seguridad — basadas en trabajo real.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        {V2_BLOG.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
}
