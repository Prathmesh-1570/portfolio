import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { profile, stats } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading
          label="01 — ABOUT"
          heading={profile.aboutHeading}
          description={profile.aboutDescription}
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--color-line)] rounded-2xl overflow-hidden border border-[color:var(--color-line)]">
          {stats.map((stat) => (
            <StatCell key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCell({ stat }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || stat.value === null) return;
    const controls = animate(0, stat.value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-[color:var(--color-bg-secondary)] px-6 py-10 flex flex-col gap-2"
    >
      <span className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-medium text-white">
        {stat.value === null ? stat.suffix : `${display}${stat.suffix}`}
      </span>
      <span className="text-sm text-[color:var(--color-ink-dim)]">{stat.label}</span>
    </motion.div>
  );
}
