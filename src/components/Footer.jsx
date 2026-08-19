import { ArrowUp } from "lucide-react";
import { profile, socialLinks } from "../data/portfolio";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-[color:var(--color-line)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        <div>
          <p className="font-mono text-sm text-white">{profile.handle}</p>
          <p className="mt-2 text-xs text-[color:var(--color-ink-dim)]">
            Full-Stack Developer
            <br />
            React · Java · Spring Boot · AI
          </p>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              data-cursor="OPEN"
              className="text-xs font-mono tracking-wide text-[color:var(--color-ink-dim)] hover:text-[color:var(--color-accent)] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-between sm:flex-col sm:items-end gap-4">
          <p className="text-xs text-[color:var(--color-ink-dim)]">
            © 2026 {profile.name}
            <br />
            Built with React & Tailwind CSS
          </p>
          <button
            onClick={scrollTop}
            data-cursor="UP"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-[color:var(--color-accent)] transition-colors"
          >
            Back to Top <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
