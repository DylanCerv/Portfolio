/* eslint-disable react/prop-types */
import { useParams, Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import NavBarV2 from "../components/NavBarV2";
import { V2_BLOG } from "../../../share/data/portfolioV2Content";

const ACCENT_TAG = {
  "Base de datos": "border-blue-500/30 bg-blue-500/10 text-blue-300",
  Seguridad: "border-violet-500/30 bg-violet-500/10 text-violet-300",
  Performance: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
};

function CodeBlock({ lang, text }) {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-white/[0.06]">
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.03] px-4 py-2">
        <span className="font-mono text-xs text-slate-500">{lang}</span>
      </div>
      <pre className="overflow-x-auto bg-[#050810] p-5">
        <code className="font-mono text-xs leading-relaxed text-slate-300 whitespace-pre">
          {text}
        </code>
      </pre>
    </div>
  );
}

function ArticleList({ items }) {
  return (
    <ul className="my-5 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-400">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ArticleContent({ blocks }) {
  return (
    <div className="mx-auto max-w-2xl">
      {blocks.map((block, i) => {
        if (block.type === "intro") {
          return (
            <p key={i} className="mb-8 text-lg leading-relaxed text-slate-300 border-l-2 border-violet-500/50 pl-5">
              {block.text}
            </p>
          );
        }
        if (block.type === "h2") {
          return (
            <h2 key={i} className="mb-4 mt-10 text-xl font-bold text-slate-100">
              {block.text}
            </h2>
          );
        }
        if (block.type === "p") {
          return (
            <p key={i} className="mb-5 text-[15px] leading-relaxed text-slate-400">
              {block.text}
            </p>
          );
        }
        if (block.type === "code") {
          return <CodeBlock key={i} lang={block.lang} text={block.text} />;
        }
        if (block.type === "list") {
          return <ArticleList key={i} items={block.items} />;
        }
        return null;
      })}
    </div>
  );
}

export default function BlogArticle() {
  const { slug } = useParams();
  const article = V2_BLOG.find((p) => p.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#080c18", color: "#e2e8f0" }}>
        <NavBarV2 />
        <div className="mx-auto max-w-2xl px-5 py-24 text-center">
          <p className="text-2xl font-bold text-slate-100">Artículo no encontrado</p>
          <Link to="/" className="mt-6 inline-block text-sm text-violet-400 hover:text-violet-300">
            ← Volver al portfolio
          </Link>
        </div>
      </div>
    );
  }

  const tagClass = ACCENT_TAG[article.tag] ?? "border-slate-500/30 bg-slate-500/10 text-slate-300";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#080c18", color: "#e2e8f0" }}>
      <NavBarV2 />

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:px-8">
        {/* Back */}
        <Link
          to="/#blog"
          className="mb-10 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-200"
        >
          <HiArrowLeft className="h-4 w-4" />
          Volver al portfolio
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className={`rounded-full border px-3 py-1 text-xs font-medium ${tagClass}`}>
              {article.tag}
            </span>
            <span className="text-xs text-slate-600">{article.date}</span>
            <span className="text-xs text-slate-600">·</span>
            <span className="text-xs text-slate-600">{article.readTime}</span>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
            {article.title}
          </h1>

          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            {article.excerpt}
          </p>

          {/* Author row */}
          <div className="mt-8 flex items-center gap-3 border-t border-white/[0.06] pt-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 text-xs font-bold text-white">
              DE
            </div>
            <div>
              <p className="text-sm font-medium text-slate-300">Dylan España</p>
              <p className="text-xs text-slate-500">Backend & Systems Engineer</p>
            </div>
          </div>
        </header>

        {/* Separator */}
        <div className="mb-12 h-px bg-gradient-to-r from-violet-500/30 via-white/[0.06] to-transparent" />

        {/* Content */}
        <ArticleContent blocks={article.content} />

        {/* Footer */}
        <div className="mt-16 border-t border-white/[0.06] pt-10">
          <p className="mb-4 text-sm font-medium text-slate-300">
            ¿Te resultó útil este artículo?
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:dylanecervantes@gmail.com?subject=Sobre%20el%20artículo%3A%20${encodeURIComponent(article.title)}`}
              className="rounded-xl border border-white/[0.08] px-4 py-2 text-sm text-slate-400 transition-all hover:border-violet-500/40 hover:text-slate-200"
            >
              Escribirme →
            </a>
            <Link
              to="/"
              className="rounded-xl bg-violet-600/20 border border-violet-500/30 px-4 py-2 text-sm text-violet-300 transition-all hover:bg-violet-600/30"
            >
              Ver portfolio completo →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
