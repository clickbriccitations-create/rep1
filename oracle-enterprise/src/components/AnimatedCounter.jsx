import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 1.5,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      onUpdate(latest) {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
    >
      {count}
      {suffix}
    </motion.span>
  );
}