import { motion } from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";

const COLUMNS = [
  {
    title: "Product",
    links: ["Panels", "Storage", "Inverters", "Mounting"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "Case studies", "Blog", "Support"],
  },
];

const SOCIAL = ["Twitter", "LinkedIn", "Instagram", "YouTube"];

export default function Footer() {
  return (
    <footer className="relative px-8 lg:px-16 max-w-7xl mx-auto pt-24 pb-10 overflow-hidden">
      {/* Top grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-16 border-b border-white/10">
        {/* Brand + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex flex-col gap-6"
        >
          <div className="flex items-center gap-2 text-white font-mono text-sm">
            <span className="inline-flex items-center justify-center w-5 h-5 bg-white/15 rounded-sm">
              <Plus className="w-3 h-3" />
            </span>
            Get in touch
          </div>
          <h3
            className="font-heading font-medium text-white max-w-md"
            style={{
              fontSize: "clamp(2rem, 3.6vw, 3rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            Power your<br />future today.
          </h3>

          {/* Email input */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2 mt-2 max-w-md p-1.5 rounded-[8px] relative"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px) saturate(140%)",
              WebkitBackdropFilter: "blur(10px) saturate(140%)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 bg-transparent outline-none px-3 py-2 text-sm text-white placeholder:text-white/40 font-mono"
            />
            <button
              type="submit"
              className="bg-white text-black rounded-[6px] px-4 py-2 font-mono font-medium text-sm flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              Subscribe <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>

        {/* Link columns */}
        {COLUMNS.map((col, i) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-white/40">
              {col.title}
            </p>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-heading transition-colors"
                  >
                    <span className="relative">
                      {l}
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white group-hover:w-full transition-[width] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-1 flex flex-col gap-4"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-white/40">
            Social
          </p>
          <ul className="flex flex-col gap-2.5">
            {SOCIAL.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="text-white/80 hover:text-white text-sm font-heading transition-colors"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Animated marquee brand strip */}
      <div className="relative my-14 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          style={{
            willChange: "transform",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-heading font-medium text-white/[0.07] hover:text-white/20 transition-colors"
              style={{
                fontSize: "clamp(5rem, 13vw, 12rem)",
                letterSpacing: "-0.06em",
                lineHeight: 0.9,
              }}
            >
              SolarEnergy <span className="text-white/[0.12]">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-white/10">
        <p className="font-mono text-xs text-white/40">
          © 2026 SolarEnergy. All rights reserved.
        </p>
        <div className="flex items-center gap-5 font-mono text-xs text-white/40">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
          <span className="inline-flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
