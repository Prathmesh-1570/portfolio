import { motion } from "framer-motion";
import { currentlyLearning } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Learning() {
  return (
    <section id="learning" className="section">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading
          label="06 — CURRENTLY LEARNING"
          heading="Always Learning. Always Building."
          description="Technology keeps evolving, and so do I."
        />

        <div className="mt-12 flex flex-wrap gap-3">
          {currentlyLearning.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -3, borderColor: "var(--color-accent)", color: "#fff" }}
              className="animate-float rounded-full border border-[color:var(--color-line-strong)] px-5 py-2.5 font-mono text-sm text-[color:var(--color-ink-dim)] transition-colors"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
