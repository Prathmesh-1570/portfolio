import { motion } from "framer-motion";
import { Code2, Server, Database, ShieldCheck, Sparkles } from "lucide-react";
import { capabilities } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const ICONS = [Code2, Server, Database, ShieldCheck, Sparkles];

export default function Services() {
  return (
    <section id="capabilities" className="section">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading label="05 — CAPABILITIES" heading="What I Build" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-secondary)] p-6 transition-colors hover:border-[color:var(--color-accent)]/50"
              >
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-[color:var(--color-line)] flex items-center justify-center group-hover:border-[color:var(--color-accent)]/50 transition-colors">
                  <Icon size={19} className="text-[color:var(--color-accent)]" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-medium text-white">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--color-ink-dim)] leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
