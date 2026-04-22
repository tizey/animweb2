import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = ["Home", "Services", "Work", "Process", "Pricing"];

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-white font-heading font-medium tracking-tighter text-xl" style={{ letterSpacing: "-0.05em" }}>
          SolarEnergy
        </span>
      </div>

      {/* Center nav pill — desktop only, blur 80px */}
      <div
        className="hidden md:flex items-center rounded-lg px-1.5 py-1 gap-0.5 border"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: "rgba(255,255,255,0.3)",
          background: "rgba(255,255,255,0.01)",
        }}
      >
        {NAV_LINKS.map((link) => (
          link === "Pricing" ? (
            <a
              key={link}
              href="#pricing"
              className="flex items-center gap-1 bg-white text-black rounded-md px-3.5 py-1.5 text-sm font-semibold font-mono"
            >
              Get Started <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-3 py-2 text-sm font-medium text-white/90 font-mono hover:text-white transition-colors rounded-md"
            >
              {link}
            </a>
          )
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="md:hidden">
        <a
          href="#pricing"
          className="flex items-center gap-1 bg-white text-black rounded-md px-3.5 py-1.5 text-sm font-semibold font-body"
        >
          Get Started <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </nav>
  );
}
