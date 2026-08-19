import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile, navLinks, socialLinks } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      // Hide on scroll-down past the hero, reveal on scroll-up.
      if (y > lastY && y > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !menuOpen ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50"
      >
        <div
          className={`mx-auto mt-3 sm:mt-4 max-w-6xl px-4 sm:px-6 transition-all duration-300`}
        >
          <div
            className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-300 ${
              scrolled
                ? "bg-[#050505]/80 backdrop-blur-lg border border-[color:var(--color-line)] shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                : "bg-transparent border border-transparent"
            }`}
          >
            <a
              href="#home"
              data-cursor="VIEW"
              className="font-mono text-sm tracking-tight text-white hover:text-[color:var(--color-accent)] transition-colors"
            >
              {profile.handle}
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeId === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    data-cursor="VIEW"
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-[color:var(--color-ink-dim)] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/[0.06] border border-[color:var(--color-line-strong)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                );
              })}
            </nav>

            <a
              href="#contact"
              data-cursor="OPEN"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-white text-black text-sm font-medium px-4 py-2 hover:bg-[color:var(--color-accent)] hover:text-white transition-colors"
            >
              Let's Connect
              <ArrowUpRight size={15} />
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden p-2 -mr-2 text-white"
              data-cursor="OPEN"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeId={activeId} />
    </>
  );
}

function MobileMenu({ open, onClose, activeId }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-[#050505]/98 backdrop-blur-xl flex flex-col"
        >
          <div className="flex items-center justify-between px-6 pt-6">
            <span className="font-mono text-sm text-white">{profile.handle}</span>
            <motion.button
              onClick={onClose}
              aria-label="Close menu"
              whileTap={{ scale: 0.9 }}
              className="p-2 text-white"
            >
              <X size={24} />
            </motion.button>
          </div>

          <nav className="flex-1 flex flex-col items-start justify-center gap-2 px-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                className={`font-[family-name:var(--font-display)] text-4xl xs:text-5xl font-medium tracking-tight py-2 ${
                  activeId === link.href.replace("#", "")
                    ? "text-[color:var(--color-accent)]"
                    : "text-white"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="px-8 pb-10 flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel="noreferrer"
                className="font-mono text-xs tracking-widest text-[color:var(--color-ink-dim)] hover:text-[color:var(--color-accent)] transition-colors"
              >
                {s.label.toUpperCase()}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
