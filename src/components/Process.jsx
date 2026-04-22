import { motion } from "motion/react";

const steps = [
  {
    n: "01",
    title: "Discovery",
    body: "We map your goals, audience, and competitive landscape. Every decision starts here.",
  },
  {
    n: "02",
    title: "Design",
    body: "AI-assisted concepts, refined by human taste. You see real mockups in 48 hours.",
  },
  {
    n: "03",
    title: "Develop",
    body: "Pixel-perfect builds with performance baked in. Clean code, zero bloat, lightning fast.",
  },
  {
    n: "04",
    title: "Deliver",
    body: "Launch ready in days, not months. Full handoff with docs, training, and support.",
  },
];

export default function Process() {
  return (
    <section className="py-24 px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16 gap-4">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-mono">
          The Process
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tighter text-white tracking-tight leading-[0.9]">
          From blank canvas to launch.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(({ n, title, body }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass rounded-2xl p-6 flex flex-col gap-4"
          >
            <span className="text-white/40 font-mono font-light text-xs tracking-widest">
              {n}
            </span>
            <h3 className="text-white font-heading font-medium tracking-tighter text-2xl leading-tight">
              {title}
            </h3>
            <p className="text-white/60 font-body font-light text-sm leading-relaxed">
              {body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
