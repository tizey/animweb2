import { motion } from "motion/react";

const stats = [
  { value: "200+", label: "Sites launched" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3.2x", label: "More conversions" },
  { value: "5 days", label: "Average delivery" },
];

export default function Stats() {
  return (
    <section className="py-32 px-8 lg:px-16">
      {/* Stats card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="liquid-glass rounded-3xl p-12 md:p-16 max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map(({ value, label }, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
                {value}
              </span>
              <span className="text-white/60 font-body font-light text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
