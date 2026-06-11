"use client";

import { motion } from "framer-motion";

const PARTICLE_COUNT = 8;
const POSITIONS = [
  { left: "10%", top: "20%" },
  { left: "30%", top: "55%" },
  { left: "55%", top: "10%" },
  { left: "70%", top: "80%" },
  { left: "85%", top: "40%" },
  { left: "20%", top: "75%" },
  { left: "45%", top: "35%" },
  { left: "60%", top: "65%" },
];

const generateKeyframes = (index: number) => {
  const x = [0, 10 + (index % 3) * 4, -8 - (index % 2) * 3, 6 + index];
  const y = [0, -14 - index * 2, 8 + index, -6 - index];
  const opacity = [0.2, 0.5 + (index % 2) * 0.1, 0.2];
  const duration = 8 + index * 0.6;
  return { x, y, opacity, duration };
};

export default function FloatingDust() {
  return (
    <span className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {POSITIONS.map((pos, i) => {
        const { x, y, opacity, duration } = generateKeyframes(i);
        return (
          <motion.span
            key={i}
            style={{
              left: pos.left,
              top: pos.top,
              width: 4,
              height: 4,
            }}
            className="block absolute rounded-full bg-[#F5DFA5]"
            animate={{ x, y, opacity }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </span>
  );
}
