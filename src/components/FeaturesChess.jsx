import { ArrowUpRight, Sun, BatteryCharging, Plus } from "lucide-react";
import { motion } from "motion/react";

const rows = [
  {
    title: "Designed to convert. Built to perform.",
    body: "Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.",
    cta: "Learn more",
    Icon: Sun,
    reverse: false,
  },
  {
    title: "It gets smarter. Automatically.",
    body: "Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.",
    cta: "See how it works",
    Icon: BatteryCharging,
    reverse: true,
  },
];

function FeatureRow({ title, body, cta, Icon, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 lg:gap-20`}
    >
      {/* Text */}
      <div className="flex-1 flex flex-col gap-5">
        <h3 className="text-3xl md:text-4xl font-heading font-medium tracking-tighter text-white leading-[0.95] tracking-tight">
          {title}
        </h3>
        <p className="text-white/60 font-body font-light text-sm md:text-base leading-relaxed">
          {body}
        </p>
        <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-mono font-medium text-sm flex items-center gap-2 w-fit">
          {cta} <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Icon in matte glass frame */}
      <div className="flex-1 w-full">
        <div className="matte-glass rounded-[8px] aspect-[4/3] flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.7, opacity: 0, rotate: -12 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="matte-glass rounded-[8px] w-28 h-28 flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -6, 0],
                rotate: [0, 4, 0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon className="w-12 h-12 text-white" strokeWidth={1.25} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturesChess() {
  return (
    <section id="work" className="py-24 px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col items-center text-center mb-20 gap-4">
        <div className="flex items-center gap-2 text-white font-mono text-sm">
          <span className="inline-flex items-center justify-center w-5 h-5 bg-white/15 rounded-sm">
            <Plus className="w-3 h-3" />
          </span>
          Capabilities
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tighter text-white tracking-tight leading-[0.9]">
          Pro features. Zero complexity.
        </h2>
      </div>

      <div className="flex flex-col gap-24">
        {rows.map((row, i) => (
          <FeatureRow key={i} {...row} />
        ))}
      </div>
    </section>
  );
}
