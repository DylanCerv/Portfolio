/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { V2_NAV } from "../../../share/data/portfolioV2Content";

export default function NavBarV2() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#080c18]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <Link
          to="/v2"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 text-sm font-bold text-white shadow-lg shadow-violet-500/20"
        >
          {V2_NAV.logo}
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 text-[13px] font-medium lg:flex">
          {V2_NAV.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-500 transition-colors hover:text-slate-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={V2_NAV.cta.href}
            download
            className="hidden rounded-xl bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20 sm:block"
          >
            {V2_NAV.cta.label}
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-slate-400 lg:hidden"
            aria-label="Toggle menu"
          >
            <span className="block space-y-1">
              <span
                className={`block h-px w-4 bg-current transition-all ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-4 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-4 bg-current transition-all ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/[0.06] bg-[#080c18]/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {V2_NAV.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-slate-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={V2_NAV.cta.href}
              download
              className="mt-2 rounded-xl bg-violet-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              {V2_NAV.cta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
