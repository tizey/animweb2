import { useEffect, useRef, useState } from "react";

const TEXT =
  "We believe clean energy should be within reach for every home, every family, every future. " +
  "The sun rises for everyone. Wind blows across every border. " +
  "Together we can power a world that breathes cleaner, lives better, " +
  "and leaves something worth inheriting for the generations that come after us.";

const WORDS = TEXT.split(" ");
const TOTAL = WORDS.length;

// Scroll height of the sticky wrapper — more = slower word reveal
const SCROLL_MULTIPLIER = 4; // 4× viewport height of scroll to reveal all words

export default function BlurHero() {
  const wrapperRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0–1

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // scrollable range within this wrapper
      const scrollable = height - vh;
      if (scrollable <= 0) return;
      const scrolled = -top; // px scrolled past the top of wrapper
      const p = Math.max(0, Math.min(1, scrolled / scrollable));
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Tall wrapper creates the scroll space; sticky inner holds the view
    <div
      ref={wrapperRef}
      style={{ height: `${SCROLL_MULTIPLIER * 100}vh` }}
    >
      <div
        className="sticky top-0 flex items-center justify-center px-8 lg:px-16"
        style={{ height: "100vh" }}
      >
        <p
          className="font-heading font-medium text-white text-center max-w-7xl w-full mx-auto"
          style={{
            fontSize: "clamp(2rem, 3.8vw, 3.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.05em",
          }}
        >
          {WORDS.map((word, i) => {
            // Each word fully revealed between its threshold and next word's threshold
            const threshold = i / TOTAL;
            const nextThreshold = (i + 1) / TOTAL;
            // Map progress within this word's window to 0–1
            const wordProgress = Math.max(
              0,
              Math.min(1, (progress - threshold) / (nextThreshold - threshold))
            );

            const blur = (1 - wordProgress) * 14;
            const opacity = wordProgress;
            const translateY = (1 - wordProgress) * 20;

            return (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  marginRight: "0.3em",
                  opacity,
                  filter: `blur(${blur.toFixed(1)}px)`,
                  transform: `translateY(${translateY.toFixed(1)}px)`,
                  willChange: "filter, transform, opacity",
                  transition: "none", // purely scroll-driven, no CSS transitions
                }}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
