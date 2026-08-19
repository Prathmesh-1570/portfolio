import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { journey } from "../data/journey";
import SectionHeading from "./SectionHeading";

export default function Journey() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const fillHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 60,
    damping: 20,
  });

  return (
    <section id="journey" className="section">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeading label="04 — MY JOURNEY" heading="From Learning to Building" />

        <div ref={trackRef} className="relative mt-16 pl-8 sm:pl-10">
          {/* Track line */}
          <div className="absolute left-[7px] sm:left-[9px] top-0 bottom-0 w-px bg-[color:var(--color-line-strong)]" />
          {/* Animated fill */}
          <motion.div
            className="absolute left-[7px] sm:left-[9px] top-0 w-px origin-top bg-[color:var(--color-accent)]"
            style={{ height: fillHeight }}
          />

          <ul className="space-y-12">
            {journey.map((entry, i) => (
              <JourneyItem key={entry.year} entry={entry} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function JourneyItem({ entry, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="relative"
    >
      <span
        className={`absolute -left-8 sm:-left-10 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
          entry.current
            ? "bg-[color:var(--color-accent)] border-[color:var(--color-accent)] shadow-[0_0_0_5px_rgba(236,21,82,0.18)]"
            : "bg-[#050505] border-[color:var(--color-line-strong)]"
        }`}
      />
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span
          className={`font-mono text-sm ${
            entry.current ? "text-[color:var(--color-accent)]" : "text-[color:var(--color-ink-dim)]"
          }`}
        >
          {entry.year}
        </span>
        <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-medium text-white">
          {entry.title}
        </h3>
      </div>
      <p className="mt-2 text-sm text-[color:var(--color-ink-dim)] leading-relaxed max-w-xl">
        {entry.description}
      </p>
    </motion.li>
  );
}
