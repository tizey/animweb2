import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function BlurText({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "bottom",
  onAnimationComplete,
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const stepDuration = 0.35;

  const variants = {
    hidden:
      direction === "bottom"
        ? { filter: "blur(10px)", opacity: 0, y: 50 }
        : { filter: "blur(10px)", opacity: 0, y: -50 },
    visible: (i) => ({
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        delay: (i * delay) / 1000,
        duration: stepDuration * 3,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <p ref={ref} className={className} aria-label={text}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          onAnimationComplete={
            i === elements.length - 1 ? onAnimationComplete : undefined
          }
          style={{ display: "inline-block", willChange: "transform, opacity, filter" }}
        >
          {el}
          {animateBy === "words" && i < elements.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </p>
  );
}
