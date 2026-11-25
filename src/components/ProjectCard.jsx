import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

// A deterministic little "mockup" gradient stand-in for a real project screenshot.
// Swap the `image` field in projects.js for a real asset path when ready —
// this component will use it automatically if present.

function ProjectMockup({ project, featured }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-primary)] ${featured ? "aspect-[16/10]" : "aspect-[16/11]"
        }`}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
      ) : (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(236,21,82,0.28), transparent 55%), #0b0b0f",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-[family-name:var(--font-display)] text-white/10 font-medium text-6xl">
              {project.number}
            </span>
          </div>

          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </>
      )}
    </div>
  );
}


export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-secondary)] p-4 sm:p-5 transition-colors duration-300 hover:border-[color:var(--color-accent)]/50 ${featured ? "md:grid md:grid-cols-2 md:gap-8 md:p-6" : ""
        }`}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: "0 20px 60px -20px rgba(236,21,82,0.35)" }}
        aria-hidden="true"
      />

      <ProjectMockup project={project} featured={featured} />

      <div className={`flex flex-col ${featured ? "justify-center mt-5 md:mt-0" : "mt-5"}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-[color:var(--color-accent)]">{project.number}</span>
          <span className="h-px flex-1 max-w-8 bg-[color:var(--color-line-strong)]" />
          <span className="font-mono text-[10px] tracking-widest text-[color:var(--color-ink-dim)]">
            {project.category.toUpperCase()}
          </span>
        </div>

        <h3
          className={`font-[family-name:var(--font-display)] font-medium text-white ${featured ? "text-2xl sm:text-3xl" : "text-xl"
            }`}
        >
          {project.name}
        </h3>

        <p className="mt-3 text-sm text-[color:var(--color-ink-dim)] leading-relaxed">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[color:var(--color-line)] px-3 py-1 text-[11px] font-mono text-[color:var(--color-ink-dim)] transition-all duration-300 group-hover:border-[color:var(--color-accent)]/40 group-hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.github}
            data-cursor="OPEN"
            className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-line-strong)] px-4 py-2 text-xs font-medium text-white hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            <Github size={14} />
            Code
          </a>
          <a
            href={project.demo}
            data-cursor="VIEW"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-black hover:bg-[color:var(--color-accent)] hover:text-white transition-colors"
          >
            Live Demo
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
