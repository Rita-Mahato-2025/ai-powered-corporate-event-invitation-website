"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type LuxuryButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "solid" | "outline";
} & HTMLMotionProps<"button">;

export default function LuxuryButton({
  children,
  className = "",
  type = "button",
  variant = "solid",
  ...motionProps
}: LuxuryButtonProps) {
  const base = `inline-flex items-center justify-center h-14 rounded-xl font-medium text-lg px-6 transition-all duration-300`;
  const variants = {
    solid: "text-white bg-gradient-to-r from-[#DCC07A] via-[#C9A227] to-[#E8D7A5] bg-[length:200%_auto] hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)]",
    outline: "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)]",
  };

  return (
    <motion.button
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
