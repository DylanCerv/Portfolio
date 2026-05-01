import { Link } from "react-router-dom";
import NavBarV2 from "./components/NavBarV2";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Architecture from "./sections/Architecture";
import Metrics from "./sections/Metrics";
import About from "./sections/About";
import Stack from "./sections/Stack";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

const SECTION_GAP = "py-16 lg:py-20";

export default function PortfolioV2() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#080c18", color: "#e2e8f0" }}
    >
      <NavBarV2 />

      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Hero — no extra padding, NavBar is sticky */}
        <Hero />

        <div className={SECTION_GAP}>
          <Experience />
        </div>

        <div className={SECTION_GAP}>
          <Projects />
        </div>

        <div className={SECTION_GAP}>
          <Architecture />
        </div>

        <div className={SECTION_GAP}>
          <Metrics />
        </div>

        <div className={SECTION_GAP}>
          <About />
        </div>

        <div className={SECTION_GAP}>
          <Stack />
        </div>

        <div className={SECTION_GAP}>
          <Blog />
        </div>

        <div className={SECTION_GAP}>
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 text-center">
        <p className="text-xs text-slate-600">
          © 2026 Dylan España Cervantes · Todos los derechos reservados.
        </p>
        {/* <p className="mt-2 text-xs text-slate-700">
          Hecho con{" "}
          <span className="text-red-500/60" aria-hidden>
            ♥
          </span>{" "}
          y mucho código ·{" "}
          <Link
            to="/"
            className="text-slate-600 underline-offset-2 hover:text-slate-400 hover:underline"
          >
            Ver versión anterior →
          </Link>
        </p> */}
      </footer>
    </div>
  );
}
