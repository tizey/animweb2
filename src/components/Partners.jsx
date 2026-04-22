import { motion } from "motion/react";
import { Plus } from "lucide-react";

const logos = [
  { src: "https://svgl.app/library/tesla-wordmark.svg",           alt: "Tesla" },
  { src: "https://svgl.app/library/google_wordmark_light.svg",    alt: "Google" },
  { src: "https://svgl.app/library/samsung_light.svg",            alt: "Samsung" },
  { src: "https://svgl.app/library/siemens.svg",                  alt: "Siemens" },
  { src: "https://svgl.app/library/microsoft.svg",                alt: "Microsoft" },
  { src: "https://svgl.app/library/bosch.svg",                    alt: "Bosch" },
  { src: "https://svgl.app/library/panasonic_wordmark.svg",       alt: "Panasonic" },
  { src: "https://svgl.app/library/intel_wordmark.svg",           alt: "Intel" },
];

const GLASS = {
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(10px) saturate(140%)",
  WebkitBackdropFilter: "blur(10px) saturate(140%)",
  border: "1px solid rgba(255,255,255,0.14)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
};

function LogoCard({ logo, className = "", showCornerPlus = [] }) {
  return (
    <div
      className={`relative flex items-center justify-center px-4 py-10 md:p-12 border-white/10 ${className}`}
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className="pointer-events-none h-4 md:h-5 select-none opacity-70 brightness-0 invert"
      />
      {showCornerPlus.includes("br") && (
        <Plus className="absolute -right-[10px] -bottom-[10px] z-10 w-5 h-5 text-white/40" strokeWidth={1} />
      )}
      {showCornerPlus.includes("bl") && (
        <Plus className="absolute -left-[10px] -bottom-[10px] z-10 hidden md:block w-5 h-5 text-white/40" strokeWidth={1} />
      )}
    </div>
  );
}

export default function Partners() {
  return (
    <section className="py-48 px-8 lg:px-16 max-w-7xl mx-auto">
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
          Trusted Partners
        </div>
        <h2
          className="font-heading font-medium text-white max-w-2xl"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 0.95, letterSpacing: "-0.05em" }}
        >
          Powering the future,<br />together.
        </h2>
      </motion.div>

      {/* Logo grid */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative grid grid-cols-2 md:grid-cols-4 rounded-[8px] overflow-hidden"
        style={GLASS}
      >
        {logos.map((logo, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          // Cell borders: right divider on all except last col; bottom divider on top row
          const borderClasses = [
            col < 3 ? "md:border-r" : "",
            row === 0 ? "md:border-b" : "",
            // Mobile: 2-col layout, divide right col 0, and bottom all but last row
            col % 2 === 0 ? "border-r" : "",
            i < logos.length - 2 ? "border-b" : "",
          ].join(" ");

          // Plus at interior intersections: first row, cols 0–2 (between row 0 and row 1)
          const plus = [];
          if (row === 0 && col < 3) plus.push("br"); // desktop intersections

          return (
            <LogoCard key={i} logo={logo} className={borderClasses} showCornerPlus={plus} />
          );
        })}
      </motion.div>
    </section>
  );
}
