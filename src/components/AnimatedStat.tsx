import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

type AnimatedStatProps = {
  value: string;
  className?: string;
};

/** Animates numeric prefix of strings like "120K+" when scrolled into view. */
export const AnimatedStat: React.FC<AnimatedStatProps> = ({ value, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? Number(match[1]) : NaN;
  const suffix = match?.[2] ?? '';
  const [display, setDisplay] = useState(reduceMotion || Number.isNaN(target) ? value : `0${suffix}`);

  useEffect(() => {
    if (!inView || reduceMotion || Number.isNaN(target)) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const duration = 1100;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, suffix, target, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default AnimatedStat;
