import { motion } from "framer-motion";

// Shared label + heading treatment used at the top of every section.
// `label` is a short mono eyebrow like "02 — SKILLS".
export default function SectionHeading({ label, heading, description, align = "left" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs tracking-[0.25em] text-[color:var(--color-accent)] mb-4"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight text-white"
      >
        {heading}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-5 text-[color:var(--color-ink-dim)] text-base sm:text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
