import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function ScrollExpand({
  mediaSrc = "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920&auto=format&fit=crop",
  title = "Clean Energy",
  date = "Sustainable. Scalable.",
  scrollToExpand = "Scroll to Expand",
}) {
  const wrapperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = height - vh;
      if (scrollable <= 0) return;
      const scrolled = -top;
      // Full expansion happens over first 60% of the section scroll,
      // then media stays large for the remaining 40% of scroll distance.
      const p = Math.max(0, Math.min(1, scrolled / (scrollable * 0.6)));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Matches original formulas so visual feel is identical
  const mediaWidth = 300 + progress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + progress * (isMobile ? 200 : 400);
  const textTranslateX = progress * (isMobile ? 180 : 150);

  const firstWord = title ? title.split(" ")[0] : "";
  const restOfTitle = title ? title.split(" ").slice(1).join(" ") : "";

  return (
    // Tall wrapper creates scroll space; sticky inner is the "stage"
    <div ref={wrapperRef} style={{ height: "220vh" }} className="overflow-x-hidden">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
        {/* Expanding media (no bg image — global video shows through) */}
        <div
          className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[8px] overflow-hidden"
          style={{
            width: `${mediaWidth}px`,
            height: `${mediaHeight}px`,
            maxWidth: "95vw",
            maxHeight: "85vh",
            boxShadow: "0 0 60px rgba(0,0,0,0.4)",
            transition: "none",
          }}
        >
          <img
            src={mediaSrc}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Darken overlay fades as it expands */}
          <motion.div
            className="absolute inset-0 bg-black"
            animate={{ opacity: 0.55 - progress * 0.35 }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Subtitle cluster (sits below the image box, slides horizontally) */}
        <div
          className="flex flex-col items-center text-center relative z-10 pointer-events-none gap-2"
          style={{ marginTop: `${mediaHeight * 0.55}px` }}
        >
          {date && (
            <p
              className="text-white/90 font-heading font-medium"
              style={{
                fontSize: "clamp(1.1rem, 1.6vw, 1.5rem)",
                letterSpacing: "-0.02em",
                transform: `translateX(-${textTranslateX}vw)`,
              }}
            >
              {date}
            </p>
          )}
          {scrollToExpand && (
            <p
              className="text-white/60 font-mono text-xs tracking-widest uppercase"
              style={{ transform: `translateX(${textTranslateX}vw)` }}
            >
              {scrollToExpand}
            </p>
          )}
        </div>

        {/* Huge split title, sits above media via mix-blend-difference */}
        <div
          className="absolute inset-0 flex items-center justify-center text-center gap-4 w-full z-10 flex-col pointer-events-none"
          style={{ mixBlendMode: "difference" }}
        >
          <h2
            className="font-heading font-medium text-white"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
              transform: `translateX(-${textTranslateX}vw)`,
            }}
          >
            {firstWord}
          </h2>
          {restOfTitle && (
            <h2
              className="font-heading font-medium text-white"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.05em",
                transform: `translateX(${textTranslateX}vw)`,
              }}
            >
              {restOfTitle}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}
