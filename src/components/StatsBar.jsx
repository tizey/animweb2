import { useState, useCallback } from "react";
import { Plus } from "lucide-react";
import img1 from "../assets/images_num_sec/1.jpg";
import img2 from "../assets/images_num_sec/2.jpg";
import img3 from "../assets/images_num_sec/3.jpg";
import img4 from "../assets/images_num_sec/4.jpg";
import img5 from "../assets/images_num_sec/5.jpg";

const stats = [
  { num: "001", value: "1.2B",   label: "homes without clean energy", img: img1 },
  { num: "002", value: "73%",    label: "CO₂ reduction with solar",   img: img2 },
  { num: "003", value: "$4.5T",  label: "solar market size by 2030",  img: img3 },
  { num: "004", value: "290GW",  label: "new capacity added in 2023", img: img4 },
  { num: "005", value: "40%",    label: "cost drop since 2019",       img: img5 },
];

const isDesktop =
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches;

export default function StatsBar() {
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <section
      className="py-48 px-8 lg:px-16 max-w-7xl mx-auto"
      onMouseMove={isDesktop ? handleMouseMove : undefined}
    >
      {/* Header */}
      <div className="mb-16 flex flex-col items-center text-center gap-5">
        <div className="flex items-center gap-2 text-white font-mono text-sm">
          <span className="inline-flex items-center justify-center w-5 h-5 bg-white/15 rounded-sm">
            <Plus className="w-3 h-3" />
          </span>
          By The Numbers
        </div>
        <h2
          className="font-heading font-medium text-white"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.05em",
          }}
        >
          The energy shift<br />is here.
        </h2>
        <p className="text-white/50 font-body font-light text-sm max-w-md leading-relaxed">
          Solar adoption is accelerating faster than any energy transition in
          history. The numbers speak for themselves.
        </p>
      </div>

      {/* Stats columns */}
      <div
        className="grid border-t border-white/15"
        style={{ gridTemplateColumns: "repeat(5, 1fr)" }}
      >
        {stats.map(({ num, value, label }, i) => (
          <div
            key={i}
            className="border-r border-white/15 px-5 pt-5 pb-10 flex flex-col justify-between select-none"
            style={{
              minHeight: 280,
              borderLeft: i === 0 ? "1px solid rgba(255,255,255,0.15)" : undefined,
              cursor: isDesktop ? "none" : "default",
            }}
            onMouseEnter={isDesktop ? () => setHovered(i) : undefined}
            onMouseLeave={isDesktop ? () => setHovered(null) : undefined}
          >
            <span className="font-mono text-xs text-white/25">{num}</span>

            <div className="flex flex-col gap-1.5 mt-auto">
              <span
                className="font-heading font-medium text-white"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                }}
              >
                {value}
              </span>
              <span className="text-white/45 font-mono text-xs leading-snug whitespace-nowrap">
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Hover image — follows cursor, desktop only */}
      {isDesktop && hovered !== null && (
        <div
          className="fixed pointer-events-none z-[9990] overflow-hidden rounded-xl"
          style={{
            left: pos.x + 20,
            top: pos.y + 20,
            width: 150,
            height: 150,
          }}
        >
          <img
            src={stats[hovered].img}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </section>
  );
}
