import { motion } from "motion/react";
import { Plus } from "lucide-react";
import avatarImg from "../assets/avatar.jpg";

const STARS = "★★★★★";

const GLASS_CARD = {
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(10px) saturate(140%)",
  WebkitBackdropFilter: "blur(10px) saturate(140%)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
  border: "1px solid rgba(255,255,255,0.2)",
};

function Avatar({ name }) {
  return (
    <img
      src={avatarImg}
      alt={name}
      className="w-9 h-9 rounded-full object-cover flex-shrink-0"
    />
  );
}

function Card({ children, className = "", style = {} }) {
  return (
    <div className={`rounded-[8px] p-5 ${className}`} style={{ ...GLASS_CARD, ...style }}>
      {children}
    </div>
  );
}

const STACK_COLORS = [
  "rgba(245,197,163,0.4)", "rgba(181,213,245,0.4)",
  "rgba(197,229,197,0.4)", "rgba(229,197,229,0.4)", "rgba(245,229,163,0.4)",
];

export default function Testimonials() {
  return (
    <section className="py-72 px-8 lg:px-16 max-w-7xl mx-auto">
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
            <div className="flex items-start gap-3">
              <span
                className="font-heading font-medium text-white"
                style={{ fontSize: "3.5rem", lineHeight: 1, letterSpacing: "-0.05em" }}
              >
                4.9
              </span>
              <div className="flex flex-col pt-1">
                <span className="text-[10px] font-mono text-white/40 leading-snug">/5</span>
                <p className="text-white/50 font-body text-xs leading-snug mt-1 max-w-[120px]">
                  We've delivered <strong className="text-white/80">56+ projects</strong> that help companies generate real results.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
              <span className="font-mono text-sm font-medium text-white">SolarEnergy®</span>
              <div className="flex items-center gap-16">
                <div className="flex -space-x-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <img
                      key={i}
                      src={avatarImg}
                      alt=""
                      className="w-7 h-7 border-2 object-cover aspect-square"
                      style={{
                        borderRadius: "9999px",
                        borderColor: "rgba(255,255,255,0.15)",
                        zIndex: i + 1,
                      }}
                    />
                  ))}
                  <div
                    className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[9px] font-mono font-medium text-black aspect-square"
                    style={{ background: "#fff", borderColor: "rgba(255,255,255,0.15)", zIndex: 10 }}
                  >
                    56+
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs">★★★★★</span>
                  <span className="text-white/40 font-mono text-[10px]">Trusted by clients worldwide</span>
                </div>
              </div>
              <button className="w-full bg-white text-black rounded-full py-3 font-mono font-medium text-sm hover:opacity-80 transition-opacity">
                Leave a review
              </button>
            </div>
          </Card>
        </motion.div>

        {/* Col 2 */}
        <motion.div
          className="flex flex-col gap-2 h-full"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <Avatar name="James Carter" color="rgba(240,208,176,0.35)" />
                <div>
                  <p className="text-white font-mono font-medium text-sm leading-tight">James Carter</p>
                  <p className="text-white/40 font-mono text-xs">Wilson &amp; Co</p>
                </div>
              </div>
              <Plus className="w-4 h-4 text-white/20" />
            </div>
            <span className="text-white text-sm">{STARS}</span>
          </Card>

          <Card className="flex-1 flex items-end" style={{ minHeight: 200 }}>
            <p
              className="font-heading font-medium text-white"
              style={{ fontSize: "1.35rem", lineHeight: 1.15, letterSpacing: "-0.04em" }}
            >
              Incredible team! They delivered exactly what we needed, on time and beyond expectations.
            </p>
          </Card>
        </motion.div>

        {/* Col 3 */}
        <motion.div
          className="flex flex-col gap-2 h-full"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card className="flex-1 flex flex-col justify-between" style={{ minHeight: 200 }}>
            <div className="flex items-start justify-between gap-2 mb-3">
              <p
                className="font-heading font-medium text-white"
                style={{ fontSize: "1.35rem", lineHeight: 1.15, letterSpacing: "-0.04em" }}
              >
                A smooth process from start to finish. Highly professional team!
              </p>
              <Plus className="w-4 h-4 text-white/20 flex-shrink-0 mt-1" />
            </div>
            <span className="text-white text-sm">{STARS}</span>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Avatar name="Emily Davis" color="rgba(200,224,200,0.35)" />
                <div>
                  <p className="text-white font-mono font-medium text-sm leading-tight">Emily Davis</p>
                  <p className="text-white/40 font-mono text-xs">StartUp Hub</p>
                </div>
              </div>
              <span className="text-white text-sm">{STARS}</span>
            </div>
          </Card>
        </motion.div>

        {/* Col 4 */}
        <motion.div
          className="flex flex-col gap-2 h-full"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <Avatar name="Anna Martinez" color="rgba(240,200,216,0.35)" />
                <div>
                  <p className="text-white font-mono font-medium text-sm leading-tight">Anna Martinez</p>
                  <p className="text-white/40 font-mono text-xs">Marketing Director</p>
                </div>
              </div>
              <Plus className="w-4 h-4 text-white/20" />
            </div>
            <span className="text-white text-sm">{STARS}</span>
          </Card>

          <Card className="flex-1 flex items-end" style={{ minHeight: 200 }}>
            <p
              className="font-heading font-medium text-white"
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
