import { motion } from "framer-motion";
import {
  Atom,
  Braces,
  Code2,
  Palette,
  Wind,
  Coffee,
  Leaf,
  ShieldCheck,
  Cable,
  Database,
  Table2,
  GitBranch,
  Github,
  Send,
  Package,
  FileJson,
  Sparkles,
  Wand2,
} from "lucide-react";
import { skillCategories } from "../data/skills";
import SectionHeading from "./SectionHeading";

const ICON_MAP = {
  Atom,
  Braces,
  Code2,
  Palette,
  Wind,
  Coffee,
  Leaf,
  ShieldCheck,
  Cable,
  Database,
  Table2,
  GitBranch,
  Github,
  Send,
  Package,
  FileJson,
  Sparkles,
  Wand2,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading label="02 — SKILLS" heading="My Toolkit" />

        <div className="mt-16 space-y-14">
          {skillCategories.map((category, ci) => (
            <div key={category.id}>
              <motion.h3
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: ci * 0.05 }}
                className="font-mono text-xs tracking-[0.2em] text-[color:var(--color-ink-dim)] mb-5"
              >
                {category.label.toUpperCase()}
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.items.map((item, i) => (
                  <SkillCard key={item.name} item={item} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ item, index }) {
  const Icon = ICON_MAP[item.icon] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-secondary)] p-5 transition-colors duration-300 hover:border-[color:var(--color-accent)]/60"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: "0 0 0 1px rgba(236,21,82,0.15), 0 12px 40px -12px rgba(236,21,82,0.25)" }}
      />
      <Icon
        size={22}
        className="text-[color:var(--color-ink-dim)] group-hover:text-[color:var(--color-accent)] transition-colors duration-300"
      />
      <h4 className="mt-4 text-sm font-medium text-white">{item.name}</h4>
      <p className="mt-1 text-xs text-[color:var(--color-ink-dim)] leading-relaxed group-hover:text-white/70 transition-colors duration-300">
        {item.description}
      </p>
    </motion.div>
  );
}
