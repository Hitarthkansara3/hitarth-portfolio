import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ navItems, theme, onToggleTheme, resumeUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-8">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <a href="#home" className="font-display text-lg font-bold tracking-tight text-base-900 dark:text-base-50">
          Hitarth Kansara
        </a>

        <ul className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`text-sm font-medium transition ${
                  active === item.id
                    ? "text-sky-500"
                    : "text-slate-700 hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-300"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={resumeUrl} className="rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110" download>
            Download Resume
          </a>
          <button
            type="button"
            className="rounded-lg border border-slate-500/30 p-2 text-slate-700 transition hover:text-sky-500 dark:text-slate-200"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          type="button"
          className="rounded-lg border border-slate-500/30 p-2 text-slate-700 lg:hidden dark:text-slate-200"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mx-auto mt-2 max-w-7xl rounded-2xl p-4 lg:hidden"
          >
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="block rounded-lg px-2 py-2 text-sm text-slate-800 transition hover:bg-sky-500/10 dark:text-slate-100" onClick={() => setIsOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <a href={resumeUrl} download className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-center text-sm font-semibold text-white">
                Resume
              </a>
              <button
                type="button"
                className="rounded-lg border border-slate-500/30 p-2 text-slate-700 dark:text-slate-200"
                onClick={onToggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
