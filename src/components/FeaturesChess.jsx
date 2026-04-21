import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import feature1 from "../assets/feature-1.gif";
import feature2 from "../assets/feature-2.gif";

const rows = [
  {
    title: "Designed to convert. Built to perform.",
    body: "Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.",
    cta: "Learn more",
    gif: feature1,
    reverse: false,
  },
  {
    title: "It gets smarter. Automatically.",
    body: "Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.",
    cta: "See how it works",
    gif: feature2,
    reverse: true,
  },
];

function FeatureRow({ title, body, cta, gif, reverse }) {
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
        <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-[0.95] tracking-tight">
          {title}
        </h3>
        <p className="text-white/60 font-body font-light text-sm md:text-base leading-relaxed">
          {body}
        </p>
        <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-mono font-medium text-sm flex items-center gap-2 w-fit">
          {cta} <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* GIF */}
      <div className="flex-1 w-full">
        <div className="liquid-glass rounded-2xl overflow-hidden">
          <img
            src={gif}
            alt={title}
            className="w-full h-auto object-cover block"
          />
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
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-mono">
          Capabilities
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
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
