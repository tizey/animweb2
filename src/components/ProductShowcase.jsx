import { motion } from "motion/react";
import { Plus, BatteryCharging, Clock } from "lucide-react";
import turbineCard from "../assets/turbine-card.jpg";
import turbine from "../assets/turbine.png";
import hero from "../assets/hero.png";
import vetNoBg from "../assets/vet_no_bg.png";

const GLASS = {
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(10px) saturate(140%)",
  WebkitBackdropFilter: "blur(10px) saturate(140%)",
  border: "1px solid rgba(255,255,255,0.14)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
};

const GLASS_LIGHT = {
  background: "rgba(255,255,255,0.14)",
  backdropFilter: "blur(10px) saturate(140%)",
  WebkitBackdropFilter: "blur(10px) saturate(140%)",
  border: "1px solid rgba(255,255,255,0.2)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export default function ProductShowcase() {
  return (
    <section className="py-48 px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        {...fadeUp}
        className="flex flex-col items-center text-center mb-14 gap-4"
      >
        <div className="flex items-center gap-2 text-white font-mono text-sm">
          <span className="inline-flex items-center justify-center w-5 h-5 bg-white/15 rounded-sm">
            <Plus className="w-3 h-3" />
          </span>
          Specifications
        </div>
        <h2
          className="font-heading font-medium text-white max-w-2xl"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.05em",
          }}
        >
          Engineered to the<br />last detail.
        </h2>
        <p className="text-white/60 font-heading max-w-xl text-base md:text-lg leading-relaxed">
          Every component is calibrated for industrial-grade performance —
          from bearings to computing power.
        </p>
      </motion.div>

      {/* Hero card */}
      <motion.div
        {...fadeUp}
        className="relative rounded-[8px] overflow-hidden mb-4"
        style={{ ...GLASS, height: "clamp(420px, 55vw, 620px)" }}
      >
        {/* Giant watermark title */}
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(4rem, 14vw, 13rem)",
            letterSpacing: "-0.05em",
            color: "rgba(255,255,255,0.06)",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          DBS02–X
        </div>

        {/* Product image placeholder */}
        <img
          src={vetNoBg}
          alt="DBS02-X"
          className="absolute left-1/2 top-1/2 h-[128%] w-auto object-contain pointer-events-none select-none"
          style={{
            transform: "translate(-50%, calc(-50% + 100px))",
            filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.5))",
          }}
        />

        {/* Top-left heading */}
        <div className="absolute top-4 left-4 md:top-5 md:left-5 z-10">
          <h3
            className="font-heading font-medium text-white"
            style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", letterSpacing: "-0.03em" }}
          >
            DBS02–X
          </h3>
          <p className="font-mono text-xs md:text-sm text-white/55 mt-1">
            Industrial grade cross roller bearings
          </p>
        </div>

        {/* Bottom-left caption */}
        <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 z-10 max-w-xs">
          <p className="font-heading text-white/80 text-sm md:text-base leading-snug">
            Industrial grade cross
            <br />
            roller bearings
          </p>
        </div>
      </motion.div>

      {/* Bottom grid — explicit 12-col, 2-row layout */}
      <div
        className="grid grid-cols-12 gap-4 md:auto-rows-[232px]"
      >
        {/* A — Excellent stability (cols 1-2, span 2 rows) */}
        <motion.div
          {...fadeUp}
          className="col-span-12 md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-1 relative rounded-[8px] overflow-hidden"
          style={GLASS}
        >
          <img
            src={turbineCard}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
          <div className="relative z-10 p-3 md:p-3.5">
            <p className="font-heading text-white text-base md:text-lg">
              Excellent stability
            </p>
          </div>
        </motion.div>

        {/* B — Basic computing power (cols 3-6, span 2 rows) */}
        <motion.div
          {...fadeUp}
          className="col-span-12 md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-1 relative rounded-[8px] overflow-hidden flex flex-col justify-between"
          style={GLASS_LIGHT}
        >
          <div className="p-3 md:p-4">
            <p className="font-mono text-xs text-white/55 mb-3">
              Electrical machinery
            </p>
            <h4
              className="font-heading font-medium text-white"
              style={{
                fontSize: "clamp(1.75rem, 2.6vw, 2.5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              Basic computing
              <br />
              power
            </h4>
          </div>
          <div className="p-3 md:p-4">
            <p
              className="font-heading font-medium text-white"
              style={{
                fontSize: "clamp(1.75rem, 2.6vw, 2.5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              1–2.5 h
            </p>
            <p className="font-mono text-xs text-white/55 mt-1">
              8-core high-performance CPU
            </p>
          </div>
        </motion.div>

        {/* C — 9000mAh (cols 7-8, row 1) */}
        <motion.div
          {...fadeUp}
          className="col-span-6 md:col-span-2 md:col-start-7 md:row-start-1 rounded-[8px] overflow-hidden relative p-3 flex flex-col justify-between items-start"
          style={GLASS}
        >
          <BatteryCharging className="w-8 h-8 text-white" strokeWidth={1} />
          <div>
            <p
              className="font-heading font-medium text-white"
              style={{
                fontSize: "clamp(1.4rem, 2vw, 2rem)",
                letterSpacing: "-0.03em",
              }}
            >
              9000mAh
            </p>
            <p className="font-mono text-xs text-white/55 mt-2">Smart Battery</p>
          </div>
        </motion.div>

        {/* D — 2 hours (cols 9-10, row 1) */}
        <motion.div
          {...fadeUp}
          className="col-span-6 md:col-span-2 md:col-start-9 md:row-start-1 rounded-[8px] overflow-hidden relative p-3 flex flex-col justify-between items-start"
          style={GLASS}
        >
          <Clock className="w-6 h-6 text-white" strokeWidth={1} />
          <div>
            <p
              className="font-heading font-medium text-white"
              style={{
                fontSize: "clamp(1.4rem, 2vw, 2rem)",
                letterSpacing: "-0.03em",
              }}
            >
              2 hours
            </p>
            <p className="font-mono text-xs text-white/55 mt-2">Endurance</p>
          </div>
        </motion.div>

        {/* F — 5W speaker (cols 11-12, span 2 rows) */}
        <motion.div
          {...fadeUp}
          className="col-span-12 md:col-span-2 md:row-span-2 md:col-start-11 md:row-start-1 relative rounded-[8px] overflow-hidden"
          style={GLASS}
        >
          <img
            src={turbineCard}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
          <div className="relative z-10 p-3 md:p-3.5">
            <p className="font-heading text-white text-base md:text-lg">
              5W speaker
            </p>
          </div>
        </motion.div>

        {/* E — Intelligent OTA (cols 7-10, row 2) */}
        <motion.div
          {...fadeUp}
          className="col-span-12 md:col-span-4 md:col-start-7 md:row-start-2 rounded-[8px] overflow-hidden relative"
          style={GLASS}
        >
          <img
            src={turbineCard}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />
          <div className="relative z-10 p-3">
            <p className="font-heading text-white text-sm md:text-base leading-snug">
              Intelligent
              <br />
              OTA upgrade
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
