import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most sites launch within 7-14 days. Complex builds can take up to 4 weeks. We'll give you a precise timeline after our discovery call.",
  },
  {
    q: "What if I don't like the design?",
    a: "Every package includes revisions. If we can't nail the vision after that, you get a full refund — no friction, no hard feelings.",
  },
  {
    q: "Do you work with existing brands?",
    a: "Absolutely. We can refresh what you have or start from scratch. Either way, everything we ship is on-brand and conversion-ready.",
  },
  {
    q: "What tools do you build with?",
    a: "Framer, Webflow, Next.js, or fully custom — we pick the stack that fits your goals. No lock-in, no vendor games.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. All packages include 30 days of post-launch support. We also offer retainers for continuous optimization and iteration.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 px-8 lg:px-16 max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16 gap-4">
        <div className="flex items-center gap-2 text-white font-mono text-sm">
          <span className="inline-flex items-center justify-center w-5 h-5 bg-white/15 rounded-sm">
            <Plus className="w-3 h-3" />
          </span>
          FAQ
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tighter text-white tracking-tight leading-[0.9]">
          Questions, answered.
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map(({ q, a }, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-glass rounded-[8px] overflow-hidden"
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-white font-body font-medium text-base">
                  {q}
                </span>
                {isOpen ? (
                  <Minus className="w-4 h-4 text-white/60 flex-shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 text-white/60 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-white/60 font-body font-light text-sm leading-relaxed">
                      {a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
