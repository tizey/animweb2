import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import BlurText from "./BlurText";

const PARTNERS = ["Stripe", "Vercel", "Linear", "Notion", "Figma"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-visible"
      style={{ height: 1000 }}
    >
      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ paddingTop: 150 }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-mono">
            New
          </span>
          <span className="text-white/80 text-xs font-mono pr-2">
            Introducing AI-powered web design.
          </span>
        </motion.div>

        {/* Heading */}
        <BlurText
          text="The Website Your Brand Deserves"
          delay={100}
          animateBy="words"
          direction="bottom"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl tracking-[-4px] mb-6"
        />

        {/* Subtext */}
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm md:text-base text-white font-body font-light leading-tight max-w-md mb-8"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-mono font-medium text-sm flex items-center gap-2">
            Get Started <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="text-white font-mono font-light text-sm flex items-center gap-2 hover:text-white/80 transition-colors">
            <Play className="w-4 h-4 fill-white" /> Watch the Film
          </button>
        </motion.div>

        {/* Partners bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-auto pt-16 pb-8 flex flex-col items-center gap-6"
          style={{ marginTop: 80 }}
        >
          <div className="liquid-glass rounded-full px-4 py-2 text-xs text-white/60 font-mono">
            Trusted by the teams behind
          </div>
          <div className="flex items-center gap-12 md:gap-16 flex-wrap justify-center">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="text-2xl md:text-3xl font-heading italic text-white/80"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
