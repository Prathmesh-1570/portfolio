import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.25em] text-[color:var(--color-accent)] mb-6"
        >
          07 — CONTACT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] tracking-tight text-white"
        >
          Let's build something together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 text-[color:var(--color-ink-dim)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Have an opportunity, project idea or just want to connect? I'd love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href={`mailto:${profile.email}`}
            data-cursor="OPEN"
            className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] text-white font-medium px-8 py-4 text-base hover:bg-white hover:text-black transition-colors"
          >
            Send Me an Email
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid sm:grid-cols-3 gap-4 text-left"
        >
          <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactRow
            icon={Github}
            label="GitHub"
            value={profile.github.replace("https://", "")}
            href={profile.github}
          />
          <ContactRow
            icon={Linkedin}
            label="LinkedIn"
            value={profile.linkedin.replace("https://", "")}
            href={profile.linkedin}
          />
        </motion.div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      target={label !== "Email" ? "_blank" : undefined}
      rel="noreferrer"
      data-cursor="OPEN"
      className="group flex items-center gap-3 rounded-xl border border-[color:var(--color-line)] px-4 py-3.5 hover:border-[color:var(--color-accent)]/50 transition-colors"
    >
      <Icon size={16} className="text-[color:var(--color-accent)] shrink-0" />
      <div className="min-w-0">
        <p className="font-mono text-[10px] tracking-widest text-[color:var(--color-ink-dim)]">
          {label.toUpperCase()}
        </p>
        <p className="text-sm text-white truncate">{value}</p>
      </div>
    </a>
  );
}
