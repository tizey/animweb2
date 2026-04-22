import { Zap, Palette, BarChart3, Shield } from "lucide-react";
import { motion } from "motion/react";

const cards = [
  {
    icon: Zap,
    title: "Days, Not Months",
    body: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy.",
  },
  {
    icon: Palette,
    title: "Obsessively Crafted",
    body: "Every detail considered. Every element refined. Design so precise, it feels inevitable.",
  },
  {
    icon: BarChart3,
    title: "Built to Convert",
    body: "Layouts informed by data. Decisions backed by performance. Results you can measure.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    body: "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="process" className="py-24 px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col items-center text-center mb-16 gap-4">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-mono">
          Why Us
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tighter text-white tracking-tight leading-[0.9]">
          The difference is everything.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(({ icon: Icon, title, body }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-mono font-semibold text-base">{title}</h3>
            <p className="text-white/60 font-body font-light text-sm leading-relaxed">{body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
