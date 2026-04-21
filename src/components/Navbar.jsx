import { ArrowUpRight } from "lucide-react";
import logoIcon from "../assets/logo-icon.png";

const NAV_LINKS = ["Home", "Services", "Work", "Process", "Pricing"];

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logoIcon} alt="Studio" className="h-12 w-12 rounded-full" />
      </div>

      {/* Center nav pill — desktop only, blur 80px */}
      <div
        className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1 gap-0.5"
        style={{ backdropFilter: "blur(80px)", WebkitBackdropFilter: "blur(80px)" }}
      >
        {NAV_LINKS.map((link) => (
          link === "Pricing" ? (
            <a
              key={link}
              href="#pricing"
              className="flex items-center gap-1 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-semibold font-mono"
            >
              Get Started <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-3 py-2 text-sm font-medium text-white/90 font-mono hover:text-white transition-colors rounded-full"
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
          className="flex items-center gap-1 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-semibold font-body"
        >
          Get Started <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </nav>
  );
}
