import { Link } from "react-router-dom";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useNewPortfolioTheme } from "../../context/NewPortfolioThemeContext";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Security", href: "#security" },
  { label: "Impact", href: "#impact" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function LayoutNewPortfolio({ children }) {
  const { effective, followsSystem, toggleTheme, useSystemPreference } =
    useNewPortfolioTheme();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-white/[0.06] dark:bg-[#0b0f1a]/80">
        <nav className="mx-auto flex max-w-[960px] items-center justify-between gap-4 px-5 py-3 sm:px-6">
          <Link
            to="/new-portfolio"
            className="text-sm font-semibold text-zinc-900 dark:text-gray-200"
          >
            Dylan España
          </Link>

          <div className="flex items-center gap-1 sm:gap-4">
            <div className="hidden items-center gap-5 text-[13px] font-medium sm:flex">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-slate-400 dark:hover:text-gray-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-1 rounded-lg border border-zinc-200 p-0.5 dark:border-white/[0.08]">
              {!followsSystem && (
                <button
                  type="button"
                  onClick={useSystemPreference}
                  className="rounded-md px-2 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-700 dark:text-slate-500 dark:hover:text-slate-300"
                  title="Use system preference"
                >
                  Auto
                </button>
              )}
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-md p-2 text-zinc-500 transition-colors hover:text-zinc-900 dark:text-slate-400 dark:hover:text-gray-200"
                title={effective === "light" ? "Dark mode" : "Light mode"}
                aria-label={effective === "light" ? "Dark mode" : "Light mode"}
              >
                {effective === "light" ? (
                  <HiOutlineMoon className="h-4 w-4" aria-hidden />
                ) : (
                  <HiOutlineSun className="h-4 w-4" aria-hidden />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="np-main mx-auto flex max-w-[960px] flex-col gap-24 px-5 pb-24 pt-16 sm:px-6">
        {children}
      </main>
    </>
  );
}
