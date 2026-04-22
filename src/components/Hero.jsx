import { motion } from "motion/react";
import { ArrowUpRight, Plus, ArrowRight } from "lucide-react";
import turbineImg from "../assets/turbine-card.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col px-8 lg:px-16 pt-40 pb-10"
    >
      {/* Top badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2 text-white font-mono text-sm"
      >
        <span className="inline-flex items-center justify-center w-5 h-5 bg-white/15 rounded-sm">
          <Plus className="w-3 h-3" />
        </span>
        Sun-Powered Living
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 font-heading font-medium text-white max-w-[95%]"
        style={{ fontSize: "128px", lineHeight: "0.9", letterSpacing: "-0.08em" }}
      >
        Clean Energy <br />
        Solar Panels for <br />
        Every Home.
      </motion.h1>

      {/* Bottom row */}
      <div className="mt-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
        {/* Bottom-left: product card */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="matte-glass rounded-3xl p-5 flex items-center gap-5 max-w-xl"
        >
          {/* Product image */}
          <div className="relative flex-shrink-0 w-32 h-32 bg-black rounded-2xl overflow-hidden flex items-center justify-center">
            <span className="absolute top-2 left-2 bg-white/90 text-black text-[10px] font-mono font-medium px-2 py-0.5 rounded-full z-10">
              Most Popular
            </span>
            <img src={turbineImg} alt="Wind Turbine" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Card body */}
          <div className="flex-1 flex flex-col gap-3 min-w-0">
            <span className="text-white/60 font-mono text-[10px] font-medium tracking-widest uppercase">
              Solar
            </span>
            <h3
              className="text-white font-heading font-medium tracking-tighter text-2xl leading-tight"
              style={{ letterSpacing: "-0.05em" }}
            >
              SunCore Panel <sup className="text-xs text-white/60">Rx</sup>
            </h3>
            <div className="h-px bg-white/15 my-1" />
            <div className="flex items-center justify-between gap-3">
              <button className="text-white/80 hover:text-white transition-colors font-mono text-sm flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5" />
                Learn more
              </button>
              <button className="bg-white text-black rounded-full px-4 py-2 font-mono font-medium text-sm flex items-center gap-1.5">
                Get started
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom-right: tagline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 lg:items-end"
        >
          <p
            className="text-white font-heading font-medium tracking-tighter text-2xl md:text-3xl leading-[1.1] max-w-sm lg:text-right"
            style={{ letterSpacing: "-0.05em" }}
          >
            Residential <br />
            Commercial & Off-Grid <br />
            for Homes and Businesses
          </p>

          <div className="flex items-center gap-3">
            <button className="bg-white text-black rounded-full px-5 py-3 font-mono font-medium text-sm flex items-center gap-2">
              View Panels <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="liquid-glass-strong rounded-full px-5 py-3 text-white font-mono font-medium text-sm flex items-center gap-2">
              Reach Out <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
