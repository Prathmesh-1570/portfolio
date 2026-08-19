import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const [reduced, setReduced] = useState(false);

  const mvX = useMotionValue(0.5);
  const mvY = useMotionValue(0.5);
  const glowX = useSpring(mvX, { stiffness: 60, damping: 20 });
  const glowY = useSpring(mvY, { stiffness: 60, damping: 20 });
  const glowLeft = useTransform(glowX, (v) => `${v * 100}%`);
  const glowTop = useTransform(glowY, (v) => `${v * 100}%`);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const el = sectionRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      mvX.set((e.clientX - rect.left) / rect.width);
      mvY.set((e.clientY - rect.top) / rect.height);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#050505]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
          }}
        />
        {!reduced && (
          <motion.div
            aria-hidden="true"
            className="absolute w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{
              left: glowLeft,
              top: glowTop,
              translateX: "-50%",
              translateY: "-50%",
              background:
                "radial-gradient(circle, rgba(236,21,82,0.16) 0%, rgba(236,21,82,0.05) 45%, transparent 70%)",
            }}
          />
        )}
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl opacity-25"
          style={{ background: "radial-gradient(ellipse, #ec1552 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full px-6 sm:px-8 relative">
        <motion.div variants={container} initial="hidden" animate="show" className="relative">
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[color:var(--color-accent)] mb-6 flex items-center gap-2"
          >
            HELLO, I'M {profile.firstName.toUpperCase()}
            <span aria-hidden="true">👋</span>
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] font-medium tracking-tight leading-[0.92] text-[clamp(3.2rem,12vw,8.5rem)] text-white"
          >
            {profile.firstName.toUpperCase()}
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] font-medium tracking-tight leading-[0.95] text-[clamp(1.8rem,6vw,4.2rem)] text-gradient mt-1"
          >
            FULL-STACK DEVELOPER
            <span className="caret" aria-hidden="true" />
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-[color:var(--color-ink-dim)] text-base sm:text-lg leading-relaxed"
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              data-cursor="VIEW"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-black font-medium text-sm px-6 py-3.5 hover:bg-[color:var(--color-accent)] hover:text-white transition-colors"
            >
              Explore My Work
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              data-cursor="OPEN"
              className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line-strong)] text-white font-medium text-sm px-6 py-3.5 hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
            >
              Let's Connect
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating technology chips */}
        <div className="hidden lg:block">
          {profile.floatingTech.map((tech, i) => (
            <FloatingChip key={tech} label={tech} index={i} reduced={reduced} />
          ))}
        </div>

        {/* Status card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.9 }}
          className="hidden md:block absolute right-0 -bottom-4 lg:-bottom-10"
        >
          <div className="w-56 rounded-2xl border border-[color:var(--color-line)] bg-white/[0.03] backdrop-blur-sm px-5 py-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-accent)] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-accent)]" />
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[color:var(--color-ink-dim)]">
                {profile.availability}
              </span>
            </div>
            <p className="font-[family-name:var(--font-display)] text-sm leading-snug text-white">
              {profile.statusLine.map((line, i) => (
                <span key={i} className={i === 1 ? "text-[color:var(--color-accent)]" : ""}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] text-[color:var(--color-ink-dim)]">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-[color:var(--color-accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

const CHIP_POSITIONS = [
  { top: "6%", left: "72%" },
  { top: "20%", left: "92%" },
  { top: "48%", left: "88%" },
  { top: "2%", left: "48%" },
  { top: "62%", left: "70%" },
];

function FloatingChip({ label, index, reduced }) {
  const pos = CHIP_POSITIONS[index % CHIP_POSITIONS.length];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 + index * 0.12, duration: 0.5 }}
      className="absolute pointer-events-none select-none"
      style={{ top: pos.top, left: pos.left }}
    >
      <motion.div
        animate={reduced ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 4.5 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
        className="rounded-full border border-[color:var(--color-line-strong)] bg-white/[0.03] px-4 py-2 font-mono text-xs text-[color:var(--color-ink-dim)] shadow-[0_0_24px_rgba(236,21,82,0.08)]"
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
