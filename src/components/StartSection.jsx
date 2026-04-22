import { ArrowUpRight, CircleCheck } from "lucide-react";
import { motion } from "motion/react";
import placeholderImg from "../assets/turbine-card.jpg";

const steps = [
  {
    badge: "Step 01",
    title: "Discovery Call",
    price: "Free",
    description: "We learn your goals, audience, and vision in a focused 30-min session.",
    features: [
      "Brand & goals analysis",
      "Competitive landscape review",
      "Clear project roadmap",
      "No commitment required",
    ],
    cta: "Book a Call",
  },
  {
    badge: "Step 02",
    title: "Design & Build",
    price: "Days",
    description: "AI-assisted design meets human craft. Real mockups delivered in 48 hours.",
    features: [
      "Custom AI-generated concepts",
      "Pixel-perfect development",
      "Mobile-first responsive",
      "Unlimited revisions",
    ],
    cta: "See Examples",
    featured: true,
  },
  {
    badge: "Step 03",
    title: "Launch & Grow",
    price: "Live",
    description: "Go live fast. Your site optimises itself automatically after launch.",
    features: [
      "One-click deployment",
      "SEO & analytics setup",
      "AI performance monitoring",
      "30-day post-launch support",
    ],
    cta: "Get Started",
  },
];

export default function StartSection() {
  return (
    <section id="services" className="py-24 px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 gap-4">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-mono">
          How It Works
        </div>
        <h2
          className="font-heading font-medium text-white max-w-2xl"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 0.95, letterSpacing: "-0.05em" }}
        >
          You dream it. We ship it.
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-md">
          Three steps from blank canvas to a live, self-optimising website.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map(({ badge, title, price, description, features, cta, featured }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col rounded-3xl overflow-hidden ${featured ? "ring-2 ring-white/40 scale-[1.03]" : ""}`}
            style={{
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(40px) saturate(160%)",
              WebkitBackdropFilter: "blur(40px) saturate(160%)",
              boxShadow: featured
                ? "0 24px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,1)"
                : "0 16px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,1)",
            }}
          >
            {/* Photo placeholder */}
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img src={placeholderImg} alt="placeholder" className="w-full h-full object-cover" />
            </div>

            {/* Card body */}
            <div className="flex flex-col gap-5 p-6 flex-1">
              {/* Badge + price */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-medium tracking-widest uppercase text-black/40">
                  {badge}
                </span>
                <span
                  className="font-heading font-medium text-black/80"
                  style={{ fontSize: "1.5rem", lineHeight: 1, letterSpacing: "-0.04em" }}
                >
                  {price}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-heading font-medium text-black"
                style={{ fontSize: "1.75rem", lineHeight: 0.95, letterSpacing: "-0.05em" }}
              >
                {title}
              </h3>

              {/* Description */}
              <p className="text-black/60 font-body font-light text-sm leading-relaxed">
                {description}
              </p>

              {/* Divider */}
              <div className="h-px bg-black/10" />

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-black/70 font-body">
                    <CircleCheck className="w-4 h-4 text-black/40 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-2 w-full rounded-full px-5 py-3 font-mono font-medium text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-80 ${
                  featured ? "bg-black text-white" : "bg-black/8 text-black border border-black/10"
                }`}
                style={!featured ? { background: "rgba(0,0,0,0.06)" } : {}}
              >
                {cta} <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
