import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import BlurText from "./BlurText";

export default function CtaFooter() {
  return (
    <section id="pricing" className="relative">
      {/* CTA content */}
      <div className="flex flex-col items-center justify-center text-center px-8 lg:px-16 pt-40 pb-8 gap-6">
        <BlurText
          text="Your next website starts here."
          delay={100}
          animateBy="words"
          direction="bottom"
          className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] max-w-3xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/60 font-mono font-light text-sm md:text-base max-w-md leading-relaxed"
        >
          Book a free strategy call. See what AI-powered design can do. No
          commitment, no pressure. Just possibilities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-4 flex-wrap justify-center"
        >
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-mono font-medium text-sm flex items-center gap-2">
            Book a Call <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="bg-white text-black rounded-full px-6 py-3 font-mono font-medium text-sm">
            View Pricing
          </button>
        </motion.div>

        {/* Footer bar */}
        <div className="w-full mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          <span className="text-white/40 text-xs font-mono">
            &copy; 2026 Studio. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/40 text-xs font-mono hover:text-white/70 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
