import { ArrowUpRight, CircleCheck, Plus } from "lucide-react";
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
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_39FK6IjsEkKkF7he27tKyECcTHY%2Fhf_20260422_212313_e7bdd35e-2be2-448a-aef9-b4121eb730e1.png&w=1920&q=85",
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
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_39FK6IjsEkKkF7he27tKyECcTHY%2Fhf_20260422_211741_5477f313-7e1a-419f-b3b9-ba70472a744e.png&w=1920&q=85",
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
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_39FK6IjsEkKkF7he27tKyECcTHY%2Fhf_20260422_212421_ff8b71f2-09d2-40d0-8a94-588a94166630.png&w=1920&q=85",
  },
];

export default function StartSection() {
  return (
    <section id="services" className="py-48 px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 gap-4">
        <div className="flex items-center gap-2 text-white font-mono text-sm">
          <span className="inline-flex items-center justify-center w-5 h-5 bg-white/15 rounded-sm">
            <Plus className="w-3 h-3" />
          </span>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-start">
        {steps.map(({ badge, title, price, description, features, cta, featured, image }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: featured ? 1.03 : 1 }}
            whileInView={{ opacity: 1, y: 0, scale: featured ? 1.03 : 1 }}
            whileHover={{
              y: -12,
              scale: featured ? 1.05 : 1.02,
              transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
            }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`shimmer-card flex flex-col rounded-[8px] overflow-hidden ${featured ? "ring-2 ring-white/30" : "md:mt-[50px]"}`}
            style={{
              background: featured ? "rgba(255,255,255,0.20)" : "rgba(255,255,255,0.14)",
              backdropFilter: "blur(10px) saturate(140%)",
              WebkitBackdropFilter: "blur(10px) saturate(140%)",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: featured
                ? "inset 0 1px 0 rgba(255,255,255,0.2)"
                : "inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          >
            {/* Photo placeholder */}
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img src={image || placeholderImg} alt="placeholder" className="w-full h-full object-cover" />
            </div>

            {/* Card body */}
            <div className="flex flex-col gap-5 p-6 flex-1">
              {/* Badge + price */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-medium tracking-widest uppercase text-white/40">
                  {badge}
                </span>
                <span
                  className="font-heading font-medium text-white/80"
                  style={{ fontSize: "1.5rem", lineHeight: 1, letterSpacing: "-0.04em" }}
                >
                  {price}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-heading font-medium text-white"
                style={{ fontSize: "1.75rem", lineHeight: 0.95, letterSpacing: "-0.05em" }}
              >
                {title}
              </h3>

              {/* Description */}
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                {description}
              </p>

              {/* Divider */}
              <div className="h-px bg-white/10" />

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-white/70 font-body">
                    <CircleCheck className="w-4 h-4 text-white/40 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-2 w-full rounded-full px-5 py-3 font-mono font-medium text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-80 ${
                  featured ? "bg-white text-black" : "text-white border border-white/20"
                }`}
                style={!featured ? { background: "rgba(255,255,255,0.08)" } : {}}
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
