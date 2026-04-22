import { motion } from "motion/react";
import { Plus } from "lucide-react";

const STARS = "★★★★★";

const WHITE_CARD = {
  background: "rgba(255,255,255,0.92)",
  backdropFilter: "blur(40px) saturate(160%)",
  WebkitBackdropFilter: "blur(40px) saturate(160%)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,1)",
  border: "1px solid rgba(0,0,0,0.07)",
};

// Placeholder avatar — simple initials circle
function Avatar({ name, color = "#e0e0e0" }) {
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-mono font-medium text-black/60"
      style={{ background: color }}
    >
      {initials}
    </div>
  );
}

function Card({ children, className = "", style = {} }) {
  return (
    <div className={`rounded-2xl p-5 ${className}`} style={{ ...WHITE_CARD, ...style }}>
      {children}
    </div>
  );
}

// Small avatar stack for the rating card
const STACK_COLORS = ["#f5c5a3", "#b5d5f5", "#c5e5c5", "#e5c5e5", "#f5e5a3"];

export default function Testimonials() {
  return (
    <section className="py-36 px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center mb-14 gap-4"
      >
        <div className="flex items-center gap-2 text-white font-mono text-sm">
          <span className="inline-flex items-center justify-center w-5 h-5 bg-white/15 rounded-sm">
            <Plus className="w-3 h-3" />
          </span>
          What They Say
        </div>
        <h2
          className="font-heading font-medium text-white max-w-xl"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 0.95, letterSpacing: "-0.05em" }}
        >
          Don't take our word for it.
        </h2>
      </motion.div>

      {/* Bento grid — 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">

        {/* Col 1 — Rating card */}
        <motion.div
          className="h-full"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card className="flex flex-col justify-between gap-6 h-full" style={{ minHeight: 460 }}>
            {/* Top: rating */}
            <div className="flex items-start gap-3">
              <span
                className="font-heading font-medium text-black"
                style={{ fontSize: "3.5rem", lineHeight: 1, letterSpacing: "-0.05em" }}
              >
                4.9
              </span>
              <div className="flex flex-col pt-1">
                <span className="text-[10px] font-mono text-black/40 leading-snug">
                  /5
                </span>
                <p className="text-black/50 font-body text-xs leading-snug mt-1 max-w-[120px]">
                  We've delivered <strong className="text-black/70">56+ projects</strong> that help companies generate real results.
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-4">
              <div className="h-px bg-black/08" style={{ background: "rgba(0,0,0,0.08)" }} />
              <span className="font-mono text-sm font-medium text-black">SolarEnergy®</span>
              {/* Avatar stack */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {STACK_COLORS.map((c, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-white"
                      style={{ background: c, zIndex: 5 - i }}
                    />
                  ))}
                  <div
                    className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-mono font-medium text-black/60"
                    style={{ background: "#e8e8e8", zIndex: 0 }}
                  >
                    56+
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-black text-xs">★★★★★</span>
                  <span className="text-black/40 font-mono text-[10px]">Trusted by clients worldwide</span>
                </div>
              </div>
              <button className="w-full bg-black text-white rounded-full py-3 font-mono font-medium text-sm hover:opacity-80 transition-opacity">
                Leave a review
              </button>
            </div>
          </Card>
        </motion.div>

        {/* Col 2 — two stacked cards */}
        <motion.div
          className="flex flex-col gap-2 h-full"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top: author header only */}
          <Card>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <Avatar name="James Carter" color="#f0d0b0" />
                <div>
                  <p className="text-black font-mono font-medium text-sm leading-tight">James Carter</p>
                  <p className="text-black/40 font-mono text-xs">Wilson &amp; Co</p>
                </div>
              </div>
              <Plus className="w-4 h-4 text-black/20" />
            </div>
            <span className="text-black text-sm">{STARS}</span>
          </Card>

          {/* Bottom: quote — grows to fill remaining height */}
          <Card className="flex-1 flex items-end" style={{ minHeight: 200 }}>
            <p
              className="font-heading font-medium text-black"
              style={{ fontSize: "1.35rem", lineHeight: 1.15, letterSpacing: "-0.04em" }}
            >
              Incredible team! They delivered exactly what we needed, on time and beyond expectations.
            </p>
          </Card>
        </motion.div>

        {/* Col 3 — two stacked cards */}
        <motion.div
          className="flex flex-col gap-2 h-full"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top: quote — grows to fill */}
          <Card className="flex-1 flex flex-col justify-between" style={{ minHeight: 200 }}>
            <div className="flex items-start justify-between gap-2 mb-3">
              <p
                className="font-heading font-medium text-black"
                style={{ fontSize: "1.35rem", lineHeight: 1.15, letterSpacing: "-0.04em" }}
              >
                A smooth process from start to finish. Highly professional team!
              </p>
              <Plus className="w-4 h-4 text-black/20 flex-shrink-0 mt-1" />
            </div>
            <span className="text-black text-sm">{STARS}</span>
          </Card>

          {/* Bottom: author */}
          <Card>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Avatar name="Emily Davis" color="#c8e0c8" />
                <div>
                  <p className="text-black font-mono font-medium text-sm leading-tight">Emily Davis</p>
                  <p className="text-black/40 font-mono text-xs">StartUp Hub</p>
                </div>
              </div>
              <span className="text-black text-sm">{STARS}</span>
            </div>
          </Card>
        </motion.div>

        {/* Col 4 — two stacked cards */}
        <motion.div
          className="flex flex-col gap-2 h-full"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top: author header only */}
          <Card>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <Avatar name="Anna Martinez" color="#f0c8d8" />
                <div>
                  <p className="text-black font-mono font-medium text-sm leading-tight">Anna Martinez</p>
                  <p className="text-black/40 font-mono text-xs">Marketing Director</p>
                </div>
              </div>
              <Plus className="w-4 h-4 text-black/20" />
            </div>
            <span className="text-black text-sm">{STARS}</span>
          </Card>

          {/* Bottom: quote — grows to fill remaining height */}
          <Card className="flex-1 flex items-end" style={{ minHeight: 200 }}>
            <p
              className="font-heading font-medium text-black"
              style={{ fontSize: "1.35rem", lineHeight: 1.15, letterSpacing: "-0.04em" }}
            >
              Our new branding is exactly what we envisioned—clean, modern, and unique. #1 in our industry.
            </p>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}
