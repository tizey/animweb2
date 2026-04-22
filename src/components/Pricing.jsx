import { Check, ArrowUpRight, Plus } from "lucide-react";
import { motion } from "motion/react";

const tiers = [
  {
    name: "Starter",
    price: "$4,800",
    tagline: "For founders shipping their first product.",
    features: [
      "5-page custom design",
      "Mobile + desktop responsive",
      "Basic SEO setup",
      "2 rounds of revisions",
    ],
    cta: "Start small",
    highlight: false,
  },
  {
    name: "Signature",
    price: "$12,000",
    tagline: "Our most popular package. Built to scale.",
    features: [
      "Unlimited pages",
      "Custom animations & interactions",
      "Advanced SEO + analytics",
      "CMS integration",
      "Unlimited revisions",
    ],
    cta: "Go signature",
    highlight: true,
  },
  {
    name: "Bespoke",
    price: "Let's talk",
    tagline: "Enterprise-grade. Tailored to your vision.",
    features: [
      "Everything in Signature",
      "Dedicated design team",
      "Custom integrations",
      "Ongoing optimization",
      "Priority support",
    ],
    cta: "Get in touch",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16 gap-4">
        <div className="flex items-center gap-2 text-white font-mono text-sm">
          <span className="inline-flex items-center justify-center w-5 h-5 bg-white/15 rounded-sm">
            <Plus className="w-3 h-3" />
          </span>
          Pricing
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tighter text-white tracking-tight leading-[0.9]">
          Simple. Transparent. Fair.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map(({ name, price, tagline, features, cta, highlight }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`${
              highlight ? "liquid-glass-strong" : "liquid-glass"
            } rounded-2xl p-8 flex flex-col gap-6`}
          >
            <div className="flex flex-col gap-2">
              <span className="text-white/50 font-mono font-light text-xs tracking-widest uppercase">
                {name}
              </span>
              <span className="text-white font-heading font-medium tracking-tighter text-5xl leading-none">
                {price}
              </span>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                {tagline}
              </p>
            </div>

            <div className="h-px bg-white/10" />

            <ul className="flex flex-col gap-3 flex-1">
              {features.map((f, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2.5 text-white/80 font-body font-light text-sm"
                >
                  <Check className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={`${
                highlight
                  ? "bg-white text-black"
                  : "liquid-glass-strong text-white"
              } rounded-full px-5 py-3 font-mono font-medium text-sm flex items-center justify-center gap-2`}
            >
              {cta} <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
