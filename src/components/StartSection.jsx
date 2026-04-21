import { ArrowUpRight } from "lucide-react";
import BlurText from "./BlurText";
import { motion } from "motion/react";

export default function StartSection() {
  return (
    <section id="services" className="relative">
      {/* Content */}
      <div
        className="flex flex-col items-center justify-center text-center px-6 py-32 gap-6"
        style={{ minHeight: 500 }}
      >
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-mono">
          How It Works
        </div>

        <BlurText
          text="You dream it. We ship it."
          delay={120}
          animateBy="words"
          direction="bottom"
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/60 font-body font-light text-sm md:text-base max-w-md"
        >
          Share your vision. Our AI handles the rest—wireframes, design, code,
          launch. All in days, not quarters.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="liquid-glass-strong rounded-full px-6 py-3 text-white font-mono font-medium text-sm flex items-center gap-2"
        >
          Get Started <ArrowUpRight className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}
