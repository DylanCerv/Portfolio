import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";

const STORAGE_KEY = "np-theme";

function getStoredOverride() {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(STORAGE_KEY);
  return v === "light" || v === "dark" ? v : null;
}

function subscribeSystemTheme(callback) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSystemIsDarkSnapshot() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const NewPortfolioThemeContext = createContext(null);

export function NewPortfolioThemeProvider({ children }) {
  const [override, setOverride] = useState(getStoredOverride);

  const systemIsDark = useSyncExternalStore(
    subscribeSystemTheme,
    getSystemIsDarkSnapshot,
    () => false
  );

  const effective =
    override === "light" || override === "dark"
      ? override
      : systemIsDark
        ? "dark"
        : "light";

  const setExplicitTheme = useCallback((t) => {
    localStorage.setItem(STORAGE_KEY, t);
    setOverride(t);
  }, []);

  const useSystemPreference = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setOverride(null);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = effective === "light" ? "dark" : "light";
    setExplicitTheme(next);
  }, [effective, setExplicitTheme]);

  useEffect(() => {
    if (effective === "light") {
      document.body.style.backgroundColor = "#fafafa";
      document.body.style.backgroundImage = "none";
    } else {
      document.body.style.backgroundColor = "#0b0f1a";
      document.body.style.backgroundImage = "none";
    }
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
    };
  }, [effective]);

  const value = {
    effective,
    followsSystem: override === null,
    toggleTheme,
    useSystemPreference,
  };

  const shellClass =
    effective === "light"
      ? "min-h-screen bg-zinc-50 text-zinc-800 antialiased selection:bg-blue-100 selection:text-blue-900"
      : "min-h-screen bg-[#0b0f1a] text-gray-300 antialiased selection:bg-blue-500/25 selection:text-white";

  return (
    <NewPortfolioThemeContext.Provider value={value}>
      <div data-np-theme={effective} className={shellClass}>
        {children}
      </div>
    </NewPortfolioThemeContext.Provider>
  );
}

export function useNewPortfolioTheme() {
  const ctx = useContext(NewPortfolioThemeContext);
  if (!ctx) {
    throw new Error(
      "useNewPortfolioTheme must be used within NewPortfolioThemeProvider"
    );
  }
  return ctx;
}
