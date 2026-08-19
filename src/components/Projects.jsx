import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, projectFilters } from "../data/projects";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const featured = useMemo(() => projects.find((p) => p.featured), []);
  const rest = useMemo(() => projects.filter((p) => !p.featured), []);

  const visibleRest = useMemo(() => {
    if (filter === "All") return rest;
    return rest.filter((p) => p.category === filter);
  }, [filter, rest]);

  const showFeatured = filter === "All" || featured?.category === filter;

  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading label="03 — SELECTED WORK" heading="Things I've Built" />

          <div className="flex flex-wrap gap-2">
            {projectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                data-cursor="VIEW"
                className={`rounded-full px-4 py-2 text-xs font-mono tracking-wide transition-colors border ${
                  filter === f
                    ? "bg-white text-black border-white"
                    : "border-[color:var(--color-line-strong)] text-[color:var(--color-ink-dim)] hover:text-white hover:border-white/40"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 space-y-6">
          <AnimatePresence mode="wait">
            {!showFeatured && visibleRest.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-20 text-center text-[color:var(--color-ink-dim)] font-mono text-sm"
              >
                More projects coming soon.
              </motion.p>
            ) : (
              <motion.div key={filter} initial="hidden" animate="show" className="space-y-6">
                {showFeatured && featured && <ProjectCard project={featured} featured />}
                <div className="grid sm:grid-cols-2 gap-6">
                  {visibleRest.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
