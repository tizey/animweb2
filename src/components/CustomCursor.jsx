import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const outerRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  useEffect(() => {
    // Only on pointer-fine devices (desktop)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      // Outer ring lags slightly for feel
      current.current.x += (pos.current.x - current.current.x) * 0.18;
      current.current.y += (pos.current.y - current.current.y) * 0.18;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      }
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 32,
          height: 32,
          marginLeft: -16,
          marginTop: -16,
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.9)",
          willChange: "transform",
        }}
      />
      {/* Center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 5,
          height: 5,
          marginLeft: -2.5,
          marginTop: -2.5,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.95)",
          willChange: "transform",
        }}
      />
    </>
  );
}
