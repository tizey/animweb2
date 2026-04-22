import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
    name: "Sarah Chen",
    role: "CEO, Luminary",
  },
  {
    quote:
      "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
    name: "Marcus Webb",
    role: "Head of Growth, Arcline",
  },
  {
    quote:
      "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
    name: "Elena Voss",
    role: "Brand Director, Helix",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col items-center text-center mb-16 gap-4">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-mono">
          What They Say
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tighter text-white tracking-tight leading-[0.9]">
          Don't take our word for it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(({ quote, name, role }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass rounded-2xl p-8 flex flex-col gap-6 justify-between"
          >
            <p className="text-white/80 font-body font-light text-sm italic leading-relaxed">
              &ldquo;{quote}&rdquo;
            </p>
            <div className="flex flex-col gap-0.5">
              <span className="text-white font-mono font-medium text-sm">{name}</span>
              <span className="text-white/50 font-mono font-light text-xs">{role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
